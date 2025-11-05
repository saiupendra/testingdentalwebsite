"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
    }, 5000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211 (Emergency)"],
      action: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@srisushma.dental", "appointments@srisushma.dental"],
      action: "mailto:info@srisushma.dental"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Main Street, Medical Plaza", "Hyderabad, Telangana 500001"],
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon-Sat: 9:00 AM - 8:00 PM", "Sunday: Closed"],
      action: null
    }
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[oklch(0.98_0.01_220)] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Message Sent Successfully!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Thank you for contacting us. We'll get back to you as soon as possible, usually within 24 hours.
              </p>
              <p className="text-gray-600">
                A confirmation has been sent to <strong>{formData.email}</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[oklch(0.98_0.01_220)] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700">
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-[oklch(0.98_0.01_220)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-[oklch(0.55_0.15_220)]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                  {info.action && (
                    <a
                      href={info.action}
                      className="inline-block mt-4 text-[oklch(0.55_0.15_220)] hover:underline text-sm font-semibold"
                    >
                      {info.title === "Phone" && "Call Now"}
                      {info.title === "Email" && "Send Email"}
                      {info.title === "Address" && "Get Directions"}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={5}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[oklch(0.55_0.15_220)] hover:bg-[oklch(0.50_0.15_220)]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Social */}
            <div className="space-y-6">
              {/* Google Maps */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Visit Our Clinic</CardTitle>
                  <CardDescription>
                    123 Main Street, Medical Plaza, Hyderabad
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160399024!2d78.24323209999999!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                  <CardDescription>
                    Follow us on social media for updates and dental tips
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-[oklch(0.98_0.01_220)] rounded-full flex items-center justify-center hover:bg-[oklch(0.55_0.15_220)] hover:text-white transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[oklch(0.98_0.01_220)] rounded-full flex items-center justify-center hover:bg-[oklch(0.55_0.15_220)] hover:text-white transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[oklch(0.98_0.01_220)] rounded-full flex items-center justify-center hover:bg-[oklch(0.55_0.15_220)] hover:text-white transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Card */}
              <Card className="bg-gradient-to-br from-red-50 to-white border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Dental Emergency?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    If you're experiencing a dental emergency, please call our emergency line immediately.
                  </p>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Do you accept insurance?",
                  a: "Yes, we accept most major dental insurance plans. Please contact us to verify your specific coverage."
                },
                {
                  q: "What are your payment options?",
                  a: "We accept cash, credit/debit cards, and offer flexible payment plans for major treatments."
                },
                {
                  q: "How often should I visit the dentist?",
                  a: "We recommend dental checkups every 6 months for optimal oral health and early problem detection."
                },
                {
                  q: "Do you provide emergency dental services?",
                  a: "Yes, we offer emergency dental services. Please call our emergency line for immediate assistance."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
