import Step from "./Step";
import splashImage from "../assets/splash.png";
import loginImage from "../assets/login.png";
import registerImage from "../assets/register.png";
import takePhotoImage from "../assets/take-photo.png";
import verifyImage from "../assets/verify-ingredients.png";
import suggestionImage from "../assets/get-suggestions.png";
import unavailableImage from "../assets/unavailable.png";
import settingsImage from "../assets/settings.png";
import editProfileImage from "../assets/edit-profile.png"
import editPassword from "../assets/edit-password.png";

function Screenshots() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-4xl uppercase text-center font-bold">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 container place-items-center">
        <Step image={splashImage} />
        <Step image={loginImage} />
        <Step image={registerImage} />
        <Step image={takePhotoImage} />
        <Step image={verifyImage} />
        <Step image={suggestionImage} />
        <Step image={unavailableImage} />
        <Step image={settingsImage} />
        <Step image={editProfileImage} />
        <Step image={editPassword} />
      </div>
    </div>
  );
}

export default Screenshots;
