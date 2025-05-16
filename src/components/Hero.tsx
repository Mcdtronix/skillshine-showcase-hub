
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-teal font-fira mb-5 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-light mb-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            John Doe.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate mb-6 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            I build things for the web.
          </h2>
          <p className="text-slate max-w-xl mb-12 text-lg animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            I'm a software developer specializing in building (and occasionally designing) 
            exceptional digital experiences. Currently, I'm focused on building accessible, 
            human-centered products.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <Button 
              size="lg"
              className="bg-transparent border border-teal text-teal hover:bg-teal/10 font-fira text-base px-7 py-5"
              variant="outline"
              asChild
            >
              <a href="#projects">Check out my work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
