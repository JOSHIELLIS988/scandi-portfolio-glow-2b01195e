import { useEffect, useRef } from "react";
import { ScrollArea } from "./ui/scroll-area";

interface CaseStudyProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  label?: string;
  websiteUrl?: string;
}

const CaseStudy = ({ title, description, imageUrl, index, label, websiteUrl }: CaseStudyProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

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
          {websiteUrl && (
            <a 
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-white transition-colors mt-2 block"
            >
              {websiteUrl}
            </a>
          )}
        </div>
        <div className="lg:w-1/2">
          <div className="relative aspect-video overflow-hidden rounded-lg glass">
            {websiteUrl ? (
              <ScrollArea className="h-full">
                <iframe
                  src={websiteUrl}
                  title={`${title} website`}
                  className="w-full h-[200vh]"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </ScrollArea>
            ) : (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;