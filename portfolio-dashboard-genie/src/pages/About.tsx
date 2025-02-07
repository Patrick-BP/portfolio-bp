import { useContext, useState , useEffect} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { User, MapPin, Mail, Github, Linkedin, Phone, } from "lucide-react";
import { toast } from "sonner";
import { DataContext } from "@/contexts/DataContext";



const About = () => {
  const { aboutMe, setAboutMe} = useContext(DataContext);
  const  token  = localStorage.getItem("token");

  const [isEditing, setIsEditing] = useState(false);
  const [aboutMeState, setAboutMeState] = useState({
    name: "",
    biography: "",
    introduction: "",
    title: "",
    imageUrl: "",
    city: "",
    state: "",
    email: "",
    phone: "",
    githubUrl: "",
    linkedinUrl: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSave = async () => {
    const formData = new FormData();
    if (image) formData.append("imageUrl", image);
    formData.append("name", aboutMeState.name);
    formData.append("biography", aboutMeState.biography);
    formData.append("introduction", aboutMeState.introduction);
    formData.append("title", aboutMeState.title);
    formData.append("city", aboutMeState.city);
    formData.append("state", aboutMeState.state);
    formData.append("email", aboutMeState.email);
    formData.append("phone", aboutMeState.phone);
    formData.append("githubUrl", aboutMeState.githubUrl);
    formData.append("linkedinUrl", aboutMeState.linkedinUrl);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/aboutMe`, {
        method: aboutMe ? "PUT" : "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.ok) {
        setAboutMe(aboutMeState);
        setIsEditing(false);
        toast.success("Changes saved successfully!");
      } else {
        toast.error("Error saving changes!");
      }
    } catch (error) {
      toast.error("Error saving changes!");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    if (!aboutMe) {
      setAboutMeState({
        name: "",
        biography: "",
        introduction: "",
        title: "",
        imageUrl: "",
        city: "",
        state: "",
        email: "",
        phone: "",
        githubUrl: "",
        linkedinUrl: "",
      });
    }
  };

  useEffect(() => {
    if (aboutMe) {
      setAboutMeState({
        ...aboutMeState,
        name: aboutMe?.name || "",
        email: aboutMe?.email || "",
        city: aboutMe?.city || "",
        state: aboutMe?.state || "",
        biography: aboutMe?.biography || "",
        introduction: aboutMe?.introduction || "",
        title: aboutMe?.title || "",
        imageUrl: aboutMe?.imageUrl || "",
        phone: aboutMe?.phone || "",
        githubUrl: aboutMe?.githubUrl || "",
        linkedinUrl: aboutMe?.linkedinUrl || "",
      });
    }
  }, [aboutMe]);

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
                <Input
                  placeholder="Full Name"
                  value={aboutMeState.name}
                  onChange={(e) => setAboutMeState({ ...aboutMeState, name: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-gray-500" />
              <div className="flex-1">
                <Input
                  placeholder="Email"
                  value={aboutMeState.email}
                  onChange={(e) => setAboutMeState({ ...aboutMeState, email: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-gray-500" />
              <div className="flex-1">
                <Input
                  placeholder="City"
                  value={aboutMeState.city}
                  onChange={(e) => setAboutMeState({ ...aboutMeState, city: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-gray-500" />
              <div className="flex-1">
                <Input
                  placeholder="State"
                  value={aboutMeState.state}
                  onChange={(e) => setAboutMeState({ ...aboutMeState, state: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-gray-500" />
              <div className="flex-1">
                <Input
                  placeholder="Phone"
                  value={aboutMeState.phone}
                  onChange={(e) => setAboutMeState({ ...aboutMeState, phone: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Github className="text-gray-500" />
              <div className="flex-1">
                <Input
                  placeholder="Github URL"
                  value={aboutMeState.githubUrl}     
                  onChange={(e) => setAboutMeState({ ...aboutMeState, githubUrl: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Linkedin className="text-gray-500" />
              <div className="flex-1">
                <Input
                  placeholder="Linkedin URL"
                  value={aboutMeState.linkedinUrl}
                  onChange={(e) => setAboutMeState({ ...aboutMeState, linkedinUrl: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-[200px]"
              placeholder="Write your bio here..."
              value={aboutMeState.biography}
              onChange={(e) => setAboutMeState({ ...aboutMeState, biography: e.target.value })}
              disabled={!isEditing}
            />
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-[200px]"
              placeholder="Write your introduction here..."
              value={aboutMeState.introduction}
              onChange={(e) => setAboutMeState({ ...aboutMeState, introduction: e.target.value })}
              disabled={!isEditing}
            />
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Title"
              value={aboutMeState.title}
              onChange={(e) => setAboutMeState({ ...aboutMeState, title: e.target.value })}
              disabled={!isEditing}
            />
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Image</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <img src={preview || aboutMe?.imageUrl || ""} className="w-16 h-16 rounded-full" alt="Profile Picture" />
              <input
                type="file"
                onChange={handleImageChange}
                disabled={!isEditing}
                className="hidden"
                id="image"
              />
              <label htmlFor="image" className="cursor-pointer">
                <Button variant="secondary">Change Image</Button>
              </label>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        {isEditing ? (
          <>
            <Button onClick={handleSave}>Save Changes</Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <Button onClick={handleEdit}>Edit</Button>
        )}
      </div>
    </div>
  );
}

export default About;