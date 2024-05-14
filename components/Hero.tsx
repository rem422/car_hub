'use client'

import Image from 'next/image';
import {CustomButton} from '@/components'

const Hero = () => {
const handleScroll = () => {

}

  return (
    <header className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, book, or rent a car &mdash; quickly and easily!
        </h1>
        <p className='hero__subtitle'>
          Sreamline your car rentall experience with our effortless booking process
        </p>

        <CustomButton 
          title = 'Explore Cars'
          containerStyles = 'bg-primary-blue text-white rounded-full mt-10'
          handleClick = {handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
          src='/hero-bg.png'
          />
        </div>
      </div>
    </header>
  )
}

export default Hero