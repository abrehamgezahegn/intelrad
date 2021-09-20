import React from "react";
import { Container } from "./styles";
import CustomizedTables from "./MatTabel";

const RecordList = ({ records, onDiagnosisDelete, noData }) => {
  return (
    <Container>
      <div className="table_container">
        <CustomizedTables
          records={records}
          onDiagnosisDelete={onDiagnosisDelete}
          noData={noData}
        />
      </div>
    </Container>
  );
};

export default RecordList;
