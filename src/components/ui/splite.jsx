'use client'

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export function SplineScene({ scene, className }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3, // Even faster entrance
        ease: "easeOut",
        type: "spring",
        stiffness: 300, // Increased stiffness for snappier movement
        damping: 15 // Lower damping for faster motion
      }}
      className={className}
    >
      <Spline 
        scene={scene}
        onLoad={(splineApp) => {
          // Access the Spline runtime
          if (splineApp) {
            // Set a faster animation speed through transform speed
            const obj = splineApp.findObjectByName('Object');
            if (obj) {
              obj.speed = 2; // Double the animation speed
            }
          }
        }}
      />
    </motion.div>
  );
} 