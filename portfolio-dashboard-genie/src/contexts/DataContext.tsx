import { createContext, useState, useEffect } from "react";
import axios from "axios";

interface DataContextType {
    aboutMe: {
        id?: string;
        name?: string ;
        biography?: string;
        introduction?: string;
        title?: string;
        imageUrl?: string;
        city?: string;
        state?: string;
        email?: string;
        phone?: string;
        githubUrl?: string;
        linkedinUrl?: string;
      } ;
    setAboutMe: React.Dispatch<React.SetStateAction<{
        name?: string ;
        biography?: string;
        introduction?: string;
        title?: string;
        imageUrl?: string;
        city?: string;
        state?: string;
        email?: string;
        phone?: string;
        githubUrl?: string;
        linkedinUrl?: string;
      }>> ;
    skills: any;
    projects: any;
    user: any;
  }

export const DataContext = createContext<DataContextType | null>(null);


export const DataProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUser(decodedToken);

      axios
        .get(`${import.meta.env.VITE_API_URL}/aboutMe`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setAboutMe(res.data))
        .catch((err) => console.log(err));

      axios
        .get(`${import.meta.env.VITE_API_URL}/skills`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setSkills(res.data))
        .catch((err) => console.log(err));

      axios
        .get(`${import.meta.env.VITE_API_URL}/projects`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setProjects(res.data))
        .catch((err) => console.log(err));
    }
  }, []);
 

  return (
   
   
      <DataContext.Provider value={{ aboutMe, setAboutMe, skills, projects, user }}>
      {children}
    </DataContext.Provider>
  );
};
