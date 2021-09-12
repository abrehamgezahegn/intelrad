import React from "react";
import { StyledInput } from "../../../../components/Form/Input";
import { ButtonOutlined } from "../../../../components/Button";
import Select from "../../../../components/Form/Select";
import { StyledLabel } from "../../../../components/Form/StyledElements";

const PatientForm = ({ onCancel }) => {
  return (
    <div>
      <div className="flex row">
        <div className="mr-6 mb-8">
          <StyledInput variant="outlined" placeholder="First ame" />
        </div>{" "}
        <div className="mr-6 mb-8">
          <StyledInput variant="outlined" placeholder="Last name" />
        </div>
      </div>
      <div className="flex row">
        <div className="mb-8 mr-6">
          <StyledInput type="number" variant="outlined" placeholder="Age" />
        </div>{" "}
        <div className="mb-8">
          <StyledInput
            type="number"
            variant="outlined"
            placeholder="Phone number"
          />
        </div>
      </div>
      <div className="mb-8">
        <StyledLabel>Sex</StyledLabel>

        <Select
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          selectProps={{ className: "patient_select" }}
          // value={patient}
          placeholder="priority"
          // onChange={(value) => {
          //   console.log("patient ", value);
          //   setPatient(value);
          // }}
        />
      </div>
      <ButtonOutlined onClick={onCancel}>Cancel</ButtonOutlined>
    </div>
  );
};

export default PatientForm;
