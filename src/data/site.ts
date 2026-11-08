// Single source of truth for brand, contact details and page content.
export const site = {
  name: 'Sumitt.dev',
  tagline: 'Order, challan and field-sales software for textile traders.',
  description:
    'Take orders on mobile (even with no signal), print challans, share them on WhatsApp, and see where your sales team is. Built for textile wholesalers in Surat and Ahmedabad.',
  url: 'https://sumitt.dev',

  // WhatsApp number in international format, digits only, e.g. '919876543210'.
  // While this is empty, the WhatsApp buttons fall back to the booking link.
  whatsapp: '918610539926',
  whatsappMessage: "Hi Sumit, I saw your site and I'm interested in order software for my textile business.",

  booking: 'https://cal.com/sumit-jain-s1u8fb/15min',
  x: 'https://x.com/codebysumit',
  xHandle: '@codebysumit',
  // Split so the address isn't sitting in the page HTML for spam bots to scrape.
  emailUser: 'sumitjaindev',
  emailDomain: 'gmail.com',
};

export const contactLink = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : site.booking;
export const contactLabel = site.whatsapp ? 'Chat on WhatsApp' : 'Book a free call';

export const pains = [
  { icon: 'wifi-off', title: 'Poor signal in the market', text: 'Orders keep working offline and sync the moment the phone is back online, even inside multi-storey markets.' },
  { icon: 'clipboard', title: 'Orders on paper and WhatsApp', text: 'Every order goes into one order book, with the buyer, fabric, meters and amount in the same place.' },
  { icon: 'file', title: 'Challans written by hand', text: 'Print a clean PDF challan on the spot, or share it with the party on WhatsApp.' },
  { icon: 'pin', title: 'Not sure where your team is', text: 'See your sales reps on a live map, plan their daily beat, and approve orders as they come in.' },
];

export const steps = [
  { title: 'Quick chat', text: 'We talk for 15 minutes about how you take orders and print challans today.' },
  { title: 'Set up for you', text: 'I load your parties, fabric qualities and challan format so it looks like your business.' },
  { title: 'Go live', text: 'Your team installs the app, I show them how it works, and I stay on hand for questions.' },
];

export const packages = [
  {
    name: 'Starter',
    tagline: 'Order book + challans',
    features: ['Mobile order taking, works offline', 'Printable PDF challans', 'Share challans on WhatsApp', 'Party and fabric catalog', 'Setup and training'],
  },
  {
    name: 'Team',
    tagline: 'For businesses with a sales team',
    highlight: true,
    features: ['Everything in Starter', 'Logins for each sales rep', 'Live orders pipeline with approvals', 'Daily beat planner', 'Live GPS map of your team', 'Reports and CSV export'],
  },
  {
    name: 'Custom',
    tagline: 'Built around how you work',
    features: ['Your own challan layout', 'Import your data from Excel', 'Extra modules you ask for', 'Ongoing support'],
  },
];

export const featureList = [
  'Offline-first Android app',
  'Web dashboard for managers',
  'Printable and shareable PDF challans',
  'Live GPS tracking and territories',
  'Order pipeline with approve / reject',
  'Daily beat planning',
  'Party directory that learns client locations',
  'Fabric catalog',
  'Over-the-air app updates',
  'Licence-based access, tied to each device',
];

export const orbit = ['Orders', 'Challans', 'WhatsApp', 'Live GPS', 'Reports', 'Works offline'];
