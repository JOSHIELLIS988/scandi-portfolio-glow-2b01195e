const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
          Let's create something great together
        </h2>
        <p className="text-base md:text-lg font-light text-muted-foreground/80 mb-12">
          Ready to elevate your brand's content? Let's discuss how we can make your vision come to life.
        </p>
        <a
          href="mailto:contact@example.com"
          className="inline-block px-8 py-4 rounded-lg glass hover:bg-white/10 transition-all duration-300 text-sm tracking-wide"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;