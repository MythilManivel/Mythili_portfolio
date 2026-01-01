import { BookOpen, Calendar, Link } from 'lucide-react';
import bookImage1 from '../assets/BOOK.webp'; // First imageE:\port\src\assets\BOOK.webp

const publications = [
  {
    period: '2025',
    title: 'Smart Hospitals in the Modern Era – Surgical Robots in Smart Hospitals',
    publisher: 'Wiley',
    type: 'Book Chapter (Chapter 7)',
    isbn: '978-1-394-35533-4',
    url: 'https://www.wiley.com/en-in/Surgical+Robots+in+Smart+Hospitals-p-9781394355358',
    description: [
      'Authored Chapter 7 focusing on the role of surgical robots in smart hospital ecosystems.',
      'Discusses advancements in robotic-assisted surgery, precision healthcare, and automation in modern hospitals.',
    ],
    tags: ['Smart Healthcare', 'Surgical Robotics', 'Research'],
  },
];

const Publications = () => {
  return (
    <section id="publications" className="section-container">
      <div className="max-w-6xl mx-auto">
        <span className="section-label">PUBLICATIONS</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-16">
          Publications
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 border border-border card-hover flex gap-8"
              style={{ alignItems: 'flex-start' }}
            >
              {/* Left card with two images side by side */}
              <div className="flex flex-col gap-4 shrink-0">
                <div className="flex gap-4">
                  <img
  src={bookImage1}
  alt="Book Cover 1"
  className="w-60 h-100 object-cover rounded-lg"
/>

                </div>
              </div>

              {/* Right card: Publication content */}
              <div className="flex-1">
                {/* Period */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                  <Calendar className="w-4 h-4" />
                  {pub.period}
                </div>

                {/* Title and publisher info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-7 h-7 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {pub.type} @ {pub.publisher}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {pub.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground leading-relaxed flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* ISBN + Link */}
                <div className="flex flex-col gap-3 mb-6 text-sm text-muted-foreground">
                  <p>
                    <strong>ISBN:</strong> {pub.isbn}
                  </p>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Link className="w-4 h-4" />
                    View Publication
                  </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
