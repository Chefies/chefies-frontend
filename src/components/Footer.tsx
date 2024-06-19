import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 -mt-16 bg-secondary px-16 py-8">
      <a target="_blank" href="https://github.com/Chefies">
        <BsGithub className="w-12 h-12" />
      </a>
      <p className="pt-1">© Chefies -- C241-PS308 Bangkit</p>
    </div>
  );
}

export default Footer;
