"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
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
