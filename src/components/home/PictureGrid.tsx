"use client";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Skeleton } from "@/components/ui/skeleton";

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

  return (
    <div className="px-4">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 "
      >
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="mb-4">
                <Skeleton className="w-full bg-lightgray h-[300px] rounded-lg" />
              </div>
            ))
          : images.map((image) => (
              <div
                key={image.id}
                className="mb-4 rounded-lg overflow-hidden group relative"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full transition-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
      </Masonry>
    </div>
  );
};

export default PictureGrid;
