import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";

const caseStudies = [
  {
    title: "Gäsper",
    description: "A comprehensive brand identity built from scratch, including e-commerce content strategy, product visuals, 3D animation films, website design & storytelling, newsletter templates, UGC scriptwriting & production, social media ads, and blog articles.",
    imageUrl: "/lovable-uploads/43bbf2c3-0ce2-4086-83cd-fb61d68d2166.png",
    label: "Client",
    additionalImages: [
      "/lovable-uploads/bda14766-56b8-4dbb-a1eb-467c9c6fbfcf.png",
      "/lovable-uploads/f176f5a4-90c6-4847-9b91-922cff6c943d.png",
      "/lovable-uploads/1ef5d7c0-df63-41bb-89d5-eeac6dbe4133.png"
    ],
    socialMediaImages: [
      "/lovable-uploads/6e50ab41-4305-4bbf-9007-0229fb442b4e.png",
      "/lovable-uploads/1347a3ba-bb9e-482e-9586-97d0138e26c2.png",
      "/lovable-uploads/2c060979-dbeb-498d-a701-54193a6d8896.png",
      "/lovable-uploads/3ee7dbd0-05ad-4a1a-8353-97dde55bc88e.png",
      "/lovable-uploads/a20bcc5a-e33c-4f55-87a1-5e242c9e89dc.png",
      "/lovable-uploads/156f569f-90fc-43ff-ab0f-7ae2685536f6.png"
    ]
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
            label={study.label}
            additionalImages={study.additionalImages}
            socialMediaImages={study.socialMediaImages}
          />
        ))}
      </div>
      <Contact />
    </main>
  );
};

export default Index;