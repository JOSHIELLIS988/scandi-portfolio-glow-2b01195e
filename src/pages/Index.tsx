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
      "/lovable-uploads/1ef5d7c0-df63-41bb-89d5-eeac6dbe4133.png",
      "/lovable-uploads/3d7540c9-4f01-4fe6-b5b4-5b7378c287de.png",
      "/lovable-uploads/7bb3ffbd-1065-4477-b674-16d93afcb61f.png",
      "/lovable-uploads/14fa1a2b-fe69-40f5-9ad0-5a0b7608157a.png",
      "/lovable-uploads/09f0cb8e-33a8-404e-96e0-f1301adf65a6.png",
      "/lovable-uploads/268ffa7d-96a9-40b8-b4c7-26daa8416a9f.png"
    ],
    socialMediaImages: [
      "/lovable-uploads/96743e08-2878-4a6d-9d14-3f1f3803e915.png",
      "/lovable-uploads/ac4b36d3-ee51-4355-bf86-5488f113eb99.png",
      "/lovable-uploads/923fa08a-da48-4843-99dc-289ebdf7c328.png",
      "/lovable-uploads/460506f7-2a64-4241-aefd-a416475f93be.png",
      "/lovable-uploads/18a6535f-0859-4414-8461-3dca1edcbc4d.png",
      "/lovable-uploads/99ec765a-b4fd-4daa-8d8d-71214fdb084b.png"
    ],
    newsletterImages: [
      "/lovable-uploads/a51f249c-ec29-4cfa-ab24-f4a0bc4ea150.png",
      "/lovable-uploads/2d5f8772-eaef-4d54-bedf-2276ee9fab4c.png",
      "/lovable-uploads/27d909cf-7cda-4aa2-92fd-0486ab905785.png",
      "/lovable-uploads/54b5c4ae-4360-4e9b-8917-bcbc337ac2ba.png",
      "/lovable-uploads/8ef877dd-d82a-43f6-9483-29a63b77044b.png"
    ],
    blogImages: [
      "/lovable-uploads/4c362843-cbeb-4186-b82c-87207a95f7a2.png",
      "/lovable-uploads/aa93db8d-0a55-4e57-acee-62d0f9f53d7a.png",
      "/lovable-uploads/b52e83a3-c418-4399-b494-3a61e0428731.png",
      "/lovable-uploads/99227319-1243-476c-8d0d-76798c239837.png"
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
            key={study.title || index}
            title={study.title}
            description={study.description}
            imageUrl={study.imageUrl}
            index={index}
            label={study.label}
            additionalImages={study.additionalImages}
            socialMediaImages={study.socialMediaImages}
            newsletterImages={study.newsletterImages}
            blogImages={study.blogImages}
          />
        ))}
      </div>
      <Contact />
    </main>
  );
};

export default Index;