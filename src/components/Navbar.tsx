import React from 'react'
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='container pt-10'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Adil Raza Khan</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='manuLink'><a href='#hero'>Home</a></li>
            <li className='manuLink'><a href='#about'>About</a></li>
            <li className='manuLink'><a href='#projects'>Projects</a></li>
            <li className='manuLink'><a href='#skills'>Skills</a></li>
            <li className='manuLink'><a href='#contact me'>Contact me</a></li>
        </ul>
        <CgMenuGridR className='md:hidden' size={40} />
      </div>
    </div>
  )
}

export default Navbar
