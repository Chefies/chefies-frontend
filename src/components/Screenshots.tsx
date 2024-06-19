import Step from "./Step";
import phoneImage from "../assets/phone.png";

function Screenshots() {
  return (
    <div className="flex flex-col gap-8 items-center" id="screenshots">
      <h2 className="text-4xl uppercase text-center font-bold">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 container place-items-center">
        <Step image={phoneImage} />
        <Step image={phoneImage} />
        <Step image={phoneImage} />
        <Step image={phoneImage} />
        <Step image={phoneImage} />
        <Step image={phoneImage} />
        <Step image={phoneImage} />
        <Step image={phoneImage} />
      </div>
    </div>
  );
}

export default Screenshots;
