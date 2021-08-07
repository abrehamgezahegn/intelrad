import * as React from "react";
import { Container } from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RiskCard from "./RiskCard";
import PatientCard from "./PatientCard";

const Diagnose = () => {
  const getFullScreen = () => {};

  return (
    <Container>
      <div className="inner">
        <div className="diagnosis_area">
          {/* <h1 className="diagnosis-title">X-Ray Images</h1> */}
          <div className="images">
            <div>
              {/* <h2 className="image_label">Original</h2> */}
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
          <div>
            <div className="text_area_container">
              <TextField
                id="outlined-multiline-static"
                label="Detailed report"
                multiline
                rows={11}
                defaultValue=""
                variant="outlined"
                className="textarea"
              />
            </div>
            <Button className="submit">Submit report</Button>
          </div>
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
