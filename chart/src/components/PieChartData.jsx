import React from 'react'
import {
    Cell,
	Legend,
	Pie,
	PieChart,
	
	Sector,
    Tooltip,
} from "recharts";

const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartData = ({data}) => {
  return (
		<PieChart
			style={{
				width: "100%",
				maxWidth: "500px",
				maxHeight: "80vh",
				aspectRatio: 1,
			}}
			responsive
		>
			<Pie
				data={data}
				labelLine={false}
				
				fill="#8884d8"
				dataKey="totalProducts"
				

          >
              <Tooltip />
              
              {
                  data.map((elm, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}>
                      
                  </Cell>)
              }
            </Pie>
			
		</PieChart>
  );
}

export default PieChartData