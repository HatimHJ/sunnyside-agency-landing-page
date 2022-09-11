import React from 'react'
import Card from './Card';
import emily from "../assets/image-emily.jpg";
import thomas from "../assets/image-thomas.jpg";
import jennie from "../assets/image-jennie.jpg";

const data = [
  {
    avatar:emily,
    body:'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit',
    name:'Emily R.',
    title:'Marketing Director',
  },
  {
    avatar:thomas,
    body:'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience',
    name:'Thomas S.',
    title:'Chief Operating Officer',
  },
  {
    avatar:jennie,
    body:'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name:'Jennie F.',
    title:'Business Owner',
  }
]

export default function Testimonial() {
  return (
    <div className='testimonial py-16'>
      <div className="container mx-auto px-4">
      <h3 className='text-center text-stone-400 text-xl tracking-widest uppercase fraunces'>Client testimonials</h3>
      <div className={`cards mt-16 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-${data.length % 2 == 0?'2':'3'} md:justify-items-center`}>
        {
          data.map((el, n) =>{
            return <Card key={n} {...el} len= {data.length} index={n} />
          })
        }
      </div>
      </div>
    </div>
  )
}
