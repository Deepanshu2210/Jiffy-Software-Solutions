
import React from 'react';
import { TEAM_DATA, TECHNOLOGIES, CORE_EXPERTISE } from '../constants';
import TypingEffect from '../components/TypingEffect';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  hoverImageUrl: string;
  dream: string;
  bio?: string;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="group bg-white rounded-lg shadow-md text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden">
        <div className="relative h-80">
            {/* Primary Image */}
            <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 group-hover:opacity-20" 
            />
            {/* Hover Image (childhood/alternate) */}
            <img 
                src={member.hoverImageUrl} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-40 group-hover:scale-110" 
            />
            
            {/* Brief Bio Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-primary/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <p className="text-dark font-medium text-sm leading-relaxed">
                        {member.bio || `${member.name} is a dedicated ${member.role} at JIFFY, bringing expert skills and innovative thinking to every project.`}
                    </p>
                </div>
            </div>
        </div>
        <div className="p-5 border-t border-gray-100">
            <h3 className="text-xl font-bold text-dark">{member.name}</h3>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">{member.role}</p>
        </div>
    </div>
);

const TeamSection: React.FC<{ title: string; members: TeamMember[]; gridCols: string }> = ({ title, members, gridCols }) => {
    if (members.length === 0) return null;

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-dark mb-2">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full"></div>
                </div>
                <div className={`grid gap-8 ${gridCols}`}>
                    {members.map(member => (
                        <TeamMemberCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};


const TeamPage: React.FC = () => {
    return (
        <div className="animate-fade-in-up -mt-20">
            <header 
                className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-primary/70 -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
                    <TypingEffect text="The talented and passionate professionals who power JIFFY Software Solutions." />
                </div>
            </header>

            <main className="bg-light">
                <div className="text-center bg-light pt-16">
                    <TeamSection title="Founder" members={TEAM_DATA.founder} gridCols="grid-cols-1 justify-items-center" />
                    <TeamSection title="Business Advisor" members={TEAM_DATA.advisor} gridCols="grid-cols-1 justify-items-center" />
                    <TeamSection title="Management" members={TEAM_DATA.management} gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
                    <TeamSection title="Our Experts" members={TEAM_DATA.experts} gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
                </div>
            </main>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-dark">Technologies We Master</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {TECHNOLOGIES.map((tech) => (
                            <span key={tech} className="bg-light text-gray-700 font-medium py-2 px-5 rounded-full shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 to-dark">
                <div className="container mx-auto px-4">
                     <div className="relative text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Our Core Expertise</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CORE_EXPERTISE.map((expertise) => (
                             <div key={expertise.title} className="group relative p-8 rounded-lg overflow-hidden bg-dark/50 border border-secondary/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20">
                                <div className="relative z-10 text-center flex flex-col items-center">
                                    <div className="bg-primary text-white rounded-full p-4 mb-6 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                                        {expertise.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{expertise.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{expertise.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;
