"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const socialMedia = [
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://facebook.com/yourpage",
      color: "hover:text-blue-500",
      ariaLabel: "Visit our Facebook page"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com/yourpage",
      color: "hover:text-pink-500",
      ariaLabel: "Follow us on Instagram"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://youtube.com/yourchannel",
      color: "hover:text-red-500",
      ariaLabel: "Subscribe to our YouTube channel"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com/company/yourpage",
      color: "hover:text-blue-600",
      ariaLabel: "Connect with us on LinkedIn"
    },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Header Bar with Multi-Color Gradient Background - SEO Optimized */}
<div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white py-3">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 text-sm">
      
      {/* Left Side: Phone Numbers */}
      <div className="flex flex-wrap items-center gap-4">
        <a 
          href="tel:+919876543210" 
          className="flex items-center gap-2 hover:text-teal-100 transition-colors group"
          itemProp="telephone"
          aria-label="Call us at +91 98765 43210"
        >
          <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
            <Phone size={14} className="text-white" aria-hidden="true" />
          </div>
          <span className="font-medium">+91 98765 43210</span>
        </a>
        
        <a 
          href="tel:+919876543211" 
          className="flex items-center gap-2 hover:text-teal-100 transition-colors group"
          aria-label="Call us at +91 98765 43211"
        >
          <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
            <Phone size={14} className="text-white" aria-hidden="true" />
          </div>
          <span className="font-medium">+91 98765 43211</span>
        </a>
      </div>

      {/* Center: Email */}
      <div className="flex items-center">
        <a 
          href="mailto:drsushma@dentalclinic.com" 
          className="flex items-center gap-2 hover:text-teal-100 transition-colors group"
          itemProp="email"
          aria-label="Email us at drsushma@dentalclinic.com"
        >
          <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
            <Mail size={14} className="text-white" aria-hidden="true" />
          </div>
          <span className="font-medium">drsushma@dentalclinic.com</span>
        </a>
      </div>

      {/* Right Side: Timings & Social Media */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        {/* Business Hours */}
        <div className="flex items-center gap-2 group" itemProp="openingHours" content="Mo-Sa 09:00-20:00 Su 10:00-14:00">
          <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
            <Clock size={14} className="text-white" aria-hidden="true" />
          </div>
          <span className="font-medium hidden xl:inline">Mon-Sat: 9AM-8PM | Sun: 10AM-2PM</span>
          <span className="font-medium xl:hidden">Mon-Sat: 9AM-8PM</span>
        </div>

        {/* Social Media Icons - Brand Colors on Hover */}
        <nav aria-label="Social media links" className="flex items-center gap-2">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-2 rounded-full hover:bg-blue-600 hover:scale-110 transform transition-all duration-200"
            aria-label="Visit our Facebook page"
          >
            <Facebook size={16} className="text-white" />
          </a>
          
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-2 rounded-full hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:scale-110 transform transition-all duration-200"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={16} className="text-white" />
          </a>
          
          <a
            href="https://youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-2 rounded-full hover:bg-red-600 hover:scale-110 transform transition-all duration-200"
            aria-label="Subscribe to our YouTube channel"
          >
            <Youtube size={16} className="text-white" />
          </a>
          
          <a
            href="https://linkedin.com/company/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-2 rounded-full hover:bg-blue-700 hover:scale-110 transform transition-all duration-200"
            aria-label="Connect with us on LinkedIn"
          >
            <Linkedin size={16} className="text-white" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</div>



      {/* Main Navigation Header - SEO Optimized */}
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo + Clinic Name - SEO Optimized */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            aria-label="Dr. Sushma Dental Clinic - Home"
          >
            {/* Logo Image - Optimized with Next.js Image */}
            <Image 
              src="/logo.png" 
              alt="Dr. Sushma Dental Clinic Logo - Best Dental Care" 
              width={56}
              height={56}
              className="object-contain group-hover:scale-105 transition-transform duration-200"
              priority
              quality={90}
            />
            
            {/* Clinic Name with Heading */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-teal-600 leading-tight group-hover:text-teal-700 transition-colors">
                Dr. Sushma Dental Clinic
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                Your Smile, Our Priority
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button asChild className="bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg transition-all">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - SEO Optimized */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4" role="menu">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 mt-2 shadow-md">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
