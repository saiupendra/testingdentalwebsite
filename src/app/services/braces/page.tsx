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

export default function DentalBracesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  useScrollAnimation()

  const serviceData = {
    title: "Dental Braces",
    subtitle: "Straighten Your Teeth with Traditional Metal or Ceramic Braces",
    heroImage: "/images/services/dental-braces/hero.jpg",
    
    seo: {
      title: "Best Dental Braces in Hyderabad | Braces Cost & Orthodontic Treatment - Dr. Sushma Dental Clinic",
      description: "Get affordable dental braces in Hyderabad at Dr. Sushma Dental Clinic. Metal braces from ₹25,000, ceramic braces from ₹40,000. Expert orthodontic treatment for straight teeth. Book free consultation!",
      keywords: "dental braces hyderabad, braces cost, orthodontic treatment, metal braces, ceramic braces, teeth straightening, crooked teeth treatment, braces for adults, braces price hyderabad",
      canonical: "https://drsushmadentalclinic.com/services/braces"
    },
    
    description: "Transform your smile with professional dental braces at Dr. Sushma Dental Clinic in Hyderabad. We offer comprehensive orthodontic treatment using traditional metal braces, tooth-colored ceramic braces, and self-ligating braces to correct crooked teeth, gaps, overbites, underbites, and crowding. With 15+ years of orthodontic expertise, we create personalized treatment plans for children, teens, and adults. Our advanced braces systems deliver faster treatment times, fewer adjustments, and beautiful, lasting results that boost your confidence.",
    
    fullDescription: "Dental braces are orthodontic appliances consisting of brackets bonded to teeth and connected by wires to gradually move teeth into proper alignment. The brackets and wires apply gentle, controlled pressure over time to shift teeth into their ideal positions. Modern braces are more comfortable, efficient, and aesthetic than ever before. Treatment typically lasts 12-24 months depending on case complexity. We monitor progress with regular monthly adjustments, tightening wires and changing elastics to continue tooth movement. The result is a straighter, healthier smile with improved bite function and easier oral hygiene.",
    
    benefits: [
      "Permanently straightens crooked teeth",
      "Corrects bite problems (overbite, underbite)",
      "Closes gaps between teeth effectively",
      "Improves chewing and speech function",
      "Makes oral hygiene easier long-term",
      "Boosts confidence with straight smile",
      "Prevents future dental problems",
      "Suitable for all ages - kids to adults"
    ],

    process: [
      {
        step: "1",
        title: "Orthodontic Consultation",
        description: "Comprehensive exam, X-rays, photos, impressions, and treatment planning with timeline and cost estimate"
      },
      {
        step: "2",
        title: "Teeth Preparation",
        description: "Professional cleaning, any needed dental work (fillings/extractions), and tooth surface preparation"
      },
      {
        step: "3",
        title: "Braces Placement",
        description: "Bonding brackets to each tooth, inserting archwire, securing with elastics - takes 1-2 hours"
      },
      {
        step: "4",
        title: "Monthly Adjustments",
        description: "Regular visits every 4-6 weeks to tighten wires, change elastics, and monitor tooth movement progress"
      },
      {
        step: "5",
        title: "Braces Removal & Retainers",
        description: "Removing braces after 12-24 months, teeth polishing, and custom retainers to maintain results permanently"
      }
    ],

    types: [
      {
        name: "Metal Braces (Traditional)",
        description: "Durable stainless steel braces - most affordable and effective option",
        features: ["Most affordable", "Fastest results", "Maximum strength", "Proven reliability"],
        icon: Star
      },
      {
        name: "Ceramic Braces (Tooth-Colored)",
        description: "Clear or tooth-colored brackets that blend with teeth for discreet appearance",
        features: ["Less visible", "Aesthetic appeal", "Effective treatment", "Adult-friendly"],
        icon: Shield
      },
      {
        name: "Self-Ligating Braces",
        description: "Advanced braces with built-in clips requiring fewer adjustments",
        features: ["Fewer appointments", "Faster treatment", "More comfortable", "Easier cleaning"],
        icon: Award
      }
    ],

    beforeAfterGallery: [
      {
        before: "/images/services/dental-braces/before-after/crowding-before.jpg",
        after: "/images/services/dental-braces/before-after/crowding-after.jpg",
        title: "Severe Crowding Correction",
        description: "Crowded teeth straightened in 18 months"
      },
      {
        before: "/images/services/dental-braces/before-after/gap-before.jpg",
        after: "/images/services/dental-braces/before-after/gap-after.jpg",
        title: "Gap Closure with Braces",
        description: "Large gaps closed completely"
      },
      {
        before: "/images/services/dental-braces/before-after/overbite-before.jpg",
        after: "/images/services/dental-braces/before-after/overbite-after.jpg",
        title: "Overbite Correction",
        description: "Severe overbite corrected with improved profile"
      }
    ],

    faqs: [
      {
        question: "How long do you have to wear braces?",
        answer: "Braces treatment duration varies by case complexity: Simple cases (minor crowding/small gaps): 12-15 months. Moderate cases (moderate crowding, bite issues): 15-20 months. Complex cases (severe crowding, bite correction, extractions): 20-30 months. Average treatment time is 18-24 months for most patients. Factors affecting duration include: age (younger patients respond faster), compliance (wearing elastics as directed), oral hygiene (poor hygiene delays treatment), and severity of misalignment. We provide exact timeline during consultation based on your specific needs."
      },
      {
        question: "Do braces hurt? Are they painful?",
        answer: "Braces cause some discomfort but are not extremely painful. INITIAL PLACEMENT: Teeth feel pressure and slight soreness for 3-5 days after braces are first placed - easily managed with over-the-counter pain relievers. MONTHLY ADJUSTMENTS: 1-2 days of mild soreness after each tightening appointment as teeth adjust to new pressure. MOUTH IRRITATION: Brackets may rub cheeks/lips initially causing minor irritation - orthodontic wax provides relief. The discomfort is temporary and most patients adapt within 1-2 weeks. Modern braces are much more comfortable than older versions. Soft foods help during adjustment periods."
      },
      {
        question: "How much do dental braces cost in Hyderabad?",
        answer: "Dental braces costs in Hyderabad at Dr. Sushma Dental Clinic: Metal braces (traditional): ₹25,000-40,000 for full treatment (most affordable, very effective). Ceramic braces (tooth-colored): ₹40,000-60,000 (less visible, adult-preferred). Self-ligating braces: ₹50,000-70,000 (fewer appointments, faster treatment). Cost includes: consultation, X-rays, braces placement, all monthly adjustments for treatment duration, braces removal, and retainers. We offer 0% EMI payment plans, dental insurance coordination, and sibling/family discounts. Transparent pricing with no hidden fees."
      },
      {
        question: "Can adults get braces, or are they just for kids?",
        answer: "Absolutely! Adults can get braces at any age - 25% of orthodontic patients are adults. BENEFITS FOR ADULTS: Correct lifelong misalignment, improve bite function, make oral hygiene easier, boost professional confidence, prevent future dental problems. ADULT-FRIENDLY OPTIONS: Ceramic (tooth-colored) braces for discreet appearance, self-ligating braces for fewer appointments, treatment plans designed for adult lifestyles. TREATMENT TIME: Similar to teenagers (18-24 months average) though sometimes slightly longer. AGE IS NOT A LIMIT: As long as teeth and gums are healthy, orthodontic treatment works at any age. Many adults successfully straighten teeth in their 30s, 40s, 50s, and beyond."
      },
      {
        question: "What foods can't you eat with braces?",
        answer: "Avoid foods that can damage braces or get stuck: HARD FOODS TO AVOID: Hard candy, nuts, ice, popcorn kernels, hard pretzels, raw carrots/apples (cut into small pieces instead). STICKY FOODS TO AVOID: Caramel, taffy, gum, sticky candy, chewy bagels. FOODS THAT CAN DISLODGE BRACKETS: Corn on the cob (cut off cob first), whole apples (slice first), tough meat (cut into small pieces). SAFE FOODS TO EAT: Soft bread, pasta, rice, eggs, yogurt, soft fruits, cooked vegetables, soft proteins, smoothies. GENERAL RULE: If it's hard, sticky, or chewy - avoid it. Cut food into small, bite-sized pieces. Damaged brackets delay treatment and require emergency appointments."
      },
      {
        question: "How do I clean my teeth with braces?",
        answer: "Proper oral hygiene is critical with braces: BRUSHING: Brush after every meal (3-4 times daily) using soft-bristle brush and fluoride toothpaste. Angle brush at 45 degrees to clean above and below brackets. Brush each tooth individually for 10 seconds. Electric toothbrushes work well. FLOSSING: Floss daily using floss threaders or orthodontic floss to reach between teeth under wires. Takes 5-10 minutes initially but gets easier. INTERDENTAL BRUSHES: Small brushes clean between brackets and under wires effectively. WATER FLOSSER: Excellent for removing food particles around braces. MOUTHWASH: Antibacterial fluoride mouthwash kills bacteria and prevents white spots. REGULAR CLEANINGS: Professional cleaning every 4-6 months. Poor hygiene causes white spots, cavities, and gum disease."
      }
    ],

    priceRange: "₹25,000 - ₹70,000",
    duration: "12-24 months",

    relatedServices: [
      {
        name: "Clear Aligners",
        description: "Invisible teeth straightening",
        link: "/services/clear-aligners",
        image: "/images/services/clear-aligners/hero.jpg"
      },
      {
        name: "Orthodontics",
        description: "Complete orthodontic care",
        link: "/services/orthodontics",
        image: "/images/services/orthodontics/hero.jpg"
      },
      {
        name: "Teeth Whitening",
        description: "Brighten after straightening",
        link: "/services/whitening",
        image: "/images/services/whitening/hero.jpg"
      }
    ]
  }

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Braces",
      "alternateName": ["Orthodontic Braces", "Metal Braces", "Ceramic Braces"],
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
                <span>15+ Years Excellence • Trusted by Thousands</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                Best {serviceData.title} in Hyderabad
                <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  From ₹25,000 | 0% EMI Available
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {serviceData.subtitle} at Dr. Sushma Dental Clinic - Hyderabad's Orthodontic Specialist
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
                    What are {serviceData.title}? Complete Orthodontic Guide in Hyderabad
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
                  Why choose orthodontic braces for straighter teeth
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
                  Dental Braces Treatment: Step-by-Step Process
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Your orthodontic journey in 5 simple steps</p>
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
                  Types of Dental Braces
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Choose the right braces option for your needs</p>
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
                  Dental Braces Before & After Gallery
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See amazing teeth transformations from our patients
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
                Real testimonials from satisfied braces patients
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
                  Dental Braces FAQ - Your Questions Answered
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Common questions about braces treatment in Hyderabad
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
                  Explore other orthodontic and smile enhancement options
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
          title="Get Professional Dental Braces in Hyderabad Today"
          subtitle="Book your free orthodontic consultation and receive special package pricing. 0% EMI plans available for affordable monthly payments."
        />
      </div>
    </>
  )
}