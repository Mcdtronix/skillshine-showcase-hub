
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-2">
            <div className="space-y-4 text-slate">
              <p>
                Hello! I'm John, a passionate software developer with a deep interest in creating digital 
                experiences that live at the intersection of technology and design.
              </p>
              
              <p>
                My journey in software development began during my university years when I built my first 
                web application. Since then, I've had the privilege of working across various domains of 
                computer science, from web and mobile development to machine learning and cloud architecture.
              </p>
              
              <p>
                I thrive on solving complex problems and continuously learning new technologies. My goal is 
                to create software that not only meets technical requirements but also delivers an exceptional 
                user experience.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
              
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Python", "Django", "TensorFlow", "AWS"].map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-teal mr-2">▹</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal to-teal/30 opacity-50 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-square bg-navy-light rounded-lg flex items-center justify-center text-slate-light">
                <span className="text-6xl opacity-70">👨‍💻</span>
              </div>
              <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
