import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Technology from '../assets/Technology.avif';

export default function WhyChooseUs() {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => setReadMore(!readMore);

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-12 xl:px-20" id="about">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Right Circular Image with Responsive Size and Animation */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-full border-[6px] sm:border-[10px] border-white p-1 sm:p-2 bg-black">
            <img
              src={Technology}
              alt="Why Choose Us"
              className="rounded-full object-cover border-[3px] sm:border-[5px] border-black
                         w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]"
            />
          </div>
        </motion.div>

        {/* Left Content */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            
Technology Services
          </h2>

          <div className="inline-block bg-white rounded-xl px-4 py-2 mb-6">
            <span className="text-blue-600 font-bold text-sm sm:text-sm md:text-base">
            Smart IT Solutions for a Smarter Future
            </span>
          </div>

          <p className="text-gray-300 mb-4 text-sm sm:text-base lg:text-lg">
            At Synaptek Infotech, we provide cutting-edge IT solutions, including
            software, mobile apps, and cloud services. Our expert team delivers
            secure, scalable, and customized solutions to drive business growth.
          </p>

          {readMore && (
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4">
              With a focus on quality and client satisfaction, we offer end-to-end
              services, ensuring seamless digital transformation. We bring technology and creativity
              together to transform your ideas into reality.
            </p>
          )}

          <button
            onClick={toggleReadMore}
            className="bg-white text-black font-medium px-6 py-2 rounded-md shadow hover:shadow-md transition duration-300"
          >
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
