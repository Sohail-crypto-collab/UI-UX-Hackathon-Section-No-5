import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  badge?: {
    text: string
    variant: "success" | "warning"
  }
}

const products: Product[] = [
  {
    id: 1,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image (3).png",
    badge: {
      text: "New",
      variant: "success"
    }
  },
  {
    id: 2,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image (3).png",
    badge: {
      text: "Sale",
      variant: "warning"
    }
  },
  {
    id: 3,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image product 1.png"
  },
  {
    id: 4,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image (3).png"
  },
  {
    id: 5,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image (3).png",
    badge: {
      text: "New",
      variant: "success"
    }
  },
  {
    id: 6,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image product 1.png",
    badge: {
      text: "Sale",
      variant: "warning"
    }
  },
  {
    id: 7,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image (3).png"
  },
  {
    id: 8,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image (3).png"
  },
  {
    id: 9,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image product 1.png",
    badge: {
      text: "New",
      variant: "success"
    }
  },
  {
    id: 10,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image (3).png",
    badge: {
      text: "Sale",
      variant: "warning"
    }
  },
  {
    id: 11,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image (3).png"
  },
  {
    id: 12,
    name: "Luxury Stool Chair",
    price: 20,
    image: "/Image product 1.png"
  }
]

export default function AllProductGrid() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">All Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {product.badge && (
                  <div className="absolute top-2 left-2">
                    <Badge 
                      className={`${
                        product.badge.variant === 'success' 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-orange-500 hover:bg-orange-600'
                      }`}
                    >
                      {product.badge.text}
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  <button 
                    className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

