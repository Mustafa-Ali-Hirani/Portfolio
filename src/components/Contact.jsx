import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-brand-dark border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-textPrimary mb-4">
            Get in Touch
          </h2>
          <div className="h-1.5 w-20 bg-brand-accent rounded-full"></div>
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-brand-textSecondary mb-12 leading-relaxed">
          I'm currently open to full-time roles and contract opportunities. 
          If you are a recruiter or engineering manager, let's connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Card */}
          <a 
            href="mailto:Mustafa.ali.hirani@gmail.com"
            className="p-8 bg-brand-card/30 border border-white/5 rounded-2xl hover:border-brand-accent/20 hover:scale-105 transition-all text-center flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="p-4 bg-brand-accent/10 rounded-full group-hover:bg-brand-accent/20 transition-colors">
              <Mail className="text-brand-accent" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-textPrimary mb-1">Email Me</h3>
              <p className="text-brand-textSecondary">Mustafa.ali.hirani@gmail.com</p>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/923333452065" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-8 bg-brand-card/30 border border-white/5 rounded-2xl hover:border-brand-accent/20 hover:scale-105 transition-all text-center flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="p-4 bg-brand-accent/10 rounded-full group-hover:bg-brand-accent/20 transition-colors">
              <MessageSquare className="text-brand-accent" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-textPrimary mb-1">Message on WhatsApp</h3>
              <p className="text-brand-textSecondary">+92 333 3452065</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
