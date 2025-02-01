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
      "/lovable-uploads/96743e08-2878-4a6d-9d14-3f1f3803e915.png",
      "/lovable-uploads/ac4b36d3-ee51-4355-bf86-5488f113eb99.png",
      "/lovable-uploads/923fa08a-da48-4843-99dc-289ebdf7c328.png",
      "/lovable-uploads/460506f7-2a64-4241-aefd-a416475f93be.png",
      "/lovable-uploads/18a6535f-0859-4414-8461-3dca1edcbc4d.png",
      "/lovable-uploads/99ec765a-b4fd-4daa-8d8d-71214fdb084b.png"
    ],
    videos: [
      // Upload your videos and add their URLs here
      // Supported formats: .mp4, .webm, .ogg
    ]
  }
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
            videos={study.videos}
          />
        ))}
      </div>
      <Contact />
    </main>
  );
};

export default Index;
