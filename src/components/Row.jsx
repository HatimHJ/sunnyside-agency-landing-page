import React from 'react'

export default function Row({imgSRC, link, body, heading, index, imgText, imgDt, imgMb}) {

  if(imgText){
    return(
      <div className="float-left md:w-1/2">
        <div className="image-text relative ">
          <picture>
            <source srcSet={imgMb} media="(max-width:767px)"/>
            <img src={imgDt} alt="" />
          </picture>
          <div className="text absolute w-11/12 md:w-[95%] lg:w-11/12 bottom-10 lg:bottom-16  left-1/2 -translate-x-1/2 text-center fraunces opacity-60">
            <h3 className='text-2xl mb-4'>{heading}</h3>
            <p className='text-sm  lg:max-w-sm mx-auto'>{body}</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={`md:flex ${index == 0 ? 'md:flex-row-reverse' : ''} items-center`} >
      <div className="image md:w-1/2">
        <img src={`./src/assets/mobile/${imgSRC}.jpg`} className=' md:hidden' alt="" />
        <img src={`./src/assets/desktop/${imgSRC}.jpg`} className='hidden md:block ' alt="" />
      </div>
      <div className="text text-center py-8 md:col-start-1 md:w-1/2 md:text-left lg:px-20">
      <div className="container mx-auto px-8">
        <h3 className='text-3xl fraunces'>{heading}</h3>
        <p className='py-4 opacity-50'> {body}</p>
        <a href="" className={`${ index==0?'decoration-yellow-400':'decoration-red-500'} fraunces uppercase underline-offset-1 decoration-4 decoration-solid underline`}>{link}</a>
      </div>
      </div>
    </div>
  )
}
