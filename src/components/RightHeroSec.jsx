import React from 'react'

const RightHeroSec = () => {
  return (
    // Mobile pe half screen (50vh) aur desktop pe full screen (100vh)
    <div className='relative h-[50vh] md:h-screen w-full md:w-1/2 border-2 border-black md:border-l-0 overflow-hidden'>
      <video 
        className="w-full h-full object-cover" 
        src="/hero-video.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline // React mein always camelCase use karein
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 z-10">
        <div className="inline-block border-[3px] border-black bg-[#F9FF00] p-2">
          <span className="font-oswaldB text-xs md:text-sm font-bold uppercase">
            NOW ACCEPTING COMMISSIONS — Q2 2026
          </span>
        </div>
      </div>
    </div>
  )
}

export default RightHeroSec;