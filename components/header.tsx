// components/header.jsx (or .tsx if using TypeScript)
"use client"; // Keep this here

import { useState } from "react"
//import button from "next/button"
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

// If using TypeScript (.tsx file):
interface HeaderProps {
  onConsultClick: () => void;
}
export default function Header({ onConsultClick }: HeaderProps) {

// export default function Header({ onConsultClick }) { // For .jsx, type is implicit
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // No showConsultPopup state or handleConsult function here anymore

  const handleclick = () => {
  alert(
    "Exciting things are on the way! 🎉 We're busy perfecting this feature for you. Please check back soon for updates!"
  );
};

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button //href="/"  
          onClick={handleclick}
          className="flex items-center space-x-2">
            <Image
              src="/itspirelogo.svg?height=40&width=120"
              alt="IT Spire Logo"
              width={120}
              height={40}
              className="w-auto h-8 lg:h-10"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <Link href="/" 
                  className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold hover:text-blue-600 transition-colors">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="mt-2">
                    <div className="w-80 p-4 bg-white rounded-lg shadow-md">
                      <button //href="/about" 
                      onClick={handleclick}
                      className="block p-2 rounded-md hover:bg-gray-100">
                        <h3 className="font-semibold">Introduction</h3>
                        <p className="text-sm text-gray-600">Learn about our journey and mission</p>
                      </button>
                      <button //href="/brand-story" 
                      onClick={handleclick}
                      className="block p-2 rounded-md hover:bg-gray-100 mt-2">
                        <h3 className="font-semibold">Brand Story</h3>
                        <p className="text-sm text-gray-600">Discover how IT Spire was founded</p>
                      </button>
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
                          <li><button //href="/services"
                          onClick={handleclick} 
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><LayoutDashboard className="w-5 h-5" /> UX Design</button></li>
                          <li><button // href="/services"
                           onClick={handleclick}
                           className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><MonitorSmartphone className="w-5 h-5" /> UI Design</button></li>
                          <li><button //href="/services" 
                          onClick={handleclick}
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Code2 className="w-5 h-5" /> Website Design</button></li>
                        </ul>
                      </div>

                      {/* Development */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Boxes className="w-6 h-6 text-blue-600" />
                          Development
                        </h4>
                        <ul className="space-y-3 text-base">
                          <li><button //href="/services" 
                          onClick={handleclick}
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Smartphone className="w-5 h-5" /> Mobile Apps</button></li>
                          <li><button //href="/services" 
                          onClick={handleclick}
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Code2 className="w-5 h-5" /> Web Development</button></li>
                          <li><button //href="/services" 
                          onClick={handleclick}
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><LayoutDashboard className="w-5 h-5" /> Custom Software</button></li>
                        </ul>
                      </div>

                      {/* Digital Marketing */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Share2 className="w-6 h-6 text-blue-600" />
                          Digital Marketing
                        </h4>
                        <ul className="space-y-3 text-base">
                          <li><button //href="/services" 
                          onClick={handleclick}
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Search className="w-5 h-5" /> SEO</button></li>
                          <li><button //href="/services" 
                          onClick={handleclick}
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Share2 className="w-5 h-5" /> Social Media</button></li>
                          <li><button //href="/services" 
                          onClick={handleclick}
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><MousePointerClick className="w-5 h-5" /> PPC</button></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button //href="/portfolio" 
                  onClick={handleclick}
                  className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                    Portfolio
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button //href="/products" 
                  onClick={handleclick}
                  className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                    Products
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-blue-600 hover:bg-blue-700 transition-all" onClick={onConsultClick}>
              Contact Us
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-lg shadow-md py-4 px-4 space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Products", path: "/products" }
            ].map((item, idx) => (
              <button
                key={idx}
                //href={item.path}
                onClick={handleclick}
                className="block text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2" onClick={onConsultClick}>
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}