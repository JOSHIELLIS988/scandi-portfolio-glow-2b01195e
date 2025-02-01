import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (locationRef.current) observer.observe(locationRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (avatarRef.current) observer.observe(avatarRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="text-center max-w-3xl">
        <div 
          ref={avatarRef}
          className="mb-8 opacity-0 translate-y-4 transition-all duration-700 ease-out"
        >
          <Avatar className="w-32 h-32 mx-auto border-2 border-white/10">
            <AvatarImage src="/lovable-uploads/27f0f896-8625-478c-96d4-bfa00ebd8fd2.png" alt="Ellis Joshua" />
          </Avatar>
        </div>
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-4 transition-all duration-700 ease-out"
        >
          Ellis, Joshua
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 translate-y-4 transition-all duration-700 delay-200 ease-out"
        >
          Specialised Content Creator for E-commerce Brands
        </p>
        <div
          ref={locationRef}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-12 opacity-0 translate-y-4 transition-all duration-700 delay-300 ease-out"
        >
          <MapPin size={16} />
          <span>Barcelona</span>
        </div>
        <p
          ref={descriptionRef}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-0 translate-y-4 transition-all duration-700 delay-400 ease-out"
        >
          My services range from full brand development and conversion-driven content to UGC production, 3D animation films, copywriting, product visuals, and newsletter design. I combine strategy and creativity to craft engaging, high-performing content that drives results across e-commerce platforms.
        </p>
      </div>
    </section>
  );
};

export default Hero;