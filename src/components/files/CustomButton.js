import React from 'react'
import { Button } from '../ui/button'

const CustomButton = (props) => {
    const {label,variant,className,image}=props;
  return (
    <div  className='rounded-[8px]'>
       
    <Button className={className} variant={variant}>
    {
            image && (
                <img src={image} width='20px' height='20px'/>
            )
        } {label}
    </Button>
    </div>
  )
}

export default CustomButton
