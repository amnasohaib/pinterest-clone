import PictureGrid from "@/components/home/PictureGrid";
import ProfileDropdown from "@/components/home/ProfileDropdown";
import SearchBar from "@/components/home/SearchBar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex-1">
      <div className="flex gap-2 items-center py-3 px-6">
        <SearchBar />
        <ProfileDropdown />
      </div>
      <Separator className="hidden lg:block bg-lightgray" />
      <Tabs className="py-4 px-4" defaultValue="all">
        <TabsList className="flex mb-4 h-11 gap-4 justify-start rounded-none bg-white">
          <TabsTrigger
            value="all"
            className="rounded-none hover:bg-lightgray px-1 py-2 text-[14px] text-gray-800 !shadow-none transition-all duration-200 border-b-[3px] data-[state=active]:border-black data-[state=inactive]:border-transparent data-[state=inactive]:rounded-md"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="wallpapers"
            className="rounded-none hover:bg-lightgray px-1 py-2 text-[14px] text-gray-800 !shadow-none transition-all duration-200 border-b-[3px] data-[state=active]:border-black data-[state=inactive]:border-transparent data-[state=inactive]:rounded-md"
          >
            Wallpapers
          </TabsTrigger>
          <TabsTrigger
            value="aesthetics"
            className="rounded-none hover:bg-lightgray px-1 py-2 text-[14px] text-gray-800 !shadow-none transition-all duration-200 border-b-[3px] data-[state=active]:border-black data-[state=inactive]:border-transparent data-[state=inactive]:rounded-md"
          >
            Aesthetics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <PictureGrid />
        </TabsContent>

        <TabsContent value="wallpapers">
          <PictureGrid />
        </TabsContent>

        <TabsContent value="aesthetics">
          <PictureGrid />
        </TabsContent>
      </Tabs>
    </div>
  );
}
