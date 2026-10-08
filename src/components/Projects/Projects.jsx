import ProjectCard from "../ProjectCard/ProjectCard";
import chtech from "../../assets/images/projects/chtech.png";
import work from "./myWork";

function Projects() {
  
  return (

    <div id="projects" className="p-5">
        <h2>Projects</h2>

        <div className="row g-4 mt-3">
            {work.map((project, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  skills={project.skills}
                  link={project.projectUrl}
                  github={project.githubUrl}
                />
              </div>
            ))}
        </div>
    </div>
  );
}

export default Projects;