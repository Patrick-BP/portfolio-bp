import { Home, User, Briefcase, Code, Mail, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { useEffect, useState } from "react";
import { toast } from "./ui/use-toast";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "About", path: "/about" },
  { icon: Briefcase, label: "Projects", path: "/projects" },
  { icon: Code, label: "Skills", path: "/skills" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

export const Sidebar = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out successfully",
      description: "You have been logged out of your account.",
    });
  };

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-ubuntu-purple flex flex-col items-center py-8">
      <div className="flex-1 space-y-8 ">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`p-3 flex rounded-lg transition-colors duration-200 group relative ${
              location.pathname === path ? "bg-ubuntu-orange" : "hover:bg-white/10"
            }`}
          >
            <Icon className="w-6 h-6 text-white" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              {label}
            </span>
          </Link>
        ))}
      </div>
      
      <div className="mt-auto">
        {user ? (
          <button
            onClick={handleSignOut}
            className="p-3 rounded-lg transition-colors duration-200 group relative hover:bg-white/10"
          >
            <LogIn className="w-6 h-6 text-white rotate-180" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Sign Out
            </span>
          </button>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <button className="p-3 rounded-lg transition-colors duration-200 group relative hover:bg-white/10">
                <LogIn className="w-6 h-6 text-white" />
                <span className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                  Admin Login
                </span>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Admin Access</DialogTitle>
                <DialogDescription>
                  Sign in to access admin features
                </DialogDescription>
              </DialogHeader>
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['github', 'google']}
                theme="dark"
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};