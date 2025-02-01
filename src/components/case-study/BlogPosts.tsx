import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface BlogPostsProps {
  images: string[];
  title: string;
  isVisible: boolean;
}

const BlogPosts = ({ images, title, isVisible }: BlogPostsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={`opacity-0 transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100' : ''
      }`}
    >
      <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
        Blog Posts
      </span>
      <div className="relative overflow-hidden rounded-2xl glass group">
        <img
          src={images[currentIndex]}
          alt={`${title} blog post`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
          onClick={previousImage}
          aria-label="Previous blog post"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/50 hover:bg-background/80"
          onClick={nextImage}
          aria-label="Next blog post"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                i === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;