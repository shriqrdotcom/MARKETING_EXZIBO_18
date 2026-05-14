import { supabase } from './supabase';
import { CMSData, DEFAULT_DATA, Feature, PricingPlan, Testimonial } from '../context/CMSContext';

export interface ContentRow {
  id: string;
  section: string;
  key: string;
  value: string;
  created_at: string;
}

function parseJsonSafe<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export async function fetchContent(): Promise<CMSData> {
  if (!supabase) return DEFAULT_DATA;

  const { data, error } = await supabase
    .from('content')
    .select('section, key, value');

  if (error) {
    console.error('Supabase fetchContent error:', error.message);
    return DEFAULT_DATA;
  }

  if (!data || data.length === 0) {
    return DEFAULT_DATA;
  }

  const map: Record<string, Record<string, string>> = {};
  for (const row of data) {
    if (!map[row.section]) map[row.section] = {};
    map[row.section][row.key] = row.value;
  }

  const get = (section: string, key: string, fallback: string): string =>
    map[section]?.[key] ?? fallback;

  return {
    hero: {
      badge: get('hero', 'badge', DEFAULT_DATA.hero.badge),
      title: get('hero', 'title', DEFAULT_DATA.hero.title),
      titleHighlight: get('hero', 'titleHighlight', DEFAULT_DATA.hero.titleHighlight),
      subtitle: get('hero', 'subtitle', DEFAULT_DATA.hero.subtitle),
      primaryButtonText: get('hero', 'primaryButtonText', DEFAULT_DATA.hero.primaryButtonText),
      secondaryButtonText: get('hero', 'secondaryButtonText', DEFAULT_DATA.hero.secondaryButtonText),
      trustItem1: get('hero', 'trustItem1', DEFAULT_DATA.hero.trustItem1),
      trustItem2: get('hero', 'trustItem2', DEFAULT_DATA.hero.trustItem2),
    },
    features: parseJsonSafe<Feature[]>(get('features', 'list', ''), DEFAULT_DATA.features),
    testimonials: parseJsonSafe<Testimonial[]>(get('testimonials', 'list', ''), DEFAULT_DATA.testimonials),
    pricing: parseJsonSafe<PricingPlan[]>(get('pricing', 'list', ''), DEFAULT_DATA.pricing),
    contact: {
      email: get('contact', 'email', DEFAULT_DATA.contact.email),
      phone: get('contact', 'phone', DEFAULT_DATA.contact.phone),
      location: get('contact', 'location', DEFAULT_DATA.contact.location),
      hours: get('contact', 'hours', DEFAULT_DATA.contact.hours),
    },
    footer: {
      tagline: get('footer', 'tagline', DEFAULT_DATA.footer.tagline),
      email: get('footer', 'email', DEFAULT_DATA.footer.email),
      phone: get('footer', 'phone', DEFAULT_DATA.footer.phone),
      location: get('footer', 'location', DEFAULT_DATA.footer.location),
    },
    general: {
      siteName: get('general', 'siteName', DEFAULT_DATA.general.siteName),
      siteTagline: get('general', 'siteTagline', DEFAULT_DATA.general.siteTagline),
      heroImage: get('general', 'heroImage', DEFAULT_DATA.general.heroImage),
    },
  };
}

export async function upsertContent(cms: CMSData): Promise<void> {
  if (!supabase) {
    console.warn('Supabase not configured — changes saved locally only.');
    return;
  }

  const rows: { section: string; key: string; value: string }[] = [
    { section: 'hero', key: 'badge',               value: cms.hero.badge },
    { section: 'hero', key: 'title',               value: cms.hero.title },
    { section: 'hero', key: 'titleHighlight',      value: cms.hero.titleHighlight },
    { section: 'hero', key: 'subtitle',            value: cms.hero.subtitle },
    { section: 'hero', key: 'primaryButtonText',   value: cms.hero.primaryButtonText },
    { section: 'hero', key: 'secondaryButtonText', value: cms.hero.secondaryButtonText },
    { section: 'hero', key: 'trustItem1',          value: cms.hero.trustItem1 },
    { section: 'hero', key: 'trustItem2',          value: cms.hero.trustItem2 },

    { section: 'contact', key: 'email',    value: cms.contact.email },
    { section: 'contact', key: 'phone',    value: cms.contact.phone },
    { section: 'contact', key: 'location', value: cms.contact.location },
    { section: 'contact', key: 'hours',    value: cms.contact.hours },

    { section: 'footer', key: 'tagline',  value: cms.footer.tagline },
    { section: 'footer', key: 'email',    value: cms.footer.email },
    { section: 'footer', key: 'phone',    value: cms.footer.phone },
    { section: 'footer', key: 'location', value: cms.footer.location },

    { section: 'general', key: 'siteName',    value: cms.general.siteName },
    { section: 'general', key: 'siteTagline', value: cms.general.siteTagline },
    { section: 'general', key: 'heroImage',   value: cms.general.heroImage },

    { section: 'features',     key: 'list', value: JSON.stringify(cms.features) },
    { section: 'testimonials', key: 'list', value: JSON.stringify(cms.testimonials) },
    { section: 'pricing',      key: 'list', value: JSON.stringify(cms.pricing) },
  ];

  const { error } = await supabase
    .from('content')
    .upsert(rows, { onConflict: 'section,key' });

  if (error) {
    console.error('Supabase upsertContent error:', error.message);
    throw new Error(error.message);
  }
}

export async function fetchMediaUrl(bucket: string, path: string): Promise<string | null> {
  if (!supabase) return null;
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data?.publicUrl ?? null;
}

export async function listMediaFiles(bucket: string, folder?: string): Promise<string[]> {
  if (!supabase) return [];

  const { data, error } = await supabase.storage
    .from(bucket)
    .list(folder ?? '', { limit: 100, offset: 0 });

  if (error || !data) {
    console.error('Supabase listMediaFiles error:', error?.message);
    return [];
  }

  return data
    .filter((item) => item.name && !item.name.startsWith('.'))
    .map((item) => {
      const { data: urlData } = supabase!.storage
        .from(bucket)
        .getPublicUrl(folder ? `${folder}/${item.name}` : item.name);
      return urlData.publicUrl;
    });
}
