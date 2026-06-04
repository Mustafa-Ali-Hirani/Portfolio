import { useState, useEffect } from 'react';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Vanguard Global Freight",
    category: "Agentic AI & Automation",
    impact: "AI document extraction portal reducing customs invoice processing times by 75%.",
    description: "Streamlit-based intelligent document processing portal designed to parse, validate, and structure logistics documents using advanced AI prompt engines.",
    tags: ["Streamlit", "Python", "AI Prompts", "Logistics API"],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
        summary: "Automated ingestion portal designed for secure customs invoices and maritime manifest ingestion."
      },
      {
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        summary: "Underlying AI model mapping complex raw textual documents into structured schemas."
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        summary: "PostgreSQL database synchronization engine validating line-items with zero manual operational overhead."
      }
    ]
  },
  {
    id: 2,
    title: "Python Logistics API",
    category: "Agentic AI & Automation",
    impact: "Robust backend system handling real-time freight validation and routing computations.",
    description: "FastAPI-based backend engine featuring interactive Swagger API documentation and secure endpoint validation for third-party shipping integrations.",
    tags: ["FastAPI", "Python", "Swagger Docs", "Uvicorn"],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        summary: "FastAPI interactive Swagger interface permitting instant real-time route query tests."
      },
      {
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        summary: "Rate limiting and authorization middleware securing sensitive third-party integrations."
      },
      {
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        summary: "Automated test suites executing endpoint validations in production-like test suites."
      }
    ]
  },
  {
    id: 3,
    title: "AI Workflow Automation",
    category: "Agentic AI & Automation",
    impact: "Automated standard shipping workflows, cutting human operations entry by 80%.",
    description: "n8n automation pipeline connecting AI model endpoints directly to operations spreadsheets and Slack alerts for real-time manifest notifications.",
    tags: ["n8n", "AI Prompts", "Workflows", "API Integration"],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        summary: "n8n automation visual nodes connecting input files straight to AI parser webhooks."
      },
      {
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
        summary: "Isolated AI sandbox configured for structural categorization prompt logic."
      },
      {
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        summary: "Real-time Slack webhooks pushing processing alerts to operations teams instantly."
      }
    ]
  },
  {
    id: 4,
    title: "Mobile App AI Assistant",
    category: "Agentic AI & Automation",
    impact: "Embedded agentic conversational prompt model guiding mobile user workflows.",
    description: "An offline-capable AI system prompt designed for mobile logistics applications to guide delivery drivers through on-road delays, step-by-step vehicle troubleshooting, and offline cargo check-sheets.",
    tags: ["AI Prompts", "Mobile UX", "Offline-First", "System Prompts"],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
        summary: "Mobile interface wireframes mapping field driver routes, package statuses, and on-site logs."
      },
      {
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
        summary: "System prompts structured to guide drivers through diagnostic steps without network latency."
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        summary: "Token-optimized system prompt templates maintaining response times under 1 second on standard mobile processors."
      }
    ]
  },
  {
    id: 5,
    title: "Atlas Logistics",
    category: "Logistics MERN Apps",
    impact: "DHL-style operations management dashboard for real-time fleet coordination.",
    description: "Enterprise shipping operations portal featuring interactive load scheduling, carrier management, and real-time status reporting.",
    tags: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Tailwind"],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
        summary: "Operations hub visualizing vehicle coordinates and current transport status."
      },
      {
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
        summary: "Dispatcher control board with drag-and-drop shipment assignment grids."
      },
      {
        image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=1200&q=80",
        summary: "Accounting statements tracking freight rate metrics against driver billing logs."
      }
    ]
  },
  {
    id: 6,
    title: "Shipment Tracker",
    category: "Logistics MERN Apps",
    impact: "React-time shipment telemetry monitoring system with client tracking endpoints.",
    description: "MERN application built to provide instantaneous visual shipping manifests and client-facing tracking links.",
    tags: ["React", "Express", "MongoDB", "Node.js", "Real-time"],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&w=1200&q=80",
        summary: "Interactive status dashboard tracking carrier routes."
      },
      {
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        summary: "Instant public tracking links notifying clients without logging into portals."
      },
      {
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        summary: "Fast MongoDB operations displaying inventory logs instantly."
      }
    ]
  },
  {
    id: 7,
    title: "Northoaks Wealth Project",
    category: "Commercial Portals",
    impact: "Client-facing wealth advisor portal presenting secure financial visualizations.",
    description: "A premium wealth management presentation dashboard built with highly polished data visualizations and responsive financial portfolio summaries.",
    tags: ["React", "Data Visualization", "Tailwind CSS", "Financial Tech"],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
        summary: "Advisor overview tracking key indices and client portfolio summaries."
      },
      {
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
        summary: "Polished SVG vector visualization mapping historic vs targeted yields."
      },
      {
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        summary: "Enterprise secure server grid room."
      }
    ]
  },
  {
    id: 8,
    title: "Hirani Constructions",
    category: "Commercial Portals",
    impact: "Operational portal providing central tracking for commercial building milestones.",
    description: "Full-stack client portal designed to track construction phases, invoice statuses, and blueprint delivery pipelines.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Render"],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
        summary: "Timeline view charting physical milestones for multi-phase builds."
      },
      {
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        summary: "Structural blueprint indexing keeping contractor blueprints unified in one portal."
      },
      {
        image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80",
        summary: "Structural framing inspect review."
      }
    ]
  },
  {
    id: 9,
    title: "Hasnain Dentals",
    category: "Commercial Portals",
    impact: "Clinic scheduling portal reducing booking errors and coordinate overhead.",
    description: "Client appointment scheduling portal featuring robust date selection, database verification, and clean visual booking statuses.",
    tags: ["MERN Stack", "Tailwind CSS", "React", "Appointment System"],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        summary: "Patient booking screen mapping client dates with provider schedules."
      },
      {
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
        summary: "Doctor scheduler app on tablet screen."
      },
      {
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
        summary: "Hospital server system backend database."
      }
    ]
  }
];

const categories = ["Agentic AI & Automation", "Logistics MERN Apps", "Commercial Portals"];

const BrowserMockup = ({ image, title }) => (
  <div className="w-full h-full bg-brand-card/50 rounded-xl overflow-hidden border border-white/10 flex flex-col shadow-2xl">
    <div className="bg-white/5 px-4 py-3 flex gap-2 border-b border-white/5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
    </div>
    <div className="flex-grow relative overflow-hidden group">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
      />
      <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % project.slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [project.slides.length, activeSlideIndex]);

  if (!project) return null;

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % project.slides.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + project.slides.length) % project.slides.length);
  };

  return (
    <div className="fixed inset-0 bg-brand-dark/95 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl h-[80vh] bg-brand-card rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Full-Bleed Background Image */}
        {project.slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={`${project.title} slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out z-0 ${
              idx === activeSlideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        ))}

        {/* Cinematic Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/10 z-10" />

        {/* Floating Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-3 rounded-full bg-brand-dark/80 backdrop-blur-md text-brand-textPrimary hover:bg-brand-accent/20 transition-colors shadow-lg"
        >
          <X size={24} />
        </button>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-brand-dark/40 hover:bg-brand-accent/40 rounded-full text-white transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-brand-dark/40 hover:bg-brand-accent/40 rounded-full text-white transition-all backdrop-blur-sm"
        >
          <ChevronRight size={28} />
        </button>

        {/* Floating Cinematic Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 space-y-4 text-left max-w-3xl animate-in slide-in-from-bottom-8 duration-500">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-textPrimary tracking-tight">
              {project.title}
            </h2>
            <div className="inline-block px-4 py-1.5 bg-brand-accent/20 border border-brand-accent/30 rounded-lg backdrop-blur-md">
              <p className="text-brand-accent font-bold text-sm uppercase tracking-wide">
                {project.impact}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="animate-in fade-in slide-in-from-left-4 duration-300">
              <p className="text-brand-textPrimary text-xl font-medium leading-relaxed italic border-l-4 border-brand-accent pl-4">
                "{project.slides[activeSlideIndex].summary}"
              </p>
            </div>

            <p className="text-brand-textSecondary text-lg leading-relaxed line-clamp-3 md:line-clamp-none">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs font-semibold bg-white/10 text-brand-textPrimary border border-white/10 rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2 pt-4">
            {project.slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlideIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeSlideIndex ? 'bg-brand-accent w-12' : 'bg-white/20 w-6'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="flex flex-col lg:flex-row bg-brand-card/30 border border-white/5 rounded-3xl overflow-hidden hover:border-brand-accent/30 transition-all group cursor-pointer hover:-translate-y-1 shadow-xl"
    >
      {/* Left/Top Half: Browser Mockup */}
      <div className="w-full lg:w-1/2 p-4 lg:p-6 bg-white/[0.02]">
        <div className="aspect-video lg:aspect-auto lg:h-full">
          <BrowserMockup image={project.slides[0].image} title={project.title} />
        </div>
      </div>

      {/* Right/Bottom Half: Content */}
      <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-brand-textPrimary group-hover:text-brand-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-brand-accent font-bold mt-2 text-sm uppercase tracking-wider">
            {project.impact}
          </p>
        </div>

        <p className="text-brand-textSecondary leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium bg-white/5 text-brand-textSecondary border border-white/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-brand-accent font-bold group-hover:translate-x-1 transition-transform">
          <span>Click to view project summary</span>
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-textPrimary mb-4">
            Selected Work
          </h2>
          <div className="h-1.5 w-20 bg-brand-accent rounded-full"></div>
        </div>

        {/* State-controlled Tab System */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`pb-4 px-2 text-sm font-bold transition-all relative ${
                activeTab === category 
                ? 'text-brand-accent' 
                : 'text-brand-textSecondary hover:text-brand-textPrimary'
              }`}
            >
              {category}
              {activeTab === category && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal Component */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;