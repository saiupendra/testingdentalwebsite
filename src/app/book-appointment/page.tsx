"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, CheckCircle2, Phone, Mail, MapPin } from "lucide-react"

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const services = [
    "General Checkup",
    "Teeth Cleaning",
    "Teeth Whitening",
    "Dental Filling",
    "Root Canal",
    "Dental Implants",
    "Braces/Orthodontics",
    "Veneers",
    "Pediatric Dentistry",
    "Emergency Treatment",
    "Other"
  ]

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
    "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"
  ]

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
    if (!formData.date) newErrors.date = "Date is required"
    if (!formData.time) newErrors.time = "Time is required"
    if (!formData.service) newErrors.service = "Service is required"

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
        date: "",
        time: "",
        service: "",
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
                Appointment Request Received!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Thank you for booking an appointment with us. We'll contact you shortly to confirm your appointment details.
              </p>
              <p className="text-gray-600">
                A confirmation email has been sent to <strong>{formData.email}</strong>
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
              Book an Appointment
            </h1>
            <p className="text-xl text-gray-700">
              Schedule your visit to Dr. Sri Sushma Dental Clinic. We're here to help you achieve a healthy, beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[oklch(0.55_0.15_220)] mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[oklch(0.55_0.15_220)] mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@srisushma.dental</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[oklch(0.55_0.15_220)] mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">123 Main Street, Medical Plaza, Hyderabad, Telangana 500001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[oklch(0.55_0.15_220)] mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Sat: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[oklch(0.98_0.01_220)]">
                <CardHeader>
                  <CardTitle className="text-lg">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    For dental emergencies, please call us directly at:
                  </p>
                  <Button size="lg" className="w-full bg-[oklch(0.55_0.15_220)] hover:bg-[oklch(0.50_0.15_220)]">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency Line
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you with a confirmation.
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

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className={errors.date ? "border-red-500" : ""}
                        />
                        {errors.date && (
                          <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                          <SelectTrigger className={errors.time ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.time && (
                          <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                        )}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Additional Notes (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your dental concerns or any special requirements..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={4}
                      />
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 h-5 w-5" />
                          Book Appointment
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      By submitting this form, you agree to our terms and privacy policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
