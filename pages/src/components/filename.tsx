import React from 'react';
// FIX: Import TEAM_DATA instead of non-existent TEAM_MEMBERS.
import { TEAM_DATA } from '../constants';

const AboutPage: React.FC = () => {
  // FIX: Create a leadership array from TEAM_DATA to provide a flat list for this component.
  const leadership = [...TEAM_DATA.founder, ...TEAM_DATA.management];

  return (
    <div className="animate-fade-in-up -mt-20">
      <header
          className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
      >
          <div
              className="absolute inset-0 bg-cover bg-center -z-10"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-primary/70 -z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl font-bold">About JIFFY Software Solutions</h1>
              <p className="mt-4 text-lg">Innovating with Purpose, Engineering for the Future.</p>
          </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2015, JIFFY Software Solutions was born from a desire to bridge the gap between business challenges and technological solutions. We saw an opportunity to create a company that not only delivered exceptional software but also built lasting partnerships with clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our humble beginnings, we have grown into a diverse team of experts, united by a passion for problem-solving and a commitment to quality. Our journey is one of continuous learning and adaptation, always staying at the forefront of the ever-evolving tech landscape.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/seed/about/600/400" alt="Office" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 text-center">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                To empower businesses with innovative, reliable, and scalable software solutions that drive growth, efficiency, and digital transformation.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                To be a globally recognized leader in technology solutions, known for our client-centric approach, technical excellence, and positive impact on the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">Meet Our Leadership</h2>
            <p className="mt-4 text-lg text-gray-600">The brilliant minds guiding our mission.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FIX: Use the newly created 'leadership' array. */}
            {leadership.slice(0,3).map(member => (
              <div key={member.name} className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:-translate-y-2">
                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="text-xl font-bold text-dark">{member.name}</h4>
                <p className="text-accent font-semibold">{member.role}</p>
                <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            
              <a href="#/team" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition duration-300">
                  See Full Team
              </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
