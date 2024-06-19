import { useState } from "react";
import phoneImage from "../assets/phone.png";
import Step from "./Step";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";

function Features() {
  const [currentIdx, setIdx] = useState(0);
  return (
    <div className="flex flex-col gap-8 items-center" id="features">
      <h2 className="text-4xl uppercase text-center font-bold">Our Features</h2>
      <div className="flex flex-row justify-center items-center gap-8">
        <button onClick={() => setIdx(Math.max(currentIdx - 1, 0))}>
          <LuChevronLeftCircle className="w-12 h-12" />
        </button>

        {currentIdx == 0 && (
          <Step
            image={phoneImage}
            description="Take a picture of your ingredients"
          />
        )}

        {currentIdx == 1 && (
          <Step
            image={phoneImage}
            description="Find healthy recipes for available ingredients"
            className={currentIdx == 1 ? "opacity-100" : "opacity-0"}
          />
        )}

        <button onClick={() => setIdx(Math.min(currentIdx + 1, 1))}>
          <LuChevronRightCircle className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
}

export default Features;
