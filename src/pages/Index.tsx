
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";

const caseStudies = [
  {
    title: "Gäsper",
    description: "A comprehensive brand identity built from scratch, including e-commerce content strategy, product visuals, 3D animation films, website design & storytelling, newsletter templates, UGC scriptwriting & production, social media ads, and blog articles.",
    imageUrl: "/lovable-uploads/14690d55-7692-44a9-9270-83fdebfd1240.png",
    label: "Client",
    additionalImages: [
      "/lovable-uploads/43bbf2c3-0ce2-4086-83cd-fb61d68d2166.png",
      "/lovable-uploads/bda14766-56b8-4dbb-a1eb-467c9c6fbfcf.png",
      "/lovable-uploads/f176f5a4-90c6-4847-9b91-922cff6c943d.png",
      "/lovable-uploads/1ef5d7c0-df63-41bb-89d5-eeac6dbe4133.png",
      "/lovable-uploads/dff014fa-5c64-43da-afce-d75cecf14db8.png",
      "/lovable-uploads/3b1150a4-a428-4ae5-b1ab-e5a9fb1fa289.png"
    ],
    socialMediaImages: [
      "/lovable-uploads/96743e08-2878-4a6d-9d14-3f1f3803e915.png",
      "/lovable-uploads/ac4b36d3-ee51-4355-bf86-5488f113eb99.png",
      "/lovable-uploads/923fa08a-da48-4843-99dc-289ebdf7c328.png",
      "/lovable-uploads/460506f7-2a64-4241-aefd-a416475f93be.png",
      "/lovable-uploads/18a6535f-0859-4414-8461-3dca1edcbc4d.png",
      "/lovable-uploads/99ec765a-b4fd-4daa-8d8d-71214fdb084b.png",
      "/lovable-uploads/17c32541-936c-4da3-9dbc-0c9708c89fe3.png",
      "/lovable-uploads/afb260fb-08fe-410f-9e0c-8b436ba7d49b.png"
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
    ],
    videos: [
      "https://player.vimeo.com/video/1052606449",
      "https://player.vimeo.com/video/1052606856",
      "https://player.vimeo.com/video/1052607193",
      "https://player.vimeo.com/video/1052607433",
      "https://player.vimeo.com/video/1052607642"
    ],
    results: [
      {
        value: "+6%",
        label: "Avg Conversion Rate on Shopify store"
      },
      {
        value: "+320%",
        label: "Avg ROAS return on Meta"
      }
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
            videos={study.videos}
            results={study.results}
          />
        ))}
      </div>
      <Contact />
    </main>
  );
};

export default Index;
