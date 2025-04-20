import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 lg:min-h-[700px]" id='FooterPart'>
      {/* Main Footer Content */}
      <motion.div
        className="flex flex-col items-center justify-center space-y-8 flex-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-2xl p-10 grid gap-10 min-h-[450px] lg:my-20">

          {/* Top Section: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* Left - Contact Info */}
            <div className="text-center md:text-left text-lg md:mt-10">
              <h2 className="text-xl font-semibold mb-4 text-center">Get In Touch</h2>
              <p className="flex justify-center md:justify-start items-center gap-2 mb-2">
                <FaEnvelope className="text-white hidden lg:inline" />
                <span className='cursor-pointer hover:text-blue-600 transition-colors duration-300'>
                  Email: synaptekinfotech@gmail.com
                </span>
              </p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <IoCall className="hidden lg:inline" />
                <span className='cursor-pointer hover:text-blue-600 transition-colors duration-300'>
                  Phone: +91 63536 00958
                </span>
              </p>
            </div>

            {/* Middle - Logo & Links */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 mb-4">
                <img src="/Logo.png" alt="Logo" className="w-7 h-7" />
                <h1 className="text-2xl font-bold cursor-pointer hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
                  <span className="text-blue-500">S</span>ynapTek InfoTech
                </h1>
              </div>
              <div className="space-y-2 text-lg">
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <p className="cursor-pointer hover:text-blue-600 transition-colors duration-300"><a href="#Home">Home</a></p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors duration-300"><a href="#about">About</a></p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors duration-300"><a href="#ServicesPart">Services</a></p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors duration-300"><a href="#FooterPart">Contact</a></p>
              </div>
            </div>

            {/* Right - Socials */}
            <div className="text-center md:text-right text-lg md:mt-10 lg:-translate-x-[30%] transition-transform duration-500">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex justify-center md:justify-end gap-4 text-xl">
                <a href="https://www.instagram.com/synaptek_info?igsh=YzQ4N3ZlZTg5eDAy" target='_blank' rel="noreferrer">
                  <FaInstagram className="cursor-pointer hover:text-blue-600 transition-colors duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/synaptek-infotech-5b511a353/" target='_blank'>
                  <FaLinkedin className="cursor-pointer hover:text-blue-600 transition-colors duration-300" />
                </a>
                <a href="https://search.app/u8dL27geQzcD5TUU6" target='_blank' rel="noreferrer">
                  <FaTwitter className="cursor-pointer hover:text-blue-600 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-4 text-center text-lg">
            <p className='cursor-pointer hover:text-blue-600 transition-colors duration-300'>
              © 2025 SynapTek Infotech. All Rights Reserved.
            </p>
            <p className="mt-2 cursor-pointer hover:text-blue-600 transition-colors duration-300">
              Terms of Use | Privacy Policy | Cookie Policy
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
