import logoImage from "../assets/logo.png";

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 px-2 md:px-16 py-2 md:py-8 sticky uppercase font-bold">
      <div className="flex flex-row gap-4 items-center">
        <img className="w-12 h-12" src={logoImage} />
        <h1 className="pt-1">Chefies</h1>
      </div>
      <ul className="flex flex-col md:flex-row gap-4">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#screenshots">Screenshot</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
