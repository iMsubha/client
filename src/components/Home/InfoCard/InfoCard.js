import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
const InfoCard = ({info}) => {
  const colStyle = {
    minWidth: "360px",
    height: "100px",
    margin:'15px 3px',
    borderRadius:'10px',
    color:'white'
  };
  return (
        <Col style={colStyle} className={`d-flex flex-row align-items-center justify-content-center ${info.background}-bg-color`}>
          <FontAwesomeIcon icon={info.icon} size="3x" />
          <div className="ml-4">
            <h5>{info.title}</h5>
            <small>{info.discription}</small>
          </div>
        </Col>
      
  );
};

export default InfoCard;
