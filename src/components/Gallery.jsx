import React from 'react'
import { coneDt, coneMb, milkbottlesDt, milkbottlesMb, orangeMb, orangeDt, sugarcubesMb, sugarcubesDt } from "../assets/index";

const  data = [
  {
    mb:milkbottlesMb,
    dt:milkbottlesDt
  },
  {
    mb:orangeMb,
    dt:orangeDt
  },
  {
    mb:coneMb,
    dt:coneDt
  },
  {
    mb:sugarcubesMb,
    dt:sugarcubesDt
  }
]

export default function Gallery() {
  return (
    <div className='gallery'>
      <div className="wrapper grid grid-cols-2 md:grid-cols-4">
        {data.map((el, n) =>{
          return <div key={n} className='.image'>
            <picture>
              <source srcSet={el.mb} media='(max-width:767px)' />
              <img src={el.dt} alt="" />
            </picture>
          </div>
        })}
      </div>
    </div>
  )
}
