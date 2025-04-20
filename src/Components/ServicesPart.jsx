import React from 'react';
import { motion } from 'framer-motion';
const services = [
  {
    title: 'Mobile Application',
    desc: 'We develop intuitive and scalable mobile applications for iOS and Android platforms.',
    img: './app.jpg',
  },
  {
    title: 'Web Development',
    desc: 'Our team creates modern, high-performance, and responsive websites tailored to your needs.',
    img: './web.jpg',
  },
  {
    title: 'Graphic & Ui–UX Design',
    desc: 'We craft visually stunning and user-friendly UI/UX designs to enhance user experiences.',
    img: './design.jpg',
  },
  {
    title: 'Digital Marketing',
    desc: 'We provide result-driven digital marketing services to grow your business online.',
    img: './Digital Marketing.png',
  },
  {
    title: 'Video Editing',
    desc: 'Our professional video editing services turn your raw footage into impactful and polished videos.',
    img: './Video Edting.png',
  },
  {
    title: 'Product Shoots',
    desc: 'We offer high-quality product photography services that showcase your products in the best possible way.',
    img: './Produt Shoots.png',
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-black py-16 px-4" id='ServicesPart'>
      <div className="container mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-12">Our Service</h2>
        <motion.div 
          className="flex flex-col items-center justify-center space-y-8 flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent border border-white/15 text-white text-center rounded-[10px] p-[10px] w-[90%] sm:w-[45%] lg:w-[23.5%] h-[360px] transition-all duration-500 hover:border-white hover:shadow-[0px_0px_20px_1px_#ffbb763f] hover:scale-105"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </div>
  );
}
