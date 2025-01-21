"use client";

import React, { useState, useEffect } from "react";

const Cooldown: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 0, 31, 23, 59, 59); // 31 de enero
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <h2 className="text-white text-8xl font-steelFish">
      {`${timeLeft.days.toString().padStart(2, "0")}D `}
      {`${timeLeft.hours.toString().padStart(2, "0")}H `}
      {`${timeLeft.minutes.toString().padStart(2, "0")}M `}
      {`${timeLeft.seconds.toString().padStart(2, "0")}S`}
    </h2>
  );
};

export default Cooldown;
