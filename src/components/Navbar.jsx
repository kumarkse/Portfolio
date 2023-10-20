import React from "react";

const Navbar = (props) => {
  
    return (
      <nav className="navbar navbar-dark d-none d-xxl-block p-0">
        <ul className="navbar-nav list-group list-group-horizontal d-flex justify-content-end">
        <li className="nav-item me-5">
          <a href="#home" className={`nav-link ${props.activeLink === 'home' ? 'active' : ''}`}>
            Home
          </a>
        </li>
        <li className="nav-item me-5">
          <a href="#about" className={`nav-link ${props.activeLink === 'about' ? 'active' : ''}`}>
            About
          </a>
        </li>
                <li className="nav-item me-5">
                    <a href="#education" className={`nav-link ${props.activeLink === 'education' ? 'active' : ''}`}>Education</a>
                </li>

                {/* <li className="nav-item me-5">
                <a href="#projects" className={`nav-link ${props.activeLink === 'projects' ? 'active' : ''}`}>Projects</a>
      </li> */}
      {/* <li className="nav-item me-5">
                <a href="#careers" className={`nav-link ${props.activeLink === 'careers' ? 'active' : ''}`}>Career</a>
      </li> */}
                <li className="nav-item me-5">
                <a href="#contact" className={`nav-link ${props.activeLink === 'contact' ? 'active' : ''}`}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;