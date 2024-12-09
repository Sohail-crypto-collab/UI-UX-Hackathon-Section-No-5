import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="bg-gradient-to-r from-blue-700 to-blue-300 text-white py-16 md:py-32 px-8 md:px-16 lg:px-32 shadow-lg rounded-lg overflow-hidden">
          <div className="mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4">
              Thank You for Shopping!
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-semibold">
              We appreciate your business and hope to see you again soon!
            </p>
            <Link href="/">
              <button className="bg-white text-xl md:text-2xl text-blue-500 font-extrabold py-4 md:py-7 px-8 md:px-12 rounded-full shadow-md hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

