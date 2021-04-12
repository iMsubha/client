import {
    faClock, faMapMarkerAlt, faPhone
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Row from "react-bootstrap/Row";
import InfoCard from "../InfoCard/InfoCard";
const infosData = [
  {
    title: "Opening Hours",
    discription: "We are open 7 days",
    icon: faClock,
    background: "light",
  },
  {
    title: "Visit Our Location",
    discription: "Brooklyn, NY 10003 USA",
    icon: faMapMarkerAlt,
    background: "dark",
  },
  {
    title: "Call us Now",
    discription: "+1890245679",
    icon: faPhone,
    background: "light",
  },
];
const BussinessInfo = () => {
  return( 
  <section className="container-fluid d-flex justify-content-center">
      <Row>
          {
              infosData.map(info => <InfoCard info={info}></InfoCard>)
          }
      </Row>
  </section>
  );
};

export default BussinessInfo;
