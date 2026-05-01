import React from 'react'
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";

const BarChartData = ({data}) => {
  return (
		<BarChart
			style={{
				width: "100%",
				maxWidth: "700px",
				maxHeight: "70vh",
				aspectRatio: 1.618,
			}}
			responsive
			data={data}
			margin={{
				top: 5,
				right: 0,
				left: 0,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="userId" />
			<YAxis width="20px" />
			<Tooltip />
			<Legend />
			<Bar
				dataKey="totalProducts"
				fill="#8884d8"
				activeBar={{ fill: "pink", stroke: "blue" }}
			/>

		</BarChart>
  );
}

export default BarChartData