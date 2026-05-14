import { supabase } from './supabase';
import { CMSData, DEFAULT_DATA, Feature, PricingPlan, Testimonial } from '../context/CMSContext';

export interface ContentRow {
  id: string;
  section: string;
  key: string;
  value: string;
  created_at: string;
}

export interface MediaRow {
  name: string;
  id: string;
}

function parseJsonSafe<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export async function fetchContent(): Promise<CMSData> {
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

  const result: CMSData = {
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
    features: parseJsonSafe<Feature[]>(
      get('features', 'list', ''),
      DEFAULT_DATA.features
    ),
    testimonials: parseJsonSafe<Testimonial[]>(
      get('testimonials', 'list', ''),
      DEFAULT_DATA.testimonials
    ),
    pricing: parseJsonSafe<PricingPlan[]>(
      get('pricing', 'list', ''),
      DEFAULT_DATA.pricing
    ),
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

  return result;
}

export async function fetchMediaUrl(bucket: string, path: string): Promise<string | null> {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data?.publicUrl ?? null;
}

export async function listMediaFiles(bucket: string, folder?: string): Promise<string[]> {
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
      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(folder ? `${folder}/${item.name}` : item.name);
      return urlData.publicUrl;
    });
}
