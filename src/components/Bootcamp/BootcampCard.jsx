import React from 'react'
import BootcampInfo from './BootcampInfo'

const BootcampCard = ({ filteredData }) => {
    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {filteredData.map((bootcamp, index) => (

                    <BootcampInfo key={index} bootcamp={bootcamp} />
                ))}
            </div>
        </>
    )
}

export default BootcampCard