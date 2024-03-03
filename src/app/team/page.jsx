'use client'

import Card from "@/components/Team/Card"
import teamData from '/public/data/team.json'

import { useEffect, useState } from "react"

export default function TeamPage() {

    const [selectedButton, setSelectedButton] = useState('Techies')
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const filtered = teamData.filter(member => member.department === selectedButton)
        setFilteredData(filtered)
    }, [selectedButton])

    const btnClass = 'px-5 py-3 md:w-[147px] border-x-[.5px] border-t-[.5px] border-yellowish font-generalsans text-yellowish'
    const selectedBtnClass = 'px-5 py-3 md:w-[147px] border-x-[.5px] border-t-[.5px] border-yellowish font-generalsans text-yellowish bg-yellowish28'


    return (
        <>
            <div className="md:px-20">
                <div className="border-x-[.5px] border-yellowish">
                    <div className="flex justify-center items-center pt-20">
                        <div className="grid grid-cols-1">
                            <div className="flex-row">
                                <span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">:</span>
                                <span className="text-yellowish font-anton md:text-8xl px-2 mt-4 text-5xl">{selectedButton.toUpperCase()}</span>
                                <span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">:</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center pt-8">
                        <div className="grid grid-cols-1">
                            <div className="flex-row justify-evenly items-center">
                                <button
                                    onClick={() => setSelectedButton('Techies')}
                                    className={selectedButton === 'Techies' ? selectedBtnClass : btnClass}
                                >
                                    Techies
                                </button>
                                <button
                                    onClick={() => setSelectedButton('Management')}
                                    className={selectedButton === 'Management' ? selectedBtnClass : btnClass}
                                >
                                    Management
                                </button>
                                <button
                                    onClick={() => setSelectedButton('Content')}
                                    className={selectedButton === 'Content' ? selectedBtnClass : btnClass}
                                >
                                    Content
                                </button>
                            </div>
                        </div>
                    </div>
                    <Card filteredData={filteredData} />
                </div>
            </div>
        </>
    )
}