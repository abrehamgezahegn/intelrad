import React from "react";

const PatientDataCard = ({ requestData }) => {
  console.log(requestData);
  return (
    <div>
      <div className="data-card">
        <div className="header">
          <h2 className="text-2xl	font-bold	text-center">Request</h2>
        </div>
        <div className="flex flex-col items-center p-8 pt-0">
          <div>
            <div className="flex  mb-4">
              <h3 className="mr-4">Name: </h3>
              <h3 className="font-bold capitalize">
                {requestData.firstName} {requestData.lastName}
              </h3>
            </div>
            <div className="flex  mb-4">
              <h3 className="mr-4">Age: </h3>
              <h3 className="font-bold">{requestData.age}</h3>
            </div>
            <div className="flex  mb-4">
              <h3 className="mr-4">Sex: </h3>
              <h3 className="font-bold capitalize">{requestData.sex}</h3>
            </div>
            <div className="flex  mb-4">
              <h3 className="mr-4">Phone number: </h3>
              <h3 className="font-bold capitalize">
                {requestData.phoneNumber}
              </h3>
            </div>
            <br />
            <br />
            <div className="flex  mb-4">
              <h3 className="mr-4">Priority: </h3>
              <h3 className="font-bold capitalize">{requestData.priority}</h3>
            </div>{" "}
            {Boolean(requestData.requestNote) && (
              <div className="flex  mb-4">
                <h3 className="mr-4">Note: </h3>
                <h3 className="font-bold capitalize">
                  {requestData.requestNote}
                </h3>
              </div>
            )}
            <div className="flex  mb-4">
              <h3 className="mr-4">Doctor: </h3>
              <h3 className="font-bold capitalize">
                {requestData.doctor.name}
              </h3>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDataCard;
