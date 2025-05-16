
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: ["React", "Angular", "Vue.js", "Next.js", "HTML5/CSS3", "Tailwind CSS", "TypeScript"]
    },
    {
      name: "Backend Development",
      skills: ["Node.js", "Express", "Django", "Flask", "Ruby on Rails", "GraphQL", "REST API Design"]
    },
    {
      name: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"]
    },
    {
      name: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform"]
    },
    {
      name: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      name: "AI & Data Science",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Data Analysis", "Machine Learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-navy border-slate-dark hover:border-teal/50 transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-slate-light text-xl font-semibold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-secondary px-3 py-1 rounded-full text-sm font-medium text-slate"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
