import React from "react";

const TableSection = () => {
  const artists = [
    { name: "ELENA VASQUEZ", discipline: "Editorial Illustration", status: "Available", availability: "Immediate", specialties: ["PORTRAITS", "POLITICAL", "NARRATIVE"] },
    { name: "MARCUS CHEN", discipline: "Motion & Kinetic Type", status: "Booked", availability: "April 2026", specialties: ["ANIMATION", "TYPOGRAPHY", "SOCIAL"] },
    { name: "SOPHIE ANDERSSON", discipline: "Brand Identity & Packaging", status: "Available", availability: "Immediate", specialties: ["IDENTITY", "PACKAGING", "PRINT"] },
    { name: "JAMES O'BRIEN", discipline: "Fashion Illustration", status: "Limited", availability: "2 weeks", specialties: ["EDITORIAL", "RUNWAY", "CONCEPT"] },
    { name: "YUKI TANAKA", discipline: "Abstract & Experimental", status: "Available", availability: "Immediate", specialties: ["ABSTRACT", "MIXED MEDIA", "GALLERY"] },
    { name: "AMARA DIOP", discipline: "Publishing & Book Arts", status: "Booked", availability: "May 2026", specialties: ["COVERS", "INTERIOR", "TYPOGRAPHY"] },
  ];

  // Status ke hisaab se dot color return karne ka function
  const getStatusColor = (status) => {
    switch (status) {
      case "Available": return "bg-green-500";
      case "Booked": return "bg-red-500";
      case "Limited": return "bg-yellow-400";
      default: return "bg-gray-500";
    }
  };

  return (
    // Fixed height h-[70%] hata di hai, padding adjust ki mobile ke liye
    <div className="px-4 md:px-12 py-16 w-full">
      <div className="w-full">
        
        <div className="mb-8 md:mb-10 flex flex-col gap-1">
          <h4 className="text-[12px] font-bold text-[red] tracking-widest uppercase">Active Talent</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold font-[OswaldB] uppercase">ROSTER</h2>
        </div>
        
        {/* Mobile Scrolling Wrapper - Isse table layout nahi tootega */}
        <div className="w-full overflow-x-auto border-[3px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* min-w set ki taaki shrink hoke ugly na lage */}
          <table className="w-full min-w-[900px] text-left border-collapse cursor-pointer">
            
            <thead className="border-b-[3px] border-black bg-gray-100">
              <tr>
                <th className="p-4 border-r-[3px] border-black font-extrabold tracking-wider">ARTIST</th>
                <th className="p-4 border-r-[3px] border-black font-extrabold tracking-wider">DISCIPLINE</th>
                <th className="p-4 border-r-[3px] border-black font-extrabold tracking-wider">STATUS</th>
                <th className="p-4 border-r-[3px] border-black font-extrabold tracking-wider">AVAILABILITY</th>
                <th className="p-4 font-extrabold tracking-wider">SPECIALTIES</th>
              </tr>
            </thead>
            
            <tbody>
              {artists.map((artist, index) => (
                <tr 
                  key={index} 
                  className="border-b-[3px] border-black last:border-b-0 hover:bg-[#F9FE01] transition-colors duration-200"
                >
                  <td className="p-4 border-r-[3px] border-black font-bold whitespace-nowrap">
                    {artist.name}
                  </td>
                  
                  <td className="p-4 border-r-[3px] border-black text-sm whitespace-nowrap">
                    {artist.discipline}
                  </td>
                  
                  <td className="p-4 border-r-[3px] border-black text-sm whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full border border-black ${getStatusColor(artist.status)}`}></span>
                      <span className="font-bold">{artist.status}</span>
                    </div>
                  </td>
                  
                  <td className="p-4 border-r-[3px] border-black whitespace-nowrap">
                    <span className="bg-[#fef2f2] px-3 py-1 text-sm font-bold border border-black inline-block">
                      {artist.availability}
                    </span>
                  </td>
                  
                  <td className="p-4">
                    {/* Tags ko flex-wrap de diya taaki lambe hone pe theek se align ho */}
                    <div className="flex flex-wrap gap-2">
                      {artist.specialties.map((specialty, i) => (
                        <span 
                          className="text-[10px] font-bold px-2 py-1 border-[2px] border-black bg-white uppercase tracking-wider" 
                          key={i} 
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>

      </div>
    </div>
  );
};

export default TableSection;