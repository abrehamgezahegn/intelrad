import React from "react";

const PatientDataCard = ({ requestData }) => {
  return (
    <div>
      <div className="data-card">
        <h2 className="mb-4 text-2xl	font-bold	text-center">Patient Data</h2>
        <div className="flex  flex-col items-center">
          <div>
            <div className="flex  mb-4">
              <h3 className="mr-4">Name: </h3>
              <h3 className="font-bold">{requestData.name}</h3>
            </div>
            <div className="flex  mb-4">
              <h3 className="mr-4">Age: </h3>
              <h3 className="font-bold">{requestData.age}</h3>
            </div>
            <div className="flex  mb-4">
              <h3 className="mr-4">Sex: </h3>
              <h3 className="font-bold">{requestData.sex}</h3>
            </div>
            <div className="flex  mb-4">
              <h3 className="mr-4">Priority: </h3>
              <h3 className="font-bold">{requestData.priority}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDataCard;
