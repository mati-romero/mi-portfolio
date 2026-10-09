import "./Skill.css";
import allSkills from "./allSkills";
import pensar from '../../assets/images/pensar.png';
import pensarMobile from '../../assets/images/pensar-mb.png';

function Skill({ skills = allSkills }) {
  return (
    <div id="skills" className="skills-container p-3 p-md-5">
      <h2 className="clearText text-center">Skills</h2>

      <div className="row mt-5 align-items-center">
        <div className="col-12 col-lg-6">
          <h4 className="yellowText mb-4">Digital Skills</h4>

          <div className="skills">
            {skills.map((skill, index) => (
                <span className="skill-badge" key={index}>
                    {skill}
                </span>
            ))}
          </div>

          <div className="soft-skills mt-4">
            <h4 className="clearText mb-4">Soft Skills</h4>

            <div className="soft-skills-list">
              <p className="clearText">• Autonomy</p>
              <p className="clearText">• Continuous Learning</p>
              <p className="clearText">• Problem-Solving</p>
              <p className="clearText">• Analytical Thinking</p>
              <p className="clearText">• Adaptability</p>
              <p className="clearText">• Organization</p>
              <p className="clearText">• Attention to Detail</p>
              <p className="clearText">• Creativity</p>
              <p className="clearText">• Initiative</p>
              <p className="clearText">• Results Orientation</p>
              <p className="clearText">• Continuous Improvement</p>
              <p className="clearText">• Technological Curiosity</p>
            </div>
          </div>
        </div>

        <div className="col-6 d-none d-lg-block text-center">
          <img
            src={pensar}
            alt="Skills"
            className="w-100 object-fit-contain"
          />
        </div>

        <div className="col-12 d-lg-none text-center mt-4">
          <img
            src={pensarMobile}
            alt="Skills"
            className="w-100 object-fit-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Skill;