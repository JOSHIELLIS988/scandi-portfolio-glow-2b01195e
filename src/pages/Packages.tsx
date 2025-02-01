import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Packages = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-semibold mb-8 animate-fade-in">Content Packages</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Premium Content Package */}
          <Card className="glass animate-zoom-in">
            <CardHeader>
              <CardTitle className="text-2xl">Premium Content Package</CardTitle>
              <CardDescription className="text-2xl font-semibold mt-2">€5,000</CardDescription>
              <p className="mt-4 text-sm text-muted-foreground">
                A comprehensive, high-end content package designed to elevate your brand with strategic, conversion-driven assets.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">What's Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>Three UGC videos with scripting and production</strong> - Each video will be created by different creators to provide diverse perspectives and styles, optimized for both website engagement and social media ads performance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>Five high-performing still ads</strong> - A mix of product-focused visuals, customer testimonials, and awareness-driven content.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>Three photorealistic 3D-rendered product shots</strong> - Studio-quality product visualization from multiple angles, with customizable backgrounds and lighting setups. Perfect for e-commerce, marketing materials, and social media.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>20-second high-quality 3D animation</strong> - Professional product showcase animation with dynamic camera movements, custom environments, and branded elements. Includes storyboarding, animation, and sound design.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>Three custom newsletter templates</strong> - Professionally designed and tested email templates for welcome series, post-purchase flows, or promotional campaigns. Includes mobile-responsive design and integration support.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>One blog post with Meta ads carousel</strong> - SEO-optimized blog content transformed into an engaging social media carousel.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Why This Package?</h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional agencies charge €17,000 – €30,000 for this level of content. 
                    This package delivers the same premium quality, strategy, and execution—without 
                    unnecessary overhead. A cost-effective, high-impact solution for brands looking 
                    to scale with best-in-class content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pilot Content Package */}
          <Card className="glass animate-zoom-in [animation-delay:200ms]">
            <CardHeader>
              <CardTitle className="text-2xl">Pilot Content Package</CardTitle>
              <CardDescription className="text-2xl font-semibold mt-2">€2,500</CardDescription>
              <p className="mt-4 text-sm text-muted-foreground">
                A high-quality starter package designed for brands looking to test and optimize 
                their content strategy before scaling.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">What's Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>One UGC video with scripting and production</strong> - A professionally crafted user-generated content video with complete scripting, filming guidelines, and post-production.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>Two high-performing still ads</strong> - Strategic mix of product-focused and social proof content.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>One photorealistic 3D-rendered product shot</strong> - Studio-quality product visualization with customizable background and lighting options.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>10-15 second 3D product animation</strong> - Engaging product showcase with professional animation, including storyboard and basic sound design.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span><strong>One custom newsletter template</strong> - Mobile-responsive email template designed for your choice of welcome series, post-purchase flow, or promotional campaigns. Includes integration guidance and best practices.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Why This Package?</h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional agencies charge €7,000 – €12,000 for these assets. This package 
                    delivers the same high-quality content at a fraction of the cost, making it 
                    a perfect entry point for brands looking to test before scaling.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Packages;