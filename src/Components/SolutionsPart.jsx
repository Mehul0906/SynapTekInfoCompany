import React from 'react';
import { motion } from 'framer-motion';

export default function ITSolutions() {
  return (
    <div className="bg-black w-full min-h-screen p-8 flex items-center justify-center">
      <div className="w-[90%] flex flex-col md:flex-row items-stretch justify-center gap-8 py-12">
        
        {/* Left side with two circular images */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-8 flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          {/* First round image with margin-right on large screens */}
          <div className="rounded-full border-8 border-white overflow-hidden w-[300px] h-[300px] mx-auto flex items-center justify-center lg:mr-[20%]">
            <img 
              src="./ITFirstImage.png" 
              alt="Team collaboration" 
              className="w-[270px]  h-[270px] object-cover rounded-full"
            />
          </div>

          {/* Second round image with margin-left on large screens */}
          <div className="rounded-full border-8 border-white overflow-hidden w-[300px] h-[300px] mx-auto flex items-center justify-center lg:ml-[2%]">
            <img 
              src="./ITSECODN.webp" 
              alt="Business meeting" 
              className="w-[270px] h-[270px] object-cover rounded-full"
            />
          </div>
        </motion.div>
        
        {/* Right side with content */}
        <motion.div 
          className="text-white flex-1 flex flex-col justify-center px-4 md:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
            IT Solutions
          </h1>
          <div className="bg-white text-blue-600 text-sm font-bold px-4 py-2 rounded-xl inline-block mb-6 self-center md:self-start whitespace-nowrap">
  Smart Solutions for a Digital Future
</div>


          <p className="text-xl text-center md:text-left">
            At Synaptek Infotech, we offer comprehensive IT solutions to 
            enhance business efficiency and growth. Our services include 
            custom software development, mobile and web applications, 
            cloud computing, cybersecurity, and AI-driven automation. 
            We focus on delivering secure, scalable, and innovative 
            technology solutions tailored to your needs.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
