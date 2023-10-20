import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import fb from '../assets/icons/facebook.png';
import mail from '../assets/icons/email.png';
import linkedin from '../assets/icons/linkedin.png';
import github from '../assets/icons/github.png';
import discord from '../assets/icons/discord.png';
import instagram from '../assets/icons/instagram.png';
import ToggleButton from 'react-toggle-button'
import emailjs from '@emailjs/browser';

// Define the red marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Contact = () => {
  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBgImage, setShowBgImage] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    emailjs.sendForm("service_nenie5m", "template_j5p15ui", form.current, "aYooavmy68CjGU1L-") 
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
};

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.25) {
        setShowContact(true);
      }
  const paragraphs = document.querySelectorAll('div');
        paragraphs.forEach((p) => {
            const position = p.getBoundingClientRect();
            if (position.top < window.innerHeight * 0.9) {
                p.style.opacity = 1;
                p.style.transition = 'opacity 1s';
            } else {
                p.style.opacity = 0;
                p.style.transition = 'opacity 1s';
            }
        });
      };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  const handleReset = () => {
    setIsSubmitted(false);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:abhishektiwari2100@gmail.com";
  };

  const handleToggle = () => {
    const contact = document.getElementById('contact');
    const contactDiv = document.getElementsByClassName('contact-div')[0];
    const map = document.getElementsByClassName('map')[0];
    const social = document.getElementsByClassName('social')[0];
    const resume = document.getElementsByClassName('resume')[0];

    if (showBgImage) {
      setShowBgImage(false);
      window.scrollTo(0, 0);
    } else {
      setShowBgImage(true);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="mt-5 text-white" id="contact" >
      <style>
        {`
          #contact {
            height: 100vh;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .heading{
            margin-top: -5vh;
            margin-bottom: 8vh;
            color: rgb(0,180,180);
            letter-spacing: 3px;
          }

          form {
            width: 80%;
            max-width: 600px;
          }

          .form-group {
            margin-bottom: 30px;
          }

          label {
            font-size: 1.1rem;
            margin-bottom: 10px;
          }

          input[type="text"],
          input[type="email"],
          textarea {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background: rgb(250, 250, 250, 0.9);
          }

          textarea {
            height: 150px;
          }

          button[type="submit"] {
            background-color: teal;
            transition: background-color 0.2s ease-in-out;
          }

          button[type="submit"]:hover {
            background-color: rgb(0, 180, 180);
          }
          .full-height-map {
            height: 30vh;
          } 
          .toggle-button{
            transform: rotate(-270deg);
            margin-top: -50vh;
            right: 0;
          }
          .contact{
            width: 80vw;
          }  
          .cv{
            background-color: #fff;
            color: #000;
          } 
          .cv:hover{
            background-color: #00BFBF;
            color: #fff;
          }
          @media screen and (max-width: 1100px){
            .contact{
                width: 100vw;
            }
          }           
        `}
      </style>
      { showContact && (
        <div className="contact-div">
        <div className="contact mx-auto row g-0 d-flex justify-content-center align-items-center vh-100">
          <div className="col-12 mt-5 col-xl-6 d-flex justify-content-center justify-content-xl-start">
            {isSubmitted ? (
              <div>
                <p className="heading ms-5 ms-xl-0">Get in touch</p>
                  <h4 className="mt-5 ms-5 ms-xl-0" style={{color: 'teal'}}>Thanks !</h4>
              <button className="btn btn-dark mt-4 ms-5 ms-xl-0" type="button" onClick={handleReset}>
                  Send another message
              </button>
              </div>
            ) : (
              <div className="w-100">
              <div className="d-flex heading">
              <p className="ms-5 ms-xl-0 me-2" style={{fontFamily: 'Ahganirya'}}>Get in touch</p>
              <div className="divider ms-4" style={{transform: 'rotate(90deg)', marginTop: '-1.5vh', backgroundColor: 'rgb(0,180,180)'}}></div>
              </div>
                <form
                  ref={form}
                  className="mt-5 d-flex flex-column align-items-center mx-auto mx-xl-0"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group d-flex flex-column w-100">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group d-flex flex-column w-100">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group d-flex flex-column w-100">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required />
                  </div>
                  <div className="form-group d-flex flex-column w-100">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button className="btn text-white" type="submit" value="Send">
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="col-12 col-xl-6" style={{marginTop: '7vh'}}>    
          <div className="map align-items-center mt-5 ms-5 me-5 ms-xl-0 me-xl-0">
          <MapContainer
    className="full-height-map col"
    center={[28.6423908, 77.3684892]}
    zoom={11}
    minZoom={3}
    maxZoom={19}
    maxBounds={[[-85.06, -180], [85.06, 180]]}
    scrollWheelZoom={false}>
    <TileLayer
      // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${apiKey}`}
    />
    <Marker position={[28.6423908, 77.3684892]} icon={redIcon}>
      <Popup>
        Ghaziabad , India
      </Popup>
    </Marker>
  </MapContainer>
  
          </div>
  <div className="social mt-5">
    <div className="divider mt-5 mb-5"></div>
    <div className="d-flex">
    <p className="ms-5 ms-xl-0 me-2" style={{fontFamily: 'Ahganirya', fontSize: '0.9rem', letterSpacing: '2px'}}>Still &nbsp; Interested</p>
    --
    </div>
    <div className="social-links d-flex justify-content-center mt-4">
      <img src={mail} className="me-3" width={45} height={45} alt='email' onClick={handleEmailClick} style={{cursor: 'pointer'}}/>
      <a href="https://www.linkedin.com/in/abhishektiwari2100/" style={{cursor: 'pointer'}}><img src={linkedin} alt='linkedin' className="me-3" width={45} height={45}/></a>
      <a href="https://github.com/kumarkse" style={{cursor: 'pointer'}}><img src={github} alt='github' className="me-3" width={45} height={45}/></a>
      {/* <a href="https://discordapp.com/users/sia#4172" style={{cursor: 'pointer'}}><img src={discord} alt='discord' className="me-3" width={45} height={45}/></a> */}
      <a href="javascript:;" style={{cursor: 'pointer'}}><img src={fb} alt='facebook' className="me-3" width={45} height={45}/></a>
      <a href="https://www.instagram.com/_kumaar_01_/" style={{cursor: 'pointer'}}><img src={instagram} alt='instagram' width={45} height={45}/></a>
    </div>
  </div>
  
  <div className="resume mt-5 mb-3">
    <a className="text-decoration-none" href="https://drive.google.com/file/d/1seEIDcmf54lXg8xihX6IpXvi90cPm6gO/view?usp=drive_link">
    <button className="btn cv mx-auto d-flex">My Resume</button>
    </a>
    <div className="divider mt-5"></div>
  </div>
  
          </div>
        </div>
        <div className="toggle-button position-absolute d-none d-xl-block">
        <ToggleButton
    inactiveLabel={''}
    activeLabel={''}
    value={showBgImage}
    onClick={handleToggle}
    colors={{
      activeThumb: {
        base: 'rgb(250,250,250)',
      },
      inactiveThumb: {
        base: 'rgb(0,180,180)',
      },
      active: {
        base: 'rgb(80,180,180)',
        hover: 'rgb(107, 150, 150)',
      },
      inactive: {
        base: 'rgb(65,66,68)',
        hover: 'rgb(95,96,98)',
      }
    }}
  />
  
  
  </div>
        </div>
      )}
    </div>
    
  );
};

export default Contact;