import { ExternalLink, Github, Calendar } from 'lucide-react';
import hospitalImg from '@/assets/projects/hospital.jpeg';
import classroomImg from '@/assets/projects/classroom.png';
import turmericImg from '@/assets/projects/turmeric.jpeg';
import recipeImg from '@/assets/projects/recipe.jpeg';
import curriculumImg from '@/assets/projects/curriculum.png';
import cattleImg from '@/assets/projects/cattle.png';

const projects = [
  {
    title: 'AI-Powered Hospital Management System',
    description: 'Developed a comprehensive hospital portal integrating an AI chatbot to streamline patient interactions and optimize database operations.',
    details: [
      'Utilized MERN stack technologies including MongoDB, Express.js, React, and Node.js, with JWT for authentication and REST APIs for efficient communication.',
      'This system reduced appointment scheduling time by 40%, demonstrating significant operational efficiency improvements.',
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AI chatbot'],
    link: 'https://github.com/MythilManivel/SMART-HOSPITAL',
    image: hospitalImg,
  },
  {
    title: 'AI Surveillance of Classroom Engagement',
    period: 'Sep 2024 — Nov 2024',
    description: 'Built an AI-driven video analytics system using YOLOv8 and OpenCV to monitor and assess student attentiveness in classrooms.',
    details: [
      'Developed real-time detection algorithms to generate detailed engagement reports.',
      'This system aids educators in understanding student focus levels, enhancing teaching effectiveness.',
    ],
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'AI Surveillance'],
    link: 'https://github.com/MythilManivel/mindwatch',
    image: classroomImg,
  },
  {
    title: 'AI-Based Turmeric Classification',
    period: 'Jul 2025 — Sep 2025',
    subtitle: '@ CubeAI Solution, Bangalore',
    description: 'Designed and trained AI models for classification of turmeric varieties and detection of diseases affecting the crops.',
    details: [
      'Employed Python with YOLOv8 and OpenCV to develop precise image recognition and classification algorithms.',
      'This project supports agricultural health monitoring, improving yield quality and disease management.',
    ],
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'AI Classification'],
    link: 'https://github.com/MythilManivel/Curcuma_longa',
    image: turmericImg,
  },
  {
    title: 'Cooking Recipe Sharing App',
    period: 'May 2025 — Jul 2025',
    description: 'Developed a full-stack MERN application facilitating recipe sharing with user authentication and interactive UI features.',
    details: [
      'Implemented JWT for secure authentication and built RESTful APIs to manage user data and recipes efficiently.',
      'The app encourages community engagement among cooking enthusiasts.',
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    link: 'https://github.com/MythilManivel/cooking-recipe-sharing',
    image: recipeImg,
  },
  {
    title: 'Smart Curriculum & Attendance App',
    period: 'Aug 2025 — Nov 2025',
    description: 'Developed a smart education management app to digitalize curriculum progression, student activity tracking, and attendance monitoring.',
    details: [
      'Implemented real-time updates, role-based access (admin/teacher/student), and automated report generation.',
    ],
    techStack: ['Python', 'React.js', 'OpenCV', 'AWS', 'YOLO V8', 'MongoDB'],
    link: 'https://github.com/MythilManivel/Smart-Curriculum-Activity-Attendance-App',
    image: curriculumImg,
  },
  {
    title: 'Cattle Breed Classification',
    period: 'Sep 2025 — Dec 2025',
    description: 'Built a deep learning model to classify multiple cattle breeds using image datasets collected from farms.',
    details: [
      'Trained a CNN/YOLO-based classifier for high-accuracy breed prediction.',
      'Implemented a FastAPI/Flask backend to process uploaded images and return real-time identification results.',
    ],
    techStack: ['Python', 'CNN', 'YOLO V8', 'Roboflow', 'OpenCV'],
    link: 'https://github.com/MythilManivel/Cattle-Breed-Detection',
    image: cattleImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container section-alt">
      <div className="max-w-6xl mx-auto">
        <span className="section-label">PROJECTS</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-16">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden border border-border card-hover"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Floating link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <Github size={18} />
                </a>
              </div>

              <div className="p-6">
                {project.period && (
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                    <Calendar size={14} />
                    {project.period}
                  </p>
                )}
                <h3 className="text-xl font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                )}
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="space-y-2 mb-5">
                  {project.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                      {detail}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
