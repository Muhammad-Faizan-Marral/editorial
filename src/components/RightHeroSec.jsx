import React from 'react'

const RightHeroSec = () => {
  return (
    // 'relative' add kiya taaki absolute div iske andar rahe
    <div className='relative h-screen w-1/2 border border-black overflow-hidden'>
      <video 
        className="w-full h-full object-cover" 
        src="/hero-video.mp4" 
        autoPlay   // 'P' capital hona chahiye
        loop 
        muted 
        playsinline // React mein playsInline bhi likh sakte hain
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay ya content ke liye */}
     <div className="absolute bottom-8 left-8 right-8">
  <div className="inline-block border-[3px] border-black bg-[#F9FF00] p-2">
    <span className="font-oswaldB text-sm font-bold uppercase ">
      NOW ACCEPTING COMMISSIONS — Q2 2026
    </span>
  </div>
</div>
    </div>
  )
}

export default RightHeroSec