import React from "react";

const Portfolios = () => {
  return (
    <div>
      {/* Header ko mobile ke liye thoda adjust kiya */}
      <header className="flex items-center justify-between p-6 md:p-12">
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-sm font-light">Selected Work</h1>
          <h2 className="text-2xl md:text-3xl font-bold font-[OswaldB]">PORTFOLIO</h2>
        </div>
        <div className="md:-mb-4 font-bold">01—06</div>
      </header>

      {/* Main container: yahan grid aur gap trick use ki hai thick borders ke liye */}
      <main className="mx-4 lg:mx-12 mb-12 border-[3px] border-black overflow-hidden bg-black">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
          
          {/* Card 1 */}
          <div className="Container group relative flex h-[25rem] md:h-[35rem] w-full flex-col bg-white">
            <div className="imageDiv relative h-full w-full overflow-hidden group-hover:border-[3px] border-red-600 transition-all duration-300 ease-in-out">
              <img
                src="/showcase.jpg"
                alt="Showcase Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              {/* Red Overlay */}
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-6 md:p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg md:text-xl font-black leading-tight">DE STIJL ISSUE</h3>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">Luxury Magazine</p>
                  </div>
                  {/* Arrow SVG */}
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6 md:h-8 md:w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Bar */}
            <div className="bottomDiv flex items-center justify-between border-t-[3px] border-black bg-white px-4 md:px-5 py-2 font-bold uppercase tracking-widest text-black text-xs md:text-sm">
              <div>Editorial</div>
              <div className="text-gray-500">01</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="Container group relative flex h-[25rem] md:h-[35rem] w-full flex-col bg-white">
            <div className="imageDiv relative h-full w-full overflow-hidden group-hover:border-[3px] border-red-600 transition-all duration-300 ease-in-out">
              <img
                src="/portfolio-2.jpg"
                alt="portfolio-2 Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-6 md:p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg md:text-xl font-black leading-tight">DECONSTRUCT FLUX</h3>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">EXPERIMENTAL FORM</p>
                  </div>
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6 md:h-8 md:w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottomDiv flex items-center justify-between border-t-[3px] border-black bg-white px-4 md:px-5 py-2 font-bold uppercase tracking-widest text-black text-xs md:text-sm">
              <div>Brand Identity</div>
              <div className="text-gray-500">02</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="Container group relative flex h-[25rem] md:h-[35rem] w-full flex-col bg-white">
            <div className="imageDiv relative h-full w-full overflow-hidden group-hover:border-[3px] border-red-600 transition-all duration-300 ease-in-out">
              <img
                src="/portfolio-3.jpg"
                alt="portfolio-3 Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-6 md:p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg md:text-xl font-black leading-tight">STRUCTURAL ELEGANCE</h3>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">VOGUE ITALIA</p>
                  </div>
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6 md:h-8 md:w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottomDiv flex items-center justify-between border-t-[3px] border-black bg-white px-4 md:px-5 py-2 font-bold uppercase tracking-widest text-black text-xs md:text-sm">
              <div>Fashion Illustration</div>
              <div className="text-gray-500">03</div>
            </div>
          </div>

          {/* Card 4 (Wide Card - col-span-2 on large screens) */}
          <div className="Container group relative flex h-[25rem] md:h-[35rem] w-full lg:col-span-2 flex-col bg-white">
            <div className="imageDiv relative h-full w-full overflow-hidden group-hover:border-[3px] border-red-600 transition-all duration-300 ease-in-out">
              <img
                src="/portfolio-4.jpg"
                alt="portfolio-4 Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-6 md:p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg md:text-xl font-black leading-tight">GRID & FORM</h3>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">SWISS DESIGN WEEK</p>
                  </div>
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6 md:h-8 md:w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Iska height thoda zyada rakha tha aapne (h-[11rem]), maine usko responsive rakha hai */}
            <div className="bottomDiv flex items-start pt-3 md:pt-4 justify-between border-t-[3px] border-black bg-white px-4 md:px-5 min-h-[4rem] lg:h-[8rem] font-bold uppercase tracking-widest text-black text-xs md:text-sm">
              <div>Packaging</div>
              <div className="text-gray-500">04</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="Container group relative flex h-[25rem] md:h-[35rem] w-full flex-col bg-white">
            <div className="imageDiv relative h-full w-full overflow-hidden group-hover:border-[3px] border-red-600 transition-all duration-300 ease-in-out">
              <img
                src="/portfolio-5.jpg"
                alt="portfolio-5 Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-6 md:p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg md:text-xl font-black leading-tight">IMPACT MOTION</h3>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">KINETIC STUDIOS</p>
                  </div>
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6 md:h-8 md:w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottomDiv flex items-center justify-between border-t-[3px] border-black bg-white px-4 md:px-5 py-2 font-bold uppercase tracking-widest text-black text-xs md:text-sm">
              <div>Motion Design</div>
              <div className="text-gray-500">05</div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="Container group relative flex h-[25rem] md:h-[35rem] w-full flex-col bg-white">
            <div className="imageDiv relative h-full w-full overflow-hidden group-hover:border-[3px] border-red-600 transition-all duration-300 ease-in-out">
              <img
                src="/portfolio-6.jpg"
                alt="portfolio-6 Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-6 md:p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg md:text-xl font-black leading-tight">PRISM WILD</h3>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">NATURE PRESS</p>
                  </div>
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6 md:h-8 md:w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottomDiv flex items-center justify-between border-t-[3px] border-black bg-white px-4 md:px-5 py-2 font-bold uppercase tracking-widest text-black text-xs md:text-sm">
              <div>Publishing</div>
              <div className="text-gray-500">06</div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Portfolios;