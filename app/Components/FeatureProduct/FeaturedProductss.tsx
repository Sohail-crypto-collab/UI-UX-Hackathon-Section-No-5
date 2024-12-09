import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Product {
  id: number
  name: string
  price: number
  image: string
  badge?: {
    text: string
    variant: 'default' | 'secondary' | 'outline' | 'destructive'
  }
}

const products: Product[] = [
  {
    id: 1,
    name: 'Library Stool Chair',
    price: 20,
    image: "/Image.png",
    badge: {
      text: 'New',
      variant: 'default'
    }
  },
  {
    id: 2,
    name: 'Library Stool Chair',
    price: 20,
    image: "/Image.png",
    badge: {
      text: 'WKND',
      variant: 'destructive'
    }
  },
  {
    id: 3,
    name: 'Library Stool Chair',
    price: 20,
    image: "/Image (3).png"
  },
  {
    id: 4,
    name: 'Library Stool Chair',
    price: 20,
    image: "/card.png"
  }
]

export default function FeatureProducts() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {products.map((product) => (
              <Card key={product.id} className="border-none shadow-xl transition duration-300 transform hover:scale-105">
                <CardContent className="p-0 space-y-3">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    {product.badge && (
                      <Badge 
                        variant={product.badge.variant}
                        className="absolute top-3 left-3 z-10"
                      >
                        {product.badge.text}
                      </Badge>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">${product.price}</p>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

