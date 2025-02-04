import React, { useState, useEffect } from "react";

const CircleProgressChart = ({ percentage }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Calculate the stroke dashoffset based on the percentage
    const circumference = 2 * Math.PI * 40; // 40 is the radius of the circle
    const progressOffset = circumference - (percentage / 100) * circumference;
    setOffset(progressOffset);
  }, [percentage]);

  return (
    <div className="relative w-40 h-40 ">
      {/* Circle Background */}
      <div className="absolute w-full h-full rounded-full "></div>

      {/* Progress Ring */}
      <svg className="absolute w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="40"
          fill="transparent"
          stroke="#f6993b" // Blue color for the progress ring
          strokeWidth="8"
          strokeDasharray={2 * Math.PI * 40}
          strokeDashoffset={offset}
        />
      </svg>

      {/* Percentage Text */}
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-700">
        {percentage}%
      </div>
    </div>
  );
};

// Example usage


export default CircleProgressChart;