"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 40%"],
    dragElastic: 0.2,
    dragTransition: { bounceStiffness: 300, bounceDamping: 40 }
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height], {
    clamp: true
  });
  const opacityTransform = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const [isTouching, setIsTouching] = useState(false);
  
  useEffect(() => {
    const handleTouchStart = () => setIsTouching(true);
    const handleTouchEnd = () => setIsTouching(false);
    
    if (typeof window !== 'undefined') {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="relative">
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background: "radial-gradient(circle at center, rgba(239, 68, 68, 0.15), transparent 70%)",
              filter: "blur(60px)",
              transform: "translateZ(0)"
            }}
          />
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white max-w-4xl font-bold tracking-tight drop-shadow-2xl">
            The Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl font-medium drop-shadow-lg">
            Your path to transformation and growth
          </p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ 
              once: true,
              margin: "-10%"
            }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10 relative"
          >
            {/* Simplified burning glow effect for better performance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: [0, 0.8], scale: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute inset-0 -z-10 bg-gradient-radial from-red-500/20 via-red-900/5 to-transparent"
              style={{
                filter: "blur(40px)",
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            />
            
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div 
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border border-white/10"
                whileInView={{
                  boxShadow: !isTouching ? [
                    "0 0 20px rgba(0,0,0,0.8), 0 0 0 rgba(239, 68, 68, 0)",
                    "0 0 20px rgba(0,0,0,0.8), 0 0 20px rgba(239, 68, 68, 0.3)",
                    "0 0 20px rgba(0,0,0,0.8), 0 0 0 rgba(239, 68, 68, 0)"
                  ] : "0 0 20px rgba(0,0,0,0.8)"
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="h-4 w-4 rounded-full bg-red-600 border border-red-500/50"
                  whileInView={{
                    scale: !isTouching ? [1, 1.1, 1] : 1,
                    opacity: !isTouching ? [1, 0.9, 1] : 1
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 drop-shadow-2xl">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 drop-shadow-2xl">
                {item.title}
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                }}
                viewport={{ 
                  once: true,
                  margin: "-5%"
                }}
                transition={{ duration: 0.5 }}
                className="relative shadow-[0_0_30px_rgba(0,0,0,0.9)]"
              >
                {/* Simplified background glow for better performance */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute -inset-4 -z-10"
                >
                  <motion.div
                    animate={{
                      scale: !isTouching ? [1, 1.1, 1] : 1,
                      opacity: !isTouching ? [0.3, 0.8, 0.3] : 0.3,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="w-full h-full bg-gradient-radial from-red-500/30 via-red-900/10 to-transparent"
                    style={{
                      filter: "blur(20px)",
                      transform: "translateZ(0)",
                      willChange: "transform, opacity",
                    }}
                  />
                </motion.div>
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/10 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] shadow-[0_0_30px_rgba(0,0,0,0.8)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-600 via-red-500 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}; 