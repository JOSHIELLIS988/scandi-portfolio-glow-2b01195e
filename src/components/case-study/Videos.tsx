import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface VideosProps {
  videos: string[];
}

const Videos = ({ videos }: VideosProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousVideo = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
        UGC VIDEOS
      </span>
      <div className="relative overflow-hidden rounded-2xl glass group">
        <iframe
          src={videos[currentIndex]}
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
                    i === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Videos;