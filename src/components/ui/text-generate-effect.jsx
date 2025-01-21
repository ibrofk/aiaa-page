import React from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  
  const startAnimation = () => {
    animate(
      "span.animate-text",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        duration: 0.15,
        delay: stagger(0.03),
        ease: "easeOut"
      }
    );
  };

  const renderContent = () => {
    if (typeof words === 'string') {
      return words.split(" ").map((word, idx) => (
        <motion.span
          key={word + idx}
          className="animate-text text-neutral-200 opacity-0"
          style={{
            filter: "blur(10px)",
          }}
        >
          {word}{" "}
        </motion.span>
      ));
    }
    
    // Handle React elements
    return React.Children.map(words.props.children, (child, idx) => {
      if (typeof child === 'string') {
        return child.split(" ").map((word, wordIdx) => (
          <motion.span
            key={word + idx + wordIdx}
            className="animate-text text-neutral-200 opacity-0"
            style={{
              filter: "blur(10px)",
            }}
          >
            {word}{" "}
          </motion.span>
        ));
      }
      return React.cloneElement(child, {
        key: idx,
        className: `${child.props.className || ""} opacity-0 animate-text`,
        style: {
          ...child.props.style,
          filter: "blur(10px)",
        },
      });
    });
  };

  return (
    <div className={`font-medium ${className || ""}`}>
      <div className="mt-4">
        <div className="text-base sm:text-lg md:text-xl leading-snug tracking-wide">
          <motion.div 
            ref={scope}
            whileInView={startAnimation}
            viewport={{ once: false, margin: "-10%" }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
