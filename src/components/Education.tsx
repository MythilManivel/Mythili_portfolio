import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const educationData = [
  {
    period: 'Jan 2023 — Jan 2027',
    degree: 'B.Tech Information Technology',
    institution: 'Kongu Engineering College',
    institutionUrl: 'https://www.kongu.ac.in/',
    location: 'ERODE',
    highlights: [
      'Achieved 91.2% marks in B.Tech Information Technology program.',
      'Relevant coursework includes advanced subjects in IT and software development.',
      'Recognized for academic excellence with a strong foundation in programming and system design.',
    ],
    tags: ['Information Technology', 'Software Development', 'Programming', 'Academic Excellence', 'Engineering'],
  },
  {
    period: 'Jan 2020 — Jan 2023',
    degree: 'Higher Secondary Certificate (HSC) & (SSLC)',
    institution: 'Vivekananda Vidyalaya Matric Hr Sec School',
    institutionUrl: '#',
    location: '',
    highlights: [
      'Scored 92.66% in Higher Secondary Certificate examination.',
      'Completed higher secondary education with strong academic performance.',
      'Focused on foundational science and mathematics courses.',
    ],
    tags: [],
  },
];

const Education = () => {
  return (
    <section id="education" className="section-container section-alt">
      <div className="max-w-6xl mx-auto">
        <span className="section-label">EDUCATION</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-16">Education</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-10 w-5 h-5 rounded-full bg-card border-4 border-primary hidden md:flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="bg-card rounded-3xl p-8 border border-border card-hover">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    {edu.location && (
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground">{edu.degree}</h3>
                  </div>

                  <p className="mb-6">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      {edu.institution}
                    </a>
                  </p>

                  <ul className="space-y-3 mb-6">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {edu.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
