import React, { useState, useEffect } from "react";
import { FaRocket, FaLightbulb, FaCogs, FaChartLine, FaCalendarCheck, FaLinkedin, FaTwitter, FaGithub, FaArrowRight, FaTrophy, FaGem, FaHandshake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { JourneyMap } from "./components/blocks/journey-map.jsx"
import { Squares } from "./components/ui/squares-background"
import { SplineScene } from "./components/ui/splite"
import { WordRotate } from "./components/ui/word-rotate"
import { ShineBorder } from "./components/ui/shine-border";

const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity
        }}
        className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-lg"
      >
        Loading resources...
      </motion.p>
    </div>
  </div>
);

const FuturisticLanding = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    // Preload static models and resources
    const preloadResources = async () => {
      try {
        // Wait for 5 seconds to ensure models are loaded
        await new Promise(resolve => setTimeout(resolve, 5000));
        setModelsLoaded(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading resources:', error);
        setIsLoading(false);
      }
    };

    preloadResources();

    return () => clearInterval(timer);
  }, []);

  const uvpDetails = [
    {
      icon: <FaTrophy className="text-4xl text-red-500 mb-4" />,
      title: "Industry Leadership",
      description: "With over a decade of experience in digital transformation, we have consistently led the industry in innovation and excellence.",
      fullDescription: "With over a decade of experience in digital transformation, we have consistently led the industry in innovation and excellence. Our proven track record includes successful partnerships with Fortune 500 companies and cutting-edge startups alike, delivering transformative solutions that drive real business value."
    },
    {
      icon: <FaGem className="text-4xl text-red-500 mb-4" />,
      title: "Premium Quality",
      description: "We maintain the highest standards of quality in every project we undertake.",
      fullDescription: "We maintain the highest standards of quality in every project we undertake. Our rigorous quality assurance processes, combined with our team of certified professionals, ensure that every solution we deliver is robust, scalable, and future-proof. We don't just meet expectations - we exceed them."
    },
    {
      icon: <FaHandshake className="text-4xl text-red-500 mb-4" />,
      title: "Client Partnership",
      description: "We believe in building lasting relationships with our clients.",
      fullDescription: "We believe in building lasting relationships with our clients. Our collaborative approach means we work closely with you at every step, ensuring complete transparency and alignment with your business goals. Your success is our success, and we're committed to being a long-term partner in your growth journey."
    }
  ];

  const services = [
    {
      icon: <FaRocket className="text-4xl text-red-500" />,
      title: "Innovation",
      description: "Pushing boundaries",
      fullDescription: "Pushing boundaries with cutting-edge solutions",
      extendedDescription: "Our innovation service helps businesses stay ahead of the curve with the latest technological advancements and creative solutions."
    },
    {
      icon: <FaLightbulb className="text-4xl text-red-500" />,
      title: "Strategy",
      description: "Smart solutions",
      fullDescription: "Smart approaches for complex challenges",
      extendedDescription: "Strategic planning and execution to help your business overcome obstacles and achieve sustainable growth."
    },
    {
      icon: <FaCogs className="text-4xl text-red-500" />,
      title: "Development",
      description: "Future tech",
      fullDescription: "Building tomorrow's technology today",
      extendedDescription: "Cutting-edge development services utilizing the latest technologies and best practices in software engineering."
    },
    {
      icon: <FaChartLine className="text-4xl text-red-500" />,
      title: "Analytics",
      description: "Data insights",
      fullDescription: "Data-driven insights for growth",
      extendedDescription: "Advanced analytics and reporting to help you make informed decisions and optimize your business performance."
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-red-500" />,
      title: "Planning",
      description: "Success path",
      fullDescription: "Structured approach to success",
      extendedDescription: "Comprehensive planning services to help you map out your path to success and achieve your business goals."
    }
  ];

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      name: "John Smith",
      role: "CEO, TechCorp",
      text: "The most innovative solution we've implemented in years."
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Sarah Johnson",
      role: "CTO, FutureWorks",
      text: "Exceptional service and cutting-edge implementation."
    }
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center snap-start">
        <div className="absolute inset-0 z-0">
          <Squares 
            direction="diagonal"
            speed={0.4}
            squareSize={40}
            borderColor="#ffffff"
            hoverFillColor="#ff3333"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/80" />
        
        <div className="w-full h-full relative z-10">
          <div className="flex flex-col md:flex-row items-center h-full">
            {/* Text Content */}
            <div className="w-full md:w-1/3 h-full flex flex-col items-center justify-center gap-8 order-1 md:order-none pt-[5vh] md:pt-0">
              <WordRotate
                words={["Transform", "Automate", "Scale"]}
                className="text-5xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 text-center"
                duration={2000}
                framerProps={{
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -50 },
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              />
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(239, 68, 68, 0.7)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg text-white font-medium 
                  transition-all duration-300 hover:from-red-500 hover:to-red-400
                  shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_25px_rgba(239,68,68,0.7)]
                  border border-red-400/50 hover:border-red-300/50
                  relative overflow-hidden group"
              >
                <span className="relative z-10">Book a Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-orange-500/50 blur-xl 
                  group-hover:from-red-500/70 group-hover:to-orange-400/70 
                  transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </motion.button>
            </div>

            {/* 3D Model */}
            <div className="w-full md:w-2/3 h-[600px] md:h-screen relative order-2 md:order-none">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Youtube Video Section */}
      <section className="snap-start min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Squares 
            direction="up"
            speed={0.3}
            squareSize={40}
            borderColor="#ffffff"
            hoverFillColor="#ff3333"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/80" />
        <div className="relative z-10 max-w-6xl mx-auto text-center p-8">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight"
            style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
          >
            Watch Our Story
          </motion.h2>
          <ShineBorder
            borderRadius={12}
            borderWidth={2}
            duration={8}
            color={["#ff3333", "#ff6666", "#ff9999"]}
            className="w-full bg-transparent p-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <iframe
                className="w-full h-[500px] rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                src="https://www.youtube.com/embed/DNcuyJtqy7o"
                title="Company Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </ShineBorder>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block mt-8 text-2xl text-white font-semibold"
          >
            Discover how we're shaping the future of technology
          </motion.p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="snap-start h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Squares 
            direction="right"
            speed={0.4}
            squareSize={40}
            borderColor="#ffffff"
            hoverFillColor="#ff3333"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto p-4 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {uvpDetails.map((detail, index) => (
              <motion.div
                key={index}
                className="bg-black/40 backdrop-blur-sm p-4 md:p-8 rounded-xl shadow-lg border border-white/10 hover:border-red-500/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  {detail.icon}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">{detail.title}</h3>
                  <p className="text-neutral-300 text-sm md:text-base">
                    {window.innerWidth <= 768 ? detail.description : detail.fullDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="snap-start min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Squares 
            direction="left"
            speed={0.4}
            squareSize={40}
            borderColor="#ffffff"
            hoverFillColor="#ff3333"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />
        <div className="relative z-10 max-w-6xl mx-auto text-center p-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-lg cursor-pointer border border-white/10 hover:border-red-500/50 transition-all duration-300 ${
                    selectedService === index ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedService(selectedService === index ? null : index)}
                >
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-300 text-sm">
                    {selectedService === index
                      ? service.extendedDescription
                      : service.description}
                  </p>
                  {selectedService === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 flex items-center justify-center text-red-500 gap-2 hover:gap-3 transition-all"
                    >
                      Learn More <FaArrowRight />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Journey Map */}
      <JourneyMap />

      {/* Testimonials */}
      <section className="snap-start h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Squares 
            direction="diagonal"
            speed={0.3}
            squareSize={40}
            borderColor="#ffffff"
            hoverFillColor="#ff3333"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center p-8">
          <h2 className="text-4xl font-bold text-white mb-12">What Our Clients Say</h2>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-xl italic mb-4">{testimonials[currentTestimonial].text}</p>
            <h3 className="font-bold">{testimonials[currentTestimonial].name}</h3>
            <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
          </motion.div>
        </div>
      </section>

      {/* Book a Call */}
      <section className="snap-start h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Squares 
            direction="up"
            speed={0.5}
            squareSize={40}
            borderColor="#ffffff"
            hoverFillColor="#ff3333"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />
        <div className="relative z-10 max-w-4xl mx-auto text-center p-8">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-neutral-300 mb-8">Schedule a free consultation with our experts</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg"
          >
            Book a Call Now
          </motion.button>
        </div>
      </section>

      {/* Contact */}
      <section className="snap-start h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Squares 
            direction="diagonal"
            speed={0.4}
            squareSize={40}
            borderColor="#ffffff"
            hoverFillColor="#ff3333"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center p-8">
          <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-3xl text-red-500 hover:text-red-400"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-3xl text-red-500 hover:text-red-400"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-3xl text-red-500 hover:text-red-400"
            >
              <FaGithub />
            </motion.a>
          </div>
          <p className="text-xl text-white">contact@futuristic.com</p>
        </div>
      </section>
    </div>
  );
};

export default FuturisticLanding;