import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Squares } from "../ui/squares-background"
import { Particles } from "../ui/particles"

interface JourneyStep {
  title: string
  description: string
}

interface JourneyMapProps {
  className?: string
}

export function JourneyMap({ className }: JourneyMapProps) {
  const steps: JourneyStep[] = [
    {
      title: "The Struggle",
      description: "Running a business is rewarding—but sometimes it feels like you're juggling too much. Meetings, emails, updates—it's endless."
    },
    {
      title: "The Spark",
      description: "What if you could do less but achieve more? Focus on people, progress, and purpose while the rest takes care of itself."
    },
    {
      title: "The Connection",
      description: "We start with real conversations. Understanding your goals, challenges, and what keeps you up at night. No fluff—just clarity."
    },
    {
      title: "The Shift",
      description: "With tailored solutions, your team finds its flow. Efficiency becomes second nature. Customers get quicker responses, and your ideas turn into action faster."
    },
    {
      title: "The Result",
      description: "You finally have space to breathe. Decisions make sense, your team clicks, customers trust you, and everything feels like it's moving forward the way it should."
    },
    {
      title: "The Future",
      description: "Sharper decisions. Faster growth. Bigger wins. Your edge, redefined."
    }
  ]

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.4}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
          className="absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 z-10">
        <Particles
          className="absolute inset-0"
          quantity={50}
          staticity={30}
          ease={70}
          color="#ffffff"
          size={0.6}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/80" />
      <div className={cn(
        "relative z-20",
        "py-12 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8",
        className
      )}>
        <div className="mx-auto max-w-container">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              The Journey
            </h2>
            <p className="text-xl text-neutral-300">
              Your path to transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={cn(
                  "bg-black/40 backdrop-blur-sm p-6 rounded-lg",
                  "transform transition-transform duration-300 hover:scale-105",
                  "border border-white/10 hover:border-red-500/50",
                  "flex flex-col gap-4"
                )}>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600/20 text-red-500 font-semibold text-sm border border-red-500/20">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-neutral-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 