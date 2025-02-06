import { WindowFrame } from "../components/WindowFrame";
import { Terminal } from "../components/Terminal";

const Index = () => {
  const commands = [
    { 
      command: "echo 'Welcome to my portfolio!'",
      output: "Welcome to my portfolio!"
    },
    {
      command: "ls skills",
      output: "frontend  backend  devops"
    },
    {
      command: "cat about.txt",
      output: "I'm a passionate developer who loves creating amazing web experiences!"
    }
  ];

  return (
    <div className="min-h-screen font-ubuntu pl-40 w-full">
      <div className="container py-8 w-fit">
        <div className="grid gap-8 w-fit">
          <WindowFrame title="Welcome" className="max-w-full backdrop-blur-sm bg-white/90">
            <div className="p-4">
              <h1 className="text-4xl font-bold text-ubuntu-purple mb-6">
                Welcome to My Portfolio
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                I'm a frontend developer passionate about creating beautiful and functional web experiences.
              </p>

              <Terminal commands={commands} />
            </div>
          </WindowFrame>
        </div>
      </div>
    </div>
  );
};

export default Index;