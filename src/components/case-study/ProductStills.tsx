import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductStillsProps {
  images: string[];
  title: string;
  isVisible: boolean;
}

const ProductStills = ({ images, title, isVisible }: ProductStillsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={`opacity-0 scale-95 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 scale-100 animate-zoom-in' : ''
      }`}
    >
      <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
        PRODUCT STILLS
      </span>
      <div className="relative overflow-hidden rounded-2xl glass group">
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
          onClick={previousImage}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                i === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductStills;