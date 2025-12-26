import { NavbarLinks } from "../database";

function Navbar() {
  return (
    <>
    <div className="parent-div custom-container">
        <div className="logo">
        <a href="" className="nav-logo">
        <img src="house.png" alt="logo" width="30" /><span className="logo-name">SGS</span>
        </a>
        </div>
        <div className="navbar">
        <ul>
            {NavbarLinks.map((item) => (
              <li key={item.id}>
              <a href={item.link}>{item.text}</a>
              </li>
            ))}
        </ul>
        </div>
    </div>

    {/* banner */}
    
    </>
  );
}

export default Navbar;

