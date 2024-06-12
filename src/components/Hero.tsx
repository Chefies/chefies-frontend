import phoneImage from "../assets/phone.png";

function Hero() {
  return (
    <div className="flex md:flex-row-reverse flex-col justify-center gap-16 mx-auto">
      <div className="p-4 drop-shadow-xl mx-auto">
        <img src={phoneImage} className="h-[60vh]" />
      </div>

      <div className="flex flex-col md:justify-center md:text-end uppercase gap-4 max-w-lg">
        <strong className="text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor
          pellentesque convallis. Nullam sit amet euismod lorem.
        </p>
        <button className="bg-primary text-white px-16 py-4 w-fit rounded-2xl ml-auto uppercase">
          Download
        </button>
      </div>
    </div>
  );
}

export default Hero;
