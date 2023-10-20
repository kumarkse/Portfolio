import React, { useState, useEffect }  from "react";
import ThreeScene from "./cube";

const Home = () => {
  const [helloRotate, setHelloRotate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setHelloRotate(true);
      } else {
        setHelloRotate(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='home' style={{overflowX: 'hidden'}}>
      <style>
        {`
        .name{
          font-size: calc(2rem + 2vw);
          color: #fff;
          margin-top: 37vh;
          animation: appear 2s;
        }
        
        .line{
          height: 0.2vh;
          margin-top: -1.5vh;
          background-color: teal;
          width: calc(20rem + 15vw);
          margin-left: auto;
          margin-right: auto;
          animation: appear 3s;
        }
        
        .overview{
          color: #fff;
          font-size: calc(0.6rem + 0.5vw);
          letter-spacing: 3px;
          word-spacing: 2px;
          animation: appear 4s;
        }
        .indicator {
          position: relative;
          width: 20px;
          height: 20px;
          top: 25%;
          left: 50%;
          transform: rotate(45deg);
        }
        .indicator span {
          position: absolute;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: none;
          border-bottom: 3px solid #fff;
          border-right: 3px solid #fff;
          animation: animate 2s linear infinite;
        }
        body .indicator span:nth-child(1) {
          top: -20px;
          left: -20px;
          animation-delay: 0s;
        }
        body .indicator span:nth-child(2) {
          top: -10px;
          left: -10px;
          animation-delay: 0.4s;
        }
        body .indicator span:nth-child(3) {
          top: 0;
          left: 0;
          animation-delay: 0.8s;
        }
        body .indicator span:nth-child(4) {
          top: 10px;
          left: 10px;
          animation-delay: 1.2s;
        }
        body .indicator span:nth-child(5) {
          top: 20px;
          left: 20px;
          animation-delay: 0.8s;
        }
        @keyframes animate {
          0% {
            border-color: #fff;
            transform: translate(0, 0);
          }
          20% {
            border-color: #fff;
            transform: translate(15px, 15px);
          }
          20.1%,
          100% {
            border-color: teal;
          }
        }
        `}
      </style>
      <div className="home position-relative">
      <div className="position-absolute h-100 w-100" style={{ zIndex: 9 }}>
        <p className={`hello position-absolute ${helloRotate ? 'rotate-0 w-100' : ''}`}>- Hello !</p>
        <div>
          <p className="name d-flex justify-content-center">Kumar Abhishek</p>
          <p className="line mb-3"></p>
          <p className="overview text-center">
            COMPUTER SCIENCE AND ENGINEERING
            <br />
            UNDERGRADUATE STUDENT
          </p>
        </div>
        {!helloRotate && (
          <div className="indicator" style={{animation: 'appear 5s'}}>
            <span></span>
            <span></span>
          </div>
      )}
      </div>
      <div className="position-absolute" style={{ top: 0, left: 0, zIndex: 8 }}>
        <ThreeScene />
      </div>
    </div>
    </section>
  );
};

export default Home;