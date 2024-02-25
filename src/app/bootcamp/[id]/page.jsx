'use client'
import bootcampData from '@/components/Bootcamp/bootcampData.json'
import { useEffect, useState } from 'react';

export default function BootcampPageById({ params }) {

    const [bootcamp, setBootcamp] = useState({ coordinator: [] });


    useEffect(() => {
        const selectedBootcamp = bootcampData.find(bootcamp => "" + bootcamp.id === params.id);
        setBootcamp(selectedBootcamp);
    }, []);


    return (
        <>
            <div>

                <h1>{bootcamp.title}</h1>
                {/* Make sure to replace 'Image' with the actual image component you are using */}
                <img src={bootcamp.image_url} />
                <p>Venue: {bootcamp.venue}</p>
                <p>Timing: {bootcamp.timing}</p>
                <p>{bootcamp.body}</p>
                {

                    bootcamp.coordinator.map((coordinator, index) => (

                        <div key={index}>
                            <p>{coordinator.name}</p>
                            <img src={coordinator.image_url} />
                            <p>{coordinator.contact}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}