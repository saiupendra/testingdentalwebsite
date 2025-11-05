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
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles } from "lucide-react"

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function BeforeAfterSlider({ item }: { item: { before: string; after: string; title: string; description: string } }) {
  const [sliderValue, setSliderValue] = useState(50)
  const dragging = useRef(false)

  const handleDragStart = () => { dragging.current = true }
  const handleDragEnd = () => { dragging.current = false }
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
            <div className="absolute top-0 left-0 bottom-0 overflow-hidden" style={{ width: `${sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.before} alt={`Before ${item.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden" style={{ width: `${100 - sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.after} alt={`After ${item.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-left pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">Before</div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">After</div>
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

export default function DentalFillingsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  useScrollAnimation()

  const serviceData = {
    title: "Dental Fillings",
    subtitle: "Restore Decayed Teeth with Natural-Looking Tooth Fillings",
    heroImage: "/images/services/dental-fillings/hero.jpg",
    
    seo: {
      title: "Best Dental Fillings in Hyderabad | Tooth Filling Cost & Treatment - Dr. Sushma Dental Clinic",
      description: "Get painless dental fillings in Hyderabad at Dr. Sushma Dental Clinic. Tooth-colored composite fillings from ₹500. Same-day cavity treatment. Metal-free, natural-looking dental restorations. Book now!",
      keywords: "dental fillings hyderabad, tooth filling cost, cavity filling, composite fillings, tooth colored fillings, amalgam fillings, dental cavity treatment, painless filling, same day filling hyderabad",
      canonical: "https://drsushmadentalclinic.com/services/dental-fillings"
    },
    
    description: "Stop tooth decay and restore your smile with advanced dental fillings at Dr. Sushma Dental Clinic in Hyderabad. We specialize in tooth-colored composite fillings that blend seamlessly with your natural teeth, providing durable and aesthetically pleasing cavity treatment. Whether you have small cavities, chipped teeth, or worn enamel, our painless dental filling procedures restore tooth structure, prevent further decay, and maintain your confident smile. Using the latest materials and techniques, we deliver comfortable, long-lasting fillings in a single visit.",
    
    fullDescription: "Dental fillings are restorative materials used to repair teeth damaged by cavities (tooth decay), cracks, or wear. The procedure involves removing decayed tooth tissue, cleaning the affected area, and filling the cavity with durable material. Modern composite resin (tooth-colored) fillings bond directly to tooth structure, provide excellent strength, and are virtually invisible. Unlike older silver amalgam fillings, composite fillings preserve more natural tooth structure and contain no mercury. Most filling procedures take 30-60 minutes per tooth and are performed painlessly under local anesthesia.",
    
    benefits: [
      "Stops tooth decay progression permanently",
      "Restores normal tooth function for eating",
      "Natural tooth-colored appearance",
      "Painless procedure under anesthesia",
      "Same-day treatment in single visit",
      "Prevents need for root canal later",
      "Strengthens weakened tooth structure",
      "Lasts 7-10 years with proper care"
    ],

    process: [
      {
        step: "1",
        title: "Examination & Diagnosis",
        description: "Visual exam, X-rays to assess cavity size/depth, and determination of best filling material for your tooth"
      },
      {
        step: "2",
        title: "Anesthesia & Preparation",
        description: "Local anesthesia numbs area completely, isolation of tooth, and removal of all decayed tissue using dental drill"
      },
      {
        step: "3",
        title: "Cavity Cleaning",
        description: "Thorough cleaning and disinfection of prepared cavity to remove bacteria and prevent future decay"
      },
      {
        step: "4",
        title: "Filling Placement",
        description: "Layering of composite material, bonding to tooth, shaping to match natural tooth contours"
      },
      {
        step: "5",
        title: "Polishing & Bite Check",
        description: "Polishing for smooth finish, bite adjustment for comfort, and care instructions for filling longevity"
      }
    ],

    types: [
      {
        name: "Composite Fillings (Tooth-Colored)",
        description: "Natural-looking white resin fillings that blend perfectly with your teeth",
        features: ["Invisible appearance", "Bonds to tooth", "Mercury-free", "Front/back teeth"],
        icon: Star
      },
      {
        name: "Amalgam Fillings (Silver)",
        description: "Durable metal alloy fillings for back teeth requiring maximum strength",
        features: ["Extremely durable", "Cost-effective", "10-15 year lifespan", "Best for molars"],
        icon: Shield
      },
      {
        name: "Glass Ionomer Fillings",
        description: "Fluoride-releasing fillings ideal for children and root surface cavities",
        features: ["Releases fluoride", "Gentle on teeth", "Good for kids", "Temporary option"],
        icon: Award
      }
    ],

    beforeAfterGallery: [
      {
        before: "/images/services/dental-fillings/before-after/front-cavity-before.jpg",
        after: "/images/services/dental-fillings/before-after/front-cavity-after.jpg",
        title: "Front Tooth Cavity Filling",
        description: "Tooth-colored composite filling - invisible result"
      },
      {
        before: "/images/services/dental-fillings/before-after/molar-filling-before.jpg",
        after: "/images/services/dental-fillings/before-after/molar-filling-after.jpg",
        title: "Back Molar Filling",
        description: "Large cavity restored with composite"
      },
      {
        before: "/images/services/dental-fillings/before-after/multiple-fillings-before.jpg",
        after: "/images/services/dental-fillings/before-after/multiple-fillings-after.jpg",
        title: "Multiple Cavity Treatment",
        description: "Several teeth restored in one visit"
      }
    ],

    faqs: [
      {
        question: "How long do dental fillings last?",
        answer: "Dental filling lifespan depends on material and care: Composite (tooth-colored) fillings last 7-10 years on average. Amalgam (silver) fillings last 10-15 years or longer. Glass ionomer fillings last 5-7 years. Factors affecting longevity include: tooth location (back teeth wear faster), size of filling (larger fillings wear more), oral hygiene habits, diet (sugary/acidic foods), and teeth grinding. With excellent oral hygiene (brushing, flossing, regular checkups), many fillings last their full lifespan. We monitor fillings at each checkup and replace when needed."
      },
      {
        question: "Is getting a dental filling painful?",
        answer: "No, modern dental fillings are completely painless. We use local anesthesia injection to numb the tooth and surrounding area before starting - you won't feel any pain during the procedure, only slight pressure. The anesthesia injection itself causes brief pinching sensation for 2-3 seconds. Most patients report the procedure is much easier than expected. After anesthesia wears off (2-4 hours), slight sensitivity for 24-48 hours is normal, easily managed with over-the-counter pain relievers. For anxious patients, we offer sedation options for complete comfort."
      },
      {
        question: "How much do dental fillings cost in Hyderabad?",
        answer: "Dental filling costs in Hyderabad at Dr. Sushma Dental Clinic vary by material and cavity size: Composite (tooth-colored) fillings: ₹1,000-2,500 per tooth (most popular - natural appearance). Amalgam (silver) fillings: ₹500-1,200 per tooth (most affordable, very durable). Glass ionomer fillings: ₹800-1,500 per tooth. Large/complex fillings cost more than small cavities. Cost includes examination, X-rays, anesthesia, filling material, and polishing. We provide transparent pricing, accept dental insurance, and offer 0% EMI payment plans. Treating cavities early with fillings prevents expensive root canals or extractions later."
      },
      {
        question: "What is the difference between composite and amalgam fillings?",
        answer: "Main differences: APPEARANCE: Composite is tooth-colored (white/natural), amalgam is silver/grey (visible). BONDING: Composite bonds chemically to tooth (preserves structure), amalgam requires mechanical retention (more drilling). MERCURY: Composite is mercury-free, amalgam contains mercury (though safe per FDA). DURABILITY: Amalgam slightly more durable for heavy chewing forces (back teeth). SENSITIVITY: Composite causes less temperature sensitivity. COST: Amalgam is more affordable. AESTHETICS: Composite preferred for visible front teeth, amalgam acceptable for back molars. We recommend composite for most patients due to superior aesthetics and tooth preservation, though amalgam remains excellent for large back tooth fillings."
      },
      {
        question: "Can I eat after getting a dental filling?",
        answer: "Yes, but timing depends on filling type: COMPOSITE (tooth-colored) fillings: Can eat immediately after procedure - material hardens instantly with curing light. However, wait until anesthesia wears off (2-4 hours) to avoid accidentally biting tongue/cheek. AMALGAM (silver) fillings: Wait 24 hours before chewing on filled tooth - takes time to fully harden. Soft foods recommended for first day. GENERAL GUIDELINES: Avoid extremely hot/cold foods for 24-48 hours (temporary sensitivity). Avoid hard/sticky foods (nuts, candy, gum) for first week. Chew on opposite side initially. Resume normal eating after initial adjustment period."
      },
      {
        question: "How do I care for my dental fillings?",
        answer: "Maintain dental fillings with proper care: DAILY ORAL HYGIENE: Brush twice daily with fluoride toothpaste and soft-bristle brush. Floss daily around filled teeth to prevent new cavities. Use antibacterial mouthwash to kill bacteria. DIETARY HABITS: Limit sugary foods/drinks that cause new decay. Avoid sticky candy, hard nuts, or ice that can crack fillings. Drink water after meals to wash away food debris. PROTECTIVE MEASURES: Wear nightguard if you grind teeth (prevents filling wear). Don't use teeth to open packages or bottles. REGULAR CHECKUPS: Visit dentist every 6 months for professional cleaning and filling inspection. Report any sensitivity, roughness, or cracks immediately. With proper care, fillings serve you well for many years."
      }
    ],

    priceRange: "₹500 - ₹2,500",
    duration: "30-60 minutes per tooth",

    relatedServices: [
      {
        name: "Root Canal Treatment",
        description: "Save deeply infected teeth",
        link: "/services/root-canal",
        image: "/images/services/root-canal/hero.jpg"
      },
      {
        name: "Dental Crowns",
        description: "Restore heavily damaged teeth",
        link: "/services/bridges-crowns",
        image: "/images/services/bridges-crowns/hero.jpg"
      },
      {
        name: "Preventive Dentistry",
        description: "Stop cavities before they start",
        link: "/services/preventive-dentistry",
        image: "/images/services/preventive-dentistry/hero.jpg"
      }
    ]
  }

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Fillings",
      "alternateName": ["Tooth Fillings", "Cavity Fillings", "Composite Fillings"],
      "description": serviceData.description
    }
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drsushmadentalclinic.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://drsushmadentalclinic.com/services" },
        { "@type": "ListItem", "position": 3, "name": serviceData.title, "item": serviceData.seo.canonical }
      ]
    }
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": serviceData.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
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
      <Head>
        <title>{serviceData.seo.title}</title>
        <meta name="description" content={serviceData.seo.description} />
        <meta name="keywords" content={serviceData.seo.keywords} />
        <link rel="canonical" href={serviceData.seo.canonical} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <Link href="/services" className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors group">
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium text-sm sm:text-base">Back to All Services</span>
            </Link>
          </div>
        </div>

        <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-teal-200/40 to-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-teal-600" />
                <span>Painless • Same-Day • Natural-Looking</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                Best {serviceData.title} in Hyderabad
                <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  From ₹500 | Same-Day Treatment
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {serviceData.subtitle} at Dr. Sushma Dental Clinic - Hyderabad's Trusted Cavity Treatment Specialist
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
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

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                  <Image src={serviceData.heroImage} alt={`${serviceData.title} in Hyderabad`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                </div>
                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    About {serviceData.title}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    What are {serviceData.title}? Complete Guide to Cavity Treatment in Hyderabad
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">{serviceData.description}</p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">{serviceData.fullDescription}</p>
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
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Benefits of {serviceData.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  Why treat cavities with our dental fillings
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mb-3 sm:mb-4" />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Dental Filling Procedure: Step-by-Step
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Your cavity treatment journey in 5 simple steps</p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200"></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="relative scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
                      <Card className="border-2 hover:border-teal-500 transition-colors h-full">
                        <CardContent className="p-4 sm:p-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
                            {step.step}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Types of Dental Fillings
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Choose the right filling material for your needs</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {serviceData.types.map((type, index) => {
                  const IconComponent = type.icon
                  return (
                    <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent className="p-6 sm:p-8">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{type.name}</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{type.description}</p>
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

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Real Results
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Dental Filling Before & After Gallery
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See cavity transformations from our patients
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {serviceData.beforeAfterGallery.map((item, index) => (
                  <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
                    <BeforeAfterSlider item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                What Our Patients Say
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Real testimonials from satisfied patients
              </p>
            </div>
            <div className="scroll-animate animation-delay-200">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  ❓ Have Questions?
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Dental Fillings FAQ
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Common questions about dental filling treatment
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-teal-500 transition-all duration-300 hover:shadow-lg scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-start justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors group">
                      <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-snug group-hover:text-teal-600 transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-teal-600 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
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

        <BlogCarousel />

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
                  <Link key={index} href={service.link} className="group block bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="relative h-48 sm:h-56">
                      <Image src={service.image} alt={`${service.name} - Dr. Sushma Dental Clinic`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
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

        <CTASection 
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Get Painless Dental Fillings in Hyderabad Today"
          subtitle="Book your same-day appointment for natural-looking, durable dental fillings. Affordable pricing with 0% EMI available."
        />
      </div>
    </>
  )
}