import React from "react";
import { Container } from "./styles";

const DataCard = ({ icon, title, value }) => {
  return (
    <Container>
      <div className="card">
        <div className="row">
          {icon}

          <div>
            <h1 className="card_title">{title}</h1>
            <h3 className="card_value">{value}</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DataCard;
