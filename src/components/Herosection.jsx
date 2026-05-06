import React from 'react'
import LeftHeroSec from './LeftHeroSec'
import RightHeroSec from './RightHeroSec'

const HeroSection = () => {
  return (
    <div className='border flex  pl-16 '>
        <LeftHeroSec/>
        <RightHeroSec/>
    </div>
  )
}

export default HeroSection