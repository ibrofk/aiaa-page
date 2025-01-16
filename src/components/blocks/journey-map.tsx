import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

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
    <section className={cn(
      "bg-gradient-to-b from-secondary to-primary",
      "py-12 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8",
      className
    )}>
      <div className="mx-auto max-w-container">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Journey
          </h2>
          <p className="text-xl text-muted-foreground">
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
                "bg-card p-6 rounded-lg shadow-lg",
                "transform transition-transform duration-300 hover:scale-105",
                "border border-border/50",
                "flex flex-col gap-4"
              )}>
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 