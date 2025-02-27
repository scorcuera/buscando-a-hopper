export function getImages() {
  // Create an array of image objects with proper paths
  const images = [];
  
  // Descriptive alt texts that include the main keyword
  const altTexts = [
    "buscando a Hopper - Portada del proyecto fotográfico",
    "buscando a Hopper - Escena urbana con luces de noche",
    "buscando a Hopper - Café iluminado en la oscuridad",
    "buscando a Hopper - Soledad y luz en ambiente nocturno",
    "buscando a Hopper - Juego de luces en arquitectura urbana",
    "buscando a Hopper - Perspectiva de calle vacía",
    // ...add more descriptive alt texts for remaining images
  ];
  
  // Generate 21 images (0-20)
  for (let i = 0; i <= 20; i++) {
    // Format the number with leading zero
    const formattedNum = i.toString().padStart(2, '0');
    
    // Use absolute path starting with /
    const imagePath = `/imgs/img_${formattedNum}.jpeg`;
    
    images.push({
      src: imagePath,
      alt: i < altTexts.length ? altTexts[i] : `buscando a Hopper - Imagen ${formattedNum}`,
      position: 'center', // Default position
      size: 'medium',     // Default size
    });
  }
  
  return images;
} 