"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import AnimatedCounter from "@/components/AnimatedCounter"
import {
  Smile,
  Sparkles,
  Braces,
  Baby,
  Award,
  Clock,
  Shield,
  CheckCircle2,
  Calendar,
  Phone,
  Star,
  Users,
  Heart,
  Stethoscope,
  ChevronDown,
  MessageCircle,
  Mail
} from "lucide-react"

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const services = [
  {
    icon: Smile,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    title: "General Dentistry",
    description: "Comprehensive dental care including checkups, cleanings, fillings, and preventive treatments for optimal oral health.",
    href: "/services/general"
  },
  {
    icon: Smile,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    title: "General Dentistry",
    description: "Comprehensive dental care including checkups, cleanings, fillings, and preventive treatments for optimal oral health.",
    href: "/services/general"
  },
  {
    icon: Smile,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    title: "General Dentistry",
    description: "Comprehensive dental care including checkups, cleanings, fillings, and preventive treatments for optimal oral health.",
    href: "/services/general"
  },
  {
    icon: Smile,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    title: "General Dentistry",
    description: "Comprehensive dental care including checkups, cleanings, fillings, and preventive treatments for optimal oral health.",
    href: "/services/general"
  }
]



  const whyChooseUs = [
    {
      icon: Stethoscope,
      title: "State-of-the-Art Technology",
      description: "Latest dental equipment including digital X-rays, intraoral cameras, and laser dentistry"
    },
    {
      icon: Award,
      title: "Experienced Professionals",
      description: "Highly qualified dentists with 15+ years of experience in all dental specialties"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your unique dental needs and goals"
    },
    {
      icon: Shield,
      title: "Safe & Hygienic",
      description: "Strict sterilization protocols and infection control measures for your safety"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient appointment times including early mornings and late evenings"
    },
    {
      icon: CheckCircle2,
      title: "Affordable Pricing",
      description: "Transparent pricing with flexible payment options and insurance acceptance"
    }
  ]

  const faqs = [
  {
    question: "What dental services do you offer?",
    answer: "We offer comprehensive dental services including general dentistry (checkups, cleanings, fillings), cosmetic dentistry (teeth whitening, veneers, bonding), orthodontics (braces, Invisalign, clear aligners), pediatric dentistry, root canal treatment, dental implants, crowns & bridges, gum treatment, wisdom tooth extraction, and emergency dental care.",
    link: "/services"
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans including ICICI Lombard, Star Health, Max Bupa, HDFC Ergo, and more. Our team will help verify your coverage and maximize your benefits. We also offer flexible payment options and EMI facilities for treatments not covered by insurance.",
    link: null
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every 6 months for regular checkups and professional cleaning. However, the frequency may vary based on your individual oral health needs. Patients with gum disease or other dental conditions may need more frequent visits.",
    link: null
  },
  {
    question: "Do you provide emergency dental services?",
    answer: "Yes, we provide same-day emergency dental services for urgent issues like severe toothache, broken teeth, knocked-out teeth, dental injuries, abscesses, and lost fillings. Call us immediately at +91 98765 43210 for emergency appointments. We prioritize urgent cases to provide immediate relief.",
    link: "/contact"
  },
  {
    question: "Is teeth whitening safe and how long does it last?",
    answer: "Yes, professional teeth whitening performed at our clinic is completely safe and effective. We use FDA-approved whitening agents and follow proper protocols to protect your gums and enamel. Results typically last 1-3 years depending on your oral hygiene and lifestyle habits. Touch-up treatments can extend the results.",
    link: "/services/cosmetic"
  },
  {
    question: "What is the cost of dental treatments?",
    answer: "Treatment costs vary depending on the complexity and type of procedure. We offer transparent pricing with no hidden charges. During your consultation, we'll provide a detailed treatment plan with exact costs. We also offer flexible payment options, EMI facilities, and accept all major insurance plans to make dental care affordable.",
    link: null
  },
  {
    question: "Are dental implants better than dentures?",
    answer: "Dental implants are a permanent solution that looks and functions like natural teeth. They prevent bone loss and don't require removal for cleaning. Dentures are removable and more affordable initially. During consultation, Dr. Sushma will evaluate your case and recommend the best option based on your oral health, budget, and lifestyle.",
    link: "/services/general"
  },
  {
    question: "Is the treatment painful? Do you use anesthesia?",
    answer: "We use modern pain management techniques including local anesthesia to ensure comfortable, pain-free treatments. Most procedures are performed under local anesthesia, and we also offer sedation options for anxious patients. Our gentle approach and advanced technology minimize discomfort during and after treatment.",
    link: null
  },
  {
    question: "How long does a typical dental procedure take?",
    answer: "Duration varies by procedure: routine checkups take 30-45 minutes, teeth cleaning 45-60 minutes, fillings 30-60 minutes, root canal 1-2 hours, teeth whitening 60-90 minutes, and dental implants may require multiple appointments. We'll provide a time estimate during your consultation.",
    link: null
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer: "For dental emergencies, call us immediately at +91 98765 43210. For knocked-out teeth, rinse gently and try to place back in socket or keep in milk. For severe pain, rinse with warm salt water and take over-the-counter pain relief. For broken teeth, save any pieces and rinse mouth with warm water. We prioritize emergency cases for same-day treatment.",
    link: "/contact"
  },
  {
    question: "Do you treat children? What age can they start visiting?",
    answer: "Yes, we specialize in pediatric dentistry and welcome children of all ages. We recommend first dental visits around age 1 or when the first tooth appears. Our child-friendly environment and gentle approach make dental visits fun and stress-free for kids. We focus on preventive care and education to build healthy habits early.",
    link: "/services/pediatric"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit/debit cards (Visa, Mastercard, RuPay), UPI payments (Google Pay, PhonePe, Paytm), net banking, and offer EMI options through leading banks. We also accept dental insurance and can help process your claims. No-cost EMI available for treatments above ₹20,000.",
    link: null
  }
]


  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Rated 4.9/5 by 1000+ Patients</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Smile,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Our Passion
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Experience exceptional dental care with <strong>Dr. Sri Sushma</strong>. 
                We combine advanced technology with compassionate service to give you the 
                <strong> healthy, beautiful smile</strong> you deserve.
              </p>

              {/* Quick Stats - Animated */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">
                    <AnimatedCounter end={15} suffix="+" duration={1500} />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Years Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">
                    <AnimatedCounter end={10} suffix="K+" duration={2000} />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Happy Patients</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">
                  7                                      
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Days a Week</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">
                    <AnimatedCounter end={100} suffix="%" duration={1500} />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Latest Tech</div>
                </div>
              </div>

{/* CTA Buttons with WhatsApp */}
<div className="flex flex-col sm:flex-row gap-4">
  <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Book on WhatsApp
    </a>
  </Button>
  <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
    <a href="tel:+919876543210" className="flex items-center gap-2">
      <Phone className="w-5 h-5" />
      Call +91 98765 43210
    </a>
  </Button>
</div>



              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:drsushma@dentalclinic.com" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>drsushma@dentalclinic.com</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-[600px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
                alt="Modern dental clinic with state-of-the-art equipment - Dr. Sushma Dental Clinic"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Advanced Dental Care</div>
                    <div className="text-sm text-gray-600">Latest Technology & Equipment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Rolling Numbers */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* 15+ Years */}
            <div className="text-center">
              <Award className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter end={15} suffix="+" duration={2000} />
              </div>
              <div className="text-sm md:text-base opacity-90">Years of Excellence</div>
            </div>

            {/* 10,000+ Patients */}
            <div className="text-center">
              <Smile className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter end={10000} suffix="+" duration={2500} />
              </div>
              <div className="text-sm md:text-base opacity-90">Happy Smiles</div>
            </div>

            {/* 98% Success Rate */}
            <div className="text-center">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter end={98} suffix="%" duration={2000} />
              </div>
              <div className="text-sm md:text-base opacity-90">Success Rate</div>
            </div>

            {/* 24/7 Support */}
            <div className="text-center">
              <Phone className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-3xl md:text-4xl font-bold mb-2">
                24/7
              </div>
              <div className="text-sm md:text-base opacity-90">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Hybrid Design */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        Our Expertise
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Dental Services
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Comprehensive dental care tailored to your needs with the latest technology and expert care
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => {
        const IconComponent = service.icon
        return (
          <Link 
            key={index} 
            href={service.href}
            className="group"
          >
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
              {/* Image with Icon Overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Dr. Sushma Dental Clinic`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <IconComponent className="w-8 h-8 text-teal-600" />
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  <div className="h-1 w-16 bg-teal-400 rounded-full"></div>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-teal-600 font-medium group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>

    <div className="text-center mt-12">
      <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg">
        <Link href="/services" className="flex items-center gap-2">
          Explore All Services
          <span>→</span>
        </Link>
      </Button>
    </div>
  </div>
</section>



      {/* Why Choose Us Section - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Professional dental examination at Dr. Sushma Dental Clinic"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Dr. Sri Sushma Dental Clinic?
                </h2>
                <p className="text-lg text-gray-600">
                  Your trusted partner for complete dental care with a commitment to excellence
                </p>
              </div>

              <div className="grid gap-6">
                {whyChooseUs.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="bg-teal-100 p-3 rounded-xl group-hover:bg-teal-600 transition-colors">
                        <IconComponent className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real patients about their dental experience
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>
      

{/* FAQ Section - Enhanced with More Questions & Better SEO */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-16">
      <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        Got Questions?
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Find answers to common questions about our dental services, appointments, and treatments
      </p>
    </div>

    {/* FAQ Grid Layout */}
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {/* Left Column */}
      <div className="space-y-4">
        {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-teal-100 text-teal-600 rounded-full p-2 flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900 pr-4 flex-1 leading-relaxed">
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-teal-600 transition-transform flex-shrink-0 mt-1 ${
                  openFaq === index ? 'rotate-180' : ''
                }`} 
              />
            </button>
            {openFaq === index && (
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                {faq.answer}
                {faq.link && (
                  <a href={faq.link} className="text-teal-600 hover:text-teal-700 font-medium mt-2 inline-flex items-center gap-1">
                    Learn more →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
          const actualIndex = index + Math.ceil(faqs.length / 2)
          return (
            <div 
              key={actualIndex} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenFaq(openFaq === actualIndex ? null : actualIndex)}
                className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-teal-100 text-teal-600 rounded-full p-2 flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 pr-4 flex-1 leading-relaxed">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-teal-600 transition-transform flex-shrink-0 mt-1 ${
                    openFaq === actualIndex ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openFaq === actualIndex && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                  {faq.answer}
                  {faq.link && (
                    <a href={faq.link} className="text-teal-600 hover:text-teal-700 font-medium mt-2 inline-flex items-center gap-1">
                      Learn more →
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>

   
  </div>
</section>


{/* CTA Section - Curved Blob Background with Wave Top */}
<section className="relative overflow-hidden">
   {/* Top Wave - Gentle */}
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
  <svg className="relative block w-full h-20" viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path 
      d="M0,32 C320,96 480,0 720,32 C960,64 1120,0 1440,48 L1440,0 L0,0 Z" 
      className="fill-gray-50"
    ></path>
  </svg>
</div>

  {/* Background with Blobs */}
  <div className="relative py-20 bg-gray-50">
    {/* Animated Blobs */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Blob 1 - Teal */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      
      {/* Blob 2 - Blue */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      {/* Blob 3 - Purple */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    {/* Content Card */}
    <div className="container mx-auto px-4 relative z-10">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-white/20">
        <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          ✨ Special Offers Available
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
          Ready to Transform Your Smile?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Book on WhatsApp
    </a>
  </Button>
  <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
    <a href="tel:+919876543210" className="flex items-center gap-2">
      <Phone className="w-5 h-5" />
      Call +91 98765 43210
    </a>
  </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600 mb-1">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600 mb-1">10K+</div>
            <div className="text-sm text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Curved Wave Bottom (Optional) */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        className="fill-white"
      ></path>
    </svg>
  </div>
</section>


    </div>
  )
}


 /*             <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Book on WhatsApp
    </a>
  </Button>
  <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
    <a href="tel:+919876543210" className="flex items-center gap-2">
      <Phone className="w-5 h-5" />
      Call +91 98765 43210
    </a>
  </Button>*/