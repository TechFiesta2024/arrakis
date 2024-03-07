'use client'
import { useEffect, useState } from 'react';
import EventWorkshopCard from './EventWorkshopCard';


export default function EventWorkshopPage({ data, types }) {

    const [filteredData, setFilteredData] = useState([])
    const [selectedButton, setSelectedButton] = useState(types[0])

    useEffect(() => {
        const filtered = data.filter((d) => d.type === selectedButton)

        setFilteredData(filtered)
    }, [selectedButton])

    const btnClass = "px-5 py-3 md:w-[147px] border-x-[.5px] border-y-[.5px] border-yellowish font-generalsans text-yellowish";
    const selectedBtnClass = "px-5 py-3 md:w-[147px] border-x-[.5px] border-y-[.5px] border-yellowish font-generalsans text-yellowish bg-yellowish28";

    return (
        <>
            <div className="flex justify-center items-center pt-8">
                <div className="grid grid-cols-1">
                    <div className="flex-row justify-evenly items-center">
                        {types.map((type, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedButton(type)}
                                className={
                                    selectedButton === type ? selectedBtnClass : btnClass
                                }
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <FilterCard filteredData={filteredData} />
        </>
    );
}


function FilterCard({ filteredData }) {
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {filteredData.map((workshop, index) => (
                    <EventWorkshopCard key={index} workshop={workshop} />
                ))}
            </div>
        </>
    )
}