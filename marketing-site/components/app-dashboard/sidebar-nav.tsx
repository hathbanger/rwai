"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Home, 
  Grid, 
  Cpu, 
  Server, 
  Menu,
  X
} from "lucide-react";
import { ThemeToggle } from "../../components/ui/theme-toggle";

interface NavigationLink {
  href: string;
  label: string;
  active: boolean;
}

interface SidebarNavProps {
  navigationLinks: NavigationLink[];
}

export function SidebarNav({ navigationLinks }: SidebarNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Map navigation links to icons
  const getIconForLink = (label: string) => {
    switch (label.toLowerCase()) {
      case 'dashboard':
        return <Home className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />;
      case 'models':
        return <Grid className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />;
      case 'gpus':
        return <Cpu className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />;
      case 'mcp':
        return <Server className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />;
      default:
        return <Grid className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />;
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="p-2 text-muted-foreground hover:text-foreground focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <div className="text-sidebar-foreground text-xl font-semibold">RWAI</div>
            <button
              className="p-1 text-sidebar-foreground/60 hover:text-sidebar-foreground focus:outline-none"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Sidebar content */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 mb-6">
              <p className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-2">NAVIGATION</p>
              <nav className="space-y-1">
                {navigationLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md group ${
                      link.active 
                        ? "text-sidebar-foreground bg-sidebar-accent" 
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                    }`}
                    onClick={toggleSidebar}
                  >
                    {getIconForLink(link.label)}
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="px-4">
              <p className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-2">ACCOUNT</p>
              <nav className="space-y-1">
                <Link 
                  href="/app/usage" 
                  className="flex items-center px-3 py-2 text-sm font-medium text-sidebar-foreground/80 rounded-md hover:bg-sidebar-accent/50 hover:text-sidebar-foreground group"
                  onClick={toggleSidebar}
                >
                  <Grid className="mr-3 h-5 w-5 text-sidebar-foreground/60 group-hover:text-sidebar-foreground" />
                  Usage
                </Link>
                <Link 
                  href="/app/billing" 
                  className="flex items-center px-3 py-2 text-sm font-medium text-sidebar-foreground/80 rounded-md hover:bg-sidebar-accent/50 hover:text-sidebar-foreground group"
                  onClick={toggleSidebar}
                >
                  <Grid className="mr-3 h-5 w-5 text-sidebar-foreground/60 group-hover:text-sidebar-foreground" />
                  Billing
                </Link>
              </nav>
            </div>
          </div>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider">Theme</span>
              <ThemeToggle variant="icon" className="text-sidebar-foreground/80 hover:text-sidebar-foreground" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 