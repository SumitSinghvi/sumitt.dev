// Single source of truth: rename the brand here and everything updates.
export const site = {
  name: 'Sumitt.dev',
  tagline: 'I design and build fast, beautiful websites.',
  description: 'Sumitt.dev is a freelance web design and development studio crafting fast, polished websites and digital products.',
  url: 'https://sumitt.dev',
  // Contact: DM me on X.
  booking: 'https://cal.com/sumit-jain-s1u8fb/15min',
  x: 'https://x.com/codebysumit',
  xHandle: '@codebysumit',
  // Split so the address isn't sitting in the page HTML for spam bots to scrape.
  emailUser: 'sumitjaindev',
  emailDomain: 'gmail.com',
};

export const services = [
  { title: 'Web Design', text: 'Clean, conversion-focused design tailored to your brand.' },
  { title: 'Web Development', text: 'Lightning-fast sites built with modern, maintainable tech.' },
  { title: 'Performance & SEO', text: 'Sites that score 90+ on Lighthouse and rank well.' },
];

export const projects = [
  {
    title: 'Shreenathji Textile',
    category: 'Web + Android app',
    text: 'Field sales and order system for textile wholesalers in Surat and Ahmedabad: offline-first order taking, live GPS tracking, and printable challans.',
    image: '/work/shreenathji.webp',
    alt: 'Order pipeline dashboard with client details blurred',
    tags: ['Android (Kotlin)', 'TypeScript', 'Supabase', 'Postgres'],
    url: '', // add a public demo link here when you have one
  },
];
