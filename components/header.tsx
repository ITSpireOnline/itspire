"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Paintbrush, LayoutDashboard, MonitorSmartphone, Smartphone, Code2, Boxes, Search, Share2, MousePointerClick } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/itspirelogo.svg?height=40&width=120"
              alt="IT Spire Logo"
              width={120}
              height={40}
              className="w-auto h-8 lg:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <Link href="/" className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold hover:text-blue-600 transition-colors">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="mt-2">
                    <div className="w-80 p-4 bg-white rounded-lg shadow-md">
                      <Link href="/about" className="block p-2 rounded-md hover:bg-gray-100">
                        <h3 className="font-semibold">Introduction</h3>
                        <p className="text-sm text-gray-600">Learn about our journey and mission</p>
                      </Link>
                      <Link href="/brand-story" className="block p-2 rounded-md hover:bg-gray-100 mt-2">
                        <h3 className="font-semibold">Brand Story</h3>
                        <p className="text-sm text-gray-600">Discover how IT Spire was founded</p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
  <NavigationMenuTrigger className="text-base font-semibold hover:text-blue-600 transition-colors">
    Services
  </NavigationMenuTrigger>
  <NavigationMenuContent className="mt-4">
    <div className="w-[850px] p-8 grid grid-cols-3 gap-8 bg-white rounded-lg shadow-md">
      {/* Design */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Paintbrush className="w-6 h-6 text-blue-600" />
          Design
        </h4>
        <ul className="space-y-3 text-base">
          <li><Link href="/services" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><LayoutDashboard className="w-5 h-5" /> UX Design</Link></li>
          <li><Link href="/services" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><MonitorSmartphone className="w-5 h-5" /> UI Design</Link></li>
          <li><Link href="/services" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Code2 className="w-5 h-5" /> Website Design</Link></li>
        </ul>
      </div>

      {/* Development */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Boxes className="w-6 h-6 text-blue-600" />
          Development
        </h4>
        <ul className="space-y-3 text-base">
          <li><Link href="/services" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Smartphone className="w-5 h-5" /> Mobile Apps</Link></li>
          <li><Link href="/services" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Code2 className="w-5 h-5" /> Web Development</Link></li>
          <li><Link href="/services" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><LayoutDashboard className="w-5 h-5" /> Custom Software</Link></li>
        </ul>
      </div>

      {/* Digital Marketing */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Share2 className="w-6 h-6 text-blue-600" />
          Digital Marketing
        </h4>
        <ul className="space-y-3 text-base">
          <li><Link href="/services" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Search className="w-5 h-5" /> SEO</Link></li>
          <li><Link href="/services" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Share2 className="w-5 h-5" /> Social Media</Link></li>
          <li><Link href="/services" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><MousePointerClick className="w-5 h-5" /> PPC</Link></li>
        </ul>
      </div>
    </div>
  </NavigationMenuContent>
</NavigationMenuItem>


                <NavigationMenuItem>
                  <Link href="/portfolio" className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                    Portfolio
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/products" className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                    Products
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-all">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-lg shadow-md py-4 px-4 space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Products", path: "/products" }
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className="block text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
