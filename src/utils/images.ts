import { z } from "astro:content";

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

// Import all images
const images = import.meta.glob('/public/imgs/*.{jpeg,jpg,png,gif}', {
  import: 'default',
});

export async function getImages() {
  // Convert the import.meta.glob result into an array of image paths
  const imagePaths = Object.keys(images).map(path => {
    // Get the base path from import.meta.env
    const basePath = import.meta.env.BASE_URL || '';
    
    // Ensure path is correctly formed with base path
    const src = path.replace('/public', basePath);
    
    return {
      src,
      alt: path.split('/').pop()?.split('.')[0] || 'Photo'
    };
  });

  return imagePaths;
} 