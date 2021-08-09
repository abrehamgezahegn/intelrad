import React from "react";
import { Container } from "./styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(props) {
  return (
    <Container riskPercentage={props.value}>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          size={54}
          className="progress"
          {...props}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            component="div"
            color={"textPrimary"}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    </Container>
  );
}

const RiskCard = () => {
  return (
    <Container>
      <div className="risk_card">
        <h2 className="main_title">Model prediction</h2>
        <div className="risk_inner">
          <div className="w-100">
            <div className="row justify-sb">
              <h2 className="title">Disease</h2>
              <h2 className="title">Risk</h2>
            </div>
            <div className="w-100">
              <div className="item-container row justify-sb">
                <h3 className="item">Covid19</h3>
                <div className="item">
                  <CircularProgressWithLabel value={90} />
                </div>
              </div>
              <div className="item-container row justify-sb">
                <h3 className="item">Viral Puemonia</h3>
                <div className="item">
                  <CircularProgressWithLabel value={40} />
                </div>
              </div>{" "}
              <div className="item-container row justify-sb">
                <h3 className="item">Bacterial Puemonia</h3>
                <div className="item">
                  <CircularProgressWithLabel value={75} />
                </div>
              </div>{" "}
              <div className="item-container row justify-sb">
                <h3 className="item">TB</h3>
                <div className="item">
                  <CircularProgressWithLabel value={90} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RiskCard;
