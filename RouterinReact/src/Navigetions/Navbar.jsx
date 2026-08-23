import { Link } from "react-router-dom";

function Navbar() {
  const navLink = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/product", label: "Product" },
  ];
  return (
    <nav className="navbar bg-body-tertiary mb-5">
      <div className="container">
        <a className="navbar-brand">
          <h1>LOGO</h1>
        </a>
        {navLink.map((link, index) => (
          <Link className="underline btn btn-dark" key={index} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
