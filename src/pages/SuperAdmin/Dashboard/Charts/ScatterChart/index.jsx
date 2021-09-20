import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import { Container } from "../styles";

const data02 = [
  {
    age: 10,
    cases: 260,
  },
  {
    age: 12,
    cases: 290,
  },
  {
    age: 34,
    cases: 290,
  },
  {
    age: 15,
    cases: 250,
  },
  {
    age: 18,
    cases: 280,
  },
  {
    age: 45,
    cases: 220,
  },
];

const ScatterChartVis = () => {
  return (
    <Container>
      <div className="card">
        <h1 className="font-bold text-2xl mb-8 ml-8 ">Cases per Age</h1>
        <ScatterChart
          width={730}
          height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" name="age" unit="yrs" />
          <YAxis dataKey="cases" name="cases" unit="" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Age-Case" data={data02} fill="#25AED0" />
        </ScatterChart>
      </div>
    </Container>
  );
};

export default ScatterChartVis;
