import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AboutUsSection() {
  return (
    <div className="min-h-screen mt-20">
      {/* Main container */}
      <div className="mx-auto max-w-[1440px]">
        {/* Content container */}
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-teal-600 p-8 rounded-lg">
              <h1 className="text-3xl font-bold text-white mb-4">About Us - Comforty</h1>
              <p className="text-white/90 mb-6">
                At Comforty, we believe that the right chair can transform your space and enrich your daily routine. Specializing in ergonomic designs and sustainable craftsmanship, we create furniture that seamlessly blends style with comfort.
              </p>
              <Button variant="outline" className="text-blue-300 border-white hover:bg-white hover:text-teal-600">
                View collection
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/Image About block.png"
                alt="White chair"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Brand Features */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12">What Makes Our Brand Different</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6">
                <div className="h-12 w-12 bg-teal-100 rounded-full mb-4 flex items-center justify-center">
                  <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Next day as standard</h3>
                <p className="text-sm text-gray-600">Order before 3pm and get your order the next day as standard</p>
              </Card>
              <Card className="p-6">
                <div className="h-12 w-12 bg-teal-100 rounded-full mb-4 flex items-center justify-center">
                  <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Made by true artisans</h3>
                <p className="text-sm text-gray-600">Handmade crafted goods made with real passion and craftmanship</p>
              </Card>
              <Card className="p-6">
                <div className="h-12 w-12 bg-teal-100 rounded-full mb-4 flex items-center justify-center">
                  <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Unbeatable prices</h3>
                <p className="text-sm text-gray-600">For our materials and quality you wont find better prices anywhere</p>
              </Card>
              <Card className="p-6">
                <div className="h-12 w-12 bg-teal-100 rounded-full mb-4 flex items-center justify-center">
                  <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Recycled packaging</h3>
                <p className="text-sm text-gray-600">We use 100% recycled packaging to ensure our footprint is manageable</p>
              </Card>
            </div>
          </div>

          {/* Popular Products */}
          <div>
            <h2 className="text-2xl font-bold mb-12">Our Popular Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <div className="relative h-[300px] mb-4">
                  <Image
                    src="/Large About.png"
                    alt="The Poplar suede sofa"
                    fill
                    className=" rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">The Poplar suede sofa</h3>
                <p className="text-lg font-bold text-teal-600">$99.00</p>
              </div>
              <div>
                <div className="relative h-[300px] mb-4">
                  <Image
                    src="/Photo About.png"
                    alt="The Danny chair"
                    fill
                    className=" rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">The Danny chair</h3>
                <p className="text-lg font-bold text-teal-600">$99.60</p>
              </div>
              <div>
                <div className="relative h-[300px] mb-4">
                  <Image
                    src="/Photo About.png"
                    alt="The Danny chair"
                    fill
                    className=" rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">The Danny chair</h3>
                <p className="text-lg font-bold text-teal-600">$89.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

