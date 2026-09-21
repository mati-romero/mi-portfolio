function Career() {

  const gama = ["React", "Java", "Spring Boot", "MySQL", "CI/CD", "REST APIs", "GraphQL"];
  const traychi = ["React", "MySQL", "Git", "GitHub", "Postman", "REST APIs", "GraphQL"];
  const ucc = ["TypeScript", "PHP", "Laravel", "Symfony", "REST APIs", "MySQL", "React"];
  const fundacion = ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Jquery"];
  
  return (

    <div id="career" className="p-5">
        <h2>Education & Experience</h2>

        <div className="row mt-5 justify-content-center ">
            <div className="col-12 col-lg-4">
                <h3 className="yellowText">Education</h3>
                <h5>Lic en Cs de la Computación - UNC</h5>
                <p>2014 - 2017 · Race not finished</p>

                <hr/>

                <h3 className="yellowText">Certifications</h3>

                <p>• Desarrollador PHP Full Stack: Backend — UCA, 2023</p>
                <p>• Desarrollador PHP Full Stack: Frontend — UCA, 2022</p>
                <p>• Gestión Ágil de Proyectos con Scrum — UCC, 2023</p>
                <p>• Curso de SQL y MySQL — Platzi, 2024</p>

                <hr/>

                <h3 className="yellowText">Languages</h3>
                <h5>English — B1 (Intermediate)</h5>
            </div>

            <div className="col-12 col-lg-1"></div>


            <div className="col-12 col-lg-7">
                
                <hr className="d-lg-none"/>

                <h3 className="yellowText">Experience</h3>

                <h5>• FULL STACK DEVELOPER — GAMA S.A.</h5>
                <p>Aug. 2025 - Set. 2026</p>

                <div className="skills mb-3">
                    {gama.map((skill, index) => (
                        <span className="skill-badge" key={index}>
                            {skill}
                        </span>
                    ))}
                </div>

                <h5>• FULL STACK DEVELOPER — TRAYCHI</h5>
                <p>Nov. 2024 - Aug. 2025</p>

                <div className="skills mb-3">
                    {traychi.map((skill, index) => (
                        <span className="skill-badge" key={index}>
                            {skill}
                        </span>
                    ))}
                </div>

                <h5>• FULL STACK DEVELOPER — UNIVERSIDAD CATÓLICA DE CÓRDOBA</h5>
                <p>Jun. 2022 - May 2025</p>

                <div className="skills mb-3">
                    {ucc.map((skill, index) => (
                        <span className="skill-badge" key={index}>
                            {skill}
                        </span>
                    ))}
                </div>

                <h5>• WEB DEVELOPER — FUNDACIÓN VICENTINA</h5>
                <p>Dec. 2020 - Mar. 2024</p>

                <div className="skills mb-3">
                    {fundacion.map((skill, index) => (
                        <span className="skill-badge" key={index}>
                            {skill}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    </div>
  );
}

export default Career;