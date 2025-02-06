import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Mail, LogOut, Cpu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  icon: typeof Home;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: User, label: "About", path: "/dashboard/about" },
  { icon: Briefcase, label: "Projects", path: "/dashboard/projects" },
  { icon: Cpu, label: "Skills", path: "/dashboard/skills" },
  { icon: Mail, label: "Contact", path: "/dashboard/contact" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white border-r">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Portfolio Admin</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={logout}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Button>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div
        className={`p-4 ${sidebarOpen ? "lg:ml-64" : ""}
        transition-[margin] duration-200 ease-in-out`}
      >
        <div className="mb-4 flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;