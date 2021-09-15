import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { Container } from "../styles";

const BarChartVis = ({ data }) => {
  return (
    <Container>
      <div className="card">
        <h1 className="font-bold text-2xl mb-8 ml-8">Cases</h1>
        <BarChart width={700} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cases" fill="#25AED0" />
          <Legend />
        </BarChart>
      </div>
    </Container>
  );
};

export default BarChartVis;
