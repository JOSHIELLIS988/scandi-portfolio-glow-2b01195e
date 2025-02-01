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
  },
  {
    title: "Eatsy",
    description: "A food delivery app that connects local restaurants with hungry customers. The project included branding, UI/UX design, mobile app development, and marketing materials.",
    imageUrl: "/lovable-uploads/2c060979-dbeb-498d-a701-54193a6d8896.png",
    label: "Client",
    additionalImages: [
      "/lovable-uploads/27f0f896-8625-478c-96d4-bfa00ebd8fd2.png",
      "/lovable-uploads/47d44f5c-b01b-421d-a911-711ef234078a.png",
      "/lovable-uploads/46947cbb-7837-437d-b5c2-b07ca3e7f186.png"
    ],
    socialMediaImages: [
      "/lovable-uploads/7200ba93-75d3-4233-9ca7-b0c79ce20d9e.png",
      "/lovable-uploads/6e50ab41-4305-4bbf-9007-0229fb442b4e.png",
      "/lovable-uploads/9bbad244-8dbb-4546-a0b7-3216cc08cd3f.png",
      "/lovable-uploads/97c3cfa3-736f-46b7-8007-287a02bf5324.png",
      "/lovable-uploads/a20bcc5a-e33c-4f55-87a1-5e242c9e89dc.png",
      "/lovable-uploads/a979f773-c9df-4406-bfa4-9b5a9638b37d.png"
    ],
    videos: []
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