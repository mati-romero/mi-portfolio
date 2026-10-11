import "./Job.css";

const Job = ({
  company,
  position,
  startDate,
  endDate = "Present",
  description,
  image,
}) => {
  return (
    <div className="card job-card h-100">
      {/* Imagen */}
      <div className="job-image-container">
        {image ? (
          <img
            src={image}
            alt={`Foto de ${company}`}
            className="job-image"
          />
        ) : (
          <div className="job-image-placeholder">
            <span className="yellowText">{company}</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="card-body">
        <h3 className="job-company">{company}</h3>
        <h5 className="job-position yellowText">{position}</h5>
        <p className="job-dates">
          {startDate} - {endDate}
        </p>

        <p className="job-description">{description}</p>
      </div>
    </div>
  );
};

export default Job;
