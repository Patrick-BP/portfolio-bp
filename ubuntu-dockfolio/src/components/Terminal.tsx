import { useState, useEffect } from "react";

interface CommandType {
  command: string;
  output: string;
}

interface TerminalProps {
  commands: CommandType[];
}

export const Terminal = ({ commands = [] }: TerminalProps) => {
  const [displayedCommands, setDisplayedCommands] = useState<CommandType[]>([]);

  useEffect(() => {
    // Reset displayed commands when commands prop changes
    setDisplayedCommands([]);
    
    if (!commands || commands.length === 0) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < commands.length) {
        setDisplayedCommands(prev => [...prev, commands[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup interval on unmount or when commands change
    return () => clearInterval(interval);
  }, [commands]);

  if (!commands || commands.length === 0) {
    return null;
  }

  return (
    <div className="bg-ubuntu-gray text-white font-mono p-4 rounded-lg">
      {displayedCommands.map((cmd, index) => (
        <div key={index} className="space-y-2">
          <div className="mb-1">
            <span className="text-ubuntu-orange">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~$</span> {cmd?.command || ''}
          </div>
          <div className="pl-4 text-gray-300">{cmd?.output || ''}</div>
        </div>
      ))}
    </div>
  );
  
};