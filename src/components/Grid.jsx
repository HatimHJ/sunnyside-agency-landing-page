import React from 'react'
import Row from './Row'
import cherryMb  from "../assets/mobile/image-graphic-design.jpg";
import cherryDt  from "../assets/desktop/image-graphic-design.jpg";
import tangerineMb  from "../assets/mobile/image-photography.jpg";
import tangerineDt  from "../assets/desktop/image-photography.jpg";

const data = [
  {
    imgText:false,
    imgSRC : 'image-transform',
    heading : 'Transform your brand',
    body : 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    link : 'Learn More'
  },
  {
    imgText:false,
    imgSRC : 'image-stand-out',
    heading : 'Stand out to the right audience',
    body : 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places',
    link : 'Learn More'
  },
  {
    imgText:true,
    imgMb : cherryMb,
    imgDt : cherryDt,
    heading : 'Graphic Design',
    body : 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention',
  },
  {
    imgText:true,
    imgMb : tangerineMb,
    imgDt : tangerineDt,
    // 
    heading : 'Photography',
    body : 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image',
  }
]

export default function () {
  return (
    <div className='the-grid '>
      {
        data && data.map((el, n) => {
          return <Row key={n} index={n} {...el} />
        
        })
      }
      <div className="clear-both"></div>
    </div>
  )
}
