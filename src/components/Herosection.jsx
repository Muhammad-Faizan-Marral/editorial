import React from 'react'
import LeftHeroSec from './LeftHeroSec'
import RightHeroSec from './RightHeroSec'

const HeroSection = () => {
  return (
   // Main Page ya Parent Component
<div className='flex flex-col md:flex-row w-full pl-4 md:pl-16'>
    <LeftHeroSec />
    <RightHeroSec />
</div>
  )
}

export default HeroSection