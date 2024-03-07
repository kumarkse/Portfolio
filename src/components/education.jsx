import React, {useState, useEffect} from "react";

const Education = () => {
    const [helloRotate, setHelloRotate] = useState(false);
    const [showEducation, setShowEducation] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.25) {
                setShowEducation(true);
              }
          if (window.scrollY > window.innerHeight * 4.8) {
            setHelloRotate(true);
          } else {
            setHelloRotate(false);
          }
          // Fade in each paragraph when it's in view
        const paragraphs = document.querySelectorAll('.ed-content .para, .ed-content .divider');
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

    return(
            <section id="education" className="text-white" style={{overflowX: 'hidden', marginBottom: '30vh'}}>
                {showEducation && (
                    <div>
                        <style>
                    {`
                    .ed-content{
                        font-family: Poppins;
                        width: 50%;
                        margin-top: 35vh;
                    }

                    .ed-content .para{
                        font-size: calc(0.7rem + 0.6vw);
                        line-height: 1.7;
                        letter-spacing: 2px;
                    }

                    @media screen and (max-width: 1199px){
                        .ed-content{
                            width: 85%;
                        }
                    }
                    @media screen and (min-width: 1200px) and (max-width: 1599px){
                        .ed-content{
                            width: 65%;
                        }
                    }
                    .hi{
                        margin-left: -5%;
                        color: rgb(0, 172, 172,0.7);
                    }
                    .divider{
                        border: 1px solid rgb(0, 172, 172,0.1);
                        background-color: rgb(0, 172, 172,0.1);
                    }
                    .hello2{
                        margin-top: -50vh;
                        margin-left: 0;
                    }
                    .rotate1{
                        margin-top: 8vh;
                        margin-left: 47%;
                    }                    
                    `}
                </style>
                <div className="mb-5 p-3 mx-auto ed-content">
                    <p className="mb-5 hi"> - Educational Background</p>
                    <div className="divider mb-lg-5" style={{marginTop: '10vh'}}></div>
                    <div className="mt-5 p-3 p-xl-4 para d-flex">
                    <p className="me-2" style={{color: 'rgb(0,180,180)'}}>University</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">Guru Gobind Singh Indraprastha University.</p>
                        </div>
                        <div className="mt-5 p-3 p-xl-4 para d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>College</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">University school of information & communication Technology , Delhi</p>
                        </div>
                        <div className="mt-5 p-3 p-xl-4 row para">
                        <div className="col d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>Course</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">B.Tech</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>Stream</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">Computer Science</p>
                        </div>
                        </div>
                        <div className="mt-4 p-3 p-xl-4 para d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>Graduation Year</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">2025</p>
                        </div>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <div className="mt-5 p-3 p-xl-4 para d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>University</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">Delhi Skill and Entrepreneurship University</p>
                        </div>
                        <div className="mt-5 p-3 p-xl-4 para d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>College</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">Pusa Institute of technology</p>
                        </div>
                        <div className="mt-5 p-3 p-xl-4 row para">
                        <div className="col d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>Course</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">Diploma</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>Stream</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">Electronics & Communication Engineering (ECE)</p>
                        </div>
                        </div>
                        <div className="mt-4 p-3 p-xl-4 para d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>Passing Year</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">2022</p>
                        </div>
                        <div className="divider mt-lg-5 mb-lg-5"></div>
                    </div>
                    <p className={`hello hello2 position-absolute ${helloRotate ? 'rotate-0 rotate1 w-100 position-sticky' : ''}`}>---- Education ----</p>
                    </div>
               )}
            </section>
    )
}

export default Education;