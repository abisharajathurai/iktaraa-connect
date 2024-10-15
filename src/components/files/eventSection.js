import React from 'react'
import CustomButton from './CustomButton'
const data=[
    {
        id:1,
        count:1,
        content:'Signup with Mobile Number'
    },
    {
        id:2,
        count:2,
        content:'Upload Event Information'
    },
    {
        id:3,
        count:3,
        content:'Publish & Earn'
    }
]
const EventSection = () => {
  return (
    <div className='flex  justify-center items-center '>
        <div className='bg-dm_lightBlue flex flex-col lg:flex-row  gap-5 w-full max-w-[1064px] rounded-[12px]'>
        <div>
            <img src='/asset/group.png' className="w-[100%] lg:w-[257.04px] lg:h-[148.37px] object-contain"/>
        </div>
        <div className='flex flex-col justify-center'>
          <div className='text-dm_darkBlue text-center text-f26 font-bold  leading-[30px] mt-3'>Host your events online effortlessly, for FREE!</div>
          <div className='flex flex-col  lg:flex-row gap-3 m-[20px]'>
            {
              data.map((item) => (
                <div className='inline-flex  items-center gap-2 ' key={item.id}>
                <div className="md:w-[56px] w-[39px] h-[38px]  rounded-full bg-dm_darkBlue text-white flex justify-center items-center text-f24  font-semibold">
                        {item.count}
                      </div>
                      <div className="font-semibold text-f22  text-dm_darkBlue">
                        {item.content}
                      </div>
                </div>
              ))  
            }
            <div className='flex flex-col lg:flex-row justify-center items-center' >
              <CustomButton
                label="Get Started"
                className="text-f16 font-semibold text-white leading-[20px] w-[180px] lg:w-[195px] min-h-[48px]  border-dm_pink bg-dm_pink hover:text-white hover:bg-dm_pink"
              />
            </div>
          </div>
         
        </div>
        </div>
      
    </div>
  )
}

export default EventSection
