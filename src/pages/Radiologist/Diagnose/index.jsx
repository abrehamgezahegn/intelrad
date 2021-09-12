import * as React from "react";
import { Container } from "./styles";
import TextField from "@material-ui/core/TextField";
import RiskCard from "./RiskCard";
import PatientCard from "../../../components/PatientCard";
import { ButtonDark } from "../../../components/Button";
import { useAuth } from "../../../context/AuthProvider";

const Diagnose = () => {
  const getFullScreen = () => {};
  const auth = useAuth();

  const showSubmitForm = () => {
    if (auth.user.role === "radiologist") return true;
  };

  const showDiagnosisReport = () => {
    // if there is a report
    return true;
  };

  return (
    <Container>
      <div className="inner">
        <div className="diagnosis_area">
          <div className="images">
            <div>
              <img
                onClick={() => {
                  getFullScreen();
                }}
                id="x-ray-image"
                alt=""
                className="image"
                src="https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eCUyMHJheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              />
            </div>

            {/* <div>
              <h2 className="image_label">Sailency map</h2>
              <img
                alt=""
                className="image"
                src="https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eCUyMHJheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              />
            </div> */}
          </div>
          {showSubmitForm() && (
            <div>
              <div className="text_area_container">
                <TextField
                  id="outlined-multiline-static"
                  label="Diagnosis report"
                  multiline
                  rows={11}
                  defaultValue=""
                  variant="outlined"
                  className="textarea"
                />
              </div>
              <div className="button-container">
                <ButtonDark className="submit">Submit report</ButtonDark>
              </div>
            </div>
          )}

          {showDiagnosisReport() && (
            <div className="mt-12">
              <h3 className="text-3xl mb-4">Diagnosis report</h3>
              <p className="text-2xl max-w-4xl	">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
            </div>
          )}
        </div>
        <div className="right-content">
          <div className="risk_card">
            <RiskCard />
          </div>
          <PatientCard />
        </div>
      </div>
    </Container>
  );
};

export default Diagnose;
