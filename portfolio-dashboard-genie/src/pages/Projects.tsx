import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink, Github, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      techStack: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks and projects",
      techStack: ["React", "Firebase", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    const newProject = {
      id: projects.length + 1,
      ...data,
      techStack: data.techStack.split(",").map((tech: string) => tech.trim()),
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    };
    setProjects([...projects, newProject]);
    setIsOpen(false);
    reset();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button>
              <Plus className="mr-2" />
              Add Project
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Project</SheetTitle>
            </SheetHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div>
                <Input
                  placeholder="Project Title"
                  {...register("title", { required: true })}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Project Description"
                  {...register("description", { required: true })}
                />
              </div>
              <div>
                <Input
                  placeholder="Tech Stack (comma-separated)"
                  {...register("techStack", { required: true })}
                />
              </div>
              <div>
                <Input
                  placeholder="Live URL"
                  {...register("liveUrl", { required: true })}
                />
              </div>
              <div>
                <Input
                  placeholder="GitHub URL"
                  {...register("githubUrl", { required: true })}
                />
              </div>
              <Button type="submit" className="w-full">
                Add Project
              </Button>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="mr-2" />
                  Source Code
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;