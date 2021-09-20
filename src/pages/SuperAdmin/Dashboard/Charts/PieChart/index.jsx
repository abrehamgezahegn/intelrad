import { Container } from "../styles";
import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";

// const data = [
//   {
//     name: "Group A",
//     value: 400,
//   },
//   {
//     name: "Group B",
//     value: 300,
//   },
// ];

const COLORS = {
  male: "#25AED0",
  female: "#292F3D",
};

const PieChartVis = ({ data, title }) => {
  return (
    <Container>
      <div className="card">
        <h1 className="font-bold text-2xl mb-8 ml-8">{title}</h1>
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#82ca9d"
            fillRule="inherit"
            label
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </Container>
  );
};

export default PieChartVis;
