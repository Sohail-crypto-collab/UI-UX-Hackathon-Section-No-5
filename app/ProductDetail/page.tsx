"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'

interface FeaturedProduct {
  id: number
  name: string
  price: number
  image: string
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 99,
    image: "/Image (2).png"
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 39,
    image: "/Image (2).png"
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 39,
    image: "/Image (2).png"
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 39,
    image: "/Image (2).png"
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: 99,
    image: "/Image (2).png"
  }
]

export default function ProductDetail() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* Product Section */}
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-pink-50">
            <Image
              src="/Image (2).png"
              alt="Library Stool Chair"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Library Stool Chair
              </h1>
              <div className="inline-flex items-center rounded-md bg-teal-600/10 px-2.5 py-1">
                <span className="text-sm font-medium text-teal-600">
                  $20.00 USD
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor
              sit amet, consectetur adipiscing
            </p>

            <a href="/ShoppingCarT">
            <Button 
              className="w-fit bg-teal-600 hover:bg-teal-700" 
              size="lg"
            >
            
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add To Cart
            </Button>
            </a>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">FEATURED PRODUCTS</h2>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              View all
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

