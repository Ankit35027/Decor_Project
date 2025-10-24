import "./Navbar.css";

const Nav = [
  { name: "Home", url: "/Home" },
  { name: "About Us", url: "/About" },
  { name: "Products", url: "/Products" },
  { name: "Services", url: "/Services" },
  { name: "Contact Us", url: "/Contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">DECOR</div>
      <img
        className="logo-img"
        src="https://t3.ftcdn.net/jpg/02/36/29/56/360_F_236295604_5cTJm2Ksy8F4l2iIo9QrCmc5O1tbs8yo.jpg"
        alt="Decor Logo"
      />
      <ul className="nav-links">
        {Nav.map((item) => (
          <li key={item.name}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
