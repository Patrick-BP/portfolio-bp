import { WindowFrame } from "@/components/WindowFrame";
import { Terminal } from "@/components/Terminal";

const About = () => {
  return (
    <main className="flex-1 p-6 ml-20">
      <WindowFrame title="About Me" className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-ubuntu-purple">John Doe</h1>
              <p className="text-lg text-gray-600">
                Full Stack Developer based in San Francisco
              </p>
            </div>
          </div>
          
          <div className="prose prose-lg">
            <p>
              I'm a passionate developer with 5 years of experience building web applications.
              My journey in tech started with a curiosity about how things work, which led
              me to pursue a career in software development.
            </p>
            
            <p>
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical blog posts, or exploring new technologies.
            </p>
          </div>

          <Terminal
            commands={[
              { command: "cat education.txt", output: "🎓 Computer Science, BS - Stanford University" },
              { command: "cat experience.txt", output: "💼 Senior Developer @ Tech Corp (2020-Present)" },
              { command: "cat interests.txt", output: "🚀 Web Development, Cloud Computing, AI/ML" }
            ]}
          />
        </div>
      </WindowFrame>
    </main>
  );
};

export default About;