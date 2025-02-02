import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Results from "./case-study/Results";
import ProductStills from "./case-study/ProductStills";
import SocialMedia from "./case-study/SocialMedia";
import Newsletter from "./case-study/Newsletter";
import BlogPosts from "./case-study/BlogPosts";
import Videos from "./case-study/Videos";

interface CaseStudyProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  label: string;
  additionalImages: string[];
  socialMediaImages: string[];
  newsletterImages: string[];
  blogImages: string[];
  videos: string[];
  results: Array<{
    value: string;
    label: string;
  }>;
}

const CaseStudy = ({
  title,
  description,
  imageUrl,
  additionalImages,
  socialMediaImages,
  newsletterImages,
  blogImages,
  videos,
  results
}: CaseStudyProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">{description}</p>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full rounded-2xl shadow-2xl mb-16" 
          />
        </div>
        
        <div className="space-y-32">
          <ProductStills 
            title="Product Stills"
            images={additionalImages} 
            isVisible={showContent} 
          />
          <Videos 
            title="Campaign Videos"
            videos={videos} 
            isVisible={showContent} 
          />
          <SocialMedia 
            title="Social Media"
            images={socialMediaImages} 
            isVisible={showContent} 
          />
          <Newsletter 
            title="Newsletter"
            images={newsletterImages} 
            isVisible={showContent} 
          />
          <BlogPosts 
            title="Blog Posts"
            images={blogImages} 
            isVisible={showContent} 
          />
          <Results 
            results={results} 
            isVisible={showContent} 
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;