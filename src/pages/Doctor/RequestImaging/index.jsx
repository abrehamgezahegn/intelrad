import * as React from "react";
import { ButtonDark } from "../../../components/Button";
import Select from "../../../components/Form/Select";
import {
  StyledLabel,
  StyledTextArea,
} from "../../../components/Form/StyledElements";
import { Container } from "./styles";
import PatientCard from "../../../components/PatientCard";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import PatientForm from "./PatientForm";

const RequestImaging = () => {
  const [showPatientFrom, togglePatientForm] = React.useState(false);

  return (
    <Container>
      <div className="inner">
        <div className="content">
          <div className="left_content">
            <div className="flex flex-row mb-12">
              <div className="flex-grow	">
                <StyledLabel>Patient</StyledLabel>
                <div className="flex">
                  <Select
                    options={[
                      { label: "Jone Doe", value: "jhon" },
                      { label: "Jone Doe", value: "jashon" },
                      { label: "Jone Doe", value: "jhsfon" },
                    ]}
                    selectProps={{ className: "patient_select" }}
                  />
                  <div
                    className="ml-8 cursor-pointer"
                    onClick={() => {
                      togglePatientForm(true);
                    }}
                  >
                    <AddCircleRoundedIcon fontSize="large" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {showPatientFrom && (
                <div className="mb-24">
                  <StyledLabel>New Patient</StyledLabel> <PatientForm />
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <StyledLabel>Message</StyledLabel>
              <StyledTextArea className="text_area" />
            </div>
            <ButtonDark>Submit Request</ButtonDark>
          </div>
          <div>
            <PatientCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RequestImaging;
