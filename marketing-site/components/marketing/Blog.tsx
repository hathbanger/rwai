import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import BlogCard from '../ui/BlogCard';
import { blogPosts } from '../../data/blog-posts';

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="blog Exploring the frontiers of artificial Intelligence: Insights, innovations and impact"
          highlightedText="blog"
          gradientDirection="diagonal"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 