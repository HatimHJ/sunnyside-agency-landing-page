import React, { useState } from 'react'

export default function Hero() {
  const [navState, setNavState] = useState('hidden')

  const toggleHandler = ()=>{
    if(navState == 'hidden'){
      setNavState('')
    }else{
      setNavState('hidden')
    }
  }
  return (
    <div className='hero relative min-h-[100vh] bg-no-repeat bg-cover bg-center bg-[url("./src/assets/mobile/image-header.jpg")] md:bg-[url("./src/assets/desktop/image-header.jpg")]'>
      {/* down arrow absolute */}
      <div className="arrow-wrapper absolute w-full h-full flex justify-center items-center">
      <img src="./src/assets/icon-arrow-down.svg" alt="" className="mt-8" />

      </div>
      
      <div className="container px-8">
        {/* navbar */}
        <div className="navbar pt-8 md:pt-0 flex justify-between items-center">
          <div className="logo z-20">
            <a href="">
              <span className='sr-only'>home page</span>
          <img src="./src/assets/logo.svg" alt=""   />
            </a>
          </div>
          <nav className={`bg-white ${navState}  md:block md:relative md:bg-[rgba(0,0,0,0)]  text-center absolute top-[20%] mx-auto w-4/5	z-10 md:w-auto md:mx-0 `}>
            <ul className='flex flex-col gap-4 py-8 items-center  md:before:hidden md:flex-row relative before:absolute before:right-0 before:-top-8  before:border-[1rem] before:border-white before:border-l-[rgba(0,0,0,0)]  before:border-t-[rgba(0,0,0,0)]'>
              <li><a href="" className='text-neutral-500 md:text-white text-sm font-semibold'>About</a></li>
              <li><a href="" className='text-neutral-500 md:text-white text-sm font-semibold'>Services</a></li>
              <li><a href="" className='text-neutral-500 md:text-white text-sm font-semibold'>Projects</a></li>
              <li className='my-2'><a href="" className='text-black text-sm font-semibold fraunces bg-yellow-400 md:bg-white  py-3 px-8  rounded-full'>Contact</a></li>
            </ul>
          </nav>
          <button className='btn-burger z-30 md:hidden' onClick={()=> toggleHandler()}>
            <img src="./src/assets/icon-hamburger.svg" alt="" />
          </button>
        </div>
        {/* text */}
        <div className="title lg:pt-16 fraunces text-center uppercase tracking-widest mt-12 text-4xl text-white font-bold">
          <h1>We are creatives</h1>
        </div>
      </div>
    </div>
  )
}
