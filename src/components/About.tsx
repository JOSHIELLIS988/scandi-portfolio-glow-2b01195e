import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const textRef3 = useRef<HTMLParagraphElement>(null);
  const textRef4 = useRef<HTMLParagraphElement>(null);

  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      headingRef.current?.classList.remove("opacity-0", "translate-y-4");
      textRef1.current?.classList.remove("opacity-0", "translate-y-4");
      textRef2.current?.classList.remove("opacity-0", "translate-y-4");
      textRef3.current?.classList.remove("opacity-0", "translate-y-4");
      textRef4.current?.classList.remove("opacity-0", "translate-y-4");
    }
  }, [isInView]);

  return (
    <section id="about" className="py-32 md:py-40 bg-background">
      <div
        ref={containerRef}
        className="container px-4 md:px-6"
      >
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-16 opacity-0 translate-y-4 transition-all duration-700 ease-out"
        >
          About
        </h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <p
            ref={textRef1}
            className="text-base md:text-lg font-light text-muted-foreground/80 leading-relaxed opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-out"
          >
            Hello! 👋 I'm a creative strategist and content creator with a passion for building brands and crafting high-converting content.
          </p>
          <p
            ref={textRef2}
            className="text-base md:text-lg font-light text-muted-foreground/80 leading-relaxed opacity-0 translate-y-4 transition-all duration-700 delay-200 ease-out"
          >
            I spent 7 years at AKQA, the world's most awarded digital agency, working across Nivea, Nike Football, H&M and Gatorade. During that time, I honed my skills in brand storytelling, digital experiences, and performance-driven content - learning how to connect brands with their audience in a way that drives engagement and results.
          </p>
          <p
            ref={textRef3}
            className="text-base md:text-lg font-light text-muted-foreground/80 leading-relaxed opacity-0 translate-y-4 transition-all duration-700 delay-300 ease-out"
          >
            Now, I apply that expertise to e-commerce brands, helping them stand out, scale, and convert through a mix of UGC production, 3D animation, copywriting, product visuals, and full-funnel content strategies. Whether it's building a brand from scratch or optimizing an existing one, I create content that is strategic, creative, and built to perform.
          </p>
          <p
            ref={textRef4}
            className="text-base md:text-lg font-light text-muted-foreground/80 leading-relaxed opacity-0 translate-y-4 transition-all duration-700 delay-400 ease-out"
          >
            Let's create something great together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;