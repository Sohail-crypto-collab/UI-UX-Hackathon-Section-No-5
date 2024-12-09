"use client";

import React from "react";
import Link from "next/link";
import { Heart, Search, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/ContactForm" },
    { label: "About", href: "/AboutUs" },
    { label: "Pages", href: "/ProductDetail" },
    { label: "Product", href: "/Product" },
  ];

  return (
    <header className="w-full border-b">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <p className="sr-only">Toggle menu</p>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-normal hover:font-extrabold transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden md:flex space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-normal hover:font-extrabold transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <form className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="What are you looking for?"
                className="w-full sm:w-[250px] pl-9 pr-4"
              />
            </form>

            <Button variant="ghost" size="icon" className="ml-2">
              <Heart className="w-5 h-5" />
            </Button>

            <Button variant="outline" size="icon" className="sm:hidden">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

