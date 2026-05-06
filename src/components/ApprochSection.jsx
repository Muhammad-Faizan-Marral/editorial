import React, { useEffect, useRef, useState } from "react";

const ApproachSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);
  sectionsRef.current = [];
  
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.4, // 40% visible hone par active hoga (comment mein 60% likha tha par 0.4 = 40%)
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Mobile par column, Large screens (lg) par row
    <div className="flex flex-col lg:flex-row w-full">
      
      {/* LEFT STICKY */}
      {/* Mobile pe top sticky nav ban jayega, desktop pe side nav */}
      <div className="w-full lg:w-[30%] sticky top-0 z-20 bg-white border-2 border-black lg:border-b-2 lg:h-screen flex items-center justify-start p-6 lg:pl-6 shadow-sm lg:shadow-none">
        <div>
          <h1 className="text-[red] text-xs tracking-widest font-bold mb-2 lg:mb-6">How We Work</h1>
          <h2 className="text-4xl lg:text-5xl font-[OswaldB] font-extrabold mb-2 lg:mb-6 leading-none">
            OUR <br className="hidden lg:block" />
            APPROACH
          </h2>
          <p className="w-full lg:w-[80%] text-gray-900 text-sm mb-4 lg:mb-6">
            A structured three-phase workflow designed to deliver exceptional
            editorial illustration with zero friction.
          </p>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`border-2 lg:border-3 border-black w-[4rem] lg:w-[6rem] h-[0.6rem] lg:h-[0.8rem] transition-all duration-300 ${
                  activeIndex === i ? "bg-yellow-400" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SCROLLABLE */}
      {/* Width 70% kiya taaki 30+70=100% ho */}
      <div className="w-full lg:w-[70%] flex flex-col">
        
        {/* Right Section 1 */}
        <div
          ref={addToRefs}
          className="min-h-[60vh] lg:h-[80vh] border-2 border-t-0 lg:border-l-0 border-black flex flex-col xl:flex-row items-start xl:items-center justify-around p-6 lg:p-12 group hover:bg-amber-100 gap-8 xl:gap-0 transition-colors duration-300"
        >
          {/* Inner Left Section */}
          <div className="flex flex-col gap-3 w-full xl:w-1/2">
            <div className="flex items-center gap-2">
              <h1 className="text-7xl lg:text-9xl text-gray-300 font-extrabold transition-colors duration-300 group-hover:text-amber-200">
                01
              </h1>
              <div className="w-fit h-fit inline-flex items-center justify-center font-oswald text-xs font-bold uppercase tracking-widest px-3 py-1 border-[3px] border-black bg-[#F9FF00] shrink-0">
                INITIATE
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4 xl:mt-0">
              <h1 className="text-2xl lg:text-3xl font-extrabold font-[OswaldB]">BRIEFING</h1>
              <p className="text-gray-900 w-full xl:w-[75%] text-sm lg:text-base">
                Define the project scope, deliverables, timeline, and budget.
                Upload visual references and specify rights usage requirements.
              </p>
            </div>
          </div>

          {/* Inner Right Table Section */}
          <div className="flex w-full xl:w-auto">
            {/* Height auto ki taaki content wrap hone pe toote nahi */}
            <div className="border-[3px] border-black w-full xl:w-[27rem] bg-white">
              <p className="border-b-[3px] border-black hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">01.1 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Project type identification
                </span>
              </p>
              <p className="border-b-[3px] border-black hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">01.2 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Deliverable specification
                </span>
              </p>
              <p className="border-b-[3px] border-black hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">01.3 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Budget range selection
                </span>
              </p>
              <p className="hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">01.4 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Visual references setup
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section 2 */}
        <div
          ref={addToRefs}
          className="min-h-[60vh] lg:h-[80vh] border-2 border-t-0 lg:border-l-0 border-black flex flex-col xl:flex-row items-start xl:items-center justify-around p-6 lg:p-12 group hover:bg-amber-100 gap-8 xl:gap-0 transition-colors duration-300"
        >
          {/* Inner Left Section */}
          <div className="flex flex-col gap-3 w-full xl:w-1/2">
            <div className="flex items-center gap-2">
              <h1 className="text-7xl lg:text-9xl text-gray-300 font-extrabold transition-colors duration-300 group-hover:text-amber-200">
                02
              </h1>
              <div className="w-fit h-fit inline-flex text-white items-center justify-center font-oswald text-xs font-bold uppercase tracking-widest px-3 py-1 border-[3px] border-black bg-[#e80707] shrink-0">
                MATCH
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4 xl:mt-0">
              <h1 className="text-2xl lg:text-3xl font-extrabold font-[OswaldB]">DIRECTION</h1>
              <p className="text-gray-900 w-full xl:w-[75%] text-sm lg:text-base">
                Our art directors review your brief and match you with the ideal illustrator from our roster. Initial sketches and mood boards presented.
              </p>
            </div>
          </div>

          {/* Inner Right Table Section */}
          <div className="flex w-full xl:w-auto">
            <div className="border-[3px] border-black w-full xl:w-[27rem] bg-white">
              <p className="border-b-[3px] border-black hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">02.1 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Artist-Client matching
                </span>
              </p>
              <p className="border-b-[3px] border-black hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">02.2 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Mood board development
                </span>
              </p>
              <p className="border-b-[3px] border-black hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">02.3 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                 Initial sketch review
                </span>
              </p>
              <p className="hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">02.4 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Direction approval
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section 3 */}
        <div
          ref={addToRefs}
          className="min-h-[60vh] lg:h-[80vh] border-2 border-t-0 lg:border-l-0 border-black flex flex-col xl:flex-row items-start xl:items-center justify-around p-6 lg:p-12 group hover:bg-amber-100 gap-8 xl:gap-0 transition-colors duration-300"
        >
          {/* Inner Left Section */}
          <div className="flex flex-col gap-3 w-full xl:w-1/2">
            <div className="flex items-center gap-2">
              <h1 className="text-7xl lg:text-9xl text-gray-300 font-extrabold transition-colors duration-300 group-hover:text-amber-200">
                03
              </h1>
              <div className="w-fit h-fit inline-flex items-center justify-center font-oswald text-xs font-bold uppercase tracking-widest px-3 py-1 border-[3px] border-black bg-[#F9FF00] shrink-0">
                DELIVER
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4 xl:mt-0">
              <h1 className="text-2xl lg:text-3xl font-extrabold font-[OswaldB]">EXECUTION</h1>
              <p className="text-gray-900 w-full xl:w-[75%] text-sm lg:text-base">
                Full illustration production with structured review rounds. Final files delivered in all specified formats with complete usage rights.
              </p>
            </div>
          </div>

          {/* Inner Right Table Section */}
          <div className="flex w-full xl:w-auto">
            <div className="border-[3px] border-black w-full xl:w-[27rem] bg-white">
              <p className="border-b-[3px] border-black hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">03.1 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Production & revisions
                </span>
              </p>
              <p className="border-b-[3px] border-black hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">03.2 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Quality assurance review
                </span>
              </p>
              <p className="border-b-[3px] border-black hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">03.3 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                  Final file delivery
                </span>
              </p>
              <p className="hover:bg-yellow-500 p-3 font-bold transition-colors">
                <span className="text-red-600">03.4 </span>
                <span className="ml-4 lg:ml-7 tracking-widest text-sm lg:text-base">
                 Rights documentation
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApproachSection;