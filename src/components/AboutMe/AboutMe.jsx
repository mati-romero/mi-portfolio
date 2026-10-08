import Button from '../Button/Button';
import { FaDownload  } from 'react-icons/fa';
import "./AboutMe.css";
import draw from '../../assets/images/me.png';
import mobileDraw from '../../assets/images/me-mobile.png';
import cv from "../../assets/cv/Matias_Romero_CV_FullStack.pdf";

function AboutMe() {
  return (
    <div id="about" className="row justify-content-center align-items-center p-3 p-md-5 aboutMe">
      <div className="d-none d-lg-block col-6 text-center">
        <img
          src={draw}
          alt="About Me"
          className="w-100 object-fit-contain"
        />
      </div>

      <div className="col-12 d-lg-none text-center">
        <img
          src={mobileDraw}
          alt="About Me"
          className="w-100 object-fit-contain mb-3"
        />
      </div>

      <div className="col-12 col-lg-6">
        <h2 className="clearText">About Me</h2>
        
        <p className="clearText">I like turning ideas into things that actually work.</p>

        <p className="clearText">I'm a Full Stack Developer focused on building web experiences that are simple, useful, and thoughtfully designed. I enjoy being involved in the whole process — understanding the problem, figuring out how it should work, and then bringing it to life with code</p>

        <p className="clearText">My main tools are JavaScript, React, PHP, Laravel, MySQL, HTML, CSS, and Bootstrap. But I'm not attached to a specific stack — I care more about choosing the right tools for the problem and understanding how everything fits together.</p>

        <p className="clearText">I'm naturally curious, so I tend to learn by building. I like experimenting, breaking things, figuring out why they broke, and improving them along the way.</p>

        <p className="clearText">Right now, I'm focused on growing as a developer, building meaningful projects, and becoming better at turning complex ideas into simple digital experiences.</p>

        <div className="text-end">
          <Button
            href={cv}
            download="Matias-Romero-CV.pdf"
            className="mt-3"
          >
            <FaDownload />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe