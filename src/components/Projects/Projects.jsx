import ProjectCard from "../ProjectCard/ProjectCard";
import hola from "../../assets/images/projects/chtech.png";

function Projects() {
  
  return (

    <div id="projects" className="p-5">
        <h2>Projects</h2>

        <div className="row g-4 mt-3">
            <div className="col-12 col-md-6 col-lg-4">
                <ProjectCard
                    title="Sistema de gestión para clínicas"
                    description="Plataforma web para gestionar pacientes, profesionales y turnos."
                    image={hola}
                    skills={["React", "Node.js", "Express", "MySQL"]}
                    link="https://mi-proyecto.com"
                    github="https://github.com/usuario/proyecto"
                />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
                <ProjectCard
                    title="Sistema de gestión para clínicas"
                    description="Plataforma web para gestionar pacientes, profesionales y turnos."
                    image={hola}
                    skills={["React", "Node.js", "Express", "MySQL"]}
                    link="https://mi-proyecto.com"
                    github="https://github.com/usuario/proyecto"
                />
            </div>

             <div className="col-12 col-md-6 col-lg-4">
                <ProjectCard
                    title="Sistema de gestión para clínicas"
                    description="Plataforma web para gestionar pacientes, profesionales y turnos."
                    image={hola}
                    skills={["React", "Node.js", "Express", "MySQL"]}
                    link="https://mi-proyecto.com"
                    github="https://github.com/usuario/proyecto"
                />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
                <ProjectCard
                    title="Sistema de gestión para clínicas"
                    description="Plataforma web para gestionar pacientes, profesionales y turnos."
                    image={hola}
                    skills={["React", "Node.js", "Express", "MySQL"]}
                    link="https://mi-proyecto.com"
                    github="https://github.com/usuario/proyecto"
                />
            </div>

             <div className="col-12 col-md-6 col-lg-4">
                <ProjectCard
                    title="Sistema de gestión para clínicas"
                    description="Plataforma web para gestionar pacientes, profesionales y turnos."
                    image={hola}
                    skills={["React", "Node.js", "Express", "MySQL"]}
                    link="https://mi-proyecto.com"
                    github="https://github.com/usuario/proyecto"
                />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
                <ProjectCard
                    title="Sistema de gestión para clínicas"
                    description="Plataforma web para gestionar pacientes, profesionales y turnos."
                    image={hola}
                    skills={["React", "Node.js", "Express", "MySQL"]}
                    link="https://mi-proyecto.com"
                    github="https://github.com/usuario/proyecto"
                />
            </div>
        </div>
    </div>
  );
}

export default Projects;