import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Trash2 } from "lucide-react";

const Contact = () => {
  const messages = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      message: "I'd love to discuss a potential collaboration on a new project.",
      date: "2024-02-20",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      message: "Your portfolio is impressive! Are you available for freelance work?",
      date: "2024-02-19",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>

      <div className="space-y-4">
        {messages.map((message) => (
          <Card key={message.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{message.name}</CardTitle>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-5 w-5 text-gray-500" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{message.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{message.date}</span>
                </div>
                <p className="mt-4 text-gray-700">{message.message}</p>
                <div className="flex gap-2">
                  <Button size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Contact;