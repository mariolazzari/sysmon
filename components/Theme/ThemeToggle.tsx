"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const settings = ["light", "dark", "system"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon
            className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            size={48}
          />
          <MoonIcon
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            size={48}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {settings.map(setting => (
          <DropdownMenuItem
            key={setting}
            className="capitalize"
            onClick={() => setTheme(setting)}
          >
            {setting}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
