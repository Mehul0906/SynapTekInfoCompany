import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import AboutPart from './AboutPart'
import ServicesPart from './ServicesPart'
import SolutionsPart from './SolutionsPart'
import TechnologyPart from './TechnologyPart'
import FooterPart from './FooterPart'
import { motion } from "framer-motion";
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="CompanyInfo" id='Home'>
        <Navbar />
        <div 
          className="flex flex-col items-center justify-center space-y-8 flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <section style={{minHeight: "90vh"}} className="flex items-center justify-center text-white px-4 textheader">
            <div className="text-center">
              <h1 className="lg:text-8xl font-bold mb-6 leading-tight textheadermain">
                Welcome to <br className="hidden sm:block" /> SynapTek InfoTech
              </h1>
              <p className="text-lg lg:text-2xl mt-2">
                | Expert IT Services | Software <br className="hidden md:block" />
                Development | Cloud Solution |
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* text-4xl md:text-3xl */}
      {/* md:text-lg */}
      <AboutPart />
      <ServicesPart />
      <SolutionsPart />
      <TechnologyPart />
      <FooterPart />

      {/* 🔼 Back to Top Button */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 animate-bounce"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default Home;
