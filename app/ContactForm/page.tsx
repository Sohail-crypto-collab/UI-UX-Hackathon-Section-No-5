import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock } from 'lucide-react'

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Get In Touch With Us</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            For More Information About Our Products & Services, Please Feel Free To Drop Us An Email. Our Staff Always be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Working Time</h3>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="ABC"
                
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="ABC@def.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                placeholder="This is an optional"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Hi! I'd like to ask about"
                className="min-h-[120px]"
                required
              />
            </div>

            <a href="../ThankYou">
            <Button 
              type="submit" 
              className="w-full bg-teal-600 hover:bg-teal-700"
              
            >
              Submit
            </Button>
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

