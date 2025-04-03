"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  console.log("Current theme:", theme);

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="ghost"
      className="size-8 rounded-full cursor-pointer"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};
