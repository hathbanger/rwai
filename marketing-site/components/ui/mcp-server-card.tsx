"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Clock, Server, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./badge";

interface MCPServerCardProps {
  id: string;
  name: string;
  type: string;
  description: string;
  status: 'active' | 'inactive';
  stats: {
    requestsPerDay: number;
    avgResponseTime: string;
    lastConnected: string;
  };
  tools: {
    name: string;
    description: string;
  }[];
  tags: string[];
  image: string;
}

export function MCPServerCard({
  id,
  name,
  type,
  description,
  status,
  stats,
  tools,
  tags,
  image
}: MCPServerCardProps) {
  const [imgError, setImgError] = useState(false);

  // Format the last connected date
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };

  return (
    <Card className="overflow-hidden hover:border-primary/50 transition-colors h-full">
      {/* 
        TEMPORARILY HIDDEN: Server image section
        The image URLs are currently broken. To fix this:
        1. Update the image paths in src/data/mcp-servers.json
        2. Ensure images are properly stored in the public directory
        3. Verify the IMAGE_BASE_PATH environment variable is correctly set
      */}
      {/* <div className="h-48 w-full bg-muted/50 overflow-hidden">
        {imgError ? (
          <div className="flex items-center justify-center bg-muted h-full w-full">
            <span className="text-3xl font-bold text-muted-foreground">{name.charAt(0)}</span>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div> */}

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge variant={status === "active" ? "default" : "secondary"}>
            {status === "active" ? "Active" : "Inactive"}
          </Badge>
        </div>
        <CardDescription>{type}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex gap-1 mt-1 mb-3 flex-wrap">
          {tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1">
            <Server className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Tools:</span>
            <span>{tools.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Requests:</span>
            <span>{stats.requestsPerDay}/day</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Response:</span>
            <span>{stats.avgResponseTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Last:</span>
            <span>{formatDate(stats.lastConnected)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="w-full flex justify-end">
          <Link
            href={`/mcp/${id}`}
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            Connect →
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
} 
