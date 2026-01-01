const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'C++'],
    color: 'primary',
  },
  {
    title: 'Web Development Frameworks',
    skills: ['ReactJS', 'NodeJS', 'Express.js'],
    color: 'accent',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
    color: 'primary',
  },
  {
    title: 'AI & Machine Learning Tools',
    skills: ['YOLOv8', 'OpenCV', 'CNN'],
    color: 'accent',
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'GitHub'],
    color: 'primary',
  },
  {
    title: 'Data Analysis',
    skills: ['PowerBI'],
    color: 'accent',
  },

];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <span className="section-label">TECHNICAL SKILLS</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">Technical Skills</h2>
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-16">I CONSTANTLY TRY TO IMPROVE</p>

        <div className="grid gap-10">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="group p-8 rounded-3xl bg-card border border-border card-hover"
            >
              <h3 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${category.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className={`skill-tag ${
                      category.color === 'primary' 
                        ? 'hover:border-primary/50' 
                        : 'hover:border-accent/50'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
