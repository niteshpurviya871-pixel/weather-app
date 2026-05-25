import React from "react";

import {
  Sun,
  Droplets,
  Wind,
  Eye,
  Navigation,
} from "lucide-react";

import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "UV Index",
    value: "4",
    subtitle: "Moderate",
    icon: Sun,
    bottom: (
      <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
        <div className="bg-secondary h-full w-1/3"></div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Humidity",
    value: "45%",
    icon: Droplets,
    bottom: (
      <p className="font-body-md text-white/60 text-sm">
        The dew point is 52° right now.
      </p>
    ),
  },
  {
    id: 3,
    title: "Wind",
    value: (
      <>
        12{" "}
        <span className="text-sm font-normal text-white/60">
          mph
        </span>
      </>
    ),
    icon: Wind,
    bottom: (
      <div className="relative w-12 h-12 flex items-center transform -rotate-45 justify-center">
        <Navigation
          size={36}
          className="text-white  fill-white"
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "Visibility",
    value: (
      <>
        10{" "}
        <span className="text-sm font-normal text-white/60">
          mi
        </span>
      </>
    ),
    icon: Eye,
    bottom: (
      <p className="font-body-md text-white/60 text-sm">
        It's perfectly clear today.
      </p>
    ),
  },
];

const WeatherHighlight = () => {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

export default WeatherHighlight;