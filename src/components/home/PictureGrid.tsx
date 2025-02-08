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
import { Boards } from "@/lib/config/boards-config";
import BoardMenuItem from "./BoardMenuItem";

interface Image {
  id: number;
  url: string;
  alt: string;
}

const breakpointColumns = {
  default: 5,
  1536: 4,
  1280: 3,
  1024: 2,
  640: 1,
};

const PictureGrid = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState<Image[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      const dummyImages = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        url: `https://picsum.photos/400/${Math.floor(
          Math.random() * 400 + 300
        )}?random=${i}`,
        alt: `Random image ${i}`,
      }));
      setImages(dummyImages);
      setLoading(false);
    }, 1000);
  }, []);

  const handleMouseEnter = (id: number) => {
    setIsHovered(id);
  };

  const handleMouseLeave = (id: number) => {
    if (!isDropdownOpen) {
      setIsHovered(null);
    }
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4"
      >
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="mb-4">
                <Skeleton className="w-full bg-lightgray h-[300px] rounded-lg" />
              </div>
            ))
          : images.map((image) => (
              <div
                onMouseEnter={() => handleMouseEnter(image.id)}
                onMouseLeave={() => handleMouseLeave(image.id)}
                key={image.id}
                className="relative mb-4 rounded-lg overflow-hidden group"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full transition-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isHovered === image.id && (
                  <div className="w-full p-4 absolute top-0">
                    <div className="flex justify-between w-full">
                      <DropdownMenu
                        onOpenChange={(open) => {
                          setIsDropdownOpen(open);
                          if (!open) {
                            setTimeout(() => {
                              if (!isDropdownOpen) {
                                setIsHovered(null);
                              }
                            }, 100);
                          }
                        }}
                      >
                        <DropdownMenuTrigger
                          className={`text-white bg-black ${
                            !isDropdownOpen && "bg-transparent"
                          } rounded-full py-2 px-4 hover:bg-black hover:bg-opacity-50 flex gap-2 items-center`}
                        >
                          board 1 <ChevronDown />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[23em] ml-16 rounded-xl">
                          <DropdownMenuLabel className="text-center pb-6">
                            Save to Board
                          </DropdownMenuLabel>
                          <div className="h-[25em] overflow-y-auto">
                            <DropdownMenuLabel className="font-normal text-xs">
                              Top Choices
                            </DropdownMenuLabel>
                            {Boards.toSorted(() => Math.random() - 0.5)
                              .slice(0, 2)
                              .map((item, index) => (
                                <BoardMenuItem item={item} index={index} />
                              ))}
                            <DropdownMenuLabel className="font-normal text-xs">
                              All Boards
                            </DropdownMenuLabel>
                            {Boards.map((item, index) => (
                              <BoardMenuItem item={item} index={index} />
                            ))}
                          </div>
                          <div className="flex cursor-pointer items-center hover:bg-lightgray gap-3 bg-white sticky p-2 bottom-0">
                            <Plus
                              size={40}
                              className="bg-lightgray rounded-lg p-2"
                            />
                            <span className="font-semibold">Create Board</span>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button className="shadow-none py-6 px-5 hover:opacity-50 bg-primary rounded-full">
                        Save
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
      </Masonry>
    </div>
  );
};

export default PictureGrid;
