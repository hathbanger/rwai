import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../data/blog-posts';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard = ({ post, className = '' }: BlogCardProps) => {
  return (
    <div className={`bg-card rounded-xl overflow-hidden shadow-sm hover-scale ${className}`}>
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
        
        <Link href={post.url} className="text-primary font-medium hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard; 