"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import CTASection from "@/components/CTASection"
import { Phone, ArrowRight, Star, ChevronDown, Sparkles } from "lucide-react"

// Animation Hook
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// Before/After Slider Component
function BeforeAfterSlider({ item }: { item: { before: string; after: string; title: string; description: string } }) {
  const [sliderValue, setSliderValue] = useState(50)
  const dragging = useRef(false)

  const handleDragStart = () => {
    dragging.current = true
  }

  const handleDragEnd = () => {
    dragging.current = false
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return
    
    let clientX: number
    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }
    
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderValue(Math.max(0, Math.min(100, x)))
  }

  return (
    <div className="space-y-2">
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 select-none cursor-ew-resize"
        style={{ touchAction: 'none' }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDragMove}
      >
        <div className="relative h-80">
          <div className="absolute inset-0">
            <div 
              className="absolute top-0 left-0 bottom-0 overflow-hidden"
              style={{ width: `${sliderValue}%` }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.before}
                  alt={`Before ${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover pointer-events-none"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
            <div 
              className="absolute top-0 right-0 bottom-0 overflow-hidden"
              style={{ width: `${100 - sliderValue}%` }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.after}
                  alt={`After ${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-left pointer-events-none"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-semibold z-10 pointer-events-none">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-lg text-sm font-semibold z-10 pointer-events-none">
            After
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="drop-shadow-lg">
              <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="text-center pt-2">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Enable scroll animations
  useScrollAnimation()

  const treatments = [
    {
      title: "Bridges & Crowns",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
      description: "Restore damaged teeth with advanced dental crowns and bridges for both function and aesthetics",
      link: "/services/bridges-crowns"
    },
    {
      title: "Clear Aligners",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80",
      description: "Discreet and comfortable invisible braces treatment for teeth straightening",
      link: "/services/clear-aligners"
    },
    {
      title: "Cosmetic Dentistry",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
      description: "Transform your smile with veneers, whitening, and aesthetic dental treatments",
      link: "/services/cosmetic-dentistry"
    },
    {
      title: "Dental Fillings",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
      description: "Tooth-colored fillings to address cavities and restore dental health",
      link: "/services/fillings"
    },
    {
      title: "Dental Braces",
      image: "https://images.unsplash.com/photo-1606811971618-4486d6e6b56d?w=600&q=80",
      description: "Orthodontic treatment with traditional or ceramic braces for perfect alignment",
      link: "/services/braces"
    },
    {
      title: "Dental Implants",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
      description: "Permanent tooth replacement solution that looks and functions naturally",
      link: "/services/implants"
    },
    {
      title: "General Dentistry",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
      description: "Comprehensive checkups, cleanings, and preventive dental care",
      link: "/services/general"
    },
    {
      title: "Pediatric Dentistry",
      image: "https://images.unsplash.com/photo-1629909615957-be38c3848e41?w=600&q=80",
      description: "Gentle, specialized dental care for children of all ages",
      link: "/services/pediatric"
    },
    {
      title: "Orthodontics",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
      description: "Advanced teeth straightening with braces and clear aligners",
      link: "/services/orthodontics"
    },
    {
      title: "Preventive Dentistry",
      image: "https://images.unsplash.com/photo-1606811971618-4486d6e6b56d?w=600&q=80",
      description: "Regular checkups and cleanings to maintain optimal oral health",
      link: "/services/preventive"
    },
    {
      title: "Root Canal Treatment",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
      description: "Painless endodontic treatment to save infected teeth",
      link: "/services/root-canal"
    },
    {
      title: "Teeth Whitening",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
      description: "Professional whitening for a brighter, more confident smile",
      link: "/services/whitening"
    },
    {
      title: "Teeth Gap Treatment",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80",
      description: "Close gaps between teeth with custom veneers or bonding",
      link: "/services/gap-treatment"
    },
    {
      title: "Wisdom Tooth Removal",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
      description: "Expert surgical extraction with minimal discomfort",
      link: "/services/wisdom-tooth"
    },
    {
      title: "Emergency Dental Care",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
      description: "Same-day emergency services for urgent dental issues",
      link: "/services/emergency"
    },
    {
      title: "Dentures",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
      description: "Complete or partial dentures for comfortable tooth replacement",
      link: "/services/dentures"
    }
  ]

  const beforeAfterGallery = [
    {
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
      title: "Teeth Whitening",
      description: "3 shades brighter in one session"
    },
    {
      before: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
      after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
      title: "Clear Aligners",
      description: "12 months transformation"
    },
    {
      before: "https://images.unsplash.com/photo-1606811971618-4486d6e6b56d?w=800&q=80",
      after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
      title: "Dental Veneers",
      description: "Complete smile makeover"
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
      answer: "Yes, we provide same-day emergency dental services for urgent issues like severe toothache, broken teeth, knocked-out teeth, dental injuries, abscesses, and lost fillings. Call us immediately at +91 98765 43210 for emergency appointments.",
      link: "/contact"
    },
    {
      question: "Is teeth whitening safe and how long does it last?",
      answer: "Yes, professional teeth whitening performed at our clinic is completely safe and effective. We use FDA-approved whitening agents and follow proper protocols. Results typically last 1-3 years depending on your oral hygiene and lifestyle habits.",
      link: null
    },
    {
      question: "What is the cost of dental treatments?",
      answer: "Treatment costs vary depending on the complexity and type of procedure. We offer transparent pricing with no hidden charges. During your consultation, we'll provide a detailed treatment plan with exact costs. We also offer flexible payment options and EMI facilities.",
      link: null
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 -z-10 bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-br from-teal-200/40 to-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-6000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm animate-fade-in">
              <Star className="w-4 h-4 fill-teal-600" />
              <span>15+ Years Excellence | 10,000+ Happy Patients</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in animation-delay-100">
              Complete Dental Services for Your
              <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Perfect Smile
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
              Expert dental care with advanced technology and compassionate service. From routine checkups to complete smile makeovers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg">
                <Link href="/book-appointment" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 bg-white/80 backdrop-blur-sm">
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call +91 98765 43210
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Dental Treatments
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive care for every dental need
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatments.map((treatment, index) => (
                <Link
                  key={index}
                  href={treatment.link}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block scroll-animate"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <article>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={treatment.image}
                        alt={`${treatment.title} - Dr. Sushma Dental Clinic`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading={index < 8 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-bold text-lg">
                          {treatment.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-3">
                        {treatment.description}
                      </p>
                      
                      <div className="text-teal-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Before & After: Smile Transformations
              </h2>
              <p className="text-lg text-gray-600">
                Real results from our patients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {beforeAfterGallery.map((item, index) => (
                <div 
                  key={index}
                  className="scroll-animate"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <BeforeAfterSlider item={item} />
                </div>
              ))}
            </div>

            <div className="text-center scroll-animate animation-delay-600">
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
                <strong className="text-teal-600">Why wait?</strong> Prevent common dental problems and achieve lasting oral health at Dr. Sushma Dental Clinic. Book your appointment today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href="/book-appointment" className="flex items-center gap-2">
                    Book Appointment
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
                  <a href="tel:+919876543210" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from real patients
            </p>
          </div>
          <div className="scroll-animate animation-delay-200">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Got Questions?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers about our dental services and treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => {
              const actualIndex = index

              return (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow scroll-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                      {faq.link && (
                        <Link href={faq.link} className="text-teal-600 hover:text-teal-700 font-medium mt-2 inline-flex items-center gap-1">
                          Learn more →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Using Component */}
      <CTASection 
        variant="default"
        showStats={false}
        title="Ready to Transform Your Smile?"
        subtitle="Book your appointment today and experience world-class dental care"
      />
    </>
  )
}
