import { WindowFrame } from "@/components/WindowFrame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <main className="flex-1 p-6 ml-20">
      <WindowFrame title="Contact Me" className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-ubuntu-purple">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-ubuntu-orange" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-ubuntu-orange" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-ubuntu-orange" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" required className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </WindowFrame>
    </main>
  );
};

export default Contact;