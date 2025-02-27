export function getImages() {
  // Create an array of image objects with proper paths
  const images = [];
  
  // Generate 21 images (0-20)
  for (let i = 0; i <= 20; i++) {
    // Format the number with leading zero
    const formattedNum = i.toString().padStart(2, '0');
    
    // Use absolute path starting with / instead of //
    const imagePath = `/imgs/img_${formattedNum}.jpeg`;
    
    images.push({
      src: imagePath,
      alt: `img_${formattedNum}`,
      position: 'center', // Default position
      size: 'medium',     // Default size
    });
  }
  
  return images;
} 