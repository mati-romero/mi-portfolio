import Button from '../Button/Button';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="contact mt-5 p-5 bg-yellow row justify-content-center align-items-center">
      <div className="col-12 text-center">
        <h2>Let's Connect</h2>
        <p>I'm open to development opportunities, freelance projects and collaborations.</p>

        <Button href="https://www.linkedin.com/in/mati-romero/" variant="linkedin" className="mt-3">
              <FaLinkedin />
              LinkedIn
        </Button>

        <Button href="https://github.com/mati-romero" variant="github" className="mt-3">
              <FaGithub />
              GitHub
        </Button>

        <Button
          href="mailto:tuemail@gmail.com"
          variant="gmail"
          className="mt-3"
          >
          <FaEnvelope />
          E-mail
        </Button>

      </div>
    </div>
  );
}

export default Contact;