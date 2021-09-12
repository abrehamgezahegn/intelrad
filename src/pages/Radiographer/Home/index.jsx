import React from "react";
import RecordList from "./RecordList";
import { Container } from "./styles";
import Select from "../../../components/Form/Select";
// import { useHistory } from "react-router-dom";
import { StyledInput } from "../../../components/Form/Input";

const Records = () => {
  // const history = useHistory();
  return (
    <Container>
      <div className="inner">
        <div>
          <div className="row d_header">
            <h1 className="text-2xl">Requests</h1>
            <div className="row">
              <div className="mr-5">
                <StyledInput placeholder="Search" variant="outlined" />
              </div>
              <div className="select">
                <Select
                  options={[
                    { label: "All", value: "all" },
                    { label: "Emergency", value: "emergency" },
                    { label: "High", value: "high" },
                    { label: "medium", value: "medium" },
                    { label: "Low", value: "low" },
                  ]}
                />
              </div>
            </div>
          </div>
          <RecordList />
        </div>
      </div>
    </Container>
  );
};

export default Records;
