import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import CTASection from "@/components/CTASection"
import ShareButtons from "@/components/ShareButtons"

// Blog posts data
const blogPosts = {
  "dental-implants-complete-guide": {
    title: "Complete Guide to Dental Implants in Hyderabad",
    excerpt: "Everything you need to know about dental implants - costs, procedure, benefits, and recovery.",
    content: `
      <h2>What are Dental Implants?</h2>
      <p>Dental implants are artificial tooth roots made of titanium that are surgically placed into your jawbone. They provide a strong foundation for fixed or removable replacement teeth that are made to match your natural teeth.</p>
      
      <h3>Benefits of Dental Implants</h3>
      <ul>
        <li>Look and feel like natural teeth</li>
        <li>Improve speech and eating comfort</li>
        <li>Last 20-30 years with proper care</li>
        <li>Prevent bone loss in jaw</li>
        <li>Don't require reducing other teeth</li>
      </ul>

      <h3>Dental Implant Procedure</h3>
      <p>The implant procedure typically involves several stages over 3-6 months:</p>
      <ol>
        <li><strong>Initial Consultation:</strong> Comprehensive exam, X-rays, and treatment planning</li>
        <li><strong>Implant Placement:</strong> Titanium post surgically inserted into jawbone</li>
        <li><strong>Healing Period:</strong> 3-6 months for osseointegration (bone fusion)</li>
        <li><strong>Abutment Placement:</strong> Connector piece attached to implant</li>
        <li><strong>Crown Placement:</strong> Custom crown attached to complete restoration</li>
      </ol>

      <h3>Cost of Dental Implants in Hyderabad</h3>
      <p>Dental implant costs in Hyderabad at Dr. Sushma Dental Clinic:</p>
      <ul>
        <li>Single implant with crown: ₹25,000 - 40,000</li>
        <li>Multiple implants: Custom pricing based on number needed</li>
        <li>All-on-4 full arch: ₹2,00,000 - 3,50,000</li>
      </ul>

      <h3>Recovery and Care</h3>
      <p>Most patients experience minimal discomfort after implant surgery. Follow these guidelines for optimal healing:</p>
      <ul>
        <li>Take prescribed medications as directed</li>
        <li>Eat soft foods for first week</li>
        <li>Avoid smoking for at least 2 weeks</li>
        <li>Maintain excellent oral hygiene</li>
        <li>Attend all follow-up appointments</li>
      </ul>
    `,
    author: "Dr. Sushma",
    date: "2025-10-15",
    readTime: "8 min read",
    category: "Dental Procedures",
    image: "/images/blog/dental-implants-guide.jpg",
    tags: ["Dental Implants", "Tooth Replacement", "Cosmetic Dentistry"]
  },
  "teeth-whitening-tips": {
    title: "Professional Teeth Whitening: Tips for a Brighter Smile",
    excerpt: "Learn about professional teeth whitening options and how to maintain your bright smile.",
    content: `
      <h2>Professional Teeth Whitening Options</h2>
      <p>Professional teeth whitening offers faster, more dramatic results than over-the-counter products. At Dr. Sushma Dental Clinic, we offer two main whitening options.</p>

      <h3>In-Office Whitening</h3>
      <p>Our in-office whitening treatment uses professional-strength bleaching gel activated by LED light for immediate results in just one visit.</p>
      <ul>
        <li>Teeth whitened 6-10 shades in 60 minutes</li>
        <li>Safe and effective treatment</li>
        <li>Minimal tooth sensitivity</li>
        <li>Long-lasting results (1-3 years)</li>
      </ul>

      <h3>Take-Home Whitening Kits</h3>
      <p>Custom trays filled with professional whitening gel for gradual whitening at home over 2-3 weeks.</p>

      <h3>Maintaining Your White Smile</h3>
      <ul>
        <li>Brush twice daily with whitening toothpaste</li>
        <li>Avoid staining foods and drinks (coffee, tea, wine)</li>
        <li>Use a straw for dark beverages</li>
        <li>Don't smoke or use tobacco</li>
        <li>Get professional cleanings every 6 months</li>
      </ul>

      <h3>Cost of Teeth Whitening</h3>
      <p>In-office whitening: ₹8,000 - 15,000. Take-home kits: ₹5,000 - 8,000</p>
    `,
    author: "Dr. Sushma",
    date: "2025-10-20",
    readTime: "6 min read",
    category: "Cosmetic Dentistry",
    image: "/images/blog/teeth-whitening-tips.jpg",
    tags: ["Teeth Whitening", "Cosmetic Dentistry", "Smile Makeover"]
  },
  "oral-hygiene-basics": {
    title: "Essential Oral Hygiene Tips for Healthy Teeth",
    excerpt: "Master the basics of proper oral hygiene for a lifetime of healthy teeth and gums.",
    content: `
      <h2>Daily Oral Hygiene Routine</h2>
      <p>Proper oral hygiene prevents cavities, gum disease, and tooth loss. Follow these evidence-based practices.</p>

      <h3>Brushing Technique</h3>
      <ul>
        <li>Brush twice daily for 2 minutes each time</li>
        <li>Use soft-bristle toothbrush and fluoride toothpaste</li>
        <li>Angle brush at 45 degrees to gumline</li>
        <li>Use gentle circular motions</li>
        <li>Brush all surfaces - outer, inner, chewing</li>
        <li>Replace toothbrush every 3 months</li>
      </ul>

      <h3>Flossing Properly</h3>
      <p>Floss daily to remove plaque between teeth where toothbrush can't reach:</p>
      <ol>
        <li>Use 18 inches of floss</li>
        <li>Curve floss around each tooth in C-shape</li>
        <li>Slide gently up and down</li>
        <li>Use clean section for each tooth</li>
      </ol>

      <h3>Additional Tips</h3>
      <ul>
        <li>Use antibacterial mouthwash after brushing</li>
        <li>Drink plenty of water throughout day</li>
        <li>Limit sugary foods and drinks</li>
        <li>Eat calcium-rich foods for strong teeth</li>
        <li>Visit dentist every 6 months</li>
      </ul>

      <h3>Signs of Dental Problems</h3>
      <p>See your dentist if you notice:</p>
      <ul>
        <li>Bleeding gums when brushing</li>
        <li>Persistent bad breath</li>
        <li>Tooth sensitivity to hot/cold</li>
        <li>Loose teeth</li>
        <li>Toothache or jaw pain</li>
      </ul>
    `,
    author: "Dr. Sushma",
    date: "2025-10-25",
    readTime: "5 min read",
    category: "Preventive Dentistry",
    image: "/images/blog/oral-hygiene-basics.jpg",
    tags: ["Oral Hygiene", "Preventive Care", "Dental Health"]
  },
  "root-canal-treatment-explained": {
    title: "Root Canal Treatment: What to Expect",
    excerpt: "Demystifying root canal treatment - the procedure, pain management, and recovery.",
    content: `
      <h2>Understanding Root Canal Treatment</h2>
      <p>Root canal treatment saves severely infected or damaged teeth by removing infected pulp and sealing the tooth.</p>

      <h3>When Do You Need a Root Canal?</h3>
      <ul>
        <li>Severe toothache that won't go away</li>
        <li>Prolonged sensitivity to hot or cold</li>
        <li>Tooth discoloration (darkening)</li>
        <li>Swollen, tender gums near tooth</li>
        <li>Pimple on gums (abscess)</li>
      </ul>

      <h3>The Root Canal Procedure</h3>
      <ol>
        <li><strong>Anesthesia:</strong> Local anesthesia numbs tooth and area</li>
        <li><strong>Access:</strong> Small opening made in tooth crown</li>
        <li><strong>Cleaning:</strong> Infected pulp removed, canals cleaned</li>
        <li><strong>Filling:</strong> Canals filled with rubber-like material</li>
        <li><strong>Sealing:</strong> Opening sealed with temporary filling</li>
        <li><strong>Crown:</strong> Permanent crown placed in follow-up visit</li>
      </ol>

      <h3>Is Root Canal Painful?</h3>
      <p>Modern root canals are virtually painless thanks to local anesthesia and advanced techniques. Most patients report the procedure feels similar to getting a filling.</p>

      <h3>Recovery and Aftercare</h3>
      <ul>
        <li>Mild discomfort for 2-3 days (manageable with OTC pain relievers)</li>
        <li>Avoid chewing on treated tooth until crown placed</li>
        <li>Continue regular brushing and flossing</li>
        <li>Attend follow-up appointment for crown</li>
      </ul>

      <h3>Cost of Root Canal Treatment</h3>
      <p>Root canal costs in Hyderabad: Front teeth ₹5,000-8,000, Molars ₹8,000-15,000 including crown.</p>
    `,
    author: "Dr. Sushma",
    date: "2025-10-30",
    readTime: "7 min read",
    category: "Dental Procedures",
    image: "/images/blog/root-canal-treatment.jpg",
    tags: ["Root Canal", "Endodontics", "Tooth Pain"]
  },
  "braces-vs-clear-aligners": {
    title: "Braces vs Clear Aligners: Which is Right for You?",
    excerpt: "Compare traditional braces and clear aligners to choose the best orthodontic treatment.",
    content: `
      <h2>Braces vs Clear Aligners Comparison</h2>
      <p>Both braces and clear aligners straighten teeth effectively. Here's how they compare to help you decide.</p>

      <h3>Traditional Braces</h3>
      <p><strong>Best For:</strong> Complex bite issues, severe crowding, all ages</p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Treats all orthodontic issues</li>
        <li>Fixed in place (can't lose them)</li>
        <li>Most affordable option</li>
        <li>Proven track record</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Visible metal brackets and wires</li>
        <li>Food restrictions</li>
        <li>More difficult to clean</li>
        <li>Can cause mouth irritation</li>
      </ul>
      <p><strong>Cost:</strong> ₹25,000 - 60,000</p>

      <h3>Clear Aligners</h3>
      <p><strong>Best For:</strong> Mild to moderate crowding, adults, aesthetic concerns</p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Nearly invisible</li>
        <li>Removable for eating and cleaning</li>
        <li>No food restrictions</li>
        <li>More comfortable</li>
        <li>Fewer office visits</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Not suitable for complex cases</li>
        <li>Must wear 22 hours daily</li>
        <li>Can be lost or broken</li>
        <li>More expensive</li>
      </ul>
      <p><strong>Cost:</strong> ₹80,000 - 2,50,000</p>

      <h3>Which Should You Choose?</h3>
      <p><strong>Choose Braces if:</strong> You have complex orthodontic issues, want most affordable option, or prefer not to worry about compliance.</p>
      <p><strong>Choose Clear Aligners if:</strong> You have mild to moderate issues, want invisible treatment, and can commit to wearing aligners 22 hours daily.</p>

      <h3>Consult an Orthodontist</h3>
      <p>Book a free consultation at Dr. Sushma Dental Clinic to discuss which option is best for your specific needs and budget.</p>
    `,
    author: "Dr. Sushma",
    date: "2025-11-01",
    readTime: "6 min read",
    category: "Orthodontics",
    image: "/images/blog/braces-vs-aligners.jpg",
    tags: ["Braces", "Clear Aligners", "Orthodontics", "Teeth Straightening"]
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: "Blog Post Not Found - Dr. Sushma Dental Clinic",
      description: "The requested blog post could not be found."
    }
  }

  return {
    title: `${post.title} - Dr. Sushma Dental Clinic Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm sm:text-base">Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 sm:h-96 md:h-[500px] bg-gray-200">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-8 left-8">
          <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <ShareButtons title={post.title} />
        </header>

        {/* Article Body */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:mb-2
            prose-strong:text-gray-900 prose-strong:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Tags:</span>
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-teal-100 hover:text-teal-700 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <Card className="mt-12 border-2 border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                DS
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chief Dentist at Dr. Sushma Dental Clinic with 15+ years of experience in comprehensive dental care. 
                  Specialized in cosmetic dentistry, dental implants, and orthodontics. Committed to providing 
                  personalized, gentle care using the latest technology.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, relatedPost]) => (
                <Link key={slug} href={`/blog/${slug}`}>
                  <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="relative h-48">
                      <Image 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-6">
                      <span className="text-xs font-medium text-teal-600 mb-2 block">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-teal-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{relatedPost.date}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <CTASection 
        variant="service"
        title="Ready to Transform Your Smile?"
        subtitle="Book your consultation today and take the first step towards better dental health."
      />
    </div>
  )
}