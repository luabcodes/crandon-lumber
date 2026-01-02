import "./header.css";

function Header() {
  return (
    <header
      className="header"
      style={{ backgroundImage: "url(/images/header-bg.jpg)" }}
    >
      <img
        src="/images/logo.png"
        alt="Crandon Lumber Logo"
        className="logo"
      />

      <ul className="nav-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;
