export interface BlogPost {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  url: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'The Future of AI Infrastructure',
    date: 'March 15, 2024',
    image: '/images/RWAi_00131_-enhanced.png',
    excerpt: 'As AI models continue to grow in size and complexity, the demand for specialized hardware is skyrocketing. Learn how RWAi is addressing this challenge.',
    url: '/blog/tokenizing-ai-compute-power',
    slug: 'tokenizing-ai-compute-power'
  },
  {
    title: 'Democratizing Access to AI Compute',
    date: 'February 28, 2024',
    image: '/images/RWAi_00060_.png',
    excerpt: 'How fractional ownership is making high-performance AI infrastructure accessible to everyone, not just tech giants with deep pockets.',
    url: '/blog/introducing-rwai',
    slug: 'introducing-rwai'
  },
  {
    title: 'AI\'s Compute Crunch — and How Decentralization Solves It',
    date: 'January 5, 2024',
    image: '/images/RWAi_00131_-enhanced.png',
    excerpt: 'This surge is laying the groundwork for a multi-trillion-dollar market in AI compute. As AI transforms industries, those who control the infrastructure powering it will reap the biggest rewards. But there\'s a problem: today\'s systems are struggling to keep up.',
    url: '/blog/ai-compute-crunch',
    slug: 'ai-compute-crunch'
  }
]; 