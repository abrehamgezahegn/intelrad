import React from "react";
import { StyledInput } from "../../../../components/Form/Input";
import { ButtonOutlined } from "../../../../components/Button";

const PatientForm = ({ onCancel }) => {
  return (
    <div>
      <div className="mr-4 mb-8">
        <StyledInput variant="outlined" placeholder="Name" />
      </div>
      <div className="mb-8">
        <StyledInput variant="outlined" placeholder="Age" />
      </div>
      <ButtonOutlined onClick={onCancel}>Cancel</ButtonOutlined>
    </div>
  );
};

export default PatientForm;
