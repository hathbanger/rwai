declare module "@/data/models.json" {
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

  const models: Model[];
  export default models;
} 