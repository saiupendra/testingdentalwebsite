"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import BlogCarousel from "@/components/BlogCarousel"
import CTASection from "@/components/CTASection"
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles, Eye, Zap, Heart } from "lucide-react"

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
                  alt={`Before ${item.title} - Clear Aligners Hyderabad`}
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
                  alt={`After ${item.title} - Best Clear Aligners in Hyderabad`}
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

export default function ClearAlignersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Enable scroll animations
  useScrollAnimation()

  // SERVICE DATA - SEO OPTIMIZED
  const serviceData = {
    title: "Clear Aligners",
    subtitle: "Invisible Orthodontics: Straighten Your Teeth Without Metal Braces",
    heroImage: "/images/services/clear-aligners/hero.jpg",
    
    // SEO Meta Information
    seo: {
      title: "Best Clear Aligners in Hyderabad | Invisalign Cost & Treatment - Dr. Sushma Dental Clinic",
      description: "Get affordable clear aligners (Invisalign) in Hyderabad at Dr. Sushma Dental Clinic. Invisible teeth straightening from ₹80,000. Removable, comfortable, and discreet orthodontic treatment. Book free consultation!",
      keywords: "clear aligners hyderabad, invisalign hyderabad, invisible braces cost, teeth straightening without braces, clear aligner treatment, invisalign cost india, removable braces, transparent aligners, orthodontics hyderabad, teeth alignment cost",
      canonical: "https://drsushmadentalclinic.com/services/clear-aligners"
    },
    
    description: "Transform your smile discreetly with clear aligners at Dr. Sushma Dental Clinic in Hyderabad. Our advanced clear aligner technology (similar to Invisalign) uses transparent, removable plastic trays to gradually straighten your teeth without the hassle of metal braces. Perfect for adults and teens who want a confident smile without visible orthodontics. With 15+ years of experience, we specialize in treating crowding, gaps, overbite, underbite, and crooked teeth using custom-designed aligners that fit your lifestyle.",
    
    fullDescription: "Clear aligners are virtually invisible plastic trays custom-made using 3D digital technology to fit snugly over your teeth. You wear each set of aligners for 1-2 weeks before progressing to the next set, gradually moving your teeth into their ideal positions. Unlike traditional braces with metal wires and brackets, clear aligners are removable for eating and cleaning, making them incredibly convenient. Treatment typically takes 6-18 months depending on complexity. Our state-of-the-art digital smile design shows you your final result before starting treatment.",
    
    benefits: [
      "Virtually invisible - no one will notice",
      "Removable for eating and oral hygiene",
      "No food restrictions unlike braces",
      "Comfortable with no metal irritation",
      "Fewer dental visits required",
      "Predictable results with 3D preview",
      "Maintains oral health during treatment",
      "Perfect for professional adults"
    ],

    process: [
      {
        step: "1",
        title: "3D Smile Scan & Design",
        description: "Digital 3D scan of teeth, virtual treatment plan, and preview of your final smile before starting"
      },
      {
        step: "2",
        title: "Custom Aligner Creation",
        description: "Series of custom clear aligners fabricated using advanced 3D printing technology matched to your treatment plan"
      },
      {
        step: "3",
        title: "Aligner Fitting & Instructions",
        description: "Receive your aligners with detailed wearing instructions (20-22 hours daily) and care guidelines"
      },
      {
        step: "4",
        title: "Progress Monitoring",
        description: "Regular checkups every 6-8 weeks to monitor progress, provide new aligners, and make adjustments"
      },
      {
        step: "5",
        title: "Retainer & Maintenance",
        description: "Once complete, wear retainers nightly to maintain your beautiful new smile permanently"
      }
    ],

    types: [
      {
        name: "Clear Aligner Full Treatment",
        description: "Comprehensive treatment for moderate to severe crowding, gaps, and bite issues",
        features: ["20-30 aligner sets", "12-18 month treatment", "Unlimited refinements", "Complete smile transformation"],
        icon: Star
      },
      {
        name: "Clear Aligner Express",
        description: "Quick treatment for mild alignment issues and minor spacing corrections",
        features: ["10-15 aligner sets", "6-9 month treatment", "Minor corrections", "Faster results"],
        icon: Zap
      },
      {
        name: "Teen Clear Aligners",
        description: "Specially designed aligners for teenagers with compliance indicators",
        features: ["Teen-friendly design", "Wear indicators", "Lost aligner replacement", "Parental monitoring"],
        icon: Heart
      }
    ],

    beforeAfterGallery: [
      {
        before: "/images/services/clear-aligners/before-after/crowding-before.jpg",
        after: "/images/services/clear-aligners/before-after/crowding-after.jpg",
        title: "Crowded Teeth Correction",
        description: "Severe crowding resolved in 14 months"
      },
      {
        before: "/images/services/clear-aligners/before-after/gaps-before.jpg",
        after: "/images/services/clear-aligners/before-after/gaps-after.jpg",
        title: "Gap Closure Treatment",
        description: "Front teeth gaps closed in 8 months"
      },
      {
        before: "/images/services/clear-aligners/before-after/overbite-before.jpg",
        after: "/images/services/clear-aligners/before-after/overbite-after.jpg",
        title: "Overbite Correction",
        description: "Overbite corrected with improved profile"
      }
    ],

    faqs: [
      {
        question: "How long does clear aligner treatment take?",
        answer: "Clear aligner treatment typically takes 6-18 months depending on the complexity of your case. Mild cases (minor gaps or crowding) may take 6-9 months with 10-15 aligners. Moderate to severe cases require 12-18 months with 20-30+ aligners. You'll change to a new aligner every 1-2 weeks as your teeth gradually move. We provide a precise treatment timeline during your 3D digital consultation showing exact duration."
      },
      {
        question: "Are clear aligners as effective as traditional braces?",
        answer: "Yes! Clear aligners are just as effective as traditional braces for most orthodontic issues including crowding, gaps, overbite, underbite, and crossbite. Studies show 95%+ success rates when worn 20-22 hours daily as prescribed. The key difference is comfort and aesthetics - aligners are invisible and removable. However, very severe cases or complex jaw issues may still require traditional braces. We'll assess your case during consultation."
      },
      {
        question: "How much do clear aligners cost in Hyderabad?",
        answer: "Clear aligner treatment in Hyderabad at Dr. Sushma Dental Clinic costs ₹80,000 to ₹2,50,000 depending on case complexity and treatment duration. Express treatment (mild cases): ₹80,000-1,20,000. Full treatment (moderate cases): ₹1,50,000-2,00,000. Complex cases: ₹2,00,000-2,50,000. Cost includes all aligners, checkups, refinements, and retainers. We offer 0% EMI payment plans, insurance coordination, and package discounts. Much more affordable than you think!"
      },
      {
        question: "Do I have to wear clear aligners all day?",
        answer: "Yes, clear aligners must be worn 20-22 hours per day for optimal results. You only remove them for eating meals, drinking anything except water, and brushing/flossing (total 2-4 hours daily). This consistent wear time applies gentle pressure to move teeth gradually. Wearing less than 20 hours daily will delay treatment and reduce effectiveness. The beauty is you CAN remove them for special occasions, photos, or important meetings unlike fixed braces."
      },
      {
        question: "Are clear aligners painful or uncomfortable?",
        answer: "Clear aligners are much more comfortable than traditional braces. You may feel mild pressure or tightness for 2-3 days when starting each new aligner set as teeth begin moving - this is normal and means treatment is working. This discomfort is easily managed with over-the-counter pain relievers and subsides quickly. No sharp wires or brackets means no mouth sores or irritation. Most patients adapt within a week and find aligners barely noticeable."
      },
      {
        question: "Can I eat and drink with clear aligners?",
        answer: "You must REMOVE aligners before eating or drinking anything except cold water. This prevents staining and damage. With aligners removed, eat whatever you want - no food restrictions unlike braces! After eating, brush your teeth before reinserting aligners to maintain hygiene. Avoid hot beverages while wearing aligners as heat can warp the plastic. Never chew gum with aligners in. This removability for meals is one of the biggest advantages over fixed braces."
      }
    ],

    priceRange: "₹80,000 - ₹2,50,000",
    duration: "6-18 months",

    relatedServices: [
      {
        name: "Traditional Braces",
        description: "Metal or ceramic fixed braces",
        link: "/services/braces",
        image: "/images/services/braces/hero.jpg"
      },
      {
        name: "Teeth Whitening",
        description: "Brighten your straightened smile",
        link: "/services/whitening",
        image: "/images/services/whitening/hero.jpg"
      },
      {
        name: "Dental Veneers",
        description: "Instant smile transformation",
        link: "/services/veneers",
        image: "/images/services/veneers/hero.jpg"
      }
    ]
  }

  // Add Structured Data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Clear Aligners Treatment",
      "alternateName": ["Invisible Braces", "Invisalign", "Transparent Aligners"],
      "description": "Invisible orthodontic treatment using custom clear plastic aligners to straighten teeth without metal braces. Removable, comfortable, and discreet.",
      "procedureType": "Orthodontic Treatment",
      "followup": "Checkups every 6-8 weeks",
      "howPerformed": "3D digital scanning, custom aligner fabrication, progressive teeth movement with aligner series",
      "preparation": "Consultation, 3D smile scan, digital treatment planning"
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
          "name": "Clear Aligners",
          "item": "https://drsushmadentalclinic.com/services/clear-aligners"
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
                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Invisible • Comfortable • Removable</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
                Best {serviceData.title} in Hyderabad
                <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  From ₹80,000 | Free 3D Smile Preview
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
                {serviceData.subtitle} at Dr. Sushma Dental Clinic - Hyderabad's Clear Aligner Specialist
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="/book-appointment" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Get Free 3D Smile Scan</span>
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
                    alt="Clear Aligners Treatment in Hyderabad - Dr. Sushma Dental Clinic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </figure>

                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    About Clear Aligners
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    What are Clear Aligners? Complete Guide to Invisible Braces in Hyderabad
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
                  Why Choose Clear Aligners Over Traditional Braces?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  Top benefits of invisible orthodontic treatment
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
                  Clear Aligner Treatment: Step-by-Step Process
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Your journey to a straight smile in 5 simple steps
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
                  Clear Aligner Treatment Options
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Choose the right treatment plan for your needs
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
                  Clear Aligner Before & After Transformations
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See amazing smile transformations from our patients in Hyderabad
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
                What Our Clear Aligner Patients Say
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
                <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  ❓ Have Questions?
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Clear Aligners FAQ - Your Questions Answered
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Common questions about clear aligner treatment in Hyderabad
                </p>
              </div>

              {/* 2 Column Grid */}
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                {serviceData.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-teal-500 transition-all duration-300 hover:shadow-lg scroll-animate"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-start justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors group"
                    >
                      <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-snug group-hover:text-teal-600 transition-colors">
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

              {/* Call to Action */}
              <div className="text-center mt-10 sm:mt-12 scroll-animate">
                <p className="text-gray-600 mb-4">
                  Still have questions? We're here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                    <Link href="/book-appointment" className="flex items-center gap-2">
                      Book Free Consultation
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
                    <a href="tel:+919876543210" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call Us Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Carousel Section */}
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
                  Explore other smile enhancement options
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
          {/* CTA Section */}
        <CTASection 
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Get Your Dream Smile with Clear Aligners Today"
          subtitle="Book your free consultation and receive complimentary 3D smile visualization worth ₹5,000. Flexible EMI options available."
        />
        </section>
      </div>
    </>
  )
}
