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

const BarChartMulti = ({ data }) => {
  return (
    <Container>
      <div className="card full">
        <h1 className="font-bold text-2xl mb-8 ml-8">Conditions & Age Group</h1>
        <BarChart width={1400} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Covid19" fill="#25AED0" />
          <Bar dataKey="Bacterial Pneumonia" fill="#82ca9d" />
          <Bar dataKey="Viral Pneumonia" fill="#292F3D" />
          <Bar dataKey="TB" fill="#77D1E7" />
        </BarChart>
      </div>
    </Container>
  );
};

export default BarChartMulti;
