import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { User, MapPin, Mail, Calendar } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <User className="text-gray-500" />
              <div className="flex-1">
                <Input placeholder="Full Name" defaultValue="John Doe" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="text-gray-500" />
              <div className="flex-1">
                <Input placeholder="Email" defaultValue="john@example.com" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="text-gray-500" />
              <div className="flex-1">
                <Input placeholder="Location" defaultValue="New York, USA" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Calendar className="text-gray-500" />
              <div className="flex-1">
                <Input type="date" defaultValue="1990-01-01" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea 
              className="min-h-[200px]"
              placeholder="Write your bio here..."
              defaultValue="A passionate developer with experience in web development and a love for creating user-friendly applications."
            />
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default About;