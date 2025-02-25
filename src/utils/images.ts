import { z } from "astro:content";

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

export interface EnhancedImage {
  src: string;
  alt: string;
  thumbnail: string;
  position?: string;
  size?: string;
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

export async function getImages(): Promise<EnhancedImage[]> {
  // Convert the import.meta.glob result into an array of image paths
  const imagePaths = Object.keys(images).map(path => {
    // Get the base path from import.meta.env
    const basePath = import.meta.env.BASE_URL || '';
    
    // Fix path construction - remove /public correctly and ensure leading slash
    const src = path.replace('/public', '');
    const absoluteSrc = basePath + (src.startsWith('/') ? src : '/' + src);
    
    const fileName = path.split('/').pop() || '';
    const alt = fileName.split('.')[0] || 'Photo';
    
    return {
      src: absoluteSrc,
      alt,
      thumbnail: absoluteSrc.replace(/\.(jpeg|jpg|png|gif)$/i, '-thumb.$1')
    };
  });

  return imagePaths;
} 