import React from "react";

const Projects = ({ projects }) => {
  
    return (
        <div className="projects-slider-container mx-auto" id='projects'>
            <style>
                {`
                .projects-slider-container {
                    margin-top: 2rem;
                    overflow-x: scroll;
                    width: 70%;
                    scroll-snap-type: x mandatory;
                  }
                  
                  .projects-slider {
                    gap: 2rem;
                    scroll-snap-points-x: repeat(100%);
                    scroll-snap-type: x mandatory;
                    width: 150vw;
                  }
                  
                  .project-card {
                    width: 100%;
                    height: 50vh;
                    padding: 1rem;
                    border-radius: 10px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 2px 10px 16px rgba(155, 255, 255, 0.2);
                    transition: box-shadow 0.2s ease;
                    background-size: cover;
                    background-repeat: no-repeat;
                  }
                  
                  .project-card img {
                    width: 100%;
                    height: 30vh;
                    object-fit: cover;
                    border-radius: 10px;
                    margin-bottom: 1rem;
                    box-shadow: 4px 0px 8px rgba(20, 20, 20);
                    transition: transform 0.2s ease;
                    z-index: 0;
                  }

                  .project-card:hover img {
                    transform: scale(1.1);
                  }
                  
                  .project-card h3 {
                    font-size: 1.3rem;
                    margin-bottom: 0.5rem;
                  }
                  
                  .project-card p {
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                  }
                  
                  .project-card a {
                    display: block;
                    text-align: center;
                    padding: 0.5rem 1rem;
                    border-radius: 5px;
                    background-color: teal;
                    color: #fff;
                    text-decoration: none;
                    transition: background-color 0.2s ease;
                  }
                  
                  .project-card a:hover {
                    background-color: rgb(0,128,128,0.6);
                  }                 

                  @media screen and (max-width: 1200px) {
                    .projects-slider{
                      width: calc(390vw - 50px);
                    }
                    .project-card{
                      height: 70vh;
                    }
                    .project-card img{
                      height: 50vh;
                    }
                    .projects-slider-container{
                      width: 100%;
                    }
                    h5{
                      margin-left: 5vh;
                    }
                  }
                  `}
            </style>
        <h5 className="mt-5 mb-5" style={{color: 'teal'}}>- Projects</h5>
        <div className="projects-slider d-flex text-white mb-5">
          {projects.map(project => (
            <div key={project.id}
            className="project-card ms-5 mt-5 d-flex flex-column justify-content-center align-items-center"
                style={{ background: `linear-gradient(to left, rgba(0,128,128, 0.2), rgba(0, 0, 0, 0.7)), url(${project.image})`}}>
              <img src={project.image} alt={project.name}/>
              <h3 className="text-center mt-2 ps-3 pe-3">{project.name}</h3>
              <p className="text-center ps-3 pe-3">{project.description}</p>
              <a href={project.link} className="mt-2 m-3">View project</a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Projects;