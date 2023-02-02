import React from "react";
import '../App.css'

const CvCard = ({cvEl}) => {
  return (
    <div className="CvCardContainer">
      <p className="Badge">{cvEl?.startYear} - {cvEl?.endYear}</p>
      <h3 className="CardTitle">{cvEl?.subject}</h3>
      <p className="CardPlace">{cvEl?.location}</p>
      <p className="CardDescription">{cvEl?.description}</p>
    </div>
  );
};

export default CvCard;
