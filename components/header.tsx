"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Paintbrush,
  LayoutDashboard,
  MonitorSmartphone,
  Smartphone,
  Code2,
  Boxes,
  Search,
  Share2,
  MousePointerClick,
  Briefcase,
  UserPlus,
  ChevronDown, 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  onConsultClick: () => void;
}

export default function Header({ onConsultClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false); // State for mobile About Us dropdown
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // State for mobile Services dropdown
  const [isMobileCareersOpen, setIsMobileCareersOpen] = useState(false); // State for mobile Careers dropdown

  const handleComingSoon = () => {
    alert(
      "Exciting things are on the way! 🎉 We're busy perfecting this feature for you. Please check back soon for updates!"
    );
  };

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
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                {/* About Us Dropdown */}
                

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold hover:text-blue-600 transition-colors">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="mt-4 z-50">
                    <div className="w-[650px] p-8 grid grid-cols-3 gap-8 bg-white rounded-lg shadow-md">
                      {/* Design */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Paintbrush className="w-6 h-6 text-blue-600" />
                          Design
                        </h4>
                        <ul className="space-y-3 text-base">
                          <li>
                            <button
                              onClick={handleComingSoon}
                              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 w-full text-left"
                            >
                              <LayoutDashboard className="w-5 h-5" /> UX Design
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={handleComingSoon}
                              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 w-full text-left"
                            >
                              <MonitorSmartphone className="w-5 h-5" /> UI Design
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={handleComingSoon}
                              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 w-full text-left"
                            >
                              <Code2 className="w-5 h-5" /> Website Design
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* Development */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Boxes className="w-6 h-6 text-blue-600" />
                          Development
                        </h4>
                        <ul className="space-y-3 text-base">
                          <li>
                            <button
                              onClick={handleComingSoon}
                              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 w-full text-left"
                            >
                              <Smartphone className="w-5 h-5" /> Mobile Apps
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={handleComingSoon}
                              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 w-full text-left"
                            >
                              <Code2 className="w-5 h-5" /> Web Development
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={handleComingSoon}
                              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 w-full text-left"
                            >
                              <LayoutDashboard className="w-5 h-5" /> Custom Software
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* Digital Marketing */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Share2 className="w-6 h-6 text-blue-600" />
                          Digital Marketing
                        </h4>
                        <ul className="space-y-3 text-base">
                          <li>
                            <button
                              onClick={handleComingSoon}
                              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 w-full text-left"
                            >
                              <Search className="w-5 h-5" /> SEO
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={handleComingSoon}
                              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 w-full text-left"
                            >
                              <Share2 className="w-5 h-5" /> Social Media
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={handleComingSoon}
                              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 w-full text-left"
                            >
                              <MousePointerClick className="w-5 h-5" /> PPC
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                      </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold hover:text-blue-600 transition-colors">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="mt-2 z-50">
                    <div className="w-80 p-4 bg-white rounded-lg shadow-md">
                      <Link
                        href="/about/introduction"
                        className="w-full text-left p-2 rounded-md hover:bg-gray-100 block" // Added 'block' for full link area
                      >
                        <h3 className="font-semibold">Introduction</h3>
                        <p className="text-sm text-gray-600">
                          Learn about our journey and mission
                        </p>
                      </Link>
                      <Link
                        href="/about/brand-story"
                        className="w-full text-left p-2 rounded-md hover:bg-gray-100 mt-2 block" // Added 'block' for full link area
                      >
                        <h3 className="font-semibold">Brand Story</h3>
                        <p className="text-sm text-gray-600">
                          Discover how IT Spire was founded
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
        </NavigationMenuList>
          </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold hover:text-blue-600 transition-colors">
                    Careers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="mt-2 z-[60]">
                    <div className="w-80 p-4 bg-white rounded-lg shadow-md">
                      <Link
                        href="/careers/internship"
                        className="w-full text-left p-2 rounded-md hover:bg-gray-100 flex items-center gap-2"
                      >
                        <UserPlus className="w-5 h-5 text-blue-600" />
                        <div>
                          <h3 className="font-semibold">Internship</h3>
                          <p className="text-sm text-gray-600">
                            Explore opportunities for students
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/careers/job-opening"
                        className="w-full text-left p-2 rounded-md hover:bg-gray-100 mt-2 flex items-center gap-2"
                      >
                        <Briefcase className="w-5 h-5 text-blue-600" />
                        <div>
                          <h3 className="font-semibold">Job Opening</h3>
                          <p className="text-sm text-gray-600">
                            View current job vacancies
                          </p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              className="bg-blue-600 hover:bg-blue-700 transition-all"
              onClick={onConsultClick}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-lg shadow-md py-4 px-4 space-y-3">
            <Link
              href="/"
              className="block text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile About Us Dropdown */}
            <div className="border-t border-gray-100 pt-3 mt-3">
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className="flex items-center justify-between w-full text-left text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                About Us
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${isMobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileAboutOpen && (
                <div className="pl-4 pt-2 space-y-2">
                  <Link
                    href="/about/introduction"
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileAboutOpen(false);
                    }}
                  >
                    Introduction
                  </Link>
                  <Link
                    href="/about/brand-story"
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileAboutOpen(false);
                    }}
                  >
                    Brand Story
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Services Dropdown */}
            <div className="border-t border-gray-100 pt-3 mt-3">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-left text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 pt-2 space-y-2">
                  {/* These still use handleComingSoon for now */}
                  <button
                    onClick={() => {handleComingSoon(); setIsMenuOpen(false); setIsMobileServicesOpen(false);}}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 w-full text-left"
                  >
                    UX Design
                  </button>
                  <button
                    onClick={() => {handleComingSoon(); setIsMenuOpen(false); setIsMobileServicesOpen(false);}}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 w-full text-left"
                  >
                    UI Design
                  </button>
                  <button
                    onClick={() => {handleComingSoon(); setIsMenuOpen(false); setIsMobileServicesOpen(false);}}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 w-full text-left"
                  >
                    Website Design
                  </button>
                  <button
                    onClick={() => {handleComingSoon(); setIsMenuOpen(false); setIsMobileServicesOpen(false);}}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 w-full text-left"
                  >
                    Mobile Apps
                  </button>
                  <button
                    onClick={() => {handleComingSoon(); setIsMenuOpen(false); setIsMobileServicesOpen(false);}}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 w-full text-left"
                  >
                    Web Development
                  </button>
                  <button
                    onClick={() => {handleComingSoon(); setIsMenuOpen(false); setIsMobileServicesOpen(false);}}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 w-full text-left"
                  >
                    Custom Software
                  </button>
                  <button
                    onClick={() => {handleComingSoon(); setIsMenuOpen(false); setIsMobileServicesOpen(false);}}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 w-full text-left"
                  >
                    SEO
                  </button>
                  <button
                    onClick={() => {handleComingSoon(); setIsMenuOpen(false); setIsMobileServicesOpen(false);}}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 w-full text-left"
                  >
                    Social Media
                  </button>
                  <button
                    onClick={() => {handleComingSoon(); setIsMenuOpen(false); setIsMobileServicesOpen(false);}}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 w-full text-left"
                  >
                    PPC
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Careers Dropdown */}
            <div className="border-t border-gray-100 pt-3 mt-3">
              <button
                onClick={() => setIsMobileCareersOpen(!isMobileCareersOpen)}
                className="flex items-center justify-between w-full text-left text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Careers
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${isMobileCareersOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileCareersOpen && (
                <div className="pl-4 pt-2 space-y-2">
                  <Link
                    href="/careers/internship"
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileCareersOpen(false);
                    }}
                  >
                    Internship
                  </Link>
                  <Link
                    href="/careers/job-opening"
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileCareersOpen(false);
                    }}
                  >
                    Job Opening
                  </Link>
                </div>
              )}
            </div>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 mt-4 py-2"
              onClick={() => {
                onConsultClick();
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}