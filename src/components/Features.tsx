import { HTMLProps, useState } from "react";
import phoneImage from "../assets/phone.png";

function Step({
  image,
  description,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & { image: string; description: string }) {
  return (
    <div
      {...props}
      className={
        "flex flex-col gap-4 w-[33vw] max-h-[60vh] aspect-[9/16] " + className
      }
    >
      <img src={image} />
      <p className="text-center text-xl font-bold">{description}</p>
    </div>
  );
}

function Features() {
  const [currentIdx, setIdx] = useState(0);
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-4xl uppercase text-center font-bold">Our Features</h2>
      <div className="flex flex-row justify-center items-center gap-8">
        <button onClick={() => setIdx(Math.max(currentIdx - 1, 0))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="scale-[2]"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
        </button>

        <div className="relative w-[33vw] max-h-[60vh] aspect-[9/16]">
          <Step
            image={phoneImage}
            description="Take a picture of your ingredients"
            className={
              "absolute top-0 left-1/2 -translate-x-1/2 " +
              (currentIdx == 0 ? "opacity-100" : "opacity-0")
            }
          />
          <Step
            image={phoneImage}
            description="Find healthy recipes for available ingredients"
            className={
              "absolute top-0  left-1/2 -translate-x-1/2 " +
              (currentIdx == 1 ? "opacity-100" : "opacity-0")
            }
          />
        </div>
        <button onClick={() => setIdx(Math.min(currentIdx + 1, 1))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="scale-[2]"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Features;
