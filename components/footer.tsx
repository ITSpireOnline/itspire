import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      {/* Main Footer */}
      <div className="py-20 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-100">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/introduction" className="hover:text-white">Introduction</Link></li>
                <li><Link href="/brand-story" className="hover:text-white">Brand Story</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-100">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/services" className="hover:text-white">Design</Link></li>
                <li><Link href="/services" className="hover:text-white">Development</Link></li>
                <li><Link href="/services" className="hover:text-white">Digital Marketing</Link></li>
                <li><Link href="/devops" className="hover:text-white">DevOps</Link></li>
                <li><Link href="/services" className="hover:text-white">Content Writing</Link></li>
                <li><Link href="/services" className="hover:text-white">Server Support</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-100">Industries</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/industries/healthcare" className="hover:text-white">Healthcare</Link></li>
                <li><Link href="/industries/ecommerce" className="hover:text-white">eCommerce</Link></li>
                <li><Link href="/industries/education" className="hover:text-white">Education</Link></li>
                <li><Link href="/industries/wellness" className="hover:text-white">Wellness</Link></li>
                <li><Link href="/industries/travel" className="hover:text-white">Tour & Travel</Link></li>
                <li><Link href="/industries" className="text-blue-400 hover:text-white">More...</Link></li>
              </ul>
            </div>

            {/* Portfolio */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-100">Portfolio</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/portfolio" className="hover:text-white">Lal Path Labs</Link></li>
                <li><Link href="/portfolio" className="hover:text-white">Oncquest Labs</Link></li>
                <li><Link href="/portfolio" className="hover:text-white">Admissify</Link></li>
                <li><Link href="/portfolio" className="hover:text-white">HSBP Salon</Link></li>
                <li><Link href="/portfolio" className="hover:text-white">GO Contest</Link></li>
                <li><Link href="/portfolio" className="text-blue-400 hover:text-white">More...</Link></li>
              </ul>
            </div>

            {/* Other Links + Social Icons */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-100">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400 mb-6">
                <li><Link href="/career" className="hover:text-white">Career</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-blue-500"><Facebook className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-pink-500"><Instagram className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-sky-400"><Twitter className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-blue-400"><Linkedin className="w-5 h-5" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 text-sm text-slate-500 bg-zinc-950">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2023 IT Spire Private Limited. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
