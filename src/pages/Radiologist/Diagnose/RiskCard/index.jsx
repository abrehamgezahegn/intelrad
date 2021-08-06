import React from "react";
import { Container } from "./styles";

const RiskCard = () => {
  return (
    <Container>
      <div className="risk_card">
        <h2 className="title">Risk probabilities</h2>
        <div className="risk_inner">
          <div>
            <h2 className="title">Disease</h2>
            <div>
              <h3 className="item">Covid</h3>
              <h3 className="item">Covid</h3>
              <h3 className="item">Covid</h3>
              <h3 className="item">Covid</h3>
            </div>
          </div>
          <div>
            <h2 className="title">Risk</h2>
            <div>
              <h3 className="item">90%</h3>
              <h3 className="item">90%</h3>
              <h3 className="item">90%</h3>
              <h3 className="item">90%</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RiskCard;
