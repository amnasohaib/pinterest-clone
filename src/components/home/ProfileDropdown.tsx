"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RxAvatar } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { user } from "@/lib/config/user-config";

const ProfileDropdown = () => {
  const router = useRouter();
  return (
    <div className="flex items-center p-1 w-auto rounded-lg">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <RxAvatar
              onClick={() => {
                router.push("/profile");
              }}
              size={45}
              className="cursor-pointer p-2 rounded-lg hover:bg-lightgray"
            />
          </TooltipTrigger>
          <TooltipContent className="bg-black">
            <p>Your Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenu>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger className="rounded-full p-[2px] h-max hover:bg-lightgray">
                <ChevronDown size="20" />
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent className="bg-black">
              <p>Accounts</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DropdownMenuContent className="w-[18em] mr-2 rounded-2xl p-2">
          <DropdownMenuLabel className="text-[12px] font-regular">
            Currently in
          </DropdownMenuLabel>

          <DropdownMenuItem className="py-2 flex items-start gap-2 rounded-lg">
            <div className="h-12 w-12 flex items-center justify-center">
              <RxAvatar className="h-12 w-12" />
            </div>
            <div className="flex flex-col text-xs">
              <span className="font-bold">{user.firstName}</span>
              <span>{user.accountType}</span>
              <span>{user.email}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuLabel className="text-[12px] font-regular">
            Your Accounts
          </DropdownMenuLabel>
          <DropdownMenuItem className="p-2 rounded-lg">
            Add Pinterest account
          </DropdownMenuItem>
          <DropdownMenuItem className="p-2 rounded-lg">
            Convert to{" "}
            {user.accountType == "Personal" ? "business" : "personal"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
