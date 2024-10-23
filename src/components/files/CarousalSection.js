import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import CustomButton from './CustomButton'
const data=[
    {
        id:1,
        image:'/asset/carousal.png',
        date:'Aug 18',
        name:'Dhruvpathi',
        action:'Adventure',
        count:'$100 Onwards'
    },
    {
        id:2,
        image:'/asset/carousal.png',
        date:'Aug 18',
        name:'Dhruvpathi',
        action:'Adventure',
        count:'$100 Onwards'
    },
    {
        id:3,
        image:'/asset/carousal.png',
        date:'Aug 18',
        name:'Dhruvpathi',
        action:'Adventure',
        count:'$100 Onwards'
    },
    {
        id:4,
        image:'/asset/carousal.png',
        date:'Aug 18',
        name:'Dhruvpathi',
        action:'Adventure',
        count:'$100 Onwards'
    },
    {
        id:5,
        image:'/asset/carousal.png',
        date:'Aug 18',
        name:'Dhruvpathi',
        action:'Adventure',
        count:'$100 Onwards'
    },
    {
        id:6,
        image:'/asset/carousal.png',
        date:'Aug 18',
        name:'Dhruvpathi',
        action:'Adventure',
        count:'$100 Onwards'
    },
    {
        id:7,
        image:'/asset/carousal.png',
        date:'Aug 18',
        name:'Dhruvpathi',
        action:'Adventure',
        count:'$100 Onwards'
    },
]

const CarousalSection = () => {
  return (
    <div className='container mx-auto my-[20px]'>
      <Carousel>
      <CarouselContent>
      {
                    data.map((item)=>(
          <CarouselItem key={item.id} className='md:basis-1/5  sm:basis-1/3 default:basis-1/12 ' >
                        <Card className=' rounded-[8px] ' >
                        <div className='relative'>
                           <div>
                            <img src={item.image} alt='image' className='w-[100%] object-contain'/>
                           </div>
                           <div className='absolute bottom-3 left-[1rem]'>
                            <CustomButton  label={item.date} className='text-f14 text-white font-normal rounded-[8px] bg-dm_darkBlue'/>
                           </div>
                        </div>
                      </Card>
                      <div className='my-1'>
                      <div className='text-f20 font-semibold leading-[25.2px]'>{item.name}</div>
                      <div className='text-f16 font-medium leading-[24px] text-dm_lightGray'>{item.action}</div>
                      <div className='text-f16 font-semibold leading-[24px]'>{item.count}</div>
                      </div>
          </CarouselItem>
            ))
        }
      </CarouselContent>
      <CarouselPrevious className='left-[-1rem] bg-white opacity-1' />
      <CarouselNext className='right-[-1rem] bg-white'  />
    </Carousel>
    </div>
  )
}

export default CarousalSection
