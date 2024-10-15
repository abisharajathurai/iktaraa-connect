import React from 'react'
import EventSection from './eventSection'

const AboutSection = () => {
  return (
    <div className='container mx-auto'>
        <div className='py-[16px] font-bold text-f24 leading-[32px]'>
        About Iktaraa Events
        </div>
        <div className='text-f18 font-normal'>
        At Iktaraa Events, we believe that organizing and hosting online events should be accessible to everyone, which is why we offer a platform for ticketing your events completely free of charge. Whether you're planning a virtual concert, a webinar, a workshop, or a community meetup, our platform empowers you to manage your event with ease and reach your audience effectively.
        </div>
        <div className='py-[16px]'>
         <EventSection/>
        </div>
      
    </div>
  )
}

export default AboutSection
