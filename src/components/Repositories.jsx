import { Star, GitFork } from 'lucide-react';

const repoData = [
  {
    title: "Atlas Logistics Core",
    tags: ["MERN Stack", "MVC Architecture", "Express Routing"],
    link: "https://github.com/Mustafa-Ali-Hirani/atlas-logistics",
    language: "JavaScript",
    stars: 14,
    forks: 3,
    tech: "react"
  },
  {
    title: "FastAPI Logistics Backend",
    tags: ["Python", "FastAPI", "Pydantic Validation", "Uvicorn"],
    link: "https://github.com/Mustafa-Ali-Hirani/python-logistics-api",
    language: "Python",
    stars: 18,
    forks: 5,
    tech: "python"
  },
  {
    title: "Agentic AI Prompt & Workflow Blueprints",
    tags: ["JSON Schemas", "n8n Pipelines", "Prompt Engineering"],
    link: "https://github.com/Mustafa-Ali-Hirani/logistics-backend",
    language: "JSON/n8n",
    stars: 9,
    forks: 2,
    tech: "ai"
  },
  {
    title: "Hasnain Dentals MERN",
    tags: ["React.js", "Express.js", "MongoDB", "Appointment Scheduler"],
    link: "https://github.com/Mustafa-Ali-Hirani/hasnain-dentals-mern-app",
    language: "JavaScript",
    stars: 12,
    forks: 4,
    tech: "react"
  },
  {
    title: "Shipment Tracker MERN",
    tags: ["React", "Express", "MongoDB", "Node.js", "Telemetry API"],
    link: "https://github.com/Mustafa-Ali-Hirani/shipment-tracker-mern",
    language: "JavaScript",
    stars: 11,
    forks: 3,
    tech: "react"
  },
  {
    title: "Northoaks Wealth Project",
    tags: ["React", "Tailwind CSS", "Data Visuals", "Financial Tech"],
    link: "https://github.com/Mustafa-Ali-Hirani/northoaks-wealth-project",
    language: "JavaScript",
    stars: 15,
    forks: 4,
    tech: "react"
  },
  {
    title: "Hirani Constructions App",
    tags: ["React", "Express", "MongoDB", "Node.js", "Client Portal"],
    link: "https://github.com/Mustafa-Ali-Hirani/hirani-constructions-app",
    language: "JavaScript",
    stars: 10,
    forks: 2,
    tech: "react"
  }
];

const TechLogo = ({ tech }) => {
  if (tech === 'react') {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (tech === 'python') {
    return (
      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path fill="#3776ab" d="M220.5 0C104.5 0 109 46.5 109 46.5l.3 43H225v12h-172S0 96 0 216s51 115 51 115h32V288c0-39 31.5-70.5 70.5-70.5h111c39 0 70.5-31.5 70.5-70.5V36c0-36-36-36-36-36h-78.5z"/>
        <path fill="#ffd343" d="M227.5 512c116 0 111.5-46.5 111.5-46.5l-.3-43H223v-12h172s53 5.5 53-114s-51-115-51-115h-32v43c0 39-31.5 70.5-70.5 70.5h-111c-39 0-70.5 31.5-70.5 70.5V476c0 36 36 36 36 36h78.5z"/>
      </svg>
    );
  }
  if (tech === 'ai') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-purple-500">
        <path d="M12 2v8" />
        <path d="m16.24 7.76-5.66 5.66" />
        <path d="M18 12h-8" />
        <path d="m16.24 16.24-5.66-5.66" />
        <path d="M12 22v-8" />
        <path d="m7.76 16.24 5.66-5.66" />
        <path d="M6 12h8" />
        <path d="m7.76 7.76 5.66 5.66" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return null;
};

const getAccentClasses = (lang) => {
  switch (lang) {
    case 'JavaScript': return 'border-l-yellow-500 shadow-[inset_4px_0_12px_rgba(234,179,8,0.1)]';
    case 'Python': return 'border-l-blue-500 shadow-[inset_4px_0_12px_rgba(59,130,246,0.1)]';
    case 'JSON/n8n': return 'border-l-purple-500 shadow-[inset_4px_0_12px_rgba(168,85,247,0.1)]';
    default: return 'border-l-gray-500';
  }
};

const getLanguageColor = (lang) => {
  switch (lang) {
    case 'JavaScript': return 'bg-[#f1e05a]';
    case 'Python': return 'bg-[#3572A5]';
    case 'JSON/n8n': return 'bg-[#a270ba]';
    default: return 'bg-gray-400';
  }
};

const Repositories = () => {
  return (
    <section id="repositories" className="py-24 bg-brand-dark/50 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-textPrimary mb-4">
            Open-Source Repositories
          </h2>
          <div className="h-1.5 w-20 bg-brand-accent rounded-full"></div>
          <p className="mt-6 text-lg text-brand-textSecondary max-w-2xl font-medium">
            Direct access to clean, documented production codebases for technical review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repoData.map((repo, index) => (
            <div 
              key={index}
              className={`p-8 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-brand-accent/40 rounded-2xl transition-all duration-300 flex flex-col justify-between h-full group relative shadow-2xl border-l-4 ${getAccentClasses(repo.language)}`}
            >
              {/* Active Status Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                  Active
                </span>
              </div>

              <div>
                <div className="mb-8 p-1">
                  <TechLogo tech={repo.tech} />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-textPrimary mb-4 group-hover:text-brand-accent transition-colors">
                  {repo.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {repo.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 bg-slate-800/50 text-brand-textSecondary border border-slate-700/50 rounded-lg group-hover:border-slate-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                {/* GitHub Metadata Footer */}
                <div className="flex items-center gap-6 text-sm font-bold text-brand-textSecondary border-t border-slate-800/50 pt-6">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)} shadow-sm`} />
                    <span className="text-brand-textPrimary/80">{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-brand-accent transition-colors cursor-default">
                    <Star size={16} />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-brand-accent transition-colors cursor-default">
                    <GitFork size={16} />
                    <span>{repo.forks}</span>
                  </div>
                </div>

                <a 
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-slate-950/50 hover:bg-brand-accent text-brand-textPrimary hover:text-white font-bold rounded-xl border border-slate-800 hover:border-brand-accent transition-all duration-300 shadow-xl group/btn overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2">
                    <svg 
                      className="w-5 h-5 fill-current group-hover/btn:scale-110 transition-transform" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span>View Repository</span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repositories;
