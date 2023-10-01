"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimitCount: number;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ apiLimitCount }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden" asChild>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar apiLimitCount={apiLimitCount} />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
