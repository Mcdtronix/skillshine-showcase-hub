
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const categories = ["All", "Web", "Mobile", "AI/ML", "DevOps"];
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/600x340",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web"
    },
    {
      title: "Task Management App",
      description: "A mobile app for managing tasks and projects with real-time collaboration features.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://via.placeholder.com/600x340",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile"
    },
    {
      title: "Sentiment Analysis Tool",
      description: "An ML-powered tool that analyzes sentiment from text data, useful for social media monitoring.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      image: "https://via.placeholder.com/600x340",
      github: "https://github.com",
      category: "AI/ML"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "A custom CI/CD pipeline for automated testing and deployment of microservices.",
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "AWS"],
      image: "https://via.placeholder.com/600x340",
      github: "https://github.com",
      category: "DevOps"
    },
    {
      title: "Social Network Platform",
      description: "A full-featured social network with real-time messaging, post sharing, and content discovery.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "WebSockets"],
      image: "https://via.placeholder.com/600x340",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web"
    },
    {
      title: "Image Recognition App",
      description: "A mobile app that uses computer vision to identify objects and scenes in real-time.",
      technologies: ["Flutter", "TensorFlow Lite", "Google Cloud Vision API"],
      image: "https://via.placeholder.com/600x340",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile"
    }
  ];

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Projects</h2>
        
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="grid w-full sm:w-auto grid-cols-2 sm:grid-cols-5 bg-navy-light">
            {categories.map((category) => (
              <TabsTrigger 
                key={category}
                value={category}
                onClick={() => setActiveTab(category)}
                className="font-fira data-[state=active]:text-teal"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-navy border-slate-dark hover:border-teal/50 transition-colors duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-slate-light text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="bg-secondary border-none text-slate text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-teal text-teal hover:bg-teal/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                
                {project.demo && (
                  <Button 
                    size="sm"
                    className="bg-teal text-navy hover:bg-teal-dark"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
