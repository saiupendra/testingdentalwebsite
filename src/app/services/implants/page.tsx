"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import CTASection from "@/components/CTASection"
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
                  alt={`Before ${item.title} - Dental Implants Hyderabad`}
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
                  alt={`After ${item.title} - Best Dental Implants in Hyderabad`}
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

export default function DentalImplantsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Enable scroll animations
  useScrollAnimation()

  // SERVICE DATA - SEO-RICH CONTENT WITH LOCAL IMAGES
  const serviceData = {
    title: "Dental Implants",
    subtitle: "Permanent Tooth Replacement That Looks and Functions Like Natural Teeth",
    heroImage: "/images/services/implants/hero.jpg",
    
    seo: {
      title: "Best Dental Implants in Hyderabad | Tooth Implant Cost & Treatment - Dr. Sushma Dental Clinic",
      description: "Get affordable dental implants in Hyderabad at Dr. Sushma Dental Clinic. 98% success rate, 15+ years experience. Single tooth implant from ₹25,000. Same-day consultation. Book now!",
      keywords: "dental implants hyderabad, tooth implant cost, dental implant surgery, best dental implants, single tooth implant, full mouth dental implants, all on 4 implants, tooth replacement, dental implant specialist hyderabad, affordable dental implants, painless dental implants",
      canonical: "https://drsushmadentalclinic.com/services/implants"
    },
    
    description: "Get the best dental implants in Hyderabad at Dr. Sushma Dental Clinic. Our advanced dental implant technology provides a permanent, natural-looking solution for missing teeth. With over 15 years of experience and a 98% success rate, we specialize in single tooth implants, multiple implant bridges, and full arch restorations (All-on-4/All-on-6). Dental implants not only restore your smile but also preserve jawbone health and provide full chewing function for a lifetime.",
    
    fullDescription: "Dental implants are titanium posts surgically placed into your jawbone, acting as artificial tooth roots that integrate with your bone (osseointegration). They provide a strong, stable foundation for fixed or removable replacement teeth custom-designed to match your natural teeth perfectly. Unlike dentures or bridges, dental implants don't slip, don't require altering adjacent healthy teeth, and with proper care can last 20-25 years or even a lifetime. Our state-of-the-art 3D imaging and computer-guided implant surgery ensures precise placement with minimal discomfort and faster healing.",
    
    benefits: [
      "Permanent tooth replacement lasting 20+ years",
      "98% success rate with proper care",
      "Natural appearance indistinguishable from real teeth",
      "Prevents jawbone loss and facial sagging",
      "Restores 100% natural chewing ability",
      "No damage to surrounding healthy teeth",
      "Improves speech clarity and confidence",
      "Easy maintenance like your natural teeth"
    ],

    process: [
      {
        step: "1",
        title: "Initial Consultation & 3D Imaging",
        description: "Comprehensive oral exam, 3D CT scan, bone density assessment, and personalized treatment plan with transparent cost estimate"
      },
      {
        step: "2",
        title: "Implant Placement Surgery",
        description: "Painless surgical placement of medical-grade titanium implant post into jawbone under local anesthesia (1-2 hours)"
      },
      {
        step: "3",
        title: "Osseointegration Healing",
        description: "3-6 months healing period where implant fuses with jawbone for permanent stability and strength"
      },
      {
        step: "4",
        title: "Abutment Placement",
        description: "Minor procedure to attach connector piece (abutment) that will hold your permanent crown"
      },
      {
        step: "5",
        title: "Custom Crown Fitting",
        description: "Precision-crafted porcelain crown matched to your natural teeth color, shape, and size for seamless integration"
      }
    ],

    types: [
      {
        name: "Single Tooth Implant",
        description: "Replace one missing tooth with a titanium implant and natural-looking crown without affecting adjacent teeth",
        features: ["Preserves healthy teeth", "Prevents bone loss", "Natural appearance", "Lifetime solution"],
        icon: Star
      },
      {
        name: "Multiple Tooth Implants",
        description: "Replace several missing teeth with implant-supported bridge (2-4 implants supporting 3-6 teeth)",
        features: ["No removable parts", "Stronger than traditional bridges", "Bone preservation", "Cost-effective option"],
        icon: Shield
      },
      {
        name: "Full Arch Restoration (All-on-4)",
        description: "Replace entire upper or lower arch with just 4-6 strategically placed implants supporting a full set of teeth",
        features: ["Replace all teeth", "Same-day teeth possible", "Permanent stability", "Dramatic improvement"],
        icon: Award
      }
    ],

    beforeAfterGallery: [
      {
        before: "/images/services/implants/before-after/single-tooth-before.jpg",
        after: "/images/services/implants/before-after/single-tooth-after.jpg",
        title: "Single Tooth Implant Restoration",
        description: "Front tooth replaced with natural-looking implant crown"
      },
      {
        before: "/images/services/implants/before-after/multiple-implants-before.jpg",
        after: "/images/services/implants/before-after/multiple-implants-after.jpg",
        title: "Multiple Dental Implants",
        description: "Complete smile restoration with implant bridge"
      },
      {
        before: "/images/services/implants/before-after/full-arch-before.jpg",
        after: "/images/services/implants/before-after/full-arch-after.jpg",
        title: "Full Arch All-on-4 Implants",
        description: "Life-changing complete arch restoration"
      }
    ],

    faqs: [
      {
        question: "How long do dental implants last?",
        answer: "Dental implants have a 98% success rate and can last 20-25 years or even a lifetime with proper care. The titanium implant post permanently fuses with your jawbone and rarely needs replacement. The porcelain crown on top may need replacement after 10-15 years due to normal wear. Success depends on good oral hygiene (brushing, flossing), regular dental checkups every 6 months, avoiding smoking, and not using teeth to open packages or bite hard objects."
      },
      {
        question: "Is dental implant surgery painful?",
        answer: "No, dental implant surgery is not painful. The procedure is performed under local anesthesia, so you won't feel any pain during surgery. Most patients report that getting a dental implant is actually less painful than having a tooth extracted. After surgery, mild discomfort, swelling, or bruising for 2-3 days is normal and easily managed with over-the-counter pain medication like ibuprofen. We also prescribe antibiotics to prevent infection and promote healing."
      },
      {
        question: "How long does the complete dental implant process take?",
        answer: "The complete dental implant process takes 3-6 months on average from start to finish. Initial consultation and 3D imaging: 1 visit. Implant placement surgery: 1-2 hours (1 visit). Healing period (osseointegration): 3-6 months where implant fuses with bone. Abutment placement: 1 hour (1 visit). Final crown fabrication and placement: 2-3 weeks (2 visits). Some cases qualify for 'same-day teeth' where temporary teeth are placed immediately after implant surgery."
      },
      {
        question: "What is the cost of dental implants in Hyderabad at Dr. Sushma Dental Clinic?",
        answer: "Dental implant cost in Hyderabad at our clinic ranges from ₹25,000 to ₹50,000 per single implant (including implant post, abutment, and crown). Cost depends on implant brand (Korean/European), bone grafting needs, and crown material. Multiple tooth implant bridge: ₹60,000-1,50,000. Full arch All-on-4 restoration: ₹2,50,000-4,00,000. We provide transparent pricing with detailed written treatment plans. Flexible payment options available including 0% EMI, insurance coordination, and special package discounts."
      },
      {
        question: "Am I a good candidate for dental implants?",
        answer: "Most healthy adults are excellent candidates for dental implants. Ideal candidates have: One or more missing teeth, Good general health (no uncontrolled diabetes or heart disease), Sufficient jawbone density to support implant (or qualify for bone grafting), Healthy gums free from periodontal disease, Commitment to excellent oral hygiene, Non-smoker or willing to quit (smoking reduces success rate). We perform comprehensive evaluation with 3D CT scans to assess your bone quality and suitability during your consultation."
      },
      {
        question: "How do I care for dental implants after surgery?",
        answer: "Dental implant care is simple and similar to caring for natural teeth: Brush twice daily with soft-bristle toothbrush and non-abrasive toothpaste. Floss daily around implant using specialized implant floss or water flosser. Use antibacterial mouthwash to prevent infection. Avoid smoking as it impairs healing and increases failure risk. Visit dentist every 6 months for professional cleaning and checkup. Avoid chewing ice, hard candy, or using teeth as tools. Wear nightguard if you grind teeth (bruxism). Follow post-surgery instructions carefully for first 2 weeks."
      }
    ],

    priceRange: "₹25,000 - ₹50,000 per implant",
    duration: "3-6 months complete treatment",

    relatedServices: [
      {
        name: "Bridges & Crowns",
        description: "Alternative fixed tooth restoration",
        link: "/services/bridges-crowns",
        image: "/images/services/bridges-crowns/hero.jpg"
      },
      {
        name: "Dentures",
        description: "Removable tooth replacement option",
        link: "/services/dentures",
        image: "/images/services/dentures/hero.jpg"
      },
      {
        name: "Bone Grafting",
        description: "Bone augmentation for implant support",
        link: "/services/bone-grafting",
        image: "/images/services/bone-grafting/hero.jpg"
      }
    ]
  }

  // Add Structured Data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Implants",
      "alternateName": "Tooth Implants",
      "description": "Permanent tooth replacement solution using titanium implants that look and function like natural teeth. 98% success rate.",
      "procedureType": "Dental Implant Surgery",
      "followup": "Regular checkups every 6 months",
      "howPerformed": "Surgical placement of titanium post into jawbone, followed by crown attachment",
      "preparation": "Consultation, 3D CT scan, treatment planning",
      "availableService": {
        "@type": "MedicalTherapy",
        "name": "Dental Implant Treatment"
      }
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
          "name": "Dental Implants",
          "item": "https://drsushmadentalclinic.com/services/implants"
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
                <span>15+ Years Excellence | 98% Success Rate</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
                Best {serviceData.title} in Hyderabad
                <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  From ₹25,000 | Same-Day Consultation
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
                {serviceData.subtitle} at Dr. Sushma Dental Clinic - Hyderabad's Trusted Dental Implant Specialist
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
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

        {/* Overview Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <article className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                  <Image
                    src={serviceData.heroImage}
                    alt="Dental Implants Treatment in Hyderabad - Dr. Sushma Dental Clinic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </figure>

                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    About Dental Implants
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    What are Dental Implants? Complete Guide to Tooth Replacement in Hyderabad
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
                        <div className="text-xs sm:text-sm text-gray-600">Treatment Time</div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">{serviceData.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Starting Cost</div>
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
                  Why Choose Dental Implants in Hyderabad?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  Top benefits of choosing dental implants for tooth replacement
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
                  Dental Implant Procedure: Step-by-Step Process
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Your journey to permanent teeth in 5 simple steps
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
                  Types of Dental Implants We Offer
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Choose the right dental implant solution for your needs
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
                  Real Patient Results
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Dental Implant Before & After Gallery
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See the amazing transformations from our dental implant patients in Hyderabad
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
                What Our Dental Implant Patients Say
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
                  Other Tooth Replacement Options
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Explore alternative dental treatments
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
        <CTASection 
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Get Affordable Dental Implants in Hyderabad Today"
          subtitle="Book your free consultation with Dr. Sushma - Hyderabad's trusted dental implant specialist. Flexible EMI options available."
        />
      </div>
    </>
  )
}
