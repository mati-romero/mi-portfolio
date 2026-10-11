import Experience from '../Experience/Experience';

function Career() {

  const gama = ["React", "Java", "Spring Boot", "MySQL", "CI/CD", "REST APIs", "GraphQL"];
  const traychi = ["React", "MySQL", "Git", "GitHub", "Postman", "REST APIs", "GraphQL"];
  const ucc = ["TypeScript", "PHP", "Laravel", "Symfony", "REST APIs", "MySQL", "React"];
  const fundacion = ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Jquery"];
  
  return (

    <div id="career">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-6 bg-yellow p-3 p-md-5">
                <h2 className="clearText">Education</h2>

                <h3>Studies</h3>
                <h5>Lic en Cs de la Computación - UNC</h5>
                <p>2014 - 2017 · Race not finished</p>

                <hr/>

                <h3>Certifications</h3>

                <p>• Desarrollador PHP Full Stack: Backend — UCA, 2023</p>
                <p>• Desarrollador PHP Full Stack: Frontend — UCA, 2022</p>
                <p>• Gestión Ágil de Proyectos con Scrum — UCC, 2023</p>
                <p>• Curso de SQL y MySQL — Platzi, 2024</p>

                <hr/>

                <h3 className="yellowText">Languages</h3>
                <h5>English — B1 (Intermediate)</h5>
            </div>

            <div className="col-12 col-lg-6 p-3 p-md-5">
                <h2>Experience</h2>
                <Experience />
            </div>
        </div>
    </div>
  );
}

export default Career;