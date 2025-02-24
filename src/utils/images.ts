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
  const imagePaths = Object.keys(images).map(path => ({
    src: path.replace('/public', ''),
    alt: path.split('/').pop()?.split('.')[0] || 'Photo'
  }));

  return imagePaths;
} 