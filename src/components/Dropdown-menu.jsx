import React, {useState} from "react";
import { Sling as Hamburger } from 'hamburger-react'

const DropdownMenu = (props) => {
    const [isOpen, setOpen] = useState(false);

    return(
        <div className="text-white">
            <style>
                {`
                  .fade-in {
                    opacity: 0;
                    animation: fade-in 0.5s ease forwards;
                  }
                  
                  @keyframes fade-in {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                  }
                  
                  .active{
                    color: rgb(0, 172, 172);
                  }

                  .nav-link:hover{
                    color: rgb(100, 105, 125);
                  }
                `}
            </style>
                <div className='d-flex justify-content-end d-block d-xxl-none  me-4 me-lg-5' style={{marginTop: '-1vh', animation: 'appear 2s'}}>
                <Hamburger rounded size={25} color="teal"  toggled={isOpen} toggle={setOpen} />
                </div>
                {isOpen ? (
          <div className="d-flex justify-content-end mt-4 position-absolute" style={{right: '3%'}}>
          <ul className="me-3 me-lg-4 list-unstyled text-end mt-5" style={{ letterSpacing: '4px', fontFamily: 'Poppins' }}>
          <li className="nav-item">
          <a href="#home" className={`nav-link fade-in ${props.activeLink === 'home' ? 'active' : ''}`}style={{ animationDelay: '0.2s' }}>
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className={`nav-link mt-3 mt-lg-5 fade-in ${props.activeLink === 'about' ? 'active' : ''}`} style={{ animationDelay: '0.4s', cursor: 'pointer' }}>
            ABOUT
          </a>
        </li>
                <li className="nav-item">
                    <a href="#education" className={`nav-link mt-3 mt-lg-5 fade-in ${props.activeLink === 'education' ? 'active' : ''}`} style={{ animationDelay: '0.6s', cursor: 'pointer' }}>
                      EDUCATION
                      </a>
                </li>

                {/* <li className="nav-item">
                <a href="#projects" className={`nav-link mt-3 mt-lg-5 fade-in ${props.activeLink === 'projects' ? 'active' : ''}`} style={{ animationDelay: '0.8s', cursor: 'pointer' }}>
                  PROJECTS
                </a>
      </li> */}
      {/* <li className="nav-item">
                <a href="#careers" className={`nav-link mt-3 mt-lg-5 fade-in ${props.activeLink === 'careers' ? 'active' : ''}`} style={{ animationDelay: '1s', cursor: 'pointer' }}>
                  CAREER
                </a>
      </li> */}
                <li className="nav-item">
                <a href="#contact" className={`nav-link mt-3 mt-lg-5 fade-in ${props.activeLink === 'contact' ? 'active' : ''}`} style={{ animationDelay: '1.2s', cursor: 'pointer' }}>
                  CONTACT
                </a>
                </li>
          </ul>
        </div>        
        ) : null}
        </div>
    )
}

export default DropdownMenu;