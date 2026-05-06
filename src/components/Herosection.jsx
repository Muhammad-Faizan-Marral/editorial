import React from 'react'
import LeftHeroSec from './LeftHeroSec'
import RightHeroSec from './RightHeroSec'

const HeroSection = () => {
  return (
    <div className='border flex  sm:flex-col md:flex-row pl-16 '>
        <LeftHeroSec/>
        <RightHeroSec/>
    </div>
  )
}

export default HeroSection