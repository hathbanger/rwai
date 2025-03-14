export interface BlogPost {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'The Future of AI Infrastructure',
    date: 'March 15, 2024',
    image: '/images/RWAi_00131_-enhanced.png',
    excerpt: 'As AI models continue to grow in size and complexity, the demand for specialized hardware is skyrocketing. Learn how RWAi is addressing this challenge.',
    url: 'https://rwai.xyz/future-of-ai-infrastructure/'
  },
  {
    title: 'Democratizing Access to AI Compute',
    date: 'February 28, 2024',
    image: '/images/RWAi_00060_.png',
    excerpt: 'How fractional ownership is making high-performance AI infrastructure accessible to everyone, not just tech giants with deep pockets.',
    url: 'https://rwai.xyz/democratizing-access/'
  },
  {
    title: 'AI\'s Compute Crunch and How Decentralization Solves It',
    date: 'January 10, 2024',
    image: '/images/RWAi_00131_-enhanced.png',
    excerpt: 'Custom development of machine learning models tailored to your specific business needs, leveraging algorithms and techniques such as regression, classification, clustering, and deep learning.',
    url: 'https://rwai.xyz/ai-compute-crunch/'
  },
  {
    title: 'AI\'s Compute Crunch — and How Decentralization Solves It',
    date: 'January 5, 2024',
    image: '/images/RWAi_00131_-enhanced.png',
    excerpt: 'This surge is laying the groundwork for a multi-trillion-dollar market in AI compute. As AI transforms industries, those who control the infrastructure powering it will reap the biggest rewards. But there\'s a problem: today\'s systems are struggling to keep up.',
    url: 'https://rwai.xyz/is-artificial-intelligence-accessible-to-businesses-of-all-sizes-2/'
  }
]; 