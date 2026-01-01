import profileImage from '@/assets/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="section-container mesh-gradient">
      <div className="max-w-6xl mx-auto">
        <span className="section-label">ABOUT</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">About Me</h2>
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-16">MORE ABOUT ME</p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-2xl animate-pulse-glow" />
              
              <div className="gradient-border w-72 h-72 md:w-80 md:h-80 relative animate-float">
                <div className="gradient-border-inner w-full h-full">
                  <img
                    src={profileImage}
                    alt="Mythili M"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="flex gap-3 flex-wrap mb-6">
              <span className="skill-tag bg-accent/10 border-accent/20 text-accent">Full Stack</span>
              
              <span className="skill-tag bg-primary/10 border-primary/20 text-primary">AI</span>
              <span className="skill-tag bg-accent/10 border-accent/20 text-accent">Machine Learning</span>
            </div>

            <h3 className="text-3xl font-bold font-display text-foreground">
              Hey! I'm <span className="gradient-text">MYTHILI</span>
            </h3>

           <p className="text-muted-foreground leading-relaxed text-lg">
                I am a <strong>Full Stack & AI/ML Developer</strong> with strong expertise in MERN stack and Python.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I specialize in building scalable web applications and intelligent AI-driven systems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I have hands-on experience with AI tools like <strong>YOLOv8</strong>, focusing on computer vision solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Currently, I am pursuing <strong>B.Tech in Information Technology</strong> at Kongu Engineering College.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I am passionate about contributing at the intersection of software development and AI/ML.
              </p>


            <div className="flex gap-4 pt-4">
              <div className="text-center px-6 py-4 rounded-2xl bg-card border border-border">
                <p className="text-2xl font-bold gradient-text">6+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center px-6 py-4 rounded-2xl bg-card border border-border">
                <p className="text-2xl font-bold gradient-text">10+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div className="text-center px-6 py-4 rounded-2xl bg-card border border-border">
                <p className="text-2xl font-bold gradient-text">7</p>
                <p className="text-sm text-muted-foreground">Awards</p>
              </div>
              <div className="text-center px-6 py-4 rounded-2xl bg-card border border-border">
                <p className="text-2xl font-bold gradient-text">7</p>
                <p className="text-sm text-muted-foreground">NPTEL & Global Certifications </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
