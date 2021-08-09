import React from "react";
import RecordList from "./RecordList";
import { Container } from "./styles";

import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import WcOutlinedIcon from "@material-ui/icons/WcOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import DataCard from "./DataCard";
import { Button } from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
// import FilterSelect from "./FilterSelect";
import Select from "../../../components/Form/Select";

const Records = () => {
  return (
    <Container>
      <div className="inner">
        <div className="card_container">
          <div className="card_item">
            <DataCard
              icon={
                <NoteOutlinedIcon
                  style={{ fontSize: 48, marginRight: 24, color: "#51BAF7" }}
                />
              }
              value={120}
              title="Records"
            />
          </div>
          <div className="card_item">
            <DataCard
              icon={
                <WcOutlinedIcon
                  style={{ fontSize: 48, marginRight: 24, color: "#51BAF7" }}
                />
              }
              value={90}
              title="Patients"
            />{" "}
          </div>

          <div className="card_item">
            <DataCard
              icon={
                <PersonPinCircleOutlinedIcon
                  style={{ fontSize: 48, marginRight: 24, color: "#51BAF7" }}
                />
              }
              value={8}
              title="Practitioners"
            />
          </div>
        </div>
        <div>
          <div className="row d_header">
            <h1>Diagnosis</h1>
            <div className="row">
              <div className="select">
                <Select
                  options={[
                    { label: "All", value: "all" },
                    { label: "Diagnosed", value: "diagnosed" },
                    { label: "Requested", value: "requested" },
                    { label: "New", value: "new" },
                  ]}
                />
              </div>
              <Button color="primary" className="button">
                <AddOutlinedIcon /> New request
              </Button>
            </div>
          </div>
          <RecordList />
        </div>
      </div>
    </Container>
  );
};

export default Records;
