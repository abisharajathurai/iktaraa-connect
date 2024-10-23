import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"

  const data=[
    {
        id:1,
        title:'How do I choose the right pianica online?',
        content:'To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.'
    },
    {
        id:2,
        title:'Do you offer warranties on your Pianicas?',
        content:'To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.'
    },
    {
        id:3,
        title:'What is the best way to maintain and care for my Pianica?',
        content:'To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.'
    },
  ]

  
const FaqSection = () => {
  return (
    <div className='container mx-auto '>
     <div className='text-center my-[20px] font-bold text-f26'>Frequently Asked Questions</div>
     <div className='flex flex-col justify-center items-center'>
     <Accordion type="single" collapsible defaultValue="1" className="w-full max-w-[75%] ">
       {
        data.map((item)=>(
            <AccordionItem key={item.id}  value={String(item.id)} className='border-2 border-[#D4D9DF] rounded-[8px] px-[15px] mb-[15px] data-[state=open]:border-dm_darkBlue'>
            <AccordionTrigger className='text-f18 font-semibold leading-[22.68px] hover:no-underline '>{item.title}</AccordionTrigger>
            <AccordionContent className='text-f16 font-normal leading-[26px]'>
            {item.content}
            </AccordionContent>
          </AccordionItem>
        ))
       }
    </Accordion>
     </div>
    </div>
  )
}

export default FaqSection
