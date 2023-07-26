import { CalendarBlank, Clock, Star } from "phosphor-react";
import { Play } from "../assets/Play";

interface PosterProps {
  title: string;
  stars: string;
  image: string;
  scheduled: string;
}

export function Poster({ title, stars, image, scheduled }: PosterProps) {
  return (
    <div className="font-outfit w-full max-w-[12.12rem] min-h-[26.25rem]">
      <header className="flex justify-between">
        <h2 className="text-xl text-white whitespace-nowrap font-medium leading-5">
          {title}
        </h2>
        <h3 className="text-base font-semibold leading-[14.40px] text-yellow flex items-center gap-1">
          <Star size={16} weight="fill" className="star-shadow" />
          {stars}
        </h3>
      </header>
      <img src={image} alt="Poster" className="w-full h-72 mt-3 mb-[0.47rem]" />

      <div className="text-gray-50 mb-2 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Clock size={20} />
          {scheduled}
        </div>
        <div className="flex items-center gap-1">
          <CalendarBlank size={20} />
          2023
        </div>
      </div>

      <button className="h-11 w-full bg-gray-200 hover:bg-gray-100 py-2 px-4 rounded flex justify-center items-center gap-2 text-white font-outfit text-base leading-5 transition-colors ease-in-out duration-300">
        <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center">
          <Play />
        </div>
        Assistir trailer
      </button>
    </div>
  );
}
