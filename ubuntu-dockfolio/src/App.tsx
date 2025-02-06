import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div 
          className="flex min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(45deg, #150010 0%, #1C0012 30%, #300A1F 100%)`,
            backgroundAttachment: 'fixed'
          }}
        >
          <Sidebar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Protected Routes - Only for adding/editing content */}
            <Route path="/projects/new" element={
              <ProtectedRoute>
                <div>Add New Project (Coming Soon)</div>
              </ProtectedRoute>
            } />
            <Route path="/projects/edit/:id" element={
              <ProtectedRoute>
                <div>Edit Project (Coming Soon)</div>
              </ProtectedRoute>
            } />
            <Route path="/skills/new" element={
              <ProtectedRoute>
                <div>Add New Skill (Coming Soon)</div>
              </ProtectedRoute>
            } />
            <Route path="/skills/edit/:id" element={
              <ProtectedRoute>
                <div>Edit Skill (Coming Soon)</div>
              </ProtectedRoute>
            } />
            
            {/* Protected Admin Routes */}
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <div>Admin Dashboard (Coming Soon)</div>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;