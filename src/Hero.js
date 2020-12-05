import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context';

const Hero = () => {
  const {closeSubMenu} = useGlobalContext();
  
  return( 
  <section className='hero' onMouseOver={closeSubMenu}>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>
          Payments Infrastructure for the internet
        </h1>
        <p>
          lorem ipsum dsadsa jdsad sadsa dad sad a sd ad a d sa dsa
          sadsadsa sa dsa d as dsa d ss dsa d sadsadsa
          loremsd  sad asd sad afdg re trhrthtrh g try ree e
        </p>
        <button className='btn'>
          start now
        </button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} alt="phoneimg" className='phone-img' />
      </article>
    </div>
  </section>
  )
}

export default Hero
