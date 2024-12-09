import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: number
  image: string
  badge?: {
    text: string
    variant: "default" | "secondary" | "destructive"
  }
}

const products: Product[] = [
  {
    id: 1,
    name: "Luxury Stool Chair",
    price: 29,
    image: "/Image (1).png",
    badge: {
      text: "New",
      variant: "default"
    }
  },
  {
    id: 2,
    name: "Luxury Stool Chair",
    price: 29,
    image: "/Image (1).png",
    badge: {
      text: "Sale",
      variant: "destructive"
    }
  },
  {
    id: 3,
    name: "Luxury Stool Chair",
    price: 30,
    image: "/Image (3).png"
  },
  {
    id: 4,
    name: "Luxury Stool Chair",
    price: 29,
    image: "/Image (1).png"
  },
  {
    id: 5,
    name: "Luxury Stool Chair",
    price: 30,
    image: "/Image (1).png",
    badge: {
      text: "New",
      variant: "default"
    }
  },
  {
    id: 6,
    name: "Luxury Stool Chair",
    price: 30,
    image: "/Image (3).png",
    badge: {
      text: "Sale",
      variant: "destructive"
    }
  },
  {
    id: 7,
    name: "Luxury Stool Chair",
    price: 30,
    image: "/Image (1).png"
  },
  {
    id: 8,
    name: "Luxury Stool Chair",
    price: 30,
    image: "/Image (3).png"
  }
]

export default function ProductGrid() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer overflow-hidden border-none "
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {product.badge && (
                  <div className="absolute top-2 left-2">
                    <Badge variant={product.badge.variant}>{product.badge.text}</Badge>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

