"use client";

import { SidebarConfig } from "@/lib/config/sidebar-config";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  return (
    <aside className="flex px-2 py-4 flex-col justify-between items-center border-r min-h-screen w-[4.5em]">
      <div className="flex flex-col space-y-6">
        {SidebarConfig.slice(0, -1).map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  onClick={() => {}}
                  className="py-6 px-3"
                >
                  <img src={item.icon} alt={item.name} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={7} className="bg-black">
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      <Button variant="ghost" onClick={() => {}} className="py-6 px-3">
        <img
          src={SidebarConfig[SidebarConfig.length - 1].icon}
          alt={SidebarConfig[SidebarConfig.length - 1].name}
        />
      </Button>
    </aside>
  );
};

export default Sidebar;
