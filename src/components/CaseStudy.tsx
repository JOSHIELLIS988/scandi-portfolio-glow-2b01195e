import { useEffect, useRef, useState } from "react";
import ProductStills from "./case-study/ProductStills";
import SocialMedia from "./case-study/SocialMedia";
import Newsletter from "./case-study/Newsletter";
import BlogPosts from "./case-study/BlogPosts";
import Videos from "./case-study/Videos";
import Results from "./case-study/Results";

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
  
  const [isVisible, setIsVisible] = useState(false);
  const [isProductVisible, setIsProductVisible] = useState(false);
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);
  const [isBlogVisible, setBlogVisible] = useState(false);
  const [isResultsVisible, setResultsVisible] = useState(false);

  const images = additionalImages ? [imageUrl, ...additionalImages] : [imageUrl];

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

  return (
    <div
      ref={elementRef}
      className={`min-h-screen flex items-center justify-center py-24 md:py-32 opacity-0 transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100' : ''
      } ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div className="container mx-auto lg:flex items-start gap-16 px-6 md:px-8">
        <div className="lg:w-1/2 mb-16 lg:mb-0 lg:sticky lg:top-32">
          {label && (
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              {label}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
        <div className="lg:w-1/2 space-y-16">
          {additionalImages && (
            <div ref={productRef}>
              <ProductStills 
                images={images} 
                title={title} 
                isVisible={isProductVisible} 
              />
            </div>
          )}
          
          {socialMediaImages && socialMediaImages.length > 0 && (
            <div ref={socialRef}>
              <SocialMedia 
                images={socialMediaImages} 
                title={title} 
                isVisible={isSocialVisible} 
              />
            </div>
          )}

          {newsletterImages && newsletterImages.length > 0 && (
            <div ref={newsletterRef}>
              <Newsletter 
                images={newsletterImages} 
                title={title} 
                isVisible={isNewsletterVisible} 
              />
            </div>
          )}

          {blogImages && blogImages.length > 0 && (
            <div ref={blogRef}>
              <BlogPosts 
                images={blogImages} 
                title={title} 
                isVisible={isBlogVisible} 
              />
            </div>
          )}

          {videos && videos.length > 0 && (
            <Videos videos={videos} />
          )}

          {results && results.length > 0 && (
            <div ref={resultsRef}>
              <Results 
                results={results} 
                isVisible={isResultsVisible} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;