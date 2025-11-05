"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import BlogCarousel from "@/components/BlogCarousel"
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles } from "lucide-react"

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
        <div className="relative h-64 sm:h-80">
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
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">
            Before
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">
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
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
      </div>
    </div>
  )
}

export default function BridgesCrownsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Enable scroll animations
  useScrollAnimation()

  // SERVICE DATA - SEO OPTIMIZED
  const serviceData = {
    title: "Bridges & Crowns",
    subtitle: "Restore Your Smile with Premium Dental Crowns and Bridges",
    heroImage: "/images/services/bridges-crowns/hero.jpg",
    
    // SEO Meta Information
    seo: {
      title: "Best Dental Crowns & Bridges in Hyderabad | Crown Cost & Treatment - Dr. Sushma Dental Clinic",
      description: "Get premium dental crowns and bridges in Hyderabad at Dr. Sushma Dental Clinic. Natural-looking restorations from ₹5,000. 10-15 year durability. Same-day CEREC crowns available. Book now!",
      keywords: "dental crowns hyderabad, dental bridges hyderabad, tooth crown cost, porcelain crowns, zirconia crowns, crown and bridge treatment, dental crown procedure, same day dental crown, CEREC crown, crown bridge specialist hyderabad, affordable dental crowns",
      canonical: "https://drsushmadentalclinic.com/services/bridges-crowns"
    },
    
    description: "Experience the gold standard in dental restoration at Dr. Sushma Dental Clinic in Hyderabad. Our advanced dental crowns and bridges combine cutting-edge technology with artistic precision to deliver restorations that look, feel, and function like your natural teeth. With over 15 years of experience, we specialize in all-porcelain crowns, zirconia crowns, porcelain-fused-to-metal crowns, and custom dental bridges. Whether you need to restore a damaged tooth, replace a missing tooth, or enhance your smile aesthetics, we provide durable, natural-looking solutions.",
    
    fullDescription: "Dental crowns are tooth-shaped caps placed over damaged or weakened teeth to restore their shape, size, strength, and appearance. Dental bridges are fixed prosthetics that replace one or more missing teeth by anchoring to adjacent healthy teeth. Using premium materials like porcelain, zirconia, and ceramic, along with advanced CAD/CAM technology, we create custom restorations that match your natural teeth perfectly. Our crowns and bridges are designed to last 10-15 years or longer with proper care, providing you with a confident, beautiful smile.",
    
    benefits: [
      "Natural-looking restoration that blends seamlessly",
      "Exceptional 10-15 year durability",
      "Restores full chewing and speaking function",
      "Protects weakened teeth from damage",
      "Custom color-matched to your teeth",
      "Minimally invasive procedure",
      "Prevents tooth shifting",
      "Biocompatible materials"
    ],

    process: [
      {
        step: "1",
        title: "Consultation & Exam",
        description: "Thorough examination with digital X-rays and 3D imaging to assess tooth condition and plan restoration"
      },
      {
        step: "2",
        title: "Tooth Preparation",
        description: "Careful preparation of tooth under local anesthesia, removing decay and shaping for crown placement"
      },
      {
        step: "3",
        title: "Digital Impression",
        description: "Precise 3D scanning of prepared tooth and placement of temporary crown for protection"
      },
      {
        step: "4",
        title: "Custom Fabrication",
        description: "Expert crafting of permanent crown using premium materials matched to your natural teeth"
      },
      {
        step: "5",
        title: "Final Placement",
        description: "Perfect fitting, adjustment, and permanent bonding of crown for optimal comfort and function"
      }
    ],

    types: [
      {
        name: "All-Porcelain Crowns",
        description: "Premium metal-free crowns with superior aesthetics and biocompatibility",
        features: ["Most natural look", "Stain-resistant", "Metal-free", "Ideal for front teeth"],
        icon: Star
      },
      {
        name: "Porcelain-Fused-to-Metal",
        description: "Strong combination of metal strength and porcelain aesthetics",
        features: ["Maximum strength", "Cost-effective", "Proven longevity", "Back teeth ideal"],
        icon: Shield
      },
      {
        name: "Zirconia Crowns",
        description: "Ultra-strong, biocompatible advanced ceramic technology",
        features: ["Strongest option", "Metal-free", "Chip-resistant", "Minimal tooth removal"],
        icon: Award
      }
    ],

    beforeAfterGallery: [
      {
        before: "/images/services/bridges-crowns/before-after/crown-before.jpg",
        after: "/images/services/bridges-crowns/before-after/crown-after.jpg",
        title: "Porcelain Crown Restoration",
        description: "Natural-looking front tooth restoration"
      },
      {
        before: "/images/services/bridges-crowns/before-after/bridge-before.jpg",
        after: "/images/services/bridges-crowns/before-after/bridge-after.jpg",
        title: "Dental Bridge Placement",
        description: "Three-unit bridge replacing missing tooth"
      },
      {
        before: "/images/services/bridges-crowns/before-after/multiple-before.jpg",
        after: "/images/services/bridges-crowns/before-after/multiple-after.jpg",
        title: "Multiple Crown Restoration",
        description: "Complete smile makeover with multiple crowns"
      }
    ],

    faqs: [
      {
        question: "How long do dental crowns and bridges last?",
        answer: "With proper care, dental crowns typically last 10-15 years, while bridges last 5-15 years or longer. Many patients enjoy their restorations for 20+ years with excellent oral hygiene including brushing twice daily, flossing, regular checkups every 6 months, and avoiding hard foods. The lifespan depends on material quality, placement technique, oral hygiene habits, and bite forces."
      },
      {
        question: "Is the dental crown procedure painful?",
        answer: "No, the crown procedure is completely painless as it's performed under local anesthesia. You won't feel any pain during tooth preparation or crown placement. Some mild sensitivity or tenderness for 2-3 days after the procedure is normal and easily managed with over-the-counter pain relievers like ibuprofen. Your temporary crown protects the prepared tooth until the permanent crown is ready."
      },
      {
        question: "How many dental visits are required for crowns?",
        answer: "Traditional crowns require 2-3 visits over 2-3 weeks. Visit 1: Examination, tooth preparation, impressions, temporary crown (1-2 hours). Visit 2: Permanent crown fitting and bonding (1 hour). Same-day CEREC crowns can be completed in a single 2-3 hour visit using advanced CAD/CAM technology. We'll discuss both options during your consultation."
      },
      {
        question: "What is the cost of dental crowns in Hyderabad at Dr. Sushma Dental Clinic?",
        answer: "Dental crown costs in Hyderabad at our clinic range from ₹5,000 to ₹25,000 depending on material. Porcelain-fused-to-metal: ₹5,000-12,000. All-porcelain/ceramic: ₹12,000-18,000. Zirconia crowns: ₹15,000-25,000. Dental bridges: ₹15,000-45,000 for 3-unit bridge. We provide transparent pricing, detailed written estimates, and flexible payment options including 0% EMI plans and insurance coordination."
      },
      {
        question: "Will my dental crown look natural?",
        answer: "Absolutely! We use advanced color-matching technology and high-quality materials to ensure your crown perfectly matches your natural teeth in color, shape, translucency, and texture. Our experienced technicians craft each crown with artistic precision. Most people won't be able to tell the difference between your crown and natural teeth. We take digital photos and impressions to create a restoration that blends seamlessly with your smile."
      },
      {
        question: "How do I care for my dental crown or bridge?",
        answer: "Crown care is simple and similar to natural teeth: Brush twice daily with fluoride toothpaste and soft-bristle toothbrush. Floss daily, especially around crown margins and under bridges. Use antibacterial mouthwash to prevent gum disease. Visit dentist every 6 months for professional cleaning and checkup. Avoid biting extremely hard foods like ice, hard candy, or unpopped popcorn kernels. Don't use teeth to open packages. Wear nightguard if you grind teeth (bruxism)."
      }
    ],

    priceRange: "₹5,000 - ₹25,000",
    duration: "2-3 visits over 2-3 weeks",

    relatedServices: [
      {
        name: "Dental Implants",
        description: "Permanent tooth replacement solution",
        link: "/services/implants",
        image: "/images/services/implants/hero.jpg"
      },
      {
        name: "Root Canal Treatment",
        description: "Save infected teeth painlessly",
        link: "/services/root-canal",
        image: "/images/services/root-canal/hero.jpg"
      },
      {
        name: "Teeth Whitening",
        description: "Professional smile brightening",
        link: "/services/whitening",
        image: "/images/services/whitening/hero.jpg"
      }
    ]
  }

  // Add Structured Data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Crowns and Bridges",
      "alternateName": ["Tooth Crowns", "Dental Caps", "Fixed Dental Bridges"],
      "description": "Custom dental crowns and bridges that restore damaged or missing teeth with natural-looking, durable restorations.",
      "procedureType": "Dental Restoration",
      "followup": "Regular checkups every 6 months",
      "howPerformed": "Tooth preparation, digital impressions, custom fabrication, and permanent bonding",
      "preparation": "Consultation, X-rays, treatment planning"
    }

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://drsushmadentalclinic.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://drsushmadentalclinic.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bridges & Crowns",
          "item": "https://drsushmadentalclinic.com/services/bridges-crowns"
        }
      ]
    }

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": serviceData.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }

    const script1 = document.createElement('script')
    script1.type = 'application/ld+json'
    script1.text = JSON.stringify(structuredData)
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.type = 'application/ld+json'
    script2.text = JSON.stringify(breadcrumbData)
    document.head.appendChild(script2)

    const script3 = document.createElement('script')
    script3.type = 'application/ld+json'
    script3.text = JSON.stringify(faqData)
    document.head.appendChild(script3)

    return () => {
      if (document.head.contains(script1)) document.head.removeChild(script1)
      if (document.head.contains(script2)) document.head.removeChild(script2)
      if (document.head.contains(script3)) document.head.removeChild(script3)
    }
  }, [])

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{serviceData.seo.title}</title>
        <meta name="description" content={serviceData.seo.description} />
        <meta name="keywords" content={serviceData.seo.keywords} />
        <link rel="canonical" href={serviceData.seo.canonical} />
        <meta property="og:title" content={serviceData.seo.title} />
        <meta property="og:description" content={serviceData.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={serviceData.seo.canonical} />
        <meta property="og:image" content={`https://drsushmadentalclinic.com${serviceData.heroImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={serviceData.seo.title} />
        <meta name="twitter:description" content={serviceData.seo.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Back Button */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <nav aria-label="Breadcrumb">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors group"
              >
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium text-sm sm:text-base">Back to All Services</span>
              </Link>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-teal-200/40 to-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-teal-600" />
                <span>15+ Years Excellence | 10,000+ Happy Patients</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
                Best {serviceData.title} in Hyderabad
                <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  From ₹5,000 | Same-Day Crowns Available
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
                {serviceData.subtitle} at Dr. Sushma Dental Clinic - Hyderabad's Trusted Restoration Specialist
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="/book-appointment" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Book Appointment</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 bg-white/80 backdrop-blur-sm w-full sm:w-auto">
                  <a href="tel:+919876543210" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Call +91 98765 43210</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <article className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                  <Image
                    src={serviceData.heroImage}
                    alt="Dental Crowns and Bridges Treatment in Hyderabad - Dr. Sushma Dental Clinic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </figure>

                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    About Crowns & Bridges
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    What are Dental Crowns & Bridges? Complete Guide to Tooth Restoration in Hyderabad
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {serviceData.description}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    {serviceData.fullDescription}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Duration</div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">{serviceData.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Cost Range</div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">{serviceData.priceRange}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Benefits of Dental Crowns & Bridges in Hyderabad
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  Why thousands of patients choose our crown and bridge treatments
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {serviceData.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow scroll-animate"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mb-3 sm:mb-4" />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Dental Crown Procedure: Step-by-Step Process
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Your journey to a restored smile in 5 simple steps
                </p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200"></div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
                  {serviceData.process.map((step, index) => (
                    <div 
                      key={index} 
                      className="relative scroll-animate"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <Card className="border-2 hover:border-teal-500 transition-colors h-full">
                        <CardContent className="p-4 sm:p-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
                            {step.step}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Types of Dental Crowns We Offer
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Choose the perfect crown material for your needs
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {serviceData.types.map((type, index) => {
                  const IconComponent = type.icon
                  return (
                    <Card 
                      key={index} 
                      className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardContent className="p-6 sm:p-8">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                          {type.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                          {type.description}
                        </p>
                        <div className="space-y-2">
                          {type.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Real Results
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Crown & Bridge Before & After Gallery
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See the stunning transformations from our patients in Hyderabad
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {serviceData.beforeAfterGallery.map((item, index) => (
                  <div 
                    key={index}
                    className="scroll-animate"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <BeforeAfterSlider item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                What Our Crown & Bridge Patients Say
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Real testimonials from satisfied patients in Hyderabad
              </p>
            </div>
            <div className="scroll-animate animation-delay-200">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

                {/* FAQ Section - 2 COLUMN LAYOUT */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Common questions about {serviceData.title} treatment in Hyderabad
                </p>
              </div>

              {/* 2 Column Grid - Desktop, 1 Column - Mobile */}
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                {serviceData.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-teal-500 transition-all duration-300 hover:shadow-lg scroll-animate"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-start sm:items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-teal-600 transition-transform flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-200 pt-4 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ✅ Blog Carousel Section - ADDED HERE */}
        <BlogCarousel />

        {/* Related Services */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 scroll-animate">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Related Dental Services
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Explore other treatment options
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                {serviceData.relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.link}
                    className="group block bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 scroll-animate"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="relative h-48 sm:h-56">
                      <Image
                        src={service.image}
                        alt={`${service.name} - Dr. Sushma Dental Clinic Hyderabad`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2">{service.name}</h3>
                        <p className="text-white/80 text-xs sm:text-sm">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-20" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,32 C320,96 480,0 720,32 C960,64 1120,0 1440,48 L1440,0 L0,0 Z" className="fill-gray-50" />
            </svg>
          </div>
          
          <div className="relative py-20 bg-gray-50">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-white/20">
                <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Special Offers Available
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
                  Ready to Restore Your Smile?
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg">
                    <Link href="/book-appointment" className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Book Free Consultation
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
                    <a href="tel:+919876543210" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call +91 98765 43210
                    </a>
                  </Button>
                </div>

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
        </section>
      </div>
    </>
  )
}
