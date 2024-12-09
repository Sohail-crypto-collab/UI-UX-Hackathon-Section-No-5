"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Woman's Fashion",
    href: "#",
    subCategories: ["Dresses", "Tops", "Shoes", "Accessories"],
  },
  {
    name: "Men's Fashion",
    href: "#",
    subCategories: ["Shirts", "Pants", "Shoes", "Accessories"],
  },
  {
    name: "Home & Lifestyle",
    href: "#",
    subCategories: ["Furniture", "Decor", "Kitchenware", "Bedding"],
  },
  {
    name: "Medicine",
    href: "#",
    subCategories: [
      "Prescription",
      "Over-the-counter",
      "Vitamins",
      "First Aid",
    ],
  },
  {
    name: "Sports & Outdoor",
    href: "#",
    subCategories: ["Fitness", "Camping", "Bicycles", "Team Sports"],
  },
  {
    name: "Baby & Toys",
    href: "#",
    subCategories: ["Baby Gear", "Clothing", "Toys", "Nursery"],
  },
  {
    name: "Groceries & Pets",
    href: "#",
    subCategories: ["Fresh Food", "Pantry", "Dog Supplies", "Cat Supplies"],
  },
  {
    name: "Health & Beauty",
    href: "#",
    subCategories: ["Skincare", "Makeup", "Hair Care", "Fragrances"],
  },
];

export default function SideNavbar() {
  return (
    <div className="w-80 border-r border-border min-h-6 p-4 font-medium bg-background">
      <nav className="pl-24">
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.name} className="group relative">
              <Link
                href={category.href}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-colors duration-300 hover:bg-accent hover:text-black hover:font-bold"
              >
                <p className="">{category.name}</p>
                <ChevronRight className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </Link>
              <div className="absolute left-full top-0 ml-2 w-48 bg-popover rounded-md shadow-lg opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
                <ul className="py-1">
                  {category.subCategories.map((subCategory) => (
                    <li key={subCategory}>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        {subCategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
