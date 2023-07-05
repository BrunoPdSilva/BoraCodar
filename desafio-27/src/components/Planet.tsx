import Lottie from "lottie-react";
import PlanetAnimation from "../assets/planet.json";

export function Planet() {
  return (
    <div className="w-56 h-56 relative">
      <div className="absolute top-0 -left-14 w-96 h-52 bg-gradient-purple blur-3xl opacity-30 rounded-full"></div>
      <Lottie animationData={PlanetAnimation} />
    </div>
  );
}
