import * as React from "react";
import { Link } from "react-router-dom";
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
  const [patient, setPatient] = React.useState("");

  return (
    <Container>
      <div className="inner">
        <div className="content">
          <div className="left_content">
            <div className="flex flex-row mb-12">
              <div className="flex-grow	">
                {!showPatientFrom && (
                  <>
                    <StyledLabel>Patient</StyledLabel>
                    <div className="flex">
                      <Select
                        options={[
                          { label: "Jone Doe", value: "jhon" },
                          { label: "Jone Doe", value: "jashon" },
                          { label: "Jone Doe", value: "jhsfon" },
                        ]}
                        selectProps={{ className: "patient_select" }}
                        value={patient}
                        onChange={(value) => {
                          console.log("patient ", value);
                          setPatient(value);
                        }}
                      />
                      <div
                        className="ml-8 cursor-pointer"
                        onClick={() => {
                          setPatient("");
                          togglePatientForm(true);
                        }}
                      >
                        <AddCircleRoundedIcon fontSize="large" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div></div>
            <div>
              {showPatientFrom && (
                <div className="mb-24">
                  <h2 className="text-xl mb-4">New Patient</h2>{" "}
                  <PatientForm
                    onCancel={() => {
                      togglePatientForm(false);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="mb-8">
              <StyledLabel>Priority</StyledLabel>

              <Select
                options={[
                  { label: "Emergency", value: "emergency" },

                  { label: "High", value: "high" },
                  { label: "Medium", value: "medium" },
                  { label: "Low", value: "low" },
                ]}
                selectProps={{ className: "patient_select" }}
                value={patient}
                placeholder="priority"
                onChange={(value) => {
                  console.log("patient ", value);
                  setPatient(value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <StyledLabel>Message</StyledLabel>
              <StyledTextArea className="text_area" />
            </div>
            <Link to="/">
              <ButtonDark>Submit Request</ButtonDark>
            </Link>
          </div>
          {patient && (
            <div>
              <PatientCard />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RequestImaging;
