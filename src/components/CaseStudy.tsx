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
  socialMediaImages?: string[];
  videos?: string[];
}

const CaseStudy = ({ 
  title, 
  description, 
  imageUrl, 
  index, 
  label, 
  additionalImages, 
  socialMediaImages,
  videos 
}: CaseStudyProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSocialIndex, setCurrentSocialIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const images = additionalImages ? [imageUrl, ...additionalImages] : [imageUrl];
  const socialImages = socialMediaImages ? [...socialMediaImages] : [];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  const nextImage = (isSocial: boolean) => {
    if (isSocial) {
      setCurrentSocialIndex((prevIndex) => 
        prevIndex === socialImages.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const previousImage = (isSocial: boolean) => {
    if (isSocial) {
      setCurrentSocialIndex((prevIndex) => 
        prevIndex === 0 ? socialImages.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const nextVideo = () => {
    if (videos) {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const previousVideo = () => {
    if (videos) {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === 0 ? videos.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div
      ref={elementRef}
      className={`min-h-screen flex items-center justify-center py-24 md:py-32 opacity-0 translate-y-8 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : ''
      } ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div className="container mx-auto lg:flex items-start gap-16 px-6 md:px-8">
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:sticky lg:top-32">
          {label && (
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              {label}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
        <div className="lg:w-1/2 space-y-8">
          {additionalImages && (
            <>
              <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
                PRODUCT SHOTS
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
                  onClick={() => previousImage(false)}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={() => nextImage(false)}
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
            </>
          )}
          
          {socialMediaImages && socialMediaImages.length > 0 && (
            <>
              <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
                Social Media Ads
              </span>
              <div className="relative aspect-square overflow-hidden rounded-2xl glass group">
                <img
                  src={socialImages[currentSocialIndex]}
                  alt={`${title} social media ad`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={() => previousImage(true)}
                  aria-label="Previous social media ad"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={() => nextImage(true)}
                  aria-label="Next social media ad"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {socialImages.map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                        i === currentSocialIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {videos && videos.length > 0 && (
            <>
              <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
                Videos
              </span>
              <div className="relative overflow-hidden rounded-2xl glass group">
                <video
                  src={videos[currentVideoIndex]}
                  controls
                  className="w-full h-full object-contain"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
                {videos.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                      onClick={previousVideo}
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                      onClick={nextVideo}
                      aria-label="Next video"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {videos.map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                            i === currentVideoIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;