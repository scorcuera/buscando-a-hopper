import { z } from "astro:content";

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

// Define different image sizes for responsive loading
const imageSizes = {
  small: { width: 400 },
  medium: { width: 800 },
  large: { width: 1200 },
  hero: { width: 1600 }
};

// Import all images
const images = import.meta.glob('/public/imgs/*.{jpeg,jpg,png,gif,webp}', {
  import: 'default',
});

export async function getImages() {
  // Convert the import.meta.glob result into an array of image paths
  const imagePaths = Object.keys(images).map(path => {
    // Get the base path from import.meta.env
    const basePath = import.meta.env.BASE_URL || '';
    
    // Ensure path is correctly formed with base path
    const src = path.replace('/public', basePath);
    const fileName = path.split('/').pop() || '';
    const alt = fileName.split('.')[0] || 'Photo';
    
    return {
      src,
      alt,
      // Add small thumbnail version for preloading
      thumbnail: src.replace(/\.(jpeg|jpg|png|gif)$/i, '-thumb.$1')
    };
  });

  return imagePaths;
} 