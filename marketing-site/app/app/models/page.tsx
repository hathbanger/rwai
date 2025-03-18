"use client";

import { useState } from "react";
import { Search, Filter, ArrowUpDown, Info, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import modelsData from "../../../src/data/models.json";

// Base path for static assets in subdomains
const IMAGE_BASE_PATH = "/";

// Default image path
const DEFAULT_IMAGE_PATH = "texture_3.png";

// Define Model interface
interface Model {
  id: string;
  name: string;
  releaseDate: string;
  parameters: number[];
  license: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

// Model data with improved image path handling
const models: Model[] = modelsData.map((model: any) => ({
  ...model,
  image: model.image.startsWith('/') 
    ? `${IMAGE_BASE_PATH}${model.image.substring(1)}` 
    : model.image
}));

// Add debug logging
console.log("Models loaded:", models.length);
console.log("First model:", models[0]?.id);
console.log("First model image path:", models[0]?.image);

// Categories for filtering
const categories = [
  { id: "all", name: "All Models", count: models.length },
  { id: "text", name: "Text", count: models.filter((m: Model) => m.category === "text").length },
  { id: "image", name: "Image", count: models.filter((m: Model) => m.category === "image").length },
  { id: "audio", name: "Audio", count: models.filter((m: Model) => m.category === "audio").length },
  { id: "video", name: "Video", count: models.filter((m: Model) => m.category === "video").length },
  { id: "multimodal", name: "Multimodal", count: models.filter((m: Model) => m.category === "multimodal").length },
];

// Define ModelCardProps interface
interface ModelCardProps {
  id: string;
  name: string;
  description: string;
  tags: string[];
  parameters: number[];
  image: string;
}

// Function to render model logo with fallback
interface ModelLogoProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const ModelLogo = ({ src, alt, className = "", width = 96, height = 96 }: ModelLogoProps) => {
  const [imgError, setImgError] = useState(false);
  
  // Use the helper function for image URL with default fallback
  const imageUrl = imgError || !src || src === ""
    ? `${IMAGE_BASE_PATH}${DEFAULT_IMAGE_PATH}`
    : src;
  
  return (
    <div className={className}>
      <div 
        className="w-full h-full bg-contain bg-center bg-no-repeat" 
        style={{ width, height, backgroundImage: `url(${imageUrl})` }}
        onError={() => setImgError(true)}
      />
    </div>
  );
};

const ModelCard = ({ id, name, description, tags, parameters, image }: ModelCardProps) => {
  const [imgError, setImgError] = useState(false);
  
  // Create an absolute URL with default fallback
  const imageUrl = name === "Bark" || imgError || !image || image === "" 
    ? `${IMAGE_BASE_PATH}${DEFAULT_IMAGE_PATH}`
    : image;

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card hover:border-primary/50 transition-colors overflow-hidden w-full h-full">
      {/* Full-width top half image with absolutely no padding */}
      <div className="h-48 w-full bg-muted/50 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>
      
      {/* Content section */}
      <div className="p-4 flex flex-col flex-grow">
        <CardTitle className="text-lg">{name}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-1">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-1.5 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="mt-auto pt-4">
          <Link 
            href={`/models/${id}`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full"
          >
            Use Model
          </Link>
        </div>
      </div>
    </div>
  );
};

// Helper function to format ISO date to a more readable format
const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export default function ModelsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const modelsPerPage = 10;
  
  // Filter models based on search query and category
  const filteredModels = models.filter(model => {
    const matchesSearch = 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || model.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort models
  const sortedModels = [...filteredModels].sort((a, b) => {
    let comparison = 0;
    
    if (sortBy === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === "releaseDate") {
      // Using ISO date format (YYYY-MM-DD) for direct string comparison
      comparison = a.releaseDate.localeCompare(b.releaseDate);
    } else if (sortBy === "parameters") {
      comparison = Math.max(...a.parameters) - Math.max(...b.parameters);
    }
    
    return sortDirection === "asc" ? comparison : -comparison;
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedModels.length / modelsPerPage);
  const indexOfLastModel = currentPage * modelsPerPage;
  const indexOfFirstModel = indexOfLastModel - modelsPerPage;
  const currentModels = sortedModels.slice(indexOfFirstModel, indexOfLastModel);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle sort change
  const handleSort = (field: "name" | "releaseDate" | "parameters") => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="space-y-8 relative">
      {/* Page Header */}
      <div className="flex flex-col gap-4 w-full px-4 mb-10">
        <h1 className="text-3xl font-bold text-foreground">Models</h1>
        <p className="text-muted-foreground max-w-3xl">
          Browse and use state-of-the-art AI models for inference. Select a model to get started with your AI tasks.
        </p>
      </div>

      {/* Featured models cards */}
      <div className="mb-16 w-full px-4">
        <div className="text-2xl mb-6">Featured Models</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {models.filter(model => model.featured).map(model => (
            <ModelCard
              key={model.id}
              id={model.id}
              name={model.name}
              description={model.description}
              tags={model.tags}
              parameters={model.parameters}
              image={model.image}
            />
          ))}
        </div>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full px-4 mb-8">
        <div className="flex flex-wrap gap-2 w-full md:w-auto order-2 md:order-1">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 py-1.5 text-sm rounded-full border ${
                selectedCategory === category.id
                  ? "bg-background text-primary border-primary font-medium"
                  : "bg-background text-foreground border-border hover:bg-muted"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-96 order-1 md:order-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search models..."
            className="pl-10 pr-4 py-2 w-full rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* All Models Table */}
      <div className="w-full px-4">
        <div className="text-2xl mb-6">All Models</div>
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Available Models</CardTitle>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>Sort by:</span>
                  <button
                    className={`flex items-center gap-1 px-2 py-1 rounded hover:bg-muted ${sortBy === "name" ? "text-foreground font-medium" : ""}`}
                    onClick={() => handleSort("name")}
                  >
                    Name
                    {sortBy === "name" && (
                      <ArrowUpDown className={`h-3.5 w-3.5 ${sortDirection === "asc" ? "rotate-0" : "rotate-180"}`} />
                    )}
                  </button>
                  <button
                    className={`flex items-center gap-1 px-2 py-1 rounded hover:bg-muted ${sortBy === "releaseDate" ? "text-foreground font-medium" : ""}`}
                    onClick={() => handleSort("releaseDate")}
                  >
                    Release Date
                    {sortBy === "releaseDate" && (
                      <ArrowUpDown className={`h-3.5 w-3.5 ${sortDirection === "asc" ? "rotate-0" : "rotate-180"}`} />
                    )}
                  </button>
                  <button
                    className={`flex items-center gap-1 px-2 py-1 rounded hover:bg-muted ${sortBy === "parameters" ? "text-foreground font-medium" : ""}`}
                    onClick={() => handleSort("parameters")}
                  >
                    Parameters
                    {sortBy === "parameters" && (
                      <ArrowUpDown className={`h-3.5 w-3.5 ${sortDirection === "asc" ? "rotate-0" : "rotate-180"}`} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Model</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Parameters</TableHead>
                  <TableHead>Release Date</TableHead>
                  <TableHead>License</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentModels.length > 0 ? (
                  currentModels.map(model => (
                    <TableRow key={model.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div className="font-medium">{model.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{model.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground capitalize">
                          {model.category}
                        </span>
                      </TableCell>
                      <TableCell>
                        {model.parameters.length > 1 
                          ? `${Math.min(...model.parameters)}-${Math.max(...model.parameters)}B` 
                          : `${model.parameters[0]}B`}
                      </TableCell>
                      <TableCell>{formatDate(model.releaseDate)}</TableCell>
                      <TableCell className="max-w-[200px] truncate" title={model.license}>
                        {model.license}
                      </TableCell>
                      <TableCell className="text-right">
                        <Link 
                          href={`/models/${model.id}`}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary bg-transparent text-primary hover:bg-primary/10 h-8 px-3 py-2"
                        >
                          Use
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6">
                      <p className="text-muted-foreground">No models found matching your criteria.</p>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-muted-foreground">
                  Showing {indexOfFirstModel + 1}-{Math.min(indexOfLastModel, sortedModels.length)} of {sortedModels.length} models
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md border border-border bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-8 h-8 rounded-md text-sm ${
                        currentPage === pageNumber
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md border border-border bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 