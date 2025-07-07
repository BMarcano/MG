import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src="/images/logo-light-bg.jpeg" alt="Media Geek UY" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">
              Strategic multimedia solutions to boost your brand in the digital world.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/production" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Content Production
                </Link>
              </li>
              <li>
                <Link href="/services/distribution" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Content Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="/services/community-management"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Community Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/artificial-intelligence"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-blue-500 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/wptg-group" className="text-gray-400 hover:text-blue-500 transition-colors">
                  WPTG Group
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Montevideo, Uruguay</p>
              <p className="mb-2">info@mediageekuy.com</p>
              <p>+598 99 123 456</p>
            </address>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Media Geek UY. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
