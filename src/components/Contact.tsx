
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-slate mb-6">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hello, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <Card className="bg-navy border-slate-dark">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-light font-medium">Email</h3>
                    <a href="mailto:hello@example.com" className="text-slate hover:text-teal">hello@example.com</a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-navy border-slate-dark">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-light font-medium">GitHub</h3>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal">github.com/johndoe</a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-navy border-slate-dark">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-light font-medium">LinkedIn</h3>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal">linkedin.com/in/johndoe</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="bg-navy border-slate-dark">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-slate-light">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-navy-light border-slate-dark text-slate-light focus:ring-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-slate-light">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-navy-light border-slate-dark text-slate-light focus:ring-teal"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-slate-light">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="Subject" 
                      className="bg-navy-light border-slate-dark text-slate-light focus:ring-teal"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-slate-light">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={6} 
                      className="bg-navy-light border-slate-dark text-slate-light focus:ring-teal"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-teal text-navy hover:bg-teal-dark"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
