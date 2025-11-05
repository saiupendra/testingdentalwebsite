"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react"

export default function BlogCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Manual scroll function
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Auto-scroll every 2 seconds
  useEffect(() => {
    if (isPaused) return

    const intervalId = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const maxScroll = container.scrollWidth - container.clientWidth

        // If reached the end, scroll back to start
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          // Scroll to next card (400px)
          container.scrollBy({ left: 400, behavior: 'smooth' })
        }
      }
    }, 2000) // Every 2 seconds

    return () => clearInterval(intervalId)
  }, [isPaused])

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // All blog posts - shows on every page
  const allBlogPosts = [
    {
      title: "10 Signs You Need Dental Implants: Expert Guide 2025",
      excerpt: "Discover the top signs that indicate you might be a good candidate for dental implants.",
      image: "/images/blog/dental-implants-signs.jpg",
      date: "Nov 1, 2025",
      readTime: "5 min",
      slug: "signs-you-need-dental-implants",
      category: "Dental Implants"
    },
    {
      title: "Dental Implant Cost in Hyderabad: Complete Breakdown",
      excerpt: "Understand the complete cost structure of dental implants in Hyderabad.",
      image: "/images/blog/dental-implant-cost.jpg",
      date: "Oct 28, 2025",
      readTime: "7 min",
      slug: "dental-implant-cost-hyderabad",
      category: "Cost Guide"
    },
    {
      title: "Dental Implants vs Dentures vs Bridges Comparison",
      excerpt: "Complete comparison guide of tooth replacement options with pros, cons, and costs.",
      image: "/images/blog/implants-vs-dentures-bridges.jpg",
      date: "Oct 25, 2025",
      readTime: "8 min",
      slug: "dental-implants-vs-dentures-vs-bridges",
      category: "Comparison"
    },
    {
      title: "How to Care for Dental Implants: Maintenance Guide",
      excerpt: "Expert tips on cleaning and maintaining dental implants for longevity.",
      image: "/images/blog/dental-implant-care.jpg",
      date: "Oct 20, 2025",
      readTime: "6 min",
      slug: "how-to-care-for-dental-implants",
      category: "Care Tips"
    },
    {
      title: "Teeth Whitening: Professional vs At-Home Methods",
      excerpt: "Compare professional and at-home teeth whitening treatments and results.",
      image: "/images/blog/teeth-whitening-comparison.jpg",
      date: "Oct 15, 2025",
      readTime: "5 min",
      slug: "professional-vs-home-teeth-whitening",
      category: "Teeth Whitening"
    },
    {
      title: "Root Canal Treatment: What to Expect Step by Step",
      excerpt: "Comprehensive guide to root canal procedure including preparation and recovery.",
      image: "/images/blog/root-canal-guide.jpg",
      date: "Oct 10, 2025",
      readTime: "7 min",
      slug: "root-canal-treatment-guide",
      category: "Root Canal"
    },
    {
      title: "Clear Aligners vs Traditional Braces: Which is Better?",
      excerpt: "Compare Invisalign clear aligners with metal braces for cost and effectiveness.",
      image: "/images/blog/clear-aligners-vs-braces.jpg",
      date: "Oct 5, 2025",
      readTime: "6 min",
      slug: "clear-aligners-vs-braces-comparison",
      category: "Orthodontics"
    },
    {
      title: "Complete Guide to Dental Crowns and Bridges",
      excerpt: "Everything you need to know about dental crowns, bridges, and materials.",
      image: "/images/blog/crowns-bridges-guide.jpg",
      date: "Oct 1, 2025",
      readTime: "8 min",
      slug: "complete-guide-dental-crowns-bridges",
      category: "Restorative"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 scroll-animate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12">
            <div className="mb-6 sm:mb-0">
              <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3">
                📚 From Our Blog
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Latest Dental Health Articles
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Expert tips and guides on dental care
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-gray-700 hover:text-teal-600 transition-all hover:scale-110"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-teal-600 shadow-md hover:shadow-lg flex items-center justify-center text-white hover:bg-teal-700 transition-all hover:scale-110"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Auto-scroll status indicator */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 text-xs text-gray-500">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-green-500 animate-pulse'}`}></div>
              <span>{isPaused ? 'Auto-scroll paused (hover to pause)' : 'Auto-scrolling every 2 seconds'}</span>
            </div>
          </div>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {allBlogPosts.map((post, index) => (
              <article 
                key={index}
                className="flex-shrink-0 w-80 sm:w-96 snap-start"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="400px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                          {post.category}
                        </span>
                      </div>

                      {/* Read More Arrow */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-5 h-5 text-teal-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-teal-600 font-medium text-sm group-hover:gap-3 transition-all">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="sm:hidden flex justify-center items-center gap-2 mt-6 text-sm text-gray-500">
            <span>Swipe to see more</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>

          {/* View All Blog Button */}
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base transition-all hover:shadow-lg hover:scale-105"
            >
              <span>View All Blog Posts</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
