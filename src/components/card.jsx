import React from "react";

const Card = ({ card }) => {
  const Icon = card.icon;

  return (
    <div className="glass-card rounded-xl p-6 aspect-square flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-1 text-white/60">
          <Icon size={18} />

          <span className="font-label-caps text-label-caps uppercase">
            {card.title}
          </span>
        </div>

        <p className="font-headline-md text-headline-md text-white">
          {card.value}
        </p>

        {card.subtitle && (
          <p className="font-body-md text-white/80">
            {card.subtitle}
          </p>
        )}
      </div>

      {card.bottom}
    </div>
  );
};

export default Card;