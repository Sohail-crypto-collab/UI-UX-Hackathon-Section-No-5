import Image from "next/image"


import { Heart, Trash2 } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CartItem {
    id: number
    name: string
    description: string
    price: number
    image: string
}

const cartItems: CartItem[] = [
    {
        id: 1,
        name: "Library Stool Chair",
        description: "Ashen Stone/Cobalt Bliss",
        price: 99,
        image: "/Frame.png"
    },
    {
        id: 2,
        name: "Library Stool Chair",
        description: "Ashen Stone/Cobalt Bliss",
        price: 99,
        image: "/Frame.png"
    }
]

export default function ShoppingCart() {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
    const shipping = 0 // Free shipping
    const total = subtotal + shipping

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <h1 className="text-2xl font-bold mb-6">Bag</h1>
                        <div className="space-y-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-6">
                                    <div className="relative h-32 w-32 flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-medium">{item.name}</h3>
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                            <div className="flex gap-4">
                                                <Select defaultValue="L">
                                                    <SelectTrigger className="w-24">
                                                        <SelectValue placeholder="Size" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="S">S</SelectItem>
                                                        <SelectItem value="M">M</SelectItem>
                                                        <SelectItem value="L">L</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <Select defaultValue="1">
                                                    <SelectTrigger className="w-24">
                                                        <SelectValue placeholder="Quantity" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {[1, 2, 3, 4, 5].map((num) => (
                                                            <SelectItem key={num} value={num.toString()}>
                                                                {num}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-4">
                                                <button className="text-gray-400 hover:text-gray-500">
                                                    <Heart className="h-5 w-5" />
                                                </button>
                                                <button className="text-gray-400 hover:text-gray-500">
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                            <p className="font-medium">MRP ${item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="rounded-lg bg-gray-50 p-6">
                            <h2 className="text-lg font-medium mb-6">Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Subtotal</p>
                                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Estimated Delivery & Handling</p>
                                    <p className="font-medium">Free</p>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between">
                                        <p className="text-gray-900 font-medium">Total</p>
                                        <p className="font-medium">${total.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div>
                                    {/* rest of the component */}
                                    <a href="../ThankYou">
                                        <button className="w-full bg-teal-600 hover:bg-teal-700 mt-4">
                                            Member Checkout
                                        </button>
                                    </a>
                                    {/* rest of the component */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

