import "./Skill.css";
import allSkills from "./allSkills";

function Skill({ skills = allSkills }) {
  return (
    <div id="skills">
      <h2>Digital Skills</h2>
      <div className="skills bg-skills">
        {skills.map((skill, index) => (
            <span className="skill-badge" key={index}>
                {skill}
            </span>
        ))}
      </div>
    </div>
  );
}

export default Skill;