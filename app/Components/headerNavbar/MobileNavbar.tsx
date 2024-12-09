import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Heart } from "lucide-react";

const MobileNavbar = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Contact", href: "#" },
    { label: "About", href: "#" },
    { label: "Sign Up", href: "#" },
  ];
  return (
    <div className="flex  justify-between w-full p-2 sm:p-3">
      <div className="flex justify-start space-x-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="secondary"
              className="flex justify-end bg-transparent"
            >
              <Menu className="w-[16px] h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <nav className="flex flex-col items-center justify-center gap-5 p-5 text-lg font-bold">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center ">
          <h1 className="text-xl space-x-10 font-bold sm:text-3xl sm:font-bold">Exclusive</h1>
        </Link>
        <div className="flex items-center space-x-0 lg:space-x-1 xl:space-x-1 sm:space-x-3 ">
          <form className="relative space-x-10">
            <Search className="absolute left-12 lg:top-1 xl:top-1  h-6 w-6 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 h-6 w-[150px] sm:w-[300px] sm:h-8 bg-none"
            />
          </form>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5 sm:w-10 sm:h-10" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="w-5 h-5 sm:w-10 sm:h-10" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
