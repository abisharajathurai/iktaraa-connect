import React from 'react'
import CustomButton from './CustomButton'
const data=[
    {
        id:1,
        label:'Filter by',
        image:'/asset/filter.png'
    },
    {
        id:2,
        label:'Performances',
        image:''
    },
    {
        id:3,
        label:'FREE Entry',
        image:''
    },
    {
        id:4,
        label:'English',
        image:''
    },
    {
        id:5,
        label:'Theatre Artists',
        image:''
    },
]
const FilterSection = () => {
  return (
    <div className='container mx-auto mt-[20px] pb-[20px] flex flex-row flex-wrap gap-[10px]'>
     
        {
            data.map((item)=>(
                <div key={item.id} >
                <CustomButton  image={item.image} label={item.label}  className='bg-[#fff] border-1 border-[hsla(213, 15%, 85%, 1)] rounded-[34px] text-center text-f16 font-medium leading-[22.68px] gap-2'/>
                </div>
            ))
        }

    </div>
  )
}

export default FilterSection
