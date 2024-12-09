import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

interface Category {
  title: string
  productCount: number
  image: string
}

const categories: Category[] = [
  {
    title: 'Wing Chair',
    productCount: 3,
    image: "/Category.png"
  },
  {
    title: 'Wooden Chair',
    productCount: 124,
    image: "/Category.png"
  },
  {
    title: 'Desk Chair',
    productCount: 124,
    image: "/Category.png"
  }
]

export default function TopCategoriess() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Top Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {categories.map((category) => (
              <Card 
                key={category.title} 
                className="group cursor-pointer overflow-hidden rounded-lg border-none shadow-none "
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {category.productCount} Products
                      </p>
                    </div>
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

