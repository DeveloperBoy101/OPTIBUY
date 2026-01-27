import React from "react"
import { Link } from "react-router-dom"
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#d5e1eb] pt-12 pb-6 text-black mb-5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            <h3 className="text-2xl font-bold mb-4 text-black">OptiBuy</h3>
            <p className="text-gray-700 mb-5">
              Your one-stop destination for trendy fashion and lifestyle. Buy premium clothing with confidence.
            </p>

            <div className="flex gap-4">
              <a href="#" className="p-2 border rounded-lg hover:bg-white hover:text-[#0A2A49] transition text-black">
                <Facebook size={22} />
              </a>
              <a href="#" className="p-2 border rounded-lg hover:bg-white hover:text-[#0A2A49] transition text-black">
                <Instagram size={22} />
              </a>
              <a href="#" className="p-2 border rounded-lg hover:bg-white hover:text-[#0A2A49] transition text-black">
                <Youtube size={22} />
              </a>
              <a href="#" className="p-2 border rounded-lg hover:bg-white hover:text-[#0A2A49] transition text-black">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-700 hover:text-black transition">Home</Link></li>
              <li><Link to="/shop" className="text-gray-700 hover:text-black transition">Shop</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-black transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-black transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Categories</h4>
            <ul className="space-y-2">
              <li><Link className="text-gray-700 hover:text-black transition">Menʼs Fashion</Link></li>
              <li><Link className="text-gray-700 hover:text-black transition">Womenʼs Fashion</Link></li>
              <li><Link className="text-gray-700 hover:text-black transition">Kids</Link></li>

            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Contact Info</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <MapPin size={20} /> 123 Fashion Street, City
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} /> +1 234 567 890
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} /> support@optibuy.com
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} /> Mon-Fri: 9AM-6PM
              </li>
            </ul>
          </div>
        </div>



        <div className="border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-700 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} OptiBuy. All rights reserved.
          </p>


        </div>
      </div>
    </footer>
  )
}

export default Footer
