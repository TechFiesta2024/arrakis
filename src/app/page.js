'use client'

import { HeroSection, Marquee, UnleashSkills } from "@/components/index ";


export default function Home() {
  return (
    <>
      <div className="h-[100%]">
        <HeroSection />
        <Marquee />
        <UnleashSkills />
      </div>
    </>
  );
}
