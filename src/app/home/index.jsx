'use client'

import { HeroSection, Marquee, UnleashSkills } from "@/components/index "


export default function Homescreen() {
    return (
        <>
            <div className="h-[100%]">
                <HeroSection />
                <Marquee />
                <UnleashSkills />
            </div>
        </>
    )
}