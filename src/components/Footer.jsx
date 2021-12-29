function Footer() {
  return (
    <footer>
      <div className="text-center">
        <p className="text-neutral-100">
          &copy; {new Date().getFullYear()} Cryptopuppie Packs |{" "}
          <a
            href="https://www.worldofcryptopups.cf/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            title="Goto main website"
          >
            World of Cryptopups
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
