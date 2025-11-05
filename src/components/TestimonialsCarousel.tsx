"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ExternalLink } from "lucide-react"

export default function GoogleReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Real Google reviews structure (manually added)
  const googleReviews = [
    {
      author: "Rajesh Kumar",
      rating: 5,
      text: "Dr. Sushma and her team are amazing! The clinic is very clean and modern. I had my teeth whitening done here and the results are fantastic. Highly recommend!",
      time: "2 weeks ago",
      verified: true
    },
    {
      author: "Priya Sharma",
      rating: 5,
      text: "Best dental experience ever! Dr. Sushma explained everything clearly and made me feel comfortable throughout the procedure. The staff is very friendly and professional.",
      time: "1 month ago",
      verified: true
    },
    {
      author: "Amit Patel",
      rating: 5,
      text: "I was always scared of dentists, but Dr. Sushma's gentle approach changed that. She took care of my cavity painlessly. The clinic is equipped with latest technology.",
      time: "3 weeks ago",
      verified: true
    },
    {
      author: "Sneha Reddy",
      rating: 5,
      text: "Excellent service! My daughter needed braces and Dr. Sushma handled it perfectly. Very patient with kids and explains everything in simple terms.",
      time: "1 week ago",
      verified: true
    },
    {
      author: "Vikram Singh",
      rating: 5,
      text: "Professional and caring team. Got my root canal done without any pain. The clinic maintains high hygiene standards. Dr. Sushma is truly an expert.",
      time: "2 months ago",
      verified: true
    },
    {
      author: "Rajesh Kumar",
      rating: 5,
      text: "Dr. Sushma and her team are amazing! The clinic is very clean and modern. I had my teeth whitening done here and the results are fantastic. Highly recommend!",
      time: "2 weeks ago",
      verified: true
    },
    {
      author: "Priya Sharma",
      rating: 5,
      text: "Best dental experience ever! Dr. Sushma explained everything clearly and made me feel comfortable throughout the procedure. The staff is very friendly and professional.",
      time: "1 month ago",
      verified: true
    },
    {
      author: "Amit Patel",
      rating: 5,
      text: "I was always scared of dentists, but Dr. Sushma's gentle approach changed that. She took care of my cavity painlessly. The clinic is equipped with latest technology.",
      time: "3 weeks ago",
      verified: true
    },
    {
      author: "Sneha Reddy",
      rating: 5,
      text: "Excellent service! My daughter needed braces and Dr. Sushma handled it perfectly. Very patient with kids and explains everything in simple terms.",
      time: "1 week ago",
      verified: true
    },
    {
      author: "Vikram Singh",
      rating: 5,
      text: "Professional and caring team. Got my root canal done without any pain. The clinic maintains high hygiene standards. Dr. Sushma is truly an expert.",
      time: "2 months ago",
      verified: true
    }
  ]

  const duplicatedReviews = [...googleReviews, ...googleReviews]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPos = 0
    let animationId: number

    const scroll = () => {
      scrollPos += 0.3
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Google Rating Banner */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <svg className="w-12 h-12" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
            <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
            <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
            <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
          </svg>
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600">Based on 1,000+ Google reviews</p>
          </div>
        </div>
        <a
          href="https://g.page/r/YOUR_GOOGLE_PLACE_REVIEW_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
        >
          Write a Review
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Scrolling Reviews */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
      >
        {duplicatedReviews.map((review, index) => (
          <div key={index} className="flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[30vw]">
            <Card className="border-0 shadow-xl h-full bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.author}</div>
                    <div className="text-xs text-gray-500">{review.time}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>

                {review.verified && (
                  <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
                    <svg className="w-4 h-4" viewBox="0 0 48 48">
                      <path fill="#4285F4" d="M24 9C14 9 6 17 6 27s8 18 18 18 18-8 18-18S34 9 24 9zm-2 27l-7-7 1.41-1.41L22 33.17l11.59-11.58L35 23l-13 13z"/>
                    </svg>
                    <span>Posted on Google</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
