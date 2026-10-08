import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./ProjectCard.css";
import Button from '../Button/Button';

const ProjectCard = ({
  title,
  description,
  image,
  skills = [],
  link="",
  github="",
}) => {
  return (
    <div className="card project-card h-100">
      {/* Imagen */}
      <div className="project-image-container">
        <img
          src={image}
          alt={`Captura del proyecto ${title}`}
          className="project-image"
        />
      </div>

      {/* Contenido */}
      <div className="card-body d-flex flex-column">
        <h3 className="project-title">{title}</h3>

        <p className="project-description">
          {description}
        </p>

        {/* Skills */}
        <div className="skills mb-3">
          {skills.map((skill, index) => (
            <span className="skill-badge" key={index}>
              {skill}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="project-buttons mt-auto">
          {link && (
            <Button
              href={link}
              className="mt-3"
            >
              View
            </Button>
          )}

          {github && (
            <Button href={github} variant="github" className="mt-3">
              <FaGithub />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;