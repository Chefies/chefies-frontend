import { IoMdDownload } from "react-icons/io";
import phoneImage from "../assets/phone.png";

function Hero() {
  return (
    <div className="flex md:flex-row-reverse flex-col justify-center gap-16 mx-auto">
      <div className="p-4 drop-shadow-xl mx-auto">
        <img src={phoneImage} className="h-[60vh]" />
      </div>

      <div className="flex flex-col md:justify-center md:text-end uppercase gap-4 max-w-lg">
        <strong className="text-3xl">Chef in emergency situations</strong>
        <p>
          Whether you have limited ingredients, or simply want to discover new
          healthy recipes with the ingredients you have, we got it covered!
        </p>
        <p>Powered by AI.</p>
        <button className="bg-primary text-white px-16 py-4 w-fit rounded-2xl ml-auto uppercase flex gap-2 items-center justify-center">
          <IoMdDownload className="w-6 h-6" />
          <p className="pt-1 font-bold">Download</p>
        </button>
      </div>
    </div>
  );
}

export default Hero;
