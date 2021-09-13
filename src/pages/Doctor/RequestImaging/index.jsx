import { useState } from "react";
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
import Modal from "../../../components/Modal";
import PatientList from "../../../components/PatientList";

const RequestImaging = () => {
  const [showPatientFrom, togglePatientForm] = useState(false);
  const [patient, setPatient] = useState();
  const [priority, setPriority] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, toggleModal] = useState("");

  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          toggleModal(false);
        }}
      >
        <PatientList
          onRowClick={(patient) => {
            setPatient(patient);
            toggleModal(false);
          }}
        />
      </Modal>
      <div className="inner">
        <div className="content">
          <div className="left_content">
            <div className="flex flex-row mb-12">
              <div className="flex-grow	">
                {!showPatientFrom && (
                  <>
                    <StyledLabel>Patient</StyledLabel>

                    <div className="flex">
                      <ButtonDark
                        onClick={() => {
                          toggleModal(true);
                        }}
                        className="w-full select-button"
                      >
                        Select Patient
                      </ButtonDark>
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
                value={priority}
                placeholder="priority"
                onChange={(value) => {
                  console.log("patient ", value);
                  setPriority(value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <StyledLabel>Message</StyledLabel>
              <StyledTextArea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="text_area"
              />
            </div>
            <Link to="/">
              <ButtonDark>Submit Request</ButtonDark>
            </Link>
          </div>
          {patient && (
            <div>
              <PatientCard patient={patient} />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RequestImaging;
