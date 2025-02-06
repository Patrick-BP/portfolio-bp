import { WindowFrame } from "@/components/WindowFrame";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["Python", "TensorFlow", "WebSocket"],
  },
  {
    title: "Portfolio Website",
    description: "Ubuntu-themed portfolio website built with React",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "Tailwind", "TypeScript"],
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["Python", "TensorFlow", "WebSocket"],
  },
  {
    title: "Portfolio Website",
    description: "Ubuntu-themed portfolio website built with React",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "Tailwind", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <main className="flex-1 p-6 ml-20">
      <WindowFrame title="My Projects" className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-ubuntu-purple/10 text-ubuntu-purple rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </WindowFrame>
    </main>
  );
};

export default Projects;