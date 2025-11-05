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
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles, Smile, Zap, Heart } from "lucide-react"

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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

export default function CosmeticDentistryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  useScrollAnimation()

  const serviceData = {
    title: "Cosmetic Dentistry",
    subtitle: "Transform Your Smile with Advanced Cosmetic Dental Treatments",
    heroImage: "/images/services/cosmetic-dentistry/hero.jpg",
    
    seo: {
      title: "Best Cosmetic Dentistry in Hyderabad | Smile Makeover Cost & Treatment - Dr. Sushma Dental Clinic",
      description: "Get professional cosmetic dentistry in Hyderabad at Dr. Sushma Dental Clinic. Teeth whitening, veneers, smile makeovers from ₹5,000. Transform your smile with expert cosmetic dental treatments. Book free consultation!",
      keywords: "cosmetic dentistry hyderabad, smile makeover, teeth whitening, dental veneers, cosmetic dentist, smile design, teeth transformation, hollywood smile, cosmetic dental procedures, smile enhancement hyderabad",
      canonical: "https://drsushmadentalclinic.com/services/cosmetic-dentistry"
    },
    
    description: "Achieve your dream smile with advanced cosmetic dentistry at Dr. Sushma Dental Clinic in Hyderabad. Our comprehensive cosmetic dental services include professional teeth whitening, porcelain veneers, smile makeovers, gum contouring, tooth bonding, and complete smile design. Using state-of-the-art technology and artistic expertise, we transform smiles while maintaining optimal oral health. Whether you want whiter teeth, straighter alignment, or a complete Hollywood smile transformation, our experienced cosmetic dentists deliver stunning, natural-looking results that boost your confidence.",
    
    fullDescription: "Cosmetic dentistry combines dental science with aesthetic artistry to enhance the appearance of your teeth, gums, and smile. Unlike general dentistry which focuses on oral health, cosmetic dentistry specifically addresses visual improvements including tooth color, position, shape, size, alignment, and overall smile appearance. Our cosmetic procedures use advanced materials like porcelain, composite resins, and ceramic that mimic natural tooth enamel for seamless results. From subtle enhancements to dramatic smile transformations, we create personalized treatment plans using digital smile design technology to preview your results before treatment begins.",
    
    benefits: [
      "Dramatically improved smile aesthetics",
      "Boost in self-confidence and self-esteem",
      "Natural-looking, beautiful results",
      "Long-lasting smile transformations",
      "Minimally invasive procedures",
      "Quick treatment with immediate results",
      "Customized to your facial features",
      "Enhanced professional and social image"
    ],

    process: [
      {
        step: "1",
        title: "Smile Consultation & Analysis",
        description: "Comprehensive smile evaluation, digital photos, facial analysis, and discussion of your aesthetic goals and expectations"
      },
      {
        step: "2",
        title: "Digital Smile Design",
        description: "3D digital preview of your new smile using advanced software showing exact results before treatment begins"
      },
      {
        step: "3",
        title: "Treatment Planning",
        description: "Customized treatment plan combining procedures like whitening, veneers, or contouring with transparent cost estimate"
      },
      {
        step: "4",
        title: "Cosmetic Procedures",
        description: "Expert execution of treatments using premium materials and precise techniques for beautiful natural results"
      },
      {
        step: "5",
        title: "Final Refinements & Care",
        description: "Final adjustments, professional photos, maintenance instructions, and follow-up care for lasting results"
      }
    ],

    types: [
      {
        name: "Teeth Whitening",
        description: "Professional in-office and take-home whitening systems for dramatically whiter teeth",
        features: ["Instant brightening", "Safe for enamel", "Lasts 1-3 years", "Up to 8 shades whiter"],
        icon: Sparkles
      },
      {
        name: "Porcelain Veneers",
        description: "Ultra-thin ceramic shells bonded to teeth for complete smile transformation",
        features: ["Natural appearance", "Stain-resistant", "Lasts 10-15 years", "Covers imperfections"],
        icon: Star
      },
      {
        name: "Smile Makeover",
        description: "Comprehensive treatment combining multiple procedures for complete smile transformation",
        features: ["Customized design", "Hollywood smile", "Multiple procedures", "Dramatic results"],
        icon: Heart
      }
    ],

    beforeAfterGallery: [
      {
        before: "/images/services/cosmetic-dentistry/before-after/whitening-before.jpg",
        after: "/images/services/cosmetic-dentistry/before-after/whitening-after.jpg",
        title: "Teeth Whitening Transformation",
        description: "Professional whitening - 6 shades brighter"
      },
      {
        before: "/images/services/cosmetic-dentistry/before-after/veneers-before.jpg",
        after: "/images/services/cosmetic-dentistry/before-after/veneers-after.jpg",
        title: "Porcelain Veneers Smile Makeover",
        description: "Complete smile transformation with veneers"
      },
      {
        before: "/images/services/cosmetic-dentistry/before-after/full-makeover-before.jpg",
        after: "/images/services/cosmetic-dentistry/before-after/full-makeover-after.jpg",
        title: "Complete Smile Makeover",
        description: "Hollywood smile with multiple procedures"
      }
    ],

    faqs: [
      {
        question: "What cosmetic dentistry procedures are most popular?",
        answer: "The most popular cosmetic dentistry procedures in Hyderabad include: 1) Professional teeth whitening (most requested - brightens teeth 6-8 shades), 2) Porcelain veneers (dramatic smile transformation covering chips, gaps, discoloration), 3) Dental bonding (repairs chips and minor gaps affordably), 4) Smile makeover (combines multiple procedures), 5) Gum contouring (reshapes gummy smile), 6) Invisalign clear aligners (straightens teeth invisibly). We customize treatments to your specific aesthetic goals and budget during consultation."
      },
      {
        question: "How much does cosmetic dentistry cost in Hyderabad?",
        answer: "Cosmetic dentistry costs in Hyderabad vary by procedure at Dr. Sushma Dental Clinic: Teeth whitening: ₹8,000-15,000 (in-office professional treatment). Dental bonding: ₹2,000-5,000 per tooth. Porcelain veneers: ₹15,000-30,000 per tooth. Gum contouring: ₹5,000-15,000. Complete smile makeover: ₹1,50,000-5,00,000 (depending on procedures included). We provide detailed written estimates, flexible payment plans, 0% EMI options, and package discounts for multiple procedures. Many patients find cosmetic dentistry more affordable than expected with financing."
      },
      {
        question: "How long do cosmetic dentistry results last?",
        answer: "Cosmetic dentistry results vary by procedure: Teeth whitening lasts 1-3 years (depends on diet/habits - coffee/smoking reduce longevity). Porcelain veneers last 10-15 years with proper care. Dental bonding lasts 5-7 years before touch-ups needed. Gum contouring is permanent. With excellent oral hygiene (brushing, flossing, regular cleanings), avoiding hard foods/teeth grinding, and touch-up treatments when needed, most cosmetic dentistry provides long-lasting beautiful results worth the investment."
      },
      {
        question: "Is cosmetic dentistry painful?",
        answer: "Most cosmetic dentistry procedures are minimally invasive and cause little to no discomfort. Teeth whitening may cause temporary sensitivity for 24-48 hours (easily managed with sensitivity toothpaste). Dental bonding requires no anesthesia and is painless. Veneers require minimal tooth preparation under local anesthesia - slight sensitivity for a few days is normal. Gum contouring uses anesthesia and laser technology for minimal discomfort. We prioritize patient comfort with sedation options available for anxious patients. Most patients report procedures are much easier than expected."
      },
      {
        question: "Can cosmetic dentistry fix my smile imperfections?",
        answer: "Yes! Cosmetic dentistry can correct numerous smile imperfections including: Discolored or stained teeth (whitening/veneers), Chipped or cracked teeth (bonding/veneers/crowns), Gaps between teeth (bonding/veneers/orthodontics), Misshapen or uneven teeth (veneers/contouring), Crooked or misaligned teeth (Invisalign/veneers), Gummy smile (gum contouring), Missing teeth (implants/bridges). During consultation, we'll assess your specific concerns and recommend the best cosmetic procedures to achieve your ideal smile. Digital smile design shows you the exact final result before treatment starts."
      },
      {
        question: "How do I maintain my cosmetic dentistry results?",
        answer: "Maintain cosmetic dentistry results with: Excellent oral hygiene - brush twice daily with soft-bristle brush, floss daily around veneers/bonding. Regular dental cleanings every 6 months. Avoid staining foods/drinks (coffee, tea, red wine, berries) or rinse immediately after consumption. Don't use teeth as tools (opening packages). Wear nightguard if you grind teeth. Avoid biting extremely hard foods. Touch-up whitening every 1-2 years. Follow dentist's specific care instructions for your procedures. With proper maintenance, cosmetic dentistry provides beautiful long-lasting results."
      }
    ],

    priceRange: "₹5,000 - ₹5,00,000",
    duration: "1 visit to 4 weeks",

    relatedServices: [
      {
        name: "Teeth Whitening",
        description: "Professional smile brightening",
        link: "/services/whitening",
        image: "/images/services/whitening/hero.jpg"
      },
      {
        name: "Dental Veneers",
        description: "Transform teeth with porcelain",
        link: "/services/veneers",
        image: "/images/services/veneers/hero.jpg"
      },
      {
        name: "Clear Aligners",
        description: "Straighten teeth invisibly",
        link: "/services/clear-aligners",
        image: "/images/services/clear-aligners/hero.jpg"
      }
    ]
  }

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Cosmetic Dentistry",
      "alternateName": ["Smile Makeover", "Aesthetic Dentistry", "Smile Design"],
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
                <Smile className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Transform Your Smile Today</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                Best {serviceData.title} in Hyderabad
                <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  From ₹5,000 | Free Smile Design
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {serviceData.subtitle} at Dr. Sushma Dental Clinic - Hyderabad's Smile Transformation Specialist
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="/book-appointment" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Book Free Consultation</span>
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
                    What is {serviceData.title}? Complete Guide in Hyderabad
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
                  Why choose our cosmetic dental services
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
                  {serviceData.title} Procedure: Step-by-Step
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Your smile transformation journey in 5 steps</p>
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
                  Popular Cosmetic Dental Treatments
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Transform your smile with our services</p>
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
                  Cosmetic Dentistry Before & After Gallery
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See stunning smile transformations
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
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Common questions about cosmetic dentistry
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
                  Explore other smile enhancement options
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
          title="Transform Your Smile with Expert Cosmetic Dentistry"
          subtitle="Book your free consultation and receive complimentary digital smile design. Special package pricing available."
        />
      </div>
    </>
  )
}