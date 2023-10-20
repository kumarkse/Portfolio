import React, {useState, useEffect} from "react";
import Skills from "./skills";

const progressesData = [
    { skill: "C++", percent: 9 },
    { skill: "Python", percent: 9 },
    { skill: "React", percent: 8.5 },
    { skill: "MongoDB / SQL", percent: 8.5 },
    { skill: "DSA", percent: 9 },
    { skill: "ML", percent: 8.5 },
    { skill: "Excel", percent: 8 },
    { skill: "Power Bi", percent: 9 },
    { skill: "Tableau", percent: 8 },
  ];
  

const progressesData2 = [
    { skill: "Equity trading", percent: 8 },
    { skill: "Derivative trading", percent: 9.5 },
    { skill: "Investment", percent: 9 }
  ];

const About = () => {
    const [helloRotate, setHelloRotate] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.15) {
                setShowAbout(true);
              }
          if (window.scrollY > window.innerHeight * 1.8) {
            setHelloRotate(true);
          } else {
            setHelloRotate(false);
          }
          // Fade in each paragraph when it's in view
        const paragraphs = document.querySelectorAll('.about-content p, .about-content .divider');
        paragraphs.forEach((p) => {
            const position = p.getBoundingClientRect();
            if (position.top < window.innerHeight * 0.8) {
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
            <section id="about" style={{overflowX: 'hidden'}}>
                {showAbout && (
                <div>
                <div className="text-white ms-4 ms-lg-5" style={{overflowX: 'hidden'}}>
                <style>
                    {`
                    .about-content{
                        font-family: Poppins;
                        width: 50%;
                        margin-top: 3vh;
                    }

                    .about-content .para{
                        font-size: calc(0.7rem + 0.6vw);
                        line-height: 1.7;
                    }

                    @media screen and (max-width: 1199px){
                        .about-content{
                            width: 85%;
                        }
                    }
                    @media screen and (min-width: 1200px) and (max-width: 1599px){
                        .about-content{
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
                    .hello1{
                        top: 110vh;
                        margin-left: -5vh;
                    }
                    .rotate1{
                        margin-top: 10vh;
                        margin-left: 47%;
                    }                    
                    `}
                </style>
                    <div className="mb-5 p-3 mx-auto about-content">
                    <p className="mb-5 hi"> - Hello!</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">I am Kumar Abhishek from Ghaziabad, India.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">I am a senior undergraduate, currently pursuing B.Tech in Computer Science and Engineering from GGSIPU USICT Delhi , INDIA.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">I am determined at gaining both professional and student experiences in some of the most renowned product-based companies like Google, Amazon, Microsoft-EY and Goldman Sachs, and want to work with the latest technologies.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">Previously, I have gone through frontend - web development with technologies like react whereas , now i am focused on the field of Data science and Problem Solving.</p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    <p className="mt-4 p-3 p-xl-4 para">I am also a Part time Trader/Investor & interested in developing a career that would meet both my interests </p>
                    <div className="divider mt-lg-5 mb-lg-5"></div>
                    </div>
                    <Skills data={progressesData} skillTitle={"Technical"}/>
                    <Skills data={progressesData2} skillTitle={"Other"}/>
                    <p className={`hello hello1 position-absolute ${helloRotate ? 'rotate-0 rotate1 w-100 position-sticky' : ''}`}>---- About Me ----</p>
                </div>
                </div>
                )}
                {/* <Education/> */}
            </section>
    )
}

export default About;