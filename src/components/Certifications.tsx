import { ExternalLink, Cloud, Calendar, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Cloud Practitioner Certification',
    issuer: 'AWS',
    period: 'Jan 2024 — Feb 2024',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    description: [
      'Validates foundational knowledge of cloud concepts and AWS services.',
      'Skills acquired include cloud computing basics, AWS core services, security, pricing, and support.',
      'Demonstrates ability to effectively utilize AWS cloud infrastructure for scalable applications.',
    ],
    tags: ['AWS', 'Cloud Computing', 'Cloud Foundations'],
  },
  {
    title: 'Oracle Certified Professional – APEX Cloud Developer',
    issuer: 'Oracle University',
    period: 'May 2025',
    link: 'https://www.linkedin.com/posts/mythilimanivel_oraclecertified-oracleapex-clouddeveloper-activity-7330073841706102784-pl8t',
    description: [
      'Thrilled to share a proud achievement!',
      'Officially certified as Oracle Certified Professional – APEX Cloud Developer as of May 16, 2025.',
      'Enhanced skills in building modern, scalable, and secure web applications using Oracle APEX.',
      'Excited to explore new opportunities and innovate with the power of cloud technology.',
      'Grateful to Oracle University for the recognition and support throughout the learning path.',
    ],
    tags: [
      'OracleCertified',
      'OracleAPEX',
      'CloudDeveloper',
      'ProfessionalGrowth',
      'TechJourney',
    ],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container section-alt">
      <div className="max-w-6xl mx-auto">
        <span className="section-label">CERTIFICATIONS</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-16">
          Certifications
        </h2>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 md:p-10 border border-border card-hover overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-10 h-10 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-sm text-muted-foreground flex items-center gap-2 px-3 py-1 rounded-full bg-secondary">
                      <Calendar className="w-4 h-4" />
                      {cert.period}
                    </span>
                    <span className="text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10">
                      @ {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-foreground mb-6">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
                    >
                      {cert.title}
                      <ExternalLink
                        size={18}
                        className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                      />
                    </a>
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {cert.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
