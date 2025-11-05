"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("before-after")

  const beforeAfterImages = [
    {
      before: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80",
      after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      title: "Teeth Whitening"
    },
    {
      before: "https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=800&q=80",
      after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
      title: "Veneers"
    },
    {
      before: "https://images.unsplash.com/photo-1598531228433-d9f0bb6f7353?w=800&q=80",
      after: "https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=800&q=80",
      title: "Orthodontics"
    },
    {
      before: "https://images.unsplash.com/photo-1609952237583-eaef7e3e8ce0?w=800&q=80",
      after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
      title: "Dental Implants"
    },
    {
      before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
      after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      title: "Smile Makeover"
    },
    {
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      after: "https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=800&q=80",
      title: "Crown & Bridge"
    }
  ]

  const clinicImages = [
    { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80", title: "Reception Area" },
    { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80", title: "Treatment Room" },
    { url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80", title: "Sterilization Area" },
    { url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80", title: "Waiting Lounge" },
    { url: "https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=800&q=80", title: "Consultation Room" },
    { url: "https://images.unsplash.com/photo-1598531228433-d9f0bb6f7353?w=800&q=80", title: "X-Ray Room" },
  ]

  const tabs = [
    { id: "before-after", label: "Before & After" },
    { id: "clinic", label: "Our Clinic" },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[oklch(0.98_0.01_220)] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-700">
              Explore our smile transformations and state-of-the-art dental facility
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? "bg-[oklch(0.55_0.15_220)] hover:bg-[oklch(0.50_0.15_220)]" : ""}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      {activeTab === "before-after" && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Before & After Transformations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the amazing results we've achieved for our patients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beforeAfterImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage={image.before}
                      afterImage={image.after}
                      alt={image.title}
                    />
                    <p className="text-center mt-4 font-semibold text-gray-900 text-lg">
                      {image.title}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clinic Gallery */}
      {activeTab === "clinic" && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Modern Facility
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take a virtual tour of our state-of-the-art dental clinic
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicImages.map((image, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative h-64">
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-center font-semibold text-gray-900">
                      {image.title}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-5xl w-full h-[80vh]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want Similar Results?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Book a consultation today and let us help you achieve the smile of your dreams.
          </p>
          <Button size="lg" className="bg-[oklch(0.55_0.15_220)] hover:bg-[oklch(0.50_0.15_220)]">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </main>
  )
}
