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
                      <span>Three UGC videos with scripting and production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span>Five high-performing still ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span>Three photorealistic 3D-rendered product shots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span>20-second high-quality 3D animation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span>Three custom newsletter templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span>One blog post with Meta ads carousel</span>
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
                      <span>One UGC video with scripting and production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span>Two high-performing still ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span>One photorealistic 3D-rendered product shot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span>10-15 second 3D product animation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                      <span>One custom newsletter template</span>
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