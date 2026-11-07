// Single source of truth: rename the brand here and everything updates.
export const site = {
  name: 'Sumitt.dev',
  tagline: 'I design and build fast, beautiful websites.',
  description: 'Sumitt.dev is a freelance web design and development studio crafting fast, polished websites and digital products.',
  url: 'https://sumitt.dev',
  email: 'hello@sumitt.dev',
  // Create a free form at https://formspree.io and paste its endpoint here.
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  booking: 'https://cal.com/your-name',
  social: {
    linkedin: 'https://linkedin.com/in/your-name',
    twitter: 'https://x.com/your-handle',
  },
};

export const services = [
  { title: 'Web Design', text: 'Clean, conversion-focused design tailored to your brand.' },
  { title: 'Web Development', text: 'Lightning-fast sites built with modern, maintainable tech.' },
  { title: 'Performance & SEO', text: 'Sites that score 90+ on Lighthouse and rank well.' },
];

export const projects = [
  { title: 'Project One', category: 'Website', text: 'Short description and the result you achieved.', image: '/work/placeholder.svg', url: '#' },
  { title: 'Project Two', category: 'Web App', text: 'Short description and the result you achieved.', image: '/work/placeholder.svg', url: '#' },
  { title: 'Project Three', category: 'Branding', text: 'Short description and the result you achieved.', image: '/work/placeholder.svg', url: '#' },
];
