import Logo from "../logo.png";

function Header() {
  return (
    <header className="py-4">
      <nav className="w-5/6 mx-auto text-center">
        <a href="/">
          <img
            src={Logo}
            alt="World of Cryptopups"
            className="mx-auto h-32 w-auto object-contain"
          />
        </a>
        <h1 className="text-neutral-200 text-2xl md:text-3xl font-black uppercase bg-stone-800 py-2 rounded-lg">
          Collection Packs
        </h1>
      </nav>
    </header>
  );
}

export default Header;
