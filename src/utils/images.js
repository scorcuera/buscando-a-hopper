export function getImages() {
  // Create an array of image objects with proper paths
  const images = [];
  
  // Descriptive alt texts that include the main keyword
  const altTexts = [
    "Office in a Small City, de Edward Hopper",
    "buscando a Hopper - Escena urbana con luces de noche",
    "buscando a Hopper - Café iluminado en la oscuridad",
    "buscando a Hopper - Soledad y luz en ambiente nocturno",
    "buscando a Hopper - Juego de luces en arquitectura urbana",
    "buscando a Hopper - Perspectiva de calle vacía",
    // ...add more descriptive alt texts for remaining images
  ];
  
  // Image format mapping - specify which images use which format
  const imageFormats = {
    // Format is image number: extension (without the dot)
    // For example:
    // "01": "webp",  // img_01.webp
    // "05": "jpg",   // img_05.jpg
    // Default is "jpeg" for any not specified
  };
  
  // Specify which images have "b" variants - adding the missing ones (8, 13, 16)
  const bVariantImages = [1, 4, 8, 13, 16, 19]; // img_01b, img_04b, img_08b, img_13b, img_16b, img_19b
  
  // Variant format mapping (optional)
  const variantFormats = {
    // Format is image number: extension (without the dot)
    // For example:
    // "01b": "jpg", // img_01b.jpg
    // Default is "jpeg" for any not specified
  };
  
  // Generate primary images (0-20)
  for (let i = 0; i <= 20; i++) {
    // Format the number with leading zero
    const formattedNum = i.toString().padStart(2, '0');
    
    // Determine the extension for this image
    const extension = imageFormats[formattedNum] || "jpeg";
    
    // Use absolute path with the determined extension
    const imagePath = `/imgs/img_${formattedNum}.${extension}`;
    
    images.push({
      src: imagePath,
      alt: i < altTexts.length ? altTexts[i] : `buscando a Hopper - Imagen ${formattedNum}`,
      position: 'center', // Default position
      size: 'medium',     // Default size
      id: formattedNum    // Store the original ID for matching with variants
    });
    
    // If this image has a "b" variant, add it immediately after
    if (bVariantImages.includes(i)) {
      // Determine the extension for the variant
      const variantKey = `${formattedNum}b`;
      const variantExtension = variantFormats[variantKey] || "jpeg";
      
      const bImagePath = `/imgs/img_${formattedNum}b.${variantExtension}`;
      
      images.push({
        src: bImagePath,
        alt: `buscando a Hopper - Imagen complementaria ${formattedNum}b`,
        position: 'center', // Always center the "b" variants
        size: 'medium',
        isVariant: true,    // Mark as a variant for special handling
        variantOf: formattedNum // Reference to the original image
      });
    }
  }
  
  return images;
} 