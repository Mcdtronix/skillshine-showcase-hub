
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Led development of cloud-native applications, implemented CI/CD pipelines, and mentored junior developers."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description: "Built and maintained multiple web applications using React, Node.js, and MongoDB, improving user engagement by 40%."
    },
    {
      title: "Software Developer Intern",
      company: "StartUp Tech",
      period: "2017 - 2018",
      description: "Contributed to frontend development with Angular and assisted in database design and optimization."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on Neural Network Optimization."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      period: "2012 - 2016",
      description: "Graduated with honors. Major in Software Development and minor in Data Science."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-light mb-4 md:mb-0">My Resume</h2>
          
          <Button 
            size="lg"
            className="bg-teal text-navy hover:bg-teal-dark flex items-center gap-2"
            asChild
          >
            <a href="/resume.pdf" download>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-slate-light mb-6 flex items-center">
              <span className="text-teal mr-2 text-xl">01.</span> Experience
            </h3>
            
            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-navy border-slate-dark hover:border-teal/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between mb-2">
                      <h4 className="text-slate-light font-semibold">{exp.title}</h4>
                      <span className="text-teal font-fira text-sm">{exp.period}</span>
                    </div>
                    <p className="text-slate-light mb-3">{exp.company}</p>
                    <p className="text-slate">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-light mb-6 flex items-center">
              <span className="text-teal mr-2 text-xl">02.</span> Education
            </h3>
            
            <div className="space-y-5">
              {education.map((edu, index) => (
                <Card key={index} className="bg-navy border-slate-dark hover:border-teal/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between mb-2">
                      <h4 className="text-slate-light font-semibold">{edu.degree}</h4>
                      <span className="text-teal font-fira text-sm">{edu.period}</span>
                    </div>
                    <p className="text-slate-light mb-3">{edu.institution}</p>
                    <p className="text-slate">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
