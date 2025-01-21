import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaRocket, FaLightbulb, FaCogs, FaChartLine, FaCalendarCheck, FaLinkedin, FaTwitter, FaGithub, FaArrowRight, FaTrophy, FaGem, FaHandshake, FaRobot, FaCode, FaSalesforce } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { JourneyMap } from "./components/blocks/journey-map.jsx"
import { Squares } from "./components/ui/squares-background"
import { SplineScene } from "./components/ui/splite"
import { WordRotate } from "./components/ui/word-rotate"
import { ShineBorder } from "./components/ui/shine-border";
import ChatPage from "./pages/chat.tsx";

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
  const [selectedService, setSelectedService] = useState(0); // Set AI Agents as default open
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
      title: "Market Position",
      description: "Rocket-speed growth",
      fullDescription: "Imagine freeing up your team from mind-numbing tasks, letting them focus on what truly matters. Our smart solutions help you move 40% faster, turning tedious work into smooth, effortless progress. You'll wonder how you ever managed without this.",
      mobileDescription: "40% faster with AI-powered automation"
    },
    {
      icon: <FaGem className="text-4xl text-red-500 mb-4" />,
      title: "Peace of Mind",
      description: "Zero worry zone",
      fullDescription: "Sleep soundly knowing your tech runs smoother than a well-oiled machine. With 99.9% uptime, we've got your back 24/7. No more tech headaches, just pure, uninterrupted business momentum.",
      mobileDescription: "99.9% uptime, zero tech worries"
    },
    {
      icon: <FaHandshake className="text-4xl text-red-500 mb-4" />,
      title: "Bottom Line",
      description: "Money talks",
      fullDescription: "Who doesn't love seeing their bank account smile? Our solutions are like a financial fitness trainer, pumping up your production to 3x in just 12 months. Real results, real fast.",
      mobileDescription: "3x production in 12 months"
    }
  ];

  const services = [
    {
      icon: FaRobot,
      title: "AI Agents",
      description: "Intelligent automation that transforms how you work",
      extendedDescription: "Leverage cutting-edge AI to streamline your workflows and boost productivity"
    },
    {
      icon: FaCogs,
      title: "Automation",
      description: "Eliminate repetitive tasks with smart workflows",
      extendedDescription: "Custom automation solutions that free up your team to focus on high-value work"
    },
    {
      icon: FaCode,
      title: "Custom Solutions",
      description: "Tailored software development for unique business needs",
      extendedDescription: "End-to-end development that turns your vision into powerful, scalable software"
    },
    {
      icon: FaSalesforce,
      title: "Sales Workflows",
      description: "Optimize your sales process with intelligent tools",
      extendedDescription: "Advanced CRM and sales pipeline management to drive revenue growth"
    },
    {
      icon: FaChartLine,
      title: "Business Intelligence",
      description: "Data-driven insights to fuel strategic decisions",
      extendedDescription: "Advanced analytics and reporting to unlock your business's full potential"
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
            See How We Transformed Our Client's Business
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
        <div className="relative z-10 max-w-6xl mx-auto text-center p-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Guaranteed Success
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {uvpDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    {detail.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-neutral-300 text-sm mb-4 hidden md:block">
                    {detail.description}
                  </p>
                  <p className="text-neutral-200 text-xs hidden md:block">
                    {detail.fullDescription}
                  </p>
                  <p className="text-neutral-300 text-sm block md:hidden">
                    {detail.mobileDescription}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }
            }}
            whileHover={{ scale: 1.02 }}
            className="mt-12 bg-transparent"
          >
            <div className="hidden md:block">
              <motion.div
                className="bg-red-500/30 p-6 md:p-10 rounded-2xl shadow-2xl border border-red-500/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight text-center md:text-left">
                    Confidence Guaranteed
                  </p>
                  <p className="text-base md:text-xl text-neutral-200 mb-4 md:mb-6 text-center md:text-left">
                    We're so confident in our solutions that if you're not completely satisfied, we'll refund your investment – no questions asked.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0.4,
                        type: "spring",
                        bounce: 0.4
                      }
                    }}
                    className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full md:w-auto bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-500 transition-colors"
                    >
                      Book a Call
                    </motion.button>
                    <p className="text-neutral-300 italic text-center md:text-left">
                      100% Money-Back Guarantee
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="block md:hidden">
              <div className="bg-red-600 p-4 rounded-xl text-center">
                <p className="text-white font-bold text-base">
                  100% Money-Back Guarantee
                </p>
              </div>
            </div>
          </motion.div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    delay: index * 0.1 
                  } 
                }}
                className="bg-red-600/40 rounded-2xl p-6 text-white relative overflow-hidden group"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="text-4xl mr-4 text-white" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-neutral-100 mb-6">{service.description}</p>
                <div className="flex items-center">
                  <Link 
                    to={`/chat?initialMessage=${encodeURIComponent(service.title)}`} 
                    className="text-white underline flex items-center group-hover:opacity-80 transition-opacity"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Map */}
      <JourneyMap />

      {/* Testimonials Section Removed */}
      {/* <section className="snap-start h-screen relative flex items-center justify-center">
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
      </section> */}

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FuturisticLanding />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
