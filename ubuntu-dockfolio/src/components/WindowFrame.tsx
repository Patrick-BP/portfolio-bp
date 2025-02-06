import { Minus, Square, X } from "lucide-react";

interface WindowFrameProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const WindowFrame = ({ title, children, className = "" }: WindowFrameProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden animate-window-in ${className}`}>
      <div className="bg-ubuntu-gray p-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="w-3 h-3 rounded-full bg-red-500" />
          <button className="w-3 h-3 rounded-full bg-yellow-500" />
          <button className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-white font-ubuntu text-sm">{title}</span>
        <div className="flex items-center space-x-2">
          <Minus className="w-4 h-4 text-white" />
          <Square className="w-4 h-4 text-white" />
          <X className="w-4 h-4 text-white" />
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};