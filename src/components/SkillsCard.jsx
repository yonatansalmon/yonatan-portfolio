import React from "react";
import "../App.css";

const SkillsCard = ({skill}) => {
  return (
      <div className="SkillNameContainer">
        <span className="SkillName">{skill.name}</span>
        <div className="BarContainer">
          <div className="Bar" style={{width: `${skill.percent}%`}}></div>
        </div>
    </div>
  );
};

export default SkillsCard;
