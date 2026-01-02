import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      {/* Main Footer Content */}
      <div className="py-4 md:py-5 border-b border-zinc-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8">

            {/* Company Info / Branding */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold mb-4 text-blue-400">IT Spire</h4> {/* Emphasize brand */}
              <p className="text-sm text-slate-400 max-w-xs">
                Empowering businesses with innovative digital solutions in design, development, and marketing.
              </p>
              <div className="flex space-x-5 mt-6">
                <Link href="https://www.facebook.com/profile.php?id=61552536517727" aria-label="Facebook" className="text-slate-400 hover:text-blue-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="https://www.instagram.com/itspireonline/" aria-label="Instagram" className="text-slate-400 hover:text-pink-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" aria-label="Twitter" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-5 text-slate-100">Services</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Design</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Development</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">DevOps</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Server Support</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-lg font-semibold mb-5 text-slate-100">Industries</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Healthcare</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">eCommerce</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Education</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Wellness</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Tour & Travel</Link></li>
                {/* <li><Link href="/industries" className="text-blue-400 hover:text-white transition-colors">View All...</Link></li> */}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-5 text-slate-100">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li> {/* Consolidated from introduction/brand-story */}
                <li><Link href="#" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Career</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-6 text-sm text-slate-500 bg-zinc-900"> {/* Slightly lighter background for contrast */}
        <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="order-2 md:order-1">&copy; {new Date().getFullYear()} IT Spire Private Limited. All rights reserved.</p> {/* Dynamic year */}
          <div className="flex space-x-6 order-1 md:order-2">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}