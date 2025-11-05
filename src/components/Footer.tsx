import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">
              Dr. Sri Sushma Dental Clinic
            </h3>
            <p className="text-sm mb-4">
              Providing exceptional dental care with advanced technology and compassionate service for over 15 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/general" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/cosmetic" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/orthodontics" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link href="/services/pediatric" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Pediatric Dentistry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Main Street, Medical Plaza, Hyderabad, Telangana 500001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@srisushma.dental</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Mon-Sat: 9:00 AM - 8:00 PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Sri Sushma Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
