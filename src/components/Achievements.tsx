import { Trophy, Award, Medal } from 'lucide-react';

const achievements = [
  {
    title: 'Best Student Award (2023 - 2024)',
    description: 'Honored with the Best Student Award (2023–2024) for overall academic and extracurricular excellence.',
    icon: Trophy,
    highlight: true,
  },
  {
    title: 'Top 5% Merit Scholarship (2023-2025)',
    description: 'Recipient of the Top 5% Merit Scholarship for consistent high academic performance.',
    icon: Award,
    highlight: true,
  },
  {
    title: '1st Prize – Paper Presentation on "AI in Agriculture", CIT (2024)',
    description: '',
    icon: Medal,
    highlight: false,
  },
  {
    title: '2nd Prize – Project Presentation "Caesar Cipher" at SKCET, 2024',
    description: '',
    icon: Medal,
    highlight: false,
  },
  {
    title: '3rd Prize – Hackathon CIT "AI-Powered Hospital Management System" (2025)',
    description: '',
    icon: Medal,
    highlight: false,
  },
  {
    title: '3rd Prize – Hackathon KEC "Cattle Breed Classification"',
    description: '',
    icon: Medal,
    highlight: false,
  },
  {
    title: 'Participated in SIH and MSME',
    description: 'Participated twice in national-level hackathons including Smart India Hackathon (SIH) and MSME Hackathon.',
    icon: Award,
    highlight: false,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <div className="max-w-6xl mx-auto">
        <span className="section-label">AWARDS & ACHIEVEMENTS</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-16">Awards & Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`group relative bg-card rounded-3xl p-6 border card-hover overflow-hidden ${
                  achievement.highlight 
                    ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5' 
                    : 'border-border'
                }`}
              >
                {achievement.highlight && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                )}
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    achievement.highlight 
                      ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground' 
                      : 'bg-primary/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${achievement.highlight ? '' : 'text-primary'}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-foreground mb-1 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    {achievement.description && (
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
