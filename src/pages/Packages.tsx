import Navigation from "@/components/Navigation";

const Packages = () => {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-semibold mb-8">Our Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Package */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Basic</h2>
            <p className="text-lg mb-6">Perfect for small businesses</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Brand Identity Design
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Social Media Templates
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Basic Website Design
              </li>
            </ul>
            <p className="text-2xl font-semibold mb-4">Starting at $2,000</p>
          </div>

          {/* Pro Package */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Pro</h2>
            <p className="text-lg mb-6">For growing businesses</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Everything in Basic
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                E-commerce Integration
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Content Strategy
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Monthly Analytics
              </li>
            </ul>
            <p className="text-2xl font-semibold mb-4">Starting at $5,000</p>
          </div>

          {/* Enterprise Package */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
            <p className="text-lg mb-6">Full-scale solutions</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Everything in Pro
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Custom Development
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Dedicated Support
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Priority Updates
              </li>
            </ul>
            <p className="text-2xl font-semibold mb-4">Contact for pricing</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Packages;