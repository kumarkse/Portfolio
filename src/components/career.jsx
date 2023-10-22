import React, {useState, useEffect} from "react";

const Career = ({careers}) => {
    const [helloRotate, setHelloRotate] = useState(false);
    const [showCareer, setShowCareer] = useState(false);
    const [displayedCareers, setDisplayedCareers] = useState(1);

    const handleLoadMore = () => {
        setDisplayedCareers(displayedCareers + 1);
      };
      
      const handleViewLess = () => {
        setDisplayedCareers(1);
      };
      
      const isViewMoreButtonVisible = displayedCareers < careers.length;
      const isViewLessButtonVisible = displayedCareers > 1;
      

      useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.25) {
                setShowCareer(true);
              }
          if (window.scrollY > window.innerHeight * 11.8) {
            setHelloRotate(true);
          } else {
            setHelloRotate(false);
          }
          // Fade in each paragraph when it's in view
        const paragraphs = document.querySelectorAll('.career-content .para, .career-content .divider');
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
        <section id="careers" className="text-white mx-auto" style={{overflowX: 'hidden', marginBottom: '30vh'}}>
                {showCareer && (
                    <div>
                        <style>
                    {`
                    .career-content{
                        font-family: Poppins;
                        width: 50%;
                        margin-top: 40vh;
                    }

                    .career-content .para{
                        font-size: calc(0.7rem + 0.6vw);
                        line-height: 1.7;
                        letter-spacing: 2px;
                    }

                    @media screen and (max-width: 1199px){
                        .career-content{
                            width: 85%;
                        }
                    }
                    @media screen and (min-width: 1200px) and (max-width: 1599px){
                        .career-content{
                            width: 65%;
                        }
                    }
                    .hi{
                        margin-left: -5%;
                        color: rgb(0, 172, 172,0.7);
                        font-size: calc(0.7rem + 0.6vw);
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
                    <div className="mb-5 p-3 mx-auto career-content">
                    <p className="mb-5 hi"> -  Experience</p>
                    {careers.slice(0, displayedCareers).map(career => (
                        <div>
                            <div className="divider"  style={{marginTop: '10vh', marginBottom: '10vh'}}></div>
                            <div key={career.id}>
                            <div className="p-3 p-xl-4 para d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>Title</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">{career.job_title}</p>
                        </div>
                        <div className="mt-5 p-3 p-xl-4 para d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>Company</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">{career.company}</p>
                        </div>
                        <div className="mt-5 p-3 p-xl-4 row para">
                        <div className="col d-flex">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>From</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">{career.from}</p>
                        </div>
                        <div className="col d-flex justify-content-lg-end">
                        <p className="me-2" style={{color: 'rgb(0,180,180)'}}>To</p>
                        <p style={{color: 'rgb(0,180,180)'}}>:</p>
                        <p className="ms-4">{career.to}</p>
                        </div>
                        </div>
                        <div className="para">
                        <p className="me-2 mt-4 p-3 p-xl-4 " style={{color: 'rgb(0,180,180)'}}>Job Description :</p>
  <div className="ms-4" style={{lineHeight: '2'}}>
  {career.description.map((item) => (
              <div className="mb-5">
                <p className="text-success" style={{ display: 'inline-block', marginRight: '15px' }}>{`-> `}</p>
                {item.includes('https') ? (
                  <span>
                    {item.split('https')[0]}
                    <a href={`https${item.split('https')[1]}`} target="_blank" rel="noopener noreferrer" style={{ color: 'teal' }}>
                      https{item.split('https')[1]}
                    </a>
                  </span>
                ) : (
                  <span>{item}</span>
                )}
              </div>
            ))}
  </div>
</div>
                        </div>
                        </div>
                    ))}
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <div className="d-flex justify-content-center">
                    {isViewMoreButtonVisible && (
          <div className="text-center mt-5">
            <button className="btn text-white" onClick={handleLoadMore} style={{backgroundColor: 'teal'}}>
              View More
            </button>
          </div>
        )}

        {isViewLessButtonVisible && (
          <div className="text-center mt-5 ms-4">
            <button className="btn text-white" onClick={handleViewLess} style={{backgroundColor: 'teal'}}>
              View Less
            </button>
          </div>
        )}
                    </div>
                    </div>
                    <p className={`hello hello2 position-absolute ${helloRotate ? 'rotate-0 rotate1 w-100 position-sticky' : ''}`}>- Career</p>
                    </div>
               )}
            </section>
    )
}

export default Career;