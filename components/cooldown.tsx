"use client";

import React, { useState, useEffect, FC } from "react";

const Cooldown: FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 0, 30, 0, 0, 0); // 31 de enero
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

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Solo ejecuta el temporizador en el cliente
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    // Evita renderizar el temporizador en el servidor
    return null;
  }

  return (
    <h2 className="text-white text-7xl md:text-8xl font-steelFish px-4">
      {`${timeLeft.days.toString().padStart(2, "0")}D `}
      {`${timeLeft.hours.toString().padStart(2, "0")}H `}
      {`${timeLeft.minutes.toString().padStart(2, "0")}M `}
      {`${timeLeft.seconds.toString().padStart(2, "0")}S`}
    </h2>
  );
};

export default Cooldown;
