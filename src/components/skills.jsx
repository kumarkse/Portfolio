import React, { useState, useEffect } from "react";

const Skills = ({data, skillTitle}) => {
  const [showAll, setShowAll] = useState(false);
  const [progressCount, setProgressCount] = useState(4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) setProgressCount(data.length);
    else setProgressCount(4);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Fade in each paragraph when it's in view
    const skillset = document.querySelectorAll('#skills');
    skillset.forEach((div) => {
        const position = div.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.8) {
            div.style.opacity = 1;
            div.style.transition = 'opacity 1s';

            // Animate the progress rings
      const progresses = div.querySelectorAll('.progress-ring-fill');
      progresses.forEach((progress) => {
        progress.style.animation = 'fill 3s';
      });
        } else {
            div.style.opacity = 0;
            div.style.transition = 'opacity 1s';

            // Remove the animation from the progress rings
      const progresses = div.querySelectorAll('.progress-ring-fill');
      progresses.forEach((progress) => {
        progress.style.animation = '';
      });
        }
    });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return(
    <section id="skills" className="mx-auto">
    <div className="skill d-flex">
         <p className="me-2">- {skillTitle}</p>
         <p>Skills</p>
    </div>

    <style>
        {`
        .skill{
          margin: 15vh 0 5vh -3vh;
          letter-spacing: 2px;
          color: rgba(30, 165, 165, 0.721);
          font-size: calc(0.7rem + 0.6vw);
        }
        #skills{
          width: 50%;
        }
        .progresses{
          margin: 3vh auto;
        }
        .progress-ring {
          position: relative;
          width: calc(6vw + 80px);
          height: calc(6vw + 80px);
          transform-style: preserve-3d;
          transform: perspective(12vh) rotateX(20deg);
        }
        
        .progress-ring-circle {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 6px solid rgba(0, 180, 180, 0.2);
          border-radius: 50%;
          box-sizing: border-box;
        }
        
        .progress-ring-fill {
          border-color: teal;
        }
        
        .progress-ring-text {
          position: absolute;
          top: 61%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: calc(0.7rem + 0.6vw);
          color: #eee;
        }
        .skill-name{
          font-size: calc(0.7rem + 0.6vw);
        }
        .other{
          border: 40px solid rgb(0, 180,180,0.2);
        }
        @keyframes fill {
          0%{
            transform: rotate(360deg);
          }
        }
        @media screen and (max-width: 1199px){
          #skills{
              width: 85%;
          }
      }
      @media screen and (min-width: 1200px) and (max-width: 1599px){
          #skills{
              width: 65%;
          }
      }
        `}
      </style>
      <div className="d-flex flex-wrap mt-5 mb-5 mx-auto">
        {data.slice(0, progressCount).map((progress, index) => (
          <div className="progresses p-3" key={index}>
            <div className="progress-ring">
              <div className={`progress-ring-circle ${skillTitle === "Other" ? "other" : ""}`}></div>
              <div
                className="progress-ring-circle progress-ring-fill"
                style={{
                  clip: `${skillTitle === 'Technical' ? `rect(0, calc(${(progress.percent*10 * 0.06 - 0.4)}vw + 80px), calc(6vw + 80px), 0)` 
                  : `rect(0, calc(${(progress.percent * 10 * 0.06 - 0.5)}vw + 80px), calc(6vw + 80px), 0)`}`,
                  background: `${skillTitle === "Technical"
                  ? "" : 'rgb(0, 100, 100, 0.4)'}`,
                  transform: `${skillTitle === 'Technical' ? `rotate(${index * 45}deg)`
                  : `rotate(${index * 120}deg)`}`,
                }}
              ></div>
              <div className="progress-ring-text">{skillTitle === 'Technical' ? 
              <p>{progress.percent} / 10</p> : <p>{progress.percent} / 10</p> 
               }
              </div>
            </div>
            <div className="text-center mt-4 mt-xl-5 skill-name">{progress.skill}</div>
          </div>
        ))}
        {showAll &&
          data.slice(progressCount).map((progress, index) => (
            <div className="progresses p-3" key={index + progressCount}>
              <div className="progress-ring">
                <div className="progress-ring-circle"></div>
                <div
                  className="progress-ring-circle progress-ring-fill"
                  style={{
                    clip: `rect(0, calc(${
                      (progress.percent * 0.06 - 0.4)
                    }vw + 80px), calc(6vw + 80px), 0)`,
                    transform: `rotate(${index * 45}deg)`
                  }}
                ></div>
                <div className="progress-ring-text">{progress.percent}%</div>
              </div>
              <div className="text-center mt-3 skill-name">
                {progress.skill}
              </div>
            </div>
          ))}
          {skillTitle === 'Technical' && (
            <div className="w-100 d-flex justify-content-center">
            {showAll ? (
            <button className="btn btn-dark mt-4 mt-xxl-5" onClick={toggleShowAll}>
              View Less
              </button>
            ) : (
              <button className="btn btn-dark mt-4 mt-xxl-5" onClick={toggleShowAll}>
                View More
              </button>
            )}
          </div>
          )}
      </div>
    </section>
  );
};

export default Skills;