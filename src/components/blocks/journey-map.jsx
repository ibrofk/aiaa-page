import React from "react"
import { Timeline } from "../../components/ui/timeline"
import { Squares } from "../../components/ui/squares-background"
import { TextGenerateEffect } from "../../components/ui/text-generate-effect"
import { Particles } from "../../components/ui/particles"

const KeyWord = ({ children }) => (
  <span className="text-red-500 font-semibold relative">
    <span className="relative z-10 animate-pulse">{children}</span>
    <span className="absolute inset-0 blur-[2px] bg-gradient-to-br from-red-600/50 via-orange-400/50 to-yellow-500/50 animate-pulse" />
  </span>
);

export function JourneyMap({ className }) {
  const journeyData = [
    {
      title: "The Struggle",
      content: (
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-red-500/50 transition-all duration-300">
          <TextGenerateEffect
            words={
              <>
                Running a business is <KeyWord>rewarding</KeyWord>—but sometimes it feels like you're <KeyWord>juggling</KeyWord> too much. Meetings, emails, updates—it's <KeyWord>endless</KeyWord>.
              </>
            }
            duration={1}
          />
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Busy team meeting"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
              alt="Overwhelming tasks"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Spark",
      content: (
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-red-500/50 transition-all duration-300">
          <TextGenerateEffect
            words={
              <>
                What if you could do <KeyWord>less</KeyWord> but achieve <KeyWord>more</KeyWord>? Focus on <KeyWord>people</KeyWord>, <KeyWord>progress</KeyWord>, and <KeyWord>purpose</KeyWord> while the rest takes care of itself.
              </>
            }
            duration={1}
          />
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
              alt="Strategic planning"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
              alt="Team success"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Connection",
      content: (
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-red-500/50 transition-all duration-300">
          <TextGenerateEffect
            words={
              <>
                We start with <KeyWord>real conversations</KeyWord>. Understanding your <KeyWord>goals</KeyWord>, challenges, and what keeps you up at night. No fluff—just <KeyWord>clarity</KeyWord>.
              </>
            }
            duration={1}
          />
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
              alt="Meaningful conversations"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&h=600&fit=crop"
              alt="Strategic planning"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Shift",
      content: (
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-red-500/50 transition-all duration-300">
          <TextGenerateEffect
            words={
              <>
                With <KeyWord>tailored solutions</KeyWord>, your team finds its <KeyWord>flow</KeyWord>. <KeyWord>Efficiency</KeyWord> becomes second nature. Customers get <KeyWord>quicker responses</KeyWord>, and your ideas turn into <KeyWord>action</KeyWord> faster.
              </>
            }
            duration={1}
          />
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
              alt="Digital transformation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Result",
      content: (
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-red-500/50 transition-all duration-300">
          <TextGenerateEffect
            words={
              <>
                You finally have space to <KeyWord>breathe</KeyWord>. Decisions make <KeyWord>sense</KeyWord>, your team <KeyWord>clicks</KeyWord>, customers <KeyWord>trust</KeyWord> you, and everything feels like it's moving <KeyWord>forward</KeyWord>.
              </>
            }
            duration={1}
          />
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
              alt="Business success"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop"
              alt="Team celebration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Future",
      content: (
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-red-500/50 transition-all duration-300">
          <TextGenerateEffect
            words={
              <>
                <KeyWord>Sharper</KeyWord> decisions. <KeyWord>Faster</KeyWord> growth. <KeyWord>Bigger</KeyWord> wins. Your edge, <KeyWord>redefined</KeyWord>.
              </>
            }
            duration={1}
          />
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
              alt="Future growth"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
              alt="Business success"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative snap-start min-h-screen">
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.4}
          squareSize={40}
          borderColor="rgba(255, 255, 255, 0.3)"
          hoverFillColor="#ff3333"
        />
        <Particles
          className="absolute inset-0 z-10"
          quantity={50}
          staticity={30}
          ease={70}
          color="#ffffff"
          size={0.6}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/80" />
      <div className="relative z-10">
        <Timeline data={journeyData} />
      </div>
    </section>
  );
} 