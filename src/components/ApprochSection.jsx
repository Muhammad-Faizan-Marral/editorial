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
        threshold: 0.4, // 60% visible hone par active hoga
      },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex">
      {/* LEFT STICKY */}
      <div className="w-[30%] ">
        <div className="sticky top-0 h-screen flex items-center justify-start pl-6 border-2 border-black">
          <div>
            <h1 className="text-[red] text-xs tracking-widest font-bold mb-6">How We Work</h1>
            <h2 className="text-5xl font-[OswaldB] font-extrabold mb-6">
              OUR <br />
              APPROACH
            </h2>
            <p className="w-[80%] text-gray-900 text-sm mb-6">
              A structured three-phase workflow designed to deliver exceptional
              editorial illustration with zero friction.
            </p>
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`border-3 border-black w-[6rem] h-[0.8rem] transition-all duration-300 ${
                    activeIndex === i ? "bg-yellow-400" : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SCROLLABLE */}

      <div className="w-[74%]  ">
        {/* Right Section 1 */}
        <div
          ref={addToRefs}
          className="h-[80vh] border-2 border-black flex items-center justify-around p-12 group hover:bg-amber-100"
        >
          {/* Inner Left Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-9xl text-gray-300 font-extrabold group-hover:text-amber-200">
                01
              </h1>
              <div class="w-fit h-fit inline-flex items-center justify-center font-oswald text-xs font-bold uppercase tracking-widest px-3 py-1 border-[3px] border-black bg-[#F9FF00] shrink-0">
                INITIATE
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-extrabold font-[OswaldB]">BRIEFING</h1>
              <p className="text-gray-900 w-[75%]">
                Define the project scope, deliverables, timeline, and budget.
                Upload visual references and specify rights usage requirements.
              </p>
            </div>
          </div>

          {/* Inner Right Tabel Section */}
          <div className="flex ">
            <div className="border-3 border-black w-[27rem] h-[13rem]">
              <p className="border-b-3 border-black hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">01.1 </span>
                <span className=" ml-7 tracking-widest">
                  Project type identification
                </span>
              </p>
              <p className="border-b-3 border-black hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">01.2 </span>
                <span className=" ml-7 tracking-widest">
                  Deliverable specification
                </span>
              </p>
              <p className="border-b-3 border-black hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">01.3 </span>
                <span className=" ml-7 tracking-widest">
                  Budget range selection
                </span>
              </p>
              <p className=" hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">01.4 </span>
                <span className=" ml-7 tracking-widest">
                  Budget range selection
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section 2 */}
        <div
          ref={addToRefs}
          className="h-[80vh] border-2 border-black flex items-center justify-around p-12 group hover:bg-amber-100"
        >
          {/* Inner Left Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-9xl text-gray-300 font-extrabold group-hover:text-amber-200">
                02
              </h1>
              <div class="w-fit h-fit inline-flex text-white items-center justify-center font-oswald text-xs font-bold uppercase tracking-widest px-3 py-1 border-[3px] border-black bg-[#e80707] shrink-0">
                MATCH
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-extrabold font-[OswaldB]">BRIEFING</h1>
              <p className="text-gray-900 w-[75%]">
                Our art directors review your brief and match you with the ideal illustrator from our roster. Initial sketches and mood boards presented.
              </p>
            </div>
          </div>

          {/* Inner Right Tabel Section */}
          <div className="flex ">
            <div className="border-3 border-black w-[27rem] h-[13rem]">
              <p className="border-b-3 border-black hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">02.1 </span>
                <span className=" ml-7 tracking-widest">
                  Artist-Client matching
                </span>
              </p>
              <p className="border-b-3 border-black hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">02.2 </span>
                <span className=" ml-7 tracking-widest">
                  Mood board development
                </span>
              </p>
              <p className="border-b-3 border-black hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">02.3 </span>
                <span className=" ml-7 tracking-widest">
                 Initial sketch review
                </span>
              </p>
              <p className=" hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">02.4 </span>
                <span className=" ml-7 tracking-widest">
                  Direction approval
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section 3 */}

        <div
          ref={addToRefs}
          className="h-[80vh] border-2 border-black flex items-center justify-around p-12 group hover:bg-amber-100"
        >
          {/* Inner Left Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-9xl text-gray-300 font-extrabold group-hover:text-amber-200">
                03
              </h1>
              <div class="w-fit h-fit inline-flex items-center justify-center font-oswald text-xs font-bold uppercase tracking-widest px-3 py-1 border-[3px] border-black bg-[#F9FF00] shrink-0">
                DELIVER
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-extrabold font-[OswaldB]">EXECUTION</h1>
              <p className="text-gray-900 w-[75%]">
                Full illustration production with structured review rounds. Final files delivered in all specified formats with complete usage rights.
              </p>
            </div>
          </div>

          {/* Inner Right Tabel Section */}
          <div className="flex ">
            <div className="border-3 border-black w-[27rem] h-[13rem]">
              <p className="border-b-3 border-black hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">03.1 </span>
                <span className=" ml-7 tracking-widest">
                  Production & revisions
                </span>
              </p>
              <p className="border-b-3 border-black hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">03.2 </span>
                <span className=" ml-7 tracking-widest">
                  Quality assurance review
                </span>
              </p>
              <p className="border-b-3 border-black hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">03.3 </span>
                <span className=" ml-7 tracking-widest">
                  Final file delivery
                </span>
              </p>
              <p className=" hover:bg-yellow-500 p-3 font-bold">
                <span className="text-red-600  ">03.4 </span>
                <span className=" ml-7 tracking-widest">
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
