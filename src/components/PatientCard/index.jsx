import React from "react";
import { Container } from "./styles";
import { getDate } from "../../utils/dateFormat";

const PatientCard = ({ patient = {}, showLastDiagnosisDate = true }) => {
  console.log("patien in patien card", patient);
  return (
    <Container>
      <div className="patient_card">
        {/* <h2 className="title">Patient Profile</h2> */}
        <img
          className="avatar"
          alt="some"
          src="https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg"
        />
        <div>
          <h3 className="item">
            <span> Name: </span>{" "}
            {`${patient.firstName || ""} ${patient.lastName || ""}`}
          </h3>
          <h3 className="item">
            <span>Age: </span>
            {patient.age}
          </h3>
          <h3 className="item">
            <span>Sex: </span>
            {patient.sex}
          </h3>
          <h3 className="item">
            <span>Phone number: </span>
            {patient.phoneNumber}
          </h3>
          {showLastDiagnosisDate && (
            <h3 className="item">
              <span>Last Diagnosis:</span> {getDate(patient.updatedAt.seconds)}
            </h3>
          )}
        </div>
      </div>
    </Container>
  );
};

export default PatientCard;
