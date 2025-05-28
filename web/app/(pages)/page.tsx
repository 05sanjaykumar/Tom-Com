'use client'
import { BackgroundLines } from "@/components/ui/background-lines";
import FloatingExploreButton  from "@/components/ExploreButton"

export default function Home() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Tom Com <br /> Easy Access Movies!
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Tom-Com is a personalized AI movie and TV recommendation platform that learns your tastes through your interactions. 
        Discover, explore, and chat with AI about films — all tailored just for you.
      </p>
      <FloatingExploreButton/>
    </BackgroundLines>
  );
}
