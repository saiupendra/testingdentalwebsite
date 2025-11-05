import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Clock, Heart, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Dr. Sri Sushma Dental Clinic",
  description: "Learn about Dr. Sri Sushma and our experienced dental team. Over 15 years of excellence in dental care.",
}

export default function AboutPage() {
  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Patients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Clock, number: "50,000+", label: "Procedures Done" },
    { icon: Heart, number: "98%", label: "Satisfaction Rate" },
  ]

  const team = [
    {
      name: "Dr. Sri Sushma",
      role: "Founder & Chief Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
      credentials: ["BDS, MDS (Prosthodontics)", "15+ Years Experience", "Member, Indian Dental Association"]
    },
    {
      name: "Dr. Sai Upendra Juvva",
      role: "Orthodontist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
      credentials: ["BDS, MDS (Orthodontics)", "10+ Years Experience", "Certified Invisalign Provider"]
    },
    {
      name: "Dr. Priya Sharma",
      role: "Pediatric Dentist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
      credentials: ["BDS, MDS (Pediatric Dentistry)", "8+ Years Experience", "Child Psychology Certified"]
    },
        {
      name: "Dr. Priya Sharma",
      role: "Pediatric Dentist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
      credentials: ["BDS, MDS (Pediatric Dentistry)", "8+ Years Experience", "Child Psychology Certified"]
    }
  ]

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in every treatment, using the latest technology and techniques."
    },
    {
      icon: "💙",
      title: "Compassion",
      description: "We treat every patient with care, empathy, and respect, understanding their unique needs."
    },
    {
      icon: "🔬",
      title: "Innovation",
      description: "We stay at the forefront of dental technology to provide the best possible care."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We build trust through honest communication and transparent treatment recommendations."
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[oklch(0.98_0.01_220)] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Dr. Sri Sushma Dental Clinic
            </h1>
            <p className="text-xl text-gray-700">
              Providing exceptional dental care with compassion and expertise for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-[oklch(0.55_0.15_220)] mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-700">
                Dr. Sri Sushma Dental Clinic was founded in 2009 with a simple mission: to provide 
                world-class dental care that's accessible, comfortable, and personalized for every patient.
              </p>
              <p className="text-lg text-gray-700">
                What started as a small practice has grown into one of Hyderabad's most trusted dental 
                clinics, serving over 10,000 patients. Our success is built on our commitment to excellence, 
                continuous learning, and genuine care for our patients' wellbeing.
              </p>
              <p className="text-lg text-gray-700">
                Today, we combine advanced dental technology with time-tested techniques, ensuring that 
                every patient receives the highest standard of care in a warm, welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highly qualified dental professionals dedicated to your oral health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="pb-0">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-[oklch(0.55_0.15_220)] font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {member.credentials.map((cred, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-[oklch(0.55_0.15_220)] mt-0.5">•</span>
                        {cred}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl mb-3">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                State-of-the-Art Technology
              </h2>
              <p className="text-lg text-gray-700">
                We invest in the latest dental technology to ensure accurate diagnoses, comfortable 
                treatments, and superior results.
              </p>
              <ul className="space-y-3">
                {[
                  "Digital X-rays for minimal radiation exposure",
                  "Intraoral cameras for detailed examinations",
                  "CAD/CAM technology for same-day crowns",
                  "Laser dentistry for precise treatments",
                  "3D imaging for complex procedures",
                  "Sterilization equipment meeting highest standards"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[oklch(0.55_0.15_220)] rounded-full mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
                alt="Modern Dental Technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[oklch(0.55_0.15_220)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied patients who trust us with their dental care.
          </p>
          <Link href="/book-appointment">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
