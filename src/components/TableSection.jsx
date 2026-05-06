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

  return (
    <div className="pl-12 pr-12 h-[70%] w-full ">
    <div className=" h-full w-full ">
        
        <div className="mt-10 mb-10 leading-3">
          <h4 className="text-[12px] font-bold text-[red] tracking-widest">Active Talent</h4>
          <h2 className="text-5xl font-extrabold font-[OswaldB]">ROSTER</h2>
        </div>
        
          <table className="w-full border border-black table cursor-pointer">
            <thead className="border border-black ">
              <tr>
          <th>ARTIST</th>
          <th>DISCIPLINE</th>
          <th>STATUS</th>
          <th>AVAILABILITY</th>
          <th>SPECIALTIES</th>
              </tr>
            </thead>
            <tbody >
        {artists.map((artist, index) => (
          <tr key={index} className="border border-black hover:bg-[#F9FE01] transition-all duration-300 ease-in-out">
            <td><strong>{artist.name}</strong></td>
            <td >{artist.discipline}</td>
            <td>
              <span></span> {artist.status}
            </td>
            <td>
              <span className="bg-[#fef2f2] pl-2 pr-2">{artist.availability}</span>
            </td>
            <td className="p-0">
              {artist.specialties.map((specialty, i) => (
                <span className="font-[12px]  pl-4 pr-4 ml-2 border border-black " key={i} >
                  {specialty}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
          </table>
    </div>
        </div>
      
   
  );
};

export default TableSection;
