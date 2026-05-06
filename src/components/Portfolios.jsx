import React from "react";

const Portfolios = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-12">
        <div className="flex  justify-center  items-start  flex-col">
          <h1 className="text-sm font-light">Selected Work</h1>
          <h2 className="text-3xl">PORTFOLIO</h2>
        </div>
        <div className="-mb-4">01—06</div>
      </header>

      <main className="border-3 border-black mx-12 overflow-hidden flex flex-col">
        {/* First_Rows_Cards */}

        <div className="first-rows-div flex flex-row">
          
          {/* Card 1 */}
          <div className="Container group relative flex h-[35rem] w-[26.2rem] flex-col border-3 border-black bg-white">
            {/* Image Section */}
            <div className="imageDiv relative h-full w-full overflow-hidden  group-hover:border-3 border-red-600 transition-transform duration-700 ease-in-out">
              <img
                src="/showcase.jpg"
                alt="Showcase Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 "
              />

              {/* Red Overlay */}
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-black leading-tight font-extrabold">
                      DE STIJL ISSUE
                    </h3>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase">
                      Luxury Magazine
                    </p>
                  </div>

                  {/* Arrow SVG Icon */}
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bottomDiv flex items-center justify-between border-t-4 border-black bg-white px-5 py-1 font-bold uppercase tracking-widest text-black">
              <div> Editorial</div>
              <div className="text-gray-500 font-sm"> 01</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="Container group relative flex h-[35rem] w-[26.2rem] flex-col border-3 border-black bg-white">
            {/* Image Section */}
            <div className="imageDiv relative h-full w-full overflow-hidden  group-hover:border-3 border-red-600 transition-transform duration-700 ease-in-out">
              <img
                src="/portfolio-2.jpg"
                alt="portfolio-2 Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 "
              />

              {/* Red Overlay */}
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-black leading-tight font-extrabold">
                      DECONSTRUCT FLUX
                    </h3>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase">
                      EXPERIMENTAL FORM
                    </p>
                  </div>

                  {/* Arrow SVG Icon */}
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bottomDiv flex items-center justify-between border-t-4 border-black bg-white px-5 py-1 font-bold uppercase tracking-widest text-black">
              <div> Brand Identity</div>
              <div className="text-gray-500 font-sm"> 02</div>
            </div>
          </div>


          {/* Card 3 */}
          <div className="Container group relative flex h-[35rem] w-[26.2rem] flex-col border-3 border-black bg-white">
            {/* Image Section */}
            <div className="imageDiv relative h-full w-full overflow-hidden  group-hover:border-3 border-red-600 transition-transform duration-700 ease-in-out">
              <img
                src="/portfolio-3.jpg"
                alt="portfolio-2 Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 "
              />

              {/* Red Overlay */}
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-black leading-tight font-extrabold">
                      STRUCTURAL ELEGANCE
                    </h3>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase">
                      VOGUE ITALIA
                    </p>
                  </div>

                  {/* Arrow SVG Icon */}
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bottomDiv flex items-center justify-between border-t-4 border-black bg-white px-5 py-1 font-bold uppercase tracking-widest text-black">
              <div> Fashion Illustration</div>
              <div className="text-gray-500 font-sm"> 03</div>
            </div>
          </div>


        </div>

        {/* Second_Rows_Cards */}
        <div className="second-row-div flex">
          {/* Card 4 */}
          <div className="Container group relative flex h-[35rem] w-[52rem] flex-col border-3 border-black bg-white">
            {/* Image Section */}
            <div className="imageDiv relative h-full w-full overflow-hidden  group-hover:border-3 border-red-600 transition-transform duration-700 ease-in-out">
              <img
                src="/portfolio-4.jpg"
                alt="portfolio-2 Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 "
              />

              {/* Red Overlay */}
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-black leading-tight font-extrabold">
                      GRID & FORM
                    </h3>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase">
                     SWISS DESIGN WEEK
                    </p>
                  </div>

                  {/* Arrow SVG Icon */}
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bottomDiv flex items-start pt-4 justify-between border-t-4 border-black bg-white px-5 h-[11rem] font-bold uppercase tracking-widest text-black">
              <div className=""> Packaging</div>
              <div className="text-gray-500 font-sm"> 04</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="Container group relative flex h-[35rem] w-[26.2rem] flex-col border-3 border-black bg-white">
            {/* Image Section */}
            <div className="imageDiv relative h-full w-full overflow-hidden  group-hover:border-3 border-red-600 transition-transform duration-700 ease-in-out">
              <img
                src="/portfolio-5.jpg"
                alt="Showcase Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 "
              />

              {/* Red Overlay */}
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-black leading-tight font-extrabold">
                    IMPACT MOTION
                    </h3>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase">
                    KINETIC STUDIOS
                    </p>
                  </div>

                  {/* Arrow SVG Icon */}
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bottomDiv flex items-center justify-between border-t-4 border-black bg-white px-5 py-1 font-bold uppercase tracking-widest text-black">
              <div> Motion Design</div>
              <div className="text-gray-500 font-sm"> 05</div>
            </div>
          </div>


        </div>

        {/* Third_Card_Row */}
          <div className="Container group relative flex h-[35rem] w-[26.2rem] flex-col border-3 border-black bg-white">
            {/* Image Section */}
            <div className="imageDiv relative h-full w-full overflow-hidden  group-hover:border-3 border-red-600 transition-transform duration-700 ease-in-out">
              <img
                src="/portfolio-6.jpg"
                alt="Showcase Image"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 "
              />

              {/* Red Overlay */}
              <div className="absolute inset-0 flex items-end justify-start bg-red-600/90 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-black leading-tight font-extrabold">
                      PRISM WILD
                    </h3>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase">
                      NATURE PRESS
                    </p>
                  </div>

                  {/* Arrow SVG Icon */}
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bottomDiv flex items-center justify-between border-t-4 border-black bg-white px-5 py-1 font-bold uppercase tracking-widest text-black">
              <div>Publishing</div>
              <div className="text-gray-500 font-sm"> 06</div>
            </div>
          </div>

      </main>
    </div>
  );
};

export default Portfolios;
