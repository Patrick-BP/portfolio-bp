import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Code, Server, Cog } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "React", category: "Frontend Development", proficiency: 90 },
    { id: 2, name: "Node.js", category: "Backend Development", proficiency: 85 },
    { id: 3, name: "Docker", category: "DevOps & Tools", proficiency: 75 },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const categories = [
    "Frontend Development",
    "Backend Development",
    "DevOps & Tools",
  ];

  const onSubmit = (data: any) => {
    const newSkill = {
      id: skills.length + 1,
      ...data,
      proficiency: parseInt(data.proficiency),
    };
    setSkills([...skills, newSkill]);
    setIsOpen(false);
    reset();
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend Development":
        return <Code className="h-6 w-6" />;
      case "Backend Development":
        return <Server className="h-6 w-6" />;
      case "DevOps & Tools":
        return <Cog className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Skills</h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button>
              <Plus className="mr-2" />
              Add Skill
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Skill</SheetTitle>
            </SheetHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div>
                <Input
                  placeholder="Skill Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("category", { required: true })}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Proficiency (0-100)"
                  {...register("proficiency", {
                    required: true,
                    min: 0,
                    max: 100,
                  })}
                />
              </div>
              <Button type="submit" className="w-full">
                Add Skill
              </Button>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getCategoryIcon(category)}
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{skill.name}</span>
                        <span>{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;