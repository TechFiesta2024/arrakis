import React from 'react'
import HelpDeskCard from './HelpDeskCard'

const Card = ({ filteredData }) => {
  return (
      <>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
              {filteredData.map((member, index) => (
                  <HelpDeskCard key={index} member={member} />
              ))}
          </div>
      </>
  )
}

export default Card

// mapping of TeamCard component