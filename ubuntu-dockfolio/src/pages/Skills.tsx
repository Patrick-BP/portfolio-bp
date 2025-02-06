import { WindowFrame } from "@/components/WindowFrame";
import { Terminal } from "@/components/Terminal";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
  },
];

const Skills = () => {
  return (
    <main className="flex-1 p-6 ml-20">
      <WindowFrame title="Skills & Expertise" className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-lg bg-white shadow-md border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-ubuntu-purple mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-ubuntu-orange rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Terminal
            commands={[
              { command: "ls skills/", output: "frontend/ backend/ devops/" },
              { command: "cat skills/frontend/expertise.txt", output: "⭐⭐⭐⭐⭐ React\n⭐⭐⭐⭐ TypeScript\n⭐⭐⭐⭐ Tailwind" },
              { command: "cat skills/backend/expertise.txt", output: "⭐⭐⭐⭐ Node.js\n⭐⭐⭐⭐ Python\n⭐⭐⭐⭐ PostgreSQL" }
            ]}
          />
        </div>
      </WindowFrame>
    </main>
  );
};

export default Skills;