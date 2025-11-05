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

export default function GeneralDentistryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  useScrollAnimation()

  const serviceData = {
    title: "General Dentistry",
    subtitle: "Comprehensive Dental Care for Your Entire Family",
    heroImage: "/images/services/general-dentistry/hero.jpg",
    
    seo: {
      title: "Best General Dentistry in Hyderabad | Family Dental Care - Dr. Sushma Dental Clinic",
      description: "Get comprehensive general dentistry services in Hyderabad at Dr. Sushma Dental Clinic. Dental checkups, cleanings, fillings, extractions, and preventive care for all ages. Book your family dental appointment today!",
      keywords: "general dentistry hyderabad, family dentist, dental checkup, teeth cleaning, dental care, general dental services, preventive dentistry, routine dental care, dental clinic hyderabad",
      canonical: "https://drsushmadentalclinic.com/services/general-dentistry"
    },
    
    description: "Experience complete dental care for your entire family at Dr. Sushma Dental Clinic in Hyderabad. Our general dentistry services cover all aspects of oral health including routine checkups, professional cleanings, cavity treatment, tooth extractions, gum disease treatment, dental X-rays, and preventive care. We provide comprehensive diagnosis and treatment for dental problems ranging from simple toothaches to complex oral health issues. With gentle care and modern technology, we make dentistry comfortable for patients of all ages - from children to seniors.",
    
    fullDescription: "General dentistry encompasses preventive, diagnostic, and treatment services for maintaining optimal oral health. As your family dentist, we focus on prevention through regular checkups, cleanings, and patient education to avoid dental problems before they start. When issues arise, we provide prompt treatment including fillings, extractions, and periodontal therapy. Our comprehensive approach addresses the full spectrum of dental needs, coordinating specialty referrals when needed. We believe in building long-term relationships with our patients, providing consistent care throughout their lives.",
    
    benefits: [
      "One-stop dental care for whole family",
      "Prevents serious dental problems early",
      "Maintains excellent oral health long-term",
      "Catches issues before they worsen",
      "Saves money vs emergency treatment",
      "Builds trust with consistent care",
      "Convenient for busy families",
      "All ages welcome - kids to seniors"
    ],

    process: [
      {
        step: "1",
        title: "Comprehensive Examination",
        description: "Complete oral exam checking teeth, gums, bite, jaw, and screening for oral cancer and other issues"
      },
      {
        step: "2",
        title: "Diagnostic X-Rays",
        description: "Digital X-rays to detect cavities, bone loss, impacted teeth, and problems not visible to naked eye"
      },
      {
        step: "3",
        title: "Professional Cleaning",
        description: "Removal of plaque and tartar buildup, teeth polishing, fluoride treatment for cavity prevention"
      },
      {
        step: "4",
        title: "Treatment Planning",
        description: "Discussion of findings, personalized treatment recommendations, cost estimates, and scheduling"
      },
      {
        step: "5",
        title: "Ongoing Care & Prevention",
        description: "Regular 6-month checkups, preventive treatments, oral hygiene education, and early problem detection"
      }
    ],

    types: [
      {
        name: "Preventive Care",
        description: "Routine checkups, cleanings, X-rays, fluoride treatments to prevent dental problems",
        features: ["Checkups every 6 months", "Professional cleaning", "Cavity prevention", "Early detection"],
        icon: Shield
      },
      {
        name: "Restorative Treatments",
        description: "Fillings, crowns, extractions to repair damaged or decayed teeth",
        features: ["Cavity fillings", "Tooth extractions", "Crown placement", "Root canals"],
        icon: Star
      },
      {
        name: "Periodontal Care",
        description: "Gum disease treatment, deep cleanings, and gum health maintenance",
        features: ["Gum disease treatment", "Deep cleaning", "Scaling & root planing", "Maintenance therapy"],
        icon: Award
      }
    ],

    beforeAfterGallery: [
      {
        before: "/images/services/general-dentistry/before-after/cleaning-before.jpg",
        after: "/images/services/general-dentistry/before-after/cleaning-after.jpg",
        title: "Professional Teeth Cleaning",
        description: "Tartar removal and polishing transformation"
      },
      {
        before: "/images/services/general-dentistry/before-after/gum-disease-before.jpg",
        after: "/images/services/general-dentistry/before-after/gum-disease-after.jpg",
        title: "Gum Disease Treatment",
        description: "Healthy gums restored with periodontal therapy"
      },
      {
        before: "/images/services/general-dentistry/before-after/restoration-before.jpg",
        after: "/images/services/general-dentistry/before-after/restoration-after.jpg",
        title: "Complete Dental Restoration",
        description: "Multiple treatments for comprehensive care"
      }
    ],

    faqs: [
      {
        question: "How often should I visit the dentist for checkups?",
        answer: "Most people should visit the dentist every 6 months (twice yearly) for routine checkups and cleanings. This bi-annual schedule allows early detection of cavities, gum disease, and other oral health problems before they become serious. RECOMMENDED FREQUENCY: Adults with good oral health: Every 6 months. Children and teens: Every 6 months (more frequent monitoring during growth). Gum disease patients: Every 3-4 months for maintenance. High cavity risk patients: Every 4-6 months. Pregnant women: Every 3-4 months due to hormonal changes affecting gums. Regular visits prevent expensive emergency treatments and maintain healthy teeth for life."
      },
      {
        question: "What happens during a routine dental checkup?",
        answer: "A comprehensive dental checkup includes: MEDICAL HISTORY REVIEW: Discussion of health changes, medications, concerns since last visit. VISUAL EXAMINATION: Dentist checks each tooth for cavities, cracks, wear, old fillings. Gum examination for periodontal disease signs. Bite and jaw evaluation for TMJ issues. Oral cancer screening of lips, tongue, throat, cheeks. X-RAYS (if needed): Digital X-rays every 1-2 years to detect hidden problems. PROFESSIONAL CLEANING: Hygienist removes plaque and tartar buildup, polishes teeth, applies fluoride. TREATMENT PLANNING: Discussion of findings, recommended treatments, cost estimates, questions answered. Entire appointment typically takes 45-60 minutes."
      },
      {
        question: "How much does a dental checkup cost in Hyderabad?",
        answer: "General dentistry costs at Dr. Sushma Dental Clinic in Hyderabad: Routine dental checkup: ₹300-500 (includes basic examination). Professional teeth cleaning: ₹1,000-1,500 (includes scaling, polishing). Dental X-rays: ₹200-500 per X-ray (digital). Complete checkup package (exam + cleaning + X-rays): ₹1,500-2,500. Fluoride treatment: ₹500-800. Additional treatments (fillings, extractions) priced separately based on need. We accept dental insurance and offer family package discounts. Preventive care is investment that saves thousands on future emergency treatments."
      },
      {
        question: "What is the difference between general dentistry and specialty dentistry?",
        answer: "GENERAL DENTISTRY: Provides comprehensive primary dental care for patients of all ages including: routine checkups, cleanings, fillings, extractions, crowns, bridges, preventive care, diagnosis and treatment of common dental problems. General dentists are like family doctors for your oral health - first point of contact. SPECIALTY DENTISTRY: Focused expertise in specific areas requiring additional training: Orthodontics (braces), Periodontics (gum disease), Endodontics (root canals), Oral surgery (complex extractions, implants), Prosthodontics (dentures, complex restorations), Pediatric dentistry (children). WHEN TO SEE EACH: Start with general dentist for routine care and common problems. General dentist refers to specialist for complex cases needing advanced expertise."
      },
      {
        question: "Is dental care covered by health insurance in India?",
        answer: "Dental insurance coverage in India is limited but improving: MOST HEALTH INSURANCE: Traditional medical insurance typically excludes dental care (except accident-related jaw injuries). DENTAL INSURANCE PLANS: Standalone dental insurance available from some providers covering: Preventive care (checkups, cleanings) - usually 100% covered. Basic procedures (fillings, extractions) - 70-80% covered. Major procedures (crowns, bridges, root canals) - 50-60% covered. Orthodontics (braces) - limited or excluded. WAITING PERIODS: 1-2 years for major treatments. AT OUR CLINIC: We help process insurance claims, provide necessary documentation, accept cashless facility for network insurers, and offer affordable self-pay options with EMI plans for uninsured patients."
      },
      {
        question: "How can I maintain good oral health between dental visits?",
        answer: "Maintain excellent oral health with daily habits: BRUSHING: Brush teeth twice daily (morning and night) for 2 minutes using soft-bristle toothbrush and fluoride toothpaste. Use gentle circular motions. Replace toothbrush every 3 months. FLOSSING: Floss daily to remove plaque between teeth where brush can't reach. HEALTHY DIET: Limit sugary foods and drinks. Eat calcium-rich foods (dairy, leafy greens). Drink plenty of water. Avoid tobacco in all forms. PROTECTIVE MEASURES: Wear mouthguard for contact sports. Don't use teeth as tools to open things. WATCH FOR WARNING SIGNS: Schedule appointment if you notice: bleeding gums, tooth sensitivity, persistent bad breath, loose teeth, or oral pain. Prevention is easier and cheaper than treatment."
      }
    ],

    priceRange: "₹300 - ₹5,000",
    duration: "30-90 minutes per visit",

    relatedServices: [
      {
        name: "Preventive Dentistry",
        description: "Stop problems before they start",
        link: "/services/preventive-dentistry",
        image: "/images/services/preventive-dentistry/hero.jpg"
      },
      {
        name: "Dental Fillings",
        description: "Cavity treatment and repair",
        link: "/services/dental-fillings",
        image: "/images/services/dental-fillings/hero.jpg"
      },
      {
        name: "Pediatric Dentistry",
        description: "Specialized care for children",
        link: "/services/pediatric-dentistry",
        image: "/images/services/pediatric-dentistry/hero.jpg"
      }
    ]
  }

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "General Dentistry",
      "alternateName": ["Family Dentistry", "Comprehensive Dental Care"],
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
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-sky-400 to-blue-600"></div>
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-teal-600" />
                <span>Your Family Dental Care Partner</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                Best {serviceData.title} in Hyderabad
                <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  From ₹300 | Complete Family Care
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {serviceData.subtitle} at Dr. Sushma Dental Clinic - Hyderabad's Trusted Family Dentist
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="/book-appointment" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Book Family Appointment</span>
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
                    What is {serviceData.title}? Complete Family Dental Care Guide
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
                  Why choose our comprehensive family dental services
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
                  Your Dental Visit: Step-by-Step
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">What to expect at your appointment</p>
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
                  Our General Dental Services
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Comprehensive care for every dental need</p>
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
                  General Dentistry Before & After Gallery
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See transformations from comprehensive dental care
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
                Real testimonials from satisfied families
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
                  General Dentistry FAQ
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Common questions about family dental care
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
                  Explore specialized dental treatments
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
          title="Get Professional General Dentistry Care in Hyderabad Today"
          subtitle="Book your family's dental checkup and receive comprehensive preventive care. New patient specials available."
        />
      </div>
    </>
  )
}