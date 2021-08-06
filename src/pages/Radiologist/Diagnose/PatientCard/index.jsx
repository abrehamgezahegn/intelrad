import React from "react";
import { Container } from "./styles";

const PatientCard = () => {
  return (
    <Container>
      <div className="patient_card">
        <h2 className="title">Patient Profile</h2>
        <div>
          <h3 className="item">
            <span> Name: </span> Jhon Doe
          </h3>
          <h3 className="item">
            <span>Age:</span>
            39
          </h3>

          <h3 className="item">
            <span>Last Diagnosis:</span> Tue, 23 June, 2019
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default PatientCard;
