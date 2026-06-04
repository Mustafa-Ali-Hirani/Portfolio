import { Cpu, Code, Terminal, Database } from 'lucide-react';

const skillsData = [
  {
    category: "Agentic AI & Automation",
    icon: <Cpu className="text-brand-accent" size={24} />,
    skills: [
      "Code-Based Agentic AI",
      "n8n Visual Workflow Automation",
      "System Prompt Engineering",
      "AI Model Integration (APIs)",
      "Autonomous Operational Agents"
    ]
  },
  {
    category: "MERN Stack Development",
    icon: <Code className="text-brand-accent" size={24} />,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "State Management"
    ]
  },
  {
    category: "Backend & API Engineering",
    icon: <Terminal className="text-brand-accent" size={24} />,
    skills: [
      "Python",
      "FastAPI Architecture",
      "RESTful API Design",
      "Swagger Documentation",
      "Request Validation"
    ]
  },
  {
    category: "Infrastructure & Operations",
    icon: <Database className="text-brand-accent" size={24} />,
    skills: [
      "Vercel Deployment",
      "Render Hosting",
      "Streamlit Apps",
      "Git / Version Control",
      "MongoDB Atlas"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-brand-dark/50 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-textPrimary mb-4">
            Technical Expertise
          </h2>
          <div className="h-1.5 w-20 bg-brand-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((item, index) => (
            <div 
              key={index} 
              className="p-6 bg-brand-card/30 border border-white/5 rounded-2xl hover:border-brand-accent/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-brand-accent/10 border border-brand-accent/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-textPrimary">
                  {item.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-brand-textSecondary text-sm group-hover:text-brand-textPrimary transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
