"use client";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, Lock, Plus, PlusSquare } from "lucide-react";
import { Board, Boards } from "@/lib/config/boards-config";

interface BoardMenuItemProps {
  item: Board,
  index: number
}

const BoardMenuItem:React.FC<BoardMenuItemProps> = ({item, index}) => {


  return (
    <DropdownMenuItem
      key={index}
      className="flex justify-between group relative"
    >
      <span className="inline-flex items-center gap-3">
        <img src={item.img} alt="img" className="w-12 h-12 rounded-lg" />
        <span className="font-semibold">{item.name}</span>
      </span>
      <span className="flex items-center">
        {/* Lock icon that hides on hover */}
        {item.isPrivate && <Lock className="group-hover:hidden" />}
        {/* Save button that shows on hover */}
        <Button
          size="default"
          className="hidden rounded-full group-hover:flex items-center"
          onClick={(e) => {
            console.log("clicked");
            e.stopPropagation();
          }}
        >
          Save
        </Button>
      </span>
    </DropdownMenuItem>
  );
};

export default BoardMenuItem;
