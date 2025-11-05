import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
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
    }
    // Add more posts
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Dental Health Blog
            </h1>
            <p className="text-xl text-gray-600">
              Expert tips and guides from Dr. Sushma Dental Clinic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="relative h-56">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
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

                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-teal-600 font-medium text-sm">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
