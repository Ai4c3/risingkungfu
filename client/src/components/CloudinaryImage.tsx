import Image from 'next/image';
import { CloudinaryImage, getCloudinaryImageProps } from '@/lib/cloudinary';

interface CloudinaryImageProps {
  image: CloudinaryImage;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * Component for rendering optimized Cloudinary images
 * Uses Next.js Image component with Cloudinary optimizations
 */
export default function CloudinaryImage({
  image,
  className = '',
  priority = false,
  fill = false,
  sizes,
  quality = 80,
}: CloudinaryImageProps) {
  if (!image?.url) {
    return null;
  }

  // Get base image props
  const imageProps = getCloudinaryImageProps(image);
  
  // Override with component props
  if (sizes) {
    imageProps.sizes = sizes;
  }
  
  if (quality) {
    // Update srcSet with custom quality
    imageProps.srcSet = getCloudinaryImageProps({
      ...image,
      quality,
    }).srcSet;
  }

  return (
    <Image
      {...imageProps}
      className={className}
      priority={priority}
      fill={fill}
    />
  );
}