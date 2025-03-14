"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../src/components/ui/dropdown-menu";
import { 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  CreditCard, 
  Menu, 
  DollarSign,
  ChevronDown,
  HelpCircle,
  BarChart3,
  Shield,
  Moon,
  Sun
} from "lucide-react";
import { ThemeToggle } from "../../components/ui/theme-toggle";

interface UserAccountDropdownProps {
  userName?: string;
  userEmail?: string;
  userImageUrl?: string;
  balance?: string;
  hideBalance?: boolean;
}

export function UserAccountDropdown({
  userName = "User",
  userEmail = "user@example.com",
  userImageUrl,
  balance = "$5.87",
  hideBalance = false
}: UserAccountDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Remove the notification state since we're handling it in the layout
  // const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Determine the color of the balance text based on the value
  const balanceValue = parseFloat(balance.replace(/[^0-9.-]+/g, ""));
  const balanceColor = balanceValue > 0 ? "text-green-600" : "text-red-600";

  // Check if component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {/* Balance Display - styled to match the screenshot */}
      {!hideBalance && (
        <div className="hidden sm:flex items-center gap-1.5 py-1.5 px-4 bg-[#232836] rounded-full border border-gray-700 hover:bg-gray-800 transition-colors">
          <DollarSign className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-green-400">{balance.replace('$', '')}</span>
        </div>
      )}

      {/* User Dropdown */}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 focus:outline-none p-1.5 rounded-full hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-700">
            {userImageUrl ? (
              <img
                src={userImageUrl}
                alt={userName}
                className="h-8 w-8 rounded-full object-cover border border-gray-700"
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-gray-300">
                <User className="h-5 w-5" />
              </div>
            )}
            <ChevronDown className="h-4 w-4 text-gray-400 hidden sm:block" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64 p-0 overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
          <DropdownMenuLabel className="font-normal p-4 bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{userName}</p>
              <p className="text-xs leading-none text-gray-500 dark:text-gray-400">{userEmail}</p>
              {hideBalance && (
                <div className="flex items-center gap-1.5 mt-2">
                  <DollarSign className="h-3.5 w-3.5 text-gray-400" />
                  <span className="text-xs font-medium text-green-400">{balance.replace('$', '')}</span>
                </div>
              )}
              {!hideBalance && (
                <div className="flex items-center gap-1.5 mt-2 sm:hidden">
                  <DollarSign className="h-3.5 w-3.5 text-gray-400" />
                  <span className="text-xs font-medium text-green-400">{balance.replace('$', '')}</span>
                </div>
              )}
            </div>
          </DropdownMenuLabel>
          <div className="py-1">
            <DropdownMenuItem asChild>
              <Link href="/app/profile" className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/app/billing" className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                <CreditCard className="h-4 w-4" />
                <span>Billing</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/app/settings" className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/app/help" className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                <HelpCircle className="h-4 w-4" />
                <span>Help & Support</span>
              </Link>
            </DropdownMenuItem>
          </div>
          <DropdownMenuSeparator className="my-0 dark:border-gray-700" />
          <div className="py-1">
            {mounted && (
              <DropdownMenuItem asChild>
                <ThemeToggle variant="button" className="w-full justify-start" />
              </DropdownMenuItem>
            )}
          </div>
          <DropdownMenuSeparator className="my-0 dark:border-gray-700" />
          <div className="py-1 bg-muted dark:bg-muted">
            <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 cursor-pointer text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-300 hover:bg-muted/80 dark:hover:bg-muted/80">
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Mobile Menu - Only visible when opened on small screens */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background dark:bg-background sm:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-3">
                {userImageUrl ? (
                  <img
                    src={userImageUrl}
                    alt={userName}
                    className="h-12 w-12 rounded-full object-cover border-2 border-muted shadow-sm"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground border-2 border-muted shadow-sm">
                    <User className="h-6 w-6" />
                  </div>
                )}
                <div>
                  <p className="text-base font-medium text-foreground">{userName}</p>
                  <p className="text-sm text-muted-foreground">{userEmail}</p>
                </div>
              </div>
              <button 
                className="p-2 text-muted-foreground hover:text-foreground focus:outline-none rounded-full hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto p-5">
              <nav className="space-y-1">
                <Link 
                  href="/app" 
                  className="flex items-center gap-3 p-3.5 rounded-lg hover:bg-muted border border-transparent hover:border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BarChart3 className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Dashboard</span>
                </Link>
                <Link 
                  href="/app/profile" 
                  className="flex items-center gap-3 p-3.5 rounded-lg hover:bg-muted border border-transparent hover:border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Profile</span>
                </Link>
                <Link 
                  href="/app/billing" 
                  className="flex items-center gap-3 p-3.5 rounded-lg hover:bg-muted border border-transparent hover:border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Billing</span>
                </Link>
                <Link 
                  href="/app/settings" 
                  className="flex items-center gap-3 p-3.5 rounded-lg hover:bg-muted border border-transparent hover:border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Settings</span>
                </Link>
                <Link 
                  href="/app/help" 
                  className="flex items-center gap-3 p-3.5 rounded-lg hover:bg-muted border border-transparent hover:border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Help & Support</span>
                </Link>
                {mounted && (
                  <ThemeToggle variant="button" className="w-full justify-start text-left" />
                )}
              </nav>
            </div>
            <div className="p-5 border-t border-border bg-muted">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Balance</span>
                <span className={`text-lg font-medium ${balanceColor} dark:text-green-400`}>{balance}</span>
              </div>
              <button 
                className="flex w-full items-center justify-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 border border-red-200 dark:border-red-800/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Log out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 