import './App.css';
import React, { useState, useEffect } from 'react';
import About from './components/about';
import Navbar from './components/Navbar';
import DropdownMenu from './components/Dropdown-menu';
import Home from './components/home';
import Education from './components/education';
import Projects from './components/projects';
import Career from './components/career';
import Contact from './components/contact';
import projImg1 from '../src/assets/project-images/ecom.png'
import symptoscan from '../src/assets/project-images/symptoscan.png'
import projImg3 from '../src/assets/project-images/weather.png'
import maskdtect from '../src/assets/project-images/maskdtect.png'
import moviemate from '../src/assets/project-images/moviemate.png'


const projects = [
  {
    id: 1,
    name: 'moviemate',
    image: moviemate,
    description: 'Predict your Disease using Symptoms',
    link: 'https://movie--mate.streamlit.app/'
  },
  {
    id: 4,
    name: 'MaskDtect',
    image: maskdtect,
    description: 'Predicts whether mask is worn',
    link: 'https://maskdtect-kse.streamlit.app/'
  },
  {
    id: 5,
    name: 'SymptoScan',
    image: symptoscan,
    description: 'Predict your Disease using Symptoms',
    link: 'https://symptoscan-by-kse.streamlit.app/'
  },
  {
    id: 2,
    name: 'KSE market',
    image: projImg1,
    description: 'Kse market ecommerce site',
    link: 'https://kumar-ecom.vercel.app/'
  },
  {
    id: 3,
    name: 'Ma-weather',
    image: projImg3,
    description: 'Enter the city and get the weather',
    link: 'https://tenki-phi.vercel.app/'
  }
];

const careers = [
  {
    id: 1,
    job_title: 'Data Science Intern',
    company: 'CODSOFT',
    description: [
      'Data collection,cleaning & Interpretation. ',
      'Exposure to Data Science tools like Jupyter',
      'Training ML model.'
    ],
    from: '1 August 2023',
    to: ' 31 August 2023',
  },
  {
    id:3,
    job_title: 'Team Lead',
    company: 'IIC Ministry of education',
    description: [
      'Part of competetive programming sessions and mentoring'
    ],
    from: '10 February 2024',
    to: ' present',
  },
  {
    id: 2,
    job_title: 'CP Member',
    company: 'ACM ICPC',
    description: [
      'Part of competetive programming sessions and mentoring'
    ],
    from: '20 August 2022',
    to: ' present',
  },
];
<Career />
function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const handlePageChange = () => {
      const pageHeight = document.body.scrollHeight;
      const scrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;

      if (scrollPos >= windowHeight && pageHeight > window.innerHeight) {
        const contactSectionHeight = document.getElementById('contact').offsetHeight;
        const careersSectionHeight = document.getElementById('careers').offsetHeight;
        const projectsSectionHeight = document.getElementById('projects').offsetHeight;
        const educationSectionHeight = document.getElementById('education').offsetHeight;
        const pos = scrollPos + windowHeight;
        const bottom = pageHeight - contactSectionHeight + careersSectionHeight*0.05;

        if (pos >= bottom) {
          setPage('contact');
        } else if (pos >= bottom - careersSectionHeight) {
          setPage('careers');
        } else if (pos >= bottom - careersSectionHeight - projectsSectionHeight) {
          setPage('projects');
        } else if (pos >= bottom - careersSectionHeight - projectsSectionHeight - educationSectionHeight) {
          setPage('education'); 
        } else {
          setPage('about');
        }
      } else {
        setPage('home');
      }      
      
    }

    window.addEventListener('scroll', handlePageChange);
    return () => window.removeEventListener('scroll', handlePageChange);
  }, []);

  return (
    <div className="App">
      <div className="row g-0 w-100 position-fixed" style={{background: '#15151550', zIndex: 91}}>
        <div className="col-4 p-0 mt-3" style={{zIndex: 91}}>
          <p className="ms-4 ms-lg-5 mt-2 logo ps-2">Portfolio</p>
        </div>
        <div className="col p-0 d-flex justify-content-end mt-3" style={{zIndex: 91}}>
          <Navbar activeLink={page}/>
          <DropdownMenu activeLink={page}/>
        </div>
      </div>
      <Home/>
      <About/>
      <Education/>
      <Projects projects={projects} />
      <Career careers={careers}/>
      <Contact/>
    </div>
  );
}

export default App;