/**
 * Cloudinary image utilities for the Rising Kung Fu client
 */

export interface CloudinaryImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  public_id?: string;
}

/**
 * Generates a responsive Cloudinary URL with transformations
 * 
 * @param image The Cloudinary image object from Strapi
 * @param options Optional transformations
 * @returns Optimized Cloudinary URL
 */
export function getCloudinaryUrl(
  image: CloudinaryImage,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'auto' | 'webp' | 'jpg' | 'png';
    crop?: 'fill' | 'scale' | 'fit' | 'thumb';
  } = {}
): string {
  if (!image?.url) return '';
  
  // If no public_id, just return the original URL
  if (!image.public_id) return image.url;
  
  // Parse the Cloudinary URL to extract cloud name
  const urlParts = image.url.split('/');
  const cloudNameIndex = urlParts.findIndex(part => part.includes('cloudinary.com'));
  if (cloudNameIndex === -1) return image.url;
  
  const cloudName = urlParts[cloudNameIndex].split('.')[0];
  
  // Build transformation string
  const transformations = [];
  
  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.quality) transformations.push(`q_${options.quality}`);
  if (options.format) transformations.push(`f_${options.format}`);
  if (options.crop) transformations.push(`c_${options.crop}`);
  
  // Add responsive and auto-format transformations if none specified
  if (transformations.length === 0) {
    transformations.push('q_auto', 'f_auto');
  }
  
  // Build the final URL
  const transformationString = transformations.join(',');
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}/${image.public_id}`;
}

/**
 * Creates a responsive srcSet for Cloudinary images
 * 
 * @param image The Cloudinary image object from Strapi
 * @param options Optional transformations
 * @returns srcSet string for responsive images
 */
export function getCloudinarySrcSet(
  image: CloudinaryImage,
  options: {
    widths: number[];
    quality?: number;
    format?: 'auto' | 'webp' | 'jpg' | 'png';
    crop?: 'fill' | 'scale' | 'fit' | 'thumb';
  }
): string {
  if (!image?.url || !image.public_id) return '';
  
  return options.widths
    .map(width => {
      const url = getCloudinaryUrl(image, {
        ...options,
        width,
      });
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * React component props for Cloudinary images
 */
export function getCloudinaryImageProps(image: CloudinaryImage) {
  if (!image?.url) return {};
  
  return {
    src: getCloudinaryUrl(image),
    alt: image.alt || '',
    width: image.width,
    height: image.height,
    srcSet: getCloudinarySrcSet(image, {
      widths: [320, 640, 960, 1280, 1920],
      quality: 80,
      format: 'auto',
    }),
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    loading: 'lazy',
  };
}