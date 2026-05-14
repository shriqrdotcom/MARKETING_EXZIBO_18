-- Create the content table for dynamic CMS data
create table if not exists public.content (
  id uuid primary key default gen_random_uuid(),
  section text not null,
  key text not null,
  value text not null,
  created_at timestamptz not null default now(),
  unique (section, key)
);

-- Enable Row Level Security (public read, no write without auth)
alter table public.content enable row level security;

-- Allow public anon read access
create policy "Public read access"
  on public.content
  for select
  using (true);

-- Create the media storage bucket (run this in Supabase Dashboard > Storage)
-- insert into storage.buckets (id, name, public) values ('media', 'media', true);

-- Allow public read on media bucket
-- create policy "Public media read"
--   on storage.objects
--   for select
--   using (bucket_id = 'media');

-- ============================================================
-- Seed default content rows
-- ============================================================

insert into public.content (section, key, value) values
  ('hero', 'badge',               'Version 2.0 is now live'),
  ('hero', 'title',               'All-in-one platform to grow your'),
  ('hero', 'titleHighlight',      'restaurant'),
  ('hero', 'subtitle',            'Create your menu website, manage orders, track performance, and grow your restaurant — all from one dashboard.'),
  ('hero', 'primaryButtonText',   'Explore Platform'),
  ('hero', 'secondaryButtonText', 'View Features'),
  ('hero', 'trustItem1',          'No credit card required'),
  ('hero', 'trustItem2',          '14-day free trial'),

  ('contact', 'email',    'hello@exzibo.com'),
  ('contact', 'phone',    '+1 (555) 000-0000'),
  ('contact', 'location', 'San Francisco, CA'),
  ('contact', 'hours',    'Mon–Sat, 9am–7pm'),

  ('footer', 'tagline',  'The all-in-one platform to grow your restaurant online.'),
  ('footer', 'email',    'hello@exzibo.com'),
  ('footer', 'phone',    '+1 (555) 000-0000'),
  ('footer', 'location', 'San Francisco, CA'),

  ('general', 'siteName',    'EXZIBO'),
  ('general', 'siteTagline', 'Grow Your Restaurant Online'),
  ('general', 'heroImage',   ''),

  ('features', 'list', '[
    {"name":"Menu Website Builder","description":"No code required. Launch your stunning menu website in minutes."},
    {"name":"Live Order Tracking","description":"Real-time updates for kitchen staff and waiting customers."},
    {"name":"Table Booking System","description":"Manage reservations and floor plans with zero effort."},
    {"name":"Analytics Dashboard","description":"Deep dive into sales, trends, and customer demographics."},
    {"name":"Team Management","description":"Track staff shifts, tips, and performance metrics."},
    {"name":"Multi-Location Support","description":"Manage all your restaurant branches from one single account."},
    {"name":"Secure Payments","description":"Integrated with top payment providers for safe transactions."},
    {"name":"Customer Feedback","description":"Gather and respond to customer reviews automatically."}
  ]'),

  ('testimonials', 'list', '[
    {"name":"Sarah Jenkins","restaurant":"Bistro 42","result":"Increased orders by 40%","quote":"Switching to EXZIBO was the best decision we made for our digital presence. The dashboard is incredibly intuitive.","image":"https://picsum.photos/seed/sarah/100/100"},
    {"name":"Marcus Chen","restaurant":"Golden Dragon Express","result":"Efficiency improved by 65%","quote":"The live order tracking has completely eliminated errors in our kitchen. Our staff and customers are much happier.","image":"https://picsum.photos/seed/marcus/100/100"},
    {"name":"Elena Rodriguez","restaurant":"Taco Haven","result":"Bookings up by 25%","quote":"The table booking system is a game changer. We no longer lose peak-hour traffic due to management issues.","image":"https://picsum.photos/seed/elena/100/100"}
  ]'),

  ('pricing', 'list', '[
    {"id":"starter","name":"Starter","price":999,"description":"Perfect for getting your restaurant online and managing basics.","features":["Menu Website Builder","Basic Order Management","Customer Support","1 Location"],"cta":"Choose Starter","highlight":false},
    {"id":"growth","name":"Growth","price":1999,"description":"Everything you need to attract customers and grow orders.","features":["Everything in Starter","Table Booking System","Analytics Dashboard","3 Locations"],"cta":"Choose Growth","highlight":false},
    {"id":"business","name":"Business","price":2999,"description":"Advanced tools to streamline operations and maximize revenue.","features":["Everything in Growth","Advanced Analytics","Customer Loyalty Program","Marketing Automation","Priority Support"],"cta":"Choose Business","highlight":true},
    {"id":"scale","name":"Scale","price":4999,"description":"For multi-outlet restaurants and serious scale.","features":["Everything in Business","Multi-outlet Management","Advanced Reports","API Access","Dedicated Account Manager"],"cta":"Choose Scale","highlight":false}
  ]')

on conflict (section, key) do update set value = excluded.value;
