function Header() {
  return (
    <div className="flex flex-row justify-between gap-4 px-16 py-8 sticky uppercase font-bold">
      <h1>Chefies</h1>
      <ul className="flex flex-row gap-4">
        <li>Home</li>
        <li>Features</li>
        <li>Screenshot</li>
      </ul>
    </div>
  );
}

export default Header;
