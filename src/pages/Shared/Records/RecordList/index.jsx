import React from "react";
import { Container } from "./styles";
import CustomizedTables from "./MatTabel";

const RecordList = () => {
  return (
    <Container>
      <div className="table_container">
        <CustomizedTables />
      </div>
    </Container>
  );
};

export default RecordList;
