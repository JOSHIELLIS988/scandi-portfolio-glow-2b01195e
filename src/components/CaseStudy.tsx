import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CaseStudyProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  label?: string;
  additionalImages?: string[];
}

const CaseStudy = ({ title, description, imageUrl, index, label, additionalImages }: CaseStudyProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = additionalImages ? [imageUrl, ...additionalImages] : [imageUrl];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "50px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      ref={elementRef}
      className={`min-h-screen flex items-center justify-center p-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="container mx-auto lg:flex items-center gap-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {label && (
            <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1 block">
              {label}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
        <div className="lg:w-1/2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg glass group">
            <img
              src={images[currentImageIndex]}
              alt={title}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
            {additionalImages && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={previousImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                        i === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;