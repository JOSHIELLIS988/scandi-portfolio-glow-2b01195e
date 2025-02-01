import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";

const caseStudies = [
  {
    title: "Gäsper",
    description: "A comprehensive brand identity and e-commerce content strategy that resulted in a 200% increase in engagement and a 150% boost in conversion rates.",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Project Two",
    description: "Strategic content creation and visual storytelling that helped establish a strong brand presence across multiple digital platforms.",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Project Three",
    description: "Innovative social media campaign that captured the essence of the brand while driving meaningful customer interactions.",
    imageUrl: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <div id="work">
        {caseStudies.map((study, index) => (
          <CaseStudy
            key={study.title}
            title={study.title}
            description={study.description}
            imageUrl={study.imageUrl}
            index={index}
          />
        ))}
      </div>
      <Contact />
    </main>
  );
};

export default Index;