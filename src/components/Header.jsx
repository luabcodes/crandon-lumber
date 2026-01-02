import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src="/images/logo.png"
        alt="Crandon Lumber"
        className="logo"
      />

      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
