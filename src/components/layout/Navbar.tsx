"use client";

import * as React from "react";
import Link from "next/link";
import type { ReactElement } from "react";
import { useTheme } from "next-themes";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Activity,
  BarChart,
  Bot,
  Box,
  Calendar,
  CheckCircle2,
  Code2,
  Component,
  Cpu,
  Globe,
  LayoutGrid,
  LineChart,
  LogOut,
  Mail,
  MessageSquare,
  Search,
  Settings,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  Zap,
  Monitor,
  Moon,
  Sun,
  CirclePlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback, useEffect } from "react";

// Data adapted for TakeTheLiveUnder
const features: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "Live Dashboard",
    href: "#",
    icon: <Activity className="w-4 h-4" />,
    description: "Real-time game tracking",
  },
  {
    title: "PPM Analysis",
    href: "#",
    icon: <LineChart className="w-4 h-4" />,
    description: "Points Per Minute metrics",
  },
  {
    title: "Trigger Alerts",
    href: "#",
    icon: <Zap className="w-4 h-4" />,
    description: "Instant betting opportunities",
  },
];

const analysis: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "Projections",
    href: "#",
    icon: <BarChart className="w-4 h-4" />,
    description: "Final score predictions",
  },
  {
    title: "Historical Data",
    href: "#",
    icon: <Calendar className="w-4 h-4" />,
    description: "Past performance trends",
  },
  {
    title: "Team Stats",
    href: "#",
    icon: <Users className="w-4 h-4" />,
    description: "Compare team efficiencies",
  },
];

const resources: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "Documentation",
    href: "#",
    icon: <Code2 className="w-4 h-4" />,
    description: "How to use the platform",
  },
  {
    title: "Betting Guide",
    href: "#",
    icon: <CheckCircle2 className="w-4 h-4" />,
    description: "Understanding the strategy",
  },
  {
    title: "Support",
    href: "#",
    icon: <MessageSquare className="w-4 h-4" />,
    description: "Get help from our team",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex fixed px-4 py-12 z-50 top-0 w-full items-center h-16 justify-between transition-all duration-300 dark ${
        scrolled
          ? "bg-black/50 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      {" "}
      <div className="flex items-center justify-between w-full  mx-auto max-w-7xl">
        <div className="flex h-14 justify-center items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl mr-4 text-foreground"
          >
            <Activity className="h-6 w-6" />
            <span>TakeTheLiveUnder</span>
          </Link>
          <NavigationMenu className="ml-8 hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-7.5 font-normal text-muted-foreground",
                  )}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] pt-2 grid-cols-2 md:w-[600px]">
                    <div>
                      <span className="p-4 text-muted-foreground">
                        Features
                      </span>
                      {features.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="p-4 text-muted-foreground">
                        Analysis
                      </span>
                      {analysis.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-7.5 font-normal text-muted-foreground",
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] pt-2 grid-cols-1 md:w-[350px]">
                    <div>
                      <span className="p-4 text-muted-foreground">
                        Help & Guides
                      </span>
                      {resources.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-7.5 font-normal text-muted-foreground",
                  )}
                >
                  <Link href="#">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"} size={"sm"}>
            Log in
          </Button>
          <Button variant={"outline"} size={"sm"}>
            Sign up
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer border h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-70 p-3 rounded-xl" align="end">
              <div className="p-2">
                <h1 className="font-semibold">User Name</h1>
                <p className="text-sm text-muted-foreground">
                  user@example.com
                </p>
              </div>
              <DropdownMenuGroup>
                <DropdownMenuItem className="py-3">Dashboard</DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  Account Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="-mx-3" />
              <DropdownMenuGroup>
                <DropdownMenuItem className="py-3 justify-between">
                  Theme <ThemeSwitcher />
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="-mx-3" />
              <DropdownMenuItem className="py-3 justify-between">
                Logout <LogOut className="w-4 h-4" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Mobile Menu Placeholder */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <LayoutGrid className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  title,
  icon,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon: ReactElement;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="hover:bg-transparent">
        <Link href={href}>
          <div className="flex gap-3 items-start rounded-md p-2">
            <div className="border rounded-sm p-2 icon-container">{icon}</div>
            <div className="text-container">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="text-muted-foreground line-clamp-2 pt-1 text-xs leading-snug">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>

      <style jsx>{`
        li:hover .icon-container {
          background-color: var(--foreground);
          color: var(--background);
          transform: scale(1.05);
          transition: all 0.2s ease;
        }

        li:hover .text-container .text-sm {
          color: var(--foreground); /* Change title color on hover */
          transition: color 0.2s ease;
        }

        li:hover .text-container p {
          color: var(--foreground); /* Change description color on hover */
          transition: color 0.2s ease;
        }
      `}</style>
    </li>
  );
}

const themes = [
  {
    key: "system",
    icon: Monitor,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
];

export type ThemeSwitcherProps = {
  value?: "light" | "dark" | "system";
  onChange?: (theme: "light" | "dark" | "system") => void;
  defaultValue?: "light" | "dark" | "system";
  className?: string;
};

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeClick = useCallback(
    (themeKey: "light" | "dark" | "system") => {
      setTheme(themeKey);
    },
    [setTheme],
  );

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative isolate flex h-7 rounded-full bg-background p-1 ring-1 ring-border",
        className,
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;

        return (
          <button
            aria-label={label}
            className="relative h-5 w-6 rounded-full"
            key={key}
            onClick={() => handleThemeClick(key as "light" | "dark" | "system")}
            type="button"
          >
            {isActive && (
              <div className="absolute inset-0 rounded-full bg-secondary" />
            )}
            <Icon
              className={cn(
                "relative z-10 m-auto h-3.5 w-3.5",
                isActive ? "text-foreground" : "text-muted-foreground",
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
