import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact me' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="flip-right">Feel free to contact</h2>
                <p className='text-orange-300 text-[18px] pt-2' data-aos="flip-right">
                    You may call me or drop me an email
                </p>
                <div className='flex gap-3 items-center' data-aos="flip-right">
                <AiOutlineMail size={30} /> adil.fxpk@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="flip-right">
                <BsTelephone size={30} /> +92-331-8051683
                </div>
                
            </div>
             </div>
      
    </div>
  )
}

export default Contact
