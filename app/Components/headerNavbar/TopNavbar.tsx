"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <section className="w-full bg-[#F0F2F3] py-5">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image 
              src="/Logo Icon.png" 
              alt="Comforty Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
            <Link href="#">
              <h1 className="text-sm font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-sky-700">
                Comforty
              </h1>
            </Link>
          </div>

          <Link href="/ShoppingCarT">
            <Button
              variant="ghost"
              size="sm"
              className="bg-blue-300 hover:bg-blue-400 transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopNavbar;

