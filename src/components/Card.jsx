import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Card({body, name, avatar, title, len, index}) {
  const [lastOdd, setLastOdd] = useState('');


  useEffect(()=>{
    if(len % 2 == 1 && index == (len - 1) ){
      setLastOdd('md:col-end-3 md:col-start-1 lg:row-auto lg:col-start-3')
    }
  }, [])
  
  return (
    <div className={`card text-center mt-16 flex flex-col gap-8 md:max-w-xs ${lastOdd}`}>
      <div className="avatar">
        <img src={avatar} alt="" className='rounded-full w-16 mx-auto' />
      </div>
      <div className="body opacity-60 fonnt-bold">
        <p className='max-w-sm mx-auto'>{body}</p>
      </div>
      <div className="name-title">
        <span className='block fraunces'>{name}</span>
        <span className='block text-neutral-400'>{title}</span>
      </div>
    </div>
  )
}
