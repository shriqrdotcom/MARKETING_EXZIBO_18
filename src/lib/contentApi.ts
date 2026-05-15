import { CMSData, DEFAULT_DATA, Feature, PricingPlan, Testimonial } from '../context/CMSContext';

export interface ContentRow {
  section: string;
  key: string;
  value: string;
}

function parseJsonSafe<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export async function fetchContent(): Promise<CMSData> {
  try {
    const res = await fetch('/api/content');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: ContentRow[] = await res.json();

    if (!data || data.length === 0) return DEFAULT_DATA;

    const map: Record<string, Record<string, string>> = {};
    for (const row of data) {
      if (!map[row.section]) map[row.section] = {};
      map[row.section][row.key] = row.value;
    }

    const get = (section: string, key: string, fallback: string): string =>
      map[section]?.[key] ?? fallback;

    return {
      hero: {
        badge:               get('hero', 'badge',               DEFAULT_DATA.hero.badge),
        title:               get('hero', 'title',               DEFAULT_DATA.hero.title),
        titleHighlight:      get('hero', 'titleHighlight',      DEFAULT_DATA.hero.titleHighlight),
        subtitle:            get('hero', 'subtitle',            DEFAULT_DATA.hero.subtitle),
        primaryButtonText:   get('hero', 'primaryButtonText',   DEFAULT_DATA.hero.primaryButtonText),
        secondaryButtonText: get('hero', 'secondaryButtonText', DEFAULT_DATA.hero.secondaryButtonText),
        trustItem1:          get('hero', 'trustItem1',          DEFAULT_DATA.hero.trustItem1),
        trustItem2:          get('hero', 'trustItem2',          DEFAULT_DATA.hero.trustItem2),
      },
      features:     parseJsonSafe<Feature[]>(     get('features',     'list', ''), DEFAULT_DATA.features),
      testimonials: parseJsonSafe<Testimonial[]>( get('testimonials', 'list', ''), DEFAULT_DATA.testimonials),
      pricing:      parseJsonSafe<PricingPlan[]>( get('pricing',      'list', ''), DEFAULT_DATA.pricing),
      contact: {
        email:    get('contact', 'email',    DEFAULT_DATA.contact.email),
        phone:    get('contact', 'phone',    DEFAULT_DATA.contact.phone),
        location: get('contact', 'location', DEFAULT_DATA.contact.location),
        hours:    get('contact', 'hours',    DEFAULT_DATA.contact.hours),
      },
      footer: {
        tagline:  get('footer', 'tagline',  DEFAULT_DATA.footer.tagline),
        email:    get('footer', 'email',    DEFAULT_DATA.footer.email),
        phone:    get('footer', 'phone',    DEFAULT_DATA.footer.phone),
        location: get('footer', 'location', DEFAULT_DATA.footer.location),
      },
      general: {
        siteName:    get('general', 'siteName',    DEFAULT_DATA.general.siteName),
        siteTagline: get('general', 'siteTagline', DEFAULT_DATA.general.siteTagline),
        heroImage:   get('general', 'heroImage',   DEFAULT_DATA.general.heroImage),
      },
    };
  } catch (err) {
    console.error('fetchContent error:', err);
    return DEFAULT_DATA;
  }
}

export async function upsertContent(cms: CMSData): Promise<void> {
  const rows: ContentRow[] = [
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

  const res = await fetch('/api/content', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rows),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `HTTP ${res.status}`);
  }
}

export async function fetchMediaUrl(_bucket: string, _path: string): Promise<string | null> {
  return null;
}

export async function listMediaFiles(_bucket: string, _folder?: string): Promise<string[]> {
  return [];
}
