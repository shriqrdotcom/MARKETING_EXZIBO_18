import express from 'express';
import { Pool } from 'pg';

const app = express();
app.use(express.json());

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set.');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS content (
      id SERIAL PRIMARY KEY,
      section TEXT NOT NULL,
      key TEXT NOT NULL,
      value TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      UNIQUE (section, key)
    );
  `);

  const { rowCount } = await pool.query('SELECT 1 FROM content LIMIT 1');
  if (!rowCount) {
    await pool.query(`
      INSERT INTO content (section, key, value) VALUES
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
        ('features', 'list', '[{"name":"Menu Website Builder","description":"No code required. Launch your stunning menu website in minutes."},{"name":"Live Order Tracking","description":"Real-time updates for kitchen staff and waiting customers."},{"name":"Table Booking System","description":"Manage reservations and floor plans with zero effort."},{"name":"Analytics Dashboard","description":"Deep dive into sales, trends, and customer demographics."},{"name":"Team Management","description":"Track staff shifts, tips, and performance metrics."},{"name":"Multi-Location Support","description":"Manage all your restaurant branches from one single account."},{"name":"Secure Payments","description":"Integrated with top payment providers for safe transactions."},{"name":"Customer Feedback","description":"Gather and respond to customer reviews automatically."}]'),
        ('testimonials', 'list', '[{"name":"Sarah Jenkins","restaurant":"Bistro 42","result":"Increased orders by 40%","quote":"Switching to EXZIBO was the best decision we made for our digital presence. The dashboard is incredibly intuitive.","image":"https://picsum.photos/seed/sarah/100/100"},{"name":"Marcus Chen","restaurant":"Golden Dragon Express","result":"Efficiency improved by 65%","quote":"The live order tracking has completely eliminated errors in our kitchen. Our staff and customers are much happier.","image":"https://picsum.photos/seed/marcus/100/100"},{"name":"Elena Rodriguez","restaurant":"Taco Haven","result":"Bookings up by 25%","quote":"The table booking system is a game changer. We no longer lose peak-hour traffic due to management issues.","image":"https://picsum.photos/seed/elena/100/100"}]'),
        ('pricing', 'list', '[{"id":"starter","name":"Starter","price":999,"description":"Perfect for getting your restaurant online and managing basics.","features":["Menu Website Builder","Basic Order Management","Customer Support","1 Location"],"cta":"Choose Starter","highlight":false},{"id":"growth","name":"Growth","price":1999,"description":"Everything you need to attract customers and grow orders.","features":["Everything in Starter","Table Booking System","Analytics Dashboard","3 Locations"],"cta":"Choose Growth","highlight":false},{"id":"business","name":"Business","price":2999,"description":"Advanced tools to streamline operations and maximize revenue.","features":["Everything in Growth","Advanced Analytics","Customer Loyalty Program","Marketing Automation","Priority Support"],"cta":"Choose Business","highlight":true},{"id":"scale","name":"Scale","price":4999,"description":"For multi-outlet restaurants and serious scale.","features":["Everything in Business","Multi-outlet Management","Advanced Reports","API Access","Dedicated Account Manager"],"cta":"Choose Scale","highlight":false}]')
      ON CONFLICT (section, key) DO NOTHING;
    `);
  }
}

app.get('/api/content', async (_req, res) => {
  try {
    const { rows } = await pool.query('SELECT section, key, value FROM content');
    res.json(rows);
  } catch (err) {
    console.error('GET /api/content error:', err);
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

app.post('/api/content', async (req, res) => {
  const rows: { section: string; key: string; value: string }[] = req.body;
  if (!Array.isArray(rows)) {
    return res.status(400).json({ error: 'Body must be an array of {section, key, value}' });
  }
  try {
    for (const row of rows) {
      await pool.query(
        `INSERT INTO content (section, key, value)
         VALUES ($1, $2, $3)
         ON CONFLICT (section, key) DO UPDATE SET value = EXCLUDED.value`,
        [row.section, row.key, row.value],
      );
    }
    res.json({ ok: true });
  } catch (err) {
    console.error('POST /api/content error:', err);
    res.status(500).json({ error: 'Failed to save content' });
  }
});

const PORT = process.env.API_PORT ? parseInt(process.env.API_PORT) : 3001;

initDb()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`API server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialise database:', err);
    process.exit(1);
  });
