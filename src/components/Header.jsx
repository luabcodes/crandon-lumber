import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Crandon Lumber Co</h1>

      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
