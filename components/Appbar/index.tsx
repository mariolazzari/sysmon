import { Home, Settings, Info, Cpu, Brain } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ThemeToggle } from "../Theme";

export function Appbar() {
  const links = [
    {
      href: "/",
      tooltip: "Home",
      icon: <Home size={48} />,
    },
    {
      href: "/system",
      tooltip: "System",
      icon: <Settings size={48} />,
    },
    {
      href: "/general",
      tooltip: "General",
      icon: <Info size={48} />,
    },
    {
      href: "/cpu",
      tooltip: "Cpu",
      icon: <Cpu size={48} />,
    },
    {
      href: "/process",
      tooltip: "Processes",
      icon: <Brain size={48} />,
    },
  ];

  return (
    <div className="flex justify-center items-center gap-4 p-4">
      {links.map((link) => (
        <TooltipProvider key={link.href}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={link.href}>{link.icon}</Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}

      <ThemeToggle />
    </div>
  );
}
