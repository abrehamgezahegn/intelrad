import React from "react";
import { Container } from "./styles";
import CustomizedTables from "./MatTabel";

const RecordList = ({ records }) => {
  return (
    <Container>
      <div className="table_container">
        <CustomizedTables records={records} />
      </div>
    </Container>
  );
};

export default RecordList;
