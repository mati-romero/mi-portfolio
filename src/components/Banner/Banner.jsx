import "./Banner.css";
import profile from '../../assets/images/Mr.png';
import Button from '../Button/Button';

function Banner() {
  return (
    <div className="banner row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="mt-5">
            HI, I'M MATÍAS ROMERO
          </h1>

          <h2 className="my-3">
            Full Stack Developer
          </h2>

          <p className="mb-5">
            Web developer with experience building modern web applications using React, JavaScript, PHP, Laravel and Symfony. I enjoy creating functional, responsive and user-focused digital solutions.
          </p>

          <Button href="#projects" blank={false}>
            View My Projects
          </Button>
        </div>

        <div className="col-12 col-md-6">
          <img
            src={profile}
            alt="Matias Romero"
            className="banner-image text-end"
          />
        </div>
    </div>
  )
}

export default Banner