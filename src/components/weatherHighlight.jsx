import React from "react";

import {
  Sun,
  Droplets,
  Wind,
  Eye,
  Navigation,
} from "lucide-react";

import Card from "./Card";

const WeatherHighlight = ({weatherData}) => {
  if(!weatherData) return null;


const cards = [
  {
    id: 1,
    title: "UV Index",
    value: weatherData.current.uv,
    subtitle: weatherData.current.uv < 3
    ? "Low"
    :weatherData.current.uv < 6
    ? "Moderate"
    : "High",
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
    value:  `${weatherData.current.humidity}%`,
    icon: Droplets,
    bottom: (
      <p className="font-body-md text-white/60 text-sm">
        Humidity Level
      </p>
    ),
  },
  {
    id: 3,
    title: "Wind",
    value: (
      <>
        {weatherData.current.wind_kph}
        <span className="text-sm font-normal text-white/60">
          {" "}km/h
        </span>
      </>
    ),
    icon: Wind,
    bottom: (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Navigation
          size={36}
          className="text-white -rotate-45 fill-white"
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "Visibility",
    value: (
      <>
        {weatherData.current.vis_km}
        <span className="text-sm font-normal text-white/60">
          {" "}km
        </span>
      </>
    ),
    icon: Eye,
    bottom: (
      <p className="font-body-md text-white/60 text-sm">
        Visibility Range
      </p>
    ),
  },
];


  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

export default WeatherHighlight;