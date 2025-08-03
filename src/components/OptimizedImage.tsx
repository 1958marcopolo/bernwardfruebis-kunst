import { useState } from "react";
import { getImageSrc, getFallbackSrc } from "@/lib/imageRegistry";

interface OptimizedImageProps {
  id: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
  onClick?: () => void;
}

const OptimizedImage = ({ 
  id, 
  alt, 
  className = "", 
  style = {}, 
  loading = "lazy",
  onClick 
}: OptimizedImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    console.warn(`Failed to load image: ${id}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Get the optimized source from registry
  const imageSrc = hasError ? getFallbackSrc(id) : getImageSrc(id);

  return (
    <div className={`relative ${className}`} style={style} onClick={onClick}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-sm" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={style}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default OptimizedImage;