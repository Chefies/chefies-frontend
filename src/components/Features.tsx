import { useState } from "react";
import takePhotoImage from "../assets/take-photo.png";
import verifyIngredientsImage from "../assets/verify-ingredients.png";
import getSuggestionsImage from "../assets/get-suggestions.png";
import saveRecipesImage from "../assets/save-recipes.png";
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
            image={takePhotoImage}
            description="Take a picture of your ingredients"
          />
        )}

        {currentIdx == 1 && (
          <Step
            image={verifyIngredientsImage}
            description="Verify detected ingredients"
            className={currentIdx == 1 ? "opacity-100" : "opacity-0"}
          />
        )}
        
        {currentIdx == 2 && (
          <Step
            image={getSuggestionsImage}
            description="Find healthy recipes for available ingredients"
            className={currentIdx == 2 ? "opacity-100" : "opacity-0"}
          />
        )}
        
        {currentIdx == 3 && (
          <Step
            image={saveRecipesImage}
            description="Save interesting recipes"
            className={currentIdx == 3 ? "opacity-100" : "opacity-0"}
          />
        )}

        <button onClick={() => setIdx(Math.min(currentIdx + 1, 3))}>
          <LuChevronRightCircle className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
}

export default Features;
