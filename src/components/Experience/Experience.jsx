import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Experience.css";
import Job from "../Job/Job";
import jobs from "./myJobs";

function Experience() {

  return (
    <div id="experience" className="p-0 p-lg-5">
      <div
        id="experienceCarousel"
        className="carousel slide experience-carousel mt-5"
        data-bs-ride="carousel"
      >
          <div className="carousel-inner">
              {jobs.map((job, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="experience-slide">
                    <Job
                      company={job.company}
                      position={job.position}
                      startDate={job.startDate}
                      endDate={job.endDate}
                      description={job.description}
                      image={job.image}
                    />
                  </div>
                </div>
              ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#experienceCarousel"
            data-bs-slide="prev"
          >
            <span className="experience-control bg-yellow" aria-hidden="true">
              <FaChevronLeft />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#experienceCarousel"
            data-bs-slide="next"
          >
            <span className="experience-control bg-yellow" aria-hidden="true">
              <FaChevronRight />
            </span>
            <span className="visually-hidden">Next</span>
          </button>

          <div className="carousel-indicators">
              {jobs.map((job, index) => (
                <button
                  type="button"
                  data-bs-target="#experienceCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={job.company}
                  key={index}
                ></button>
              ))}
          </div>
      </div>
    </div>
  );
}

export default Experience;
