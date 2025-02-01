import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Result {
  value: string;
  label: string;
}

interface CaseStudyProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  label?: string;
  additionalImages?: string[];
  socialMediaImages?: string[];
  newsletterImages?: string[];
  blogImages?: string[];
  videos?: string[];
  results?: Result[];
}

const CaseStudy = ({ 
  title, 
  description, 
  imageUrl, 
  index, 
  label, 
  additionalImages, 
  socialMediaImages,
  newsletterImages,
  blogImages,
  videos,
  results
}: CaseStudyProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSocialIndex, setCurrentSocialIndex] = useState(0);
  const [currentNewsletterIndex, setCurrentNewsletterIndex] = useState(0);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const images = additionalImages ? [imageUrl, ...additionalImages] : [imageUrl];
  const socialImages = socialMediaImages ? [...socialMediaImages] : [];
  const newsletters = newsletterImages ? [...newsletterImages] : [];
  const blogs = blogImages ? [...blogImages] : [];
  
  const [isVisible, setIsVisible] = useState(false);
  const [isProductVisible, setIsProductVisible] = useState(false);
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);
  const [isBlogVisible, setBlogVisible] = useState(false);
  const [isResultsVisible, setResultsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === elementRef.current) setIsVisible(true);
          if (entry.target === productRef.current) setIsProductVisible(true);
          if (entry.target === socialRef.current) setIsSocialVisible(true);
          if (entry.target === newsletterRef.current) setIsNewsletterVisible(true);
          if (entry.target === blogRef.current) setBlogVisible(true);
          if (entry.target === resultsRef.current) setResultsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = [
      elementRef.current,
      productRef.current,
      socialRef.current,
      newsletterRef.current,
      blogRef.current,
      resultsRef.current
    ].filter(Boolean);

    elements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const nextImage = (type: 'product' | 'social' | 'newsletter' | 'blog') => {
    switch(type) {
      case 'social':
        setCurrentSocialIndex((prevIndex) => 
          prevIndex === socialImages.length - 1 ? 0 : prevIndex + 1
        );
        break;
      case 'newsletter':
        setCurrentNewsletterIndex((prevIndex) => 
          prevIndex === newsletters.length - 1 ? 0 : prevIndex + 1
        );
        break;
      case 'blog':
        setCurrentBlogIndex((prevIndex) => 
          prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
        );
        break;
      default:
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }
  };

  const previousImage = (type: 'product' | 'social' | 'newsletter' | 'blog') => {
    switch(type) {
      case 'social':
        setCurrentSocialIndex((prevIndex) => 
          prevIndex === 0 ? socialImages.length - 1 : prevIndex - 1
        );
        break;
      case 'newsletter':
        setCurrentNewsletterIndex((prevIndex) => 
          prevIndex === 0 ? newsletters.length - 1 : prevIndex - 1
        );
        break;
      case 'blog':
        setCurrentBlogIndex((prevIndex) => 
          prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
        );
        break;
      default:
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
      className={`min-h-screen flex items-center justify-center py-24 md:py-32 opacity-0 scale-95 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 scale-100 animate-zoom-in' : ''
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
            <div
              ref={productRef}
              className={`opacity-0 scale-95 transition-all duration-1000 ease-out ${
                isProductVisible ? 'opacity-100 scale-100 animate-zoom-in' : ''
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
                  onClick={() => previousImage('product')}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={() => nextImage('product')}
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
          )}
          
          {socialMediaImages && socialMediaImages.length > 0 && (
            <div
              ref={socialRef}
              className={`opacity-0 scale-95 transition-all duration-1000 ease-out ${
                isSocialVisible ? 'opacity-100 scale-100 animate-zoom-in' : ''
              }`}
            >
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
                  onClick={() => previousImage('social')}
                  aria-label="Previous social media ad"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={() => nextImage('social')}
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
            </div>
          )}

          {newsletterImages && newsletterImages.length > 0 && (
            <div
              ref={newsletterRef}
              className={`opacity-0 scale-95 transition-all duration-1000 ease-out ${
                isNewsletterVisible ? 'opacity-100 scale-100 animate-zoom-in' : ''
              }`}
            >
              <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
                Newsletter Templates
              </span>
              <div className="relative overflow-hidden rounded-2xl glass group">
                <img
                  src={newsletters[currentNewsletterIndex]}
                  alt={`${title} newsletter template`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={() => previousImage('newsletter')}
                  aria-label="Previous newsletter template"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={() => nextImage('newsletter')}
                  aria-label="Next newsletter template"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {newsletters.map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                        i === currentNewsletterIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {blogImages && blogImages.length > 0 && (
            <div
              ref={blogRef}
              className={`opacity-0 scale-95 transition-all duration-1000 ease-out ${
                isBlogVisible ? 'opacity-100 scale-100 animate-zoom-in' : ''
              }`}
            >
              <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
                Blog Posts
              </span>
              <div className="relative overflow-hidden rounded-2xl glass group">
                <img
                  src={blogs[currentBlogIndex]}
                  alt={`${title} blog post`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={() => previousImage('blog')}
                  aria-label="Previous blog post"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
                  onClick={() => nextImage('blog')}
                  aria-label="Next blog post"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {blogs.map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                        i === currentBlogIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {videos && videos.length > 0 && (
            <>
              <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
                UGC VIDEOS
              </span>
              <div className="relative overflow-hidden rounded-2xl glass group">
                <iframe
                  src={videos[currentVideoIndex]}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                ></iframe>
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

          {results && results.length > 0 && (
            <div
              ref={resultsRef}
              className={`opacity-0 scale-95 transition-all duration-1000 ease-out ${
                isResultsVisible ? 'opacity-100 scale-100 animate-zoom-in' : ''
              }`}
            >
              <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
                Results
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                {results.map((result, i) => (
                  <div key={i} className="glass p-6 sm:p-8 rounded-2xl text-center sm:text-left">
                    <h3 className="text-5xl sm:text-6xl font-bold mb-2 tracking-tight">{result.value}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
