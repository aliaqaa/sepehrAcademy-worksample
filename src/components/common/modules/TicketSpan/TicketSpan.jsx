import React from "react";

function TicketSpan({ number, textColor,bgColor, desc, icon }) {
  return (
    <div className="flex bg-[#f4ecec] relative g-4 border p-3 rounded-lg px-10 text-start">
      <span className="flex flex-col ">
        <h1 className={`font-extrabold ${textColor}`}>{number} دوره</h1>{" "}
        <h3 className="font-extralight">{desc}</h3>
      </span>
      <img src={icon} alt="icon" className={`absolute -top-9 left-2 ${bgColor}`} />
    </div>
  );
}

export default TicketSpan;
