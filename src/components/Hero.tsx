import {
  Mail,
  Sparkles,
  Download,
  Phone,
  Github,
  Linkedin
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '-3s' }}
      />

      {/* RIGHT SIDE FLOATING ICON BUTTONS */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {/* Email */}
        <a
          href="mailto:m.mythili23manivel@gmail.com"
          className="icon-button social-pulse w-12 h-12"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>

        {/* Phone */}
        <a
          href="tel:+919025930150"
          className="icon-button w-12 h-12"
          aria-label="Phone"
        >
          <Phone size={20} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MythilManivel/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button w-12 h-12"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mythili-manivel-72779631b/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button w-12 h-12"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="text-center max-w-4xl mx-auto relative z-10">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-foreground mb-6 tracking-tight">
          Mythili <span className="gradient-text">M</span>
        </h1>

        {/* Role */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Full Stack & AI/ML Developer
          </p>
          <span className="w-0.5 h-7 bg-primary rounded-full animate-pulse" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:m.mythili23manivel@gmail.com"
            className="btn-primary"
          >
            <Mail size={20} />
            Let's Connect
          </a>

          <a
            href="/Mythili_M_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-in opacity-0 stagger-4">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
