import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Palette,
  Code,
  Megaphone,
  Settings,
  PenTool,
  Server,
  GitBranch,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Design",
    description:
      "We make designs that look good, work well, and feel right. We make your product easy and delightful to use.",
    number: "01",
    bgImage: "/backgrounds/design.jpg",
  },
  {
    icon: Code,
    title: "Development",
    description: "Vision + Skills = Stunning Solutions. Websites, Apps, and More. From Idea to Launch and Beyond.",
    number: "02",
    bgImage: "/backgrounds/development.jpg",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Digital marketing services to help you grow your online business. We provide SEO solutions tailored to your goals and budget.",
    number: "03",
    bgImage: "/backgrounds/marketing.jpg",
  },
  {
    icon: Settings,
    title: "IT Consultant Services",
    description:
      "We help you with IT infrastructure, processes, solutions, and risks. Improve your IT performance and security with us.",
    number: "04",
    bgImage: "/backgrounds/consulting.jpg",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description:
      "Content writing is the process of creating and publishing written content for a variety of purposes, including marketing, education, and entertainment.",
    number: "05",
    bgImage: "/backgrounds/content.jpg",
  },
  {
    icon: Server,
    title: "Server Support",
    description: "Whether you need to set the server from scratch or manage your network infrastructure.",
    number: "06",
    bgImage: "/backgrounds/server.jpg",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    description:
      "DevOps speeds delivery of higher quality software by combining and automating the work of software development.",
    number: "07",
    bgImage: "/backgrounds/devops.jpg",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-semibold mb-2">We are Specialized in</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We Integrate Technology and Ideas</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From custom web design to responsive development and SEO optimization, our team of skilled developers has
            you covered. Contact us today to take your online presence to the next level!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />
                <Card className="relative z-10 bg-white/90 backdrop-blur-md h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <span className="text-2xl font-bold text-gray-200">{service.number}</span>
                      <Link href="/services" className="text-blue-600 hover:text-blue-700 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}

          {/* Know More Card */}
          <div className="relative group overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <Card className="relative z-10 bg-white/90 backdrop-blur-md h-full">
              <CardContent className="p-6 h-full flex items-center justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/services" className="flex items-center">
                    KNOW MORE <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
