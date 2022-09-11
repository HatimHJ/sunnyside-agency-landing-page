import React from 'react'
import { logo, facebook, instagram, pinterest, twitter } from "../assets";
export default function Footer() {
  return (
    <footer className='py-12 bg-teal-200 '>
      <div className="container mx-auto px-4">
        <img src={logo} alt="" className='mx-auto sepia-[.9] contrast-[.1] brightness-50' />
        <ul className='flex gap-4 mt-6  mb-10 justify-center text-teal-800 '>
          <li><a href="" className='opacity-70' > About</a></li>
          <li><a href="" className='opacity-70'> Services</a></li>
          <li><a href="" className='opacity-70'> Projects</a></li>
        </ul>
        <ul className='flex gap-4 justify-center'>
          <li><a href=""> <img src={facebook} alt="" /> </a></li>
          <li><a href=""> <img src={instagram} alt="" /> </a></li>
          <li><a href=""> <img src={pinterest} alt="" /> </a></li>
          <li><a href=""> <img src={twitter} alt="" /> </a></li>
        </ul>
      </div>
    </footer>
  )
}
