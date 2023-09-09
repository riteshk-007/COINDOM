import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Chart({ days, arr }) {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }
  const data = {
    labels: date,
    datasets: [
      {
        label: "price in INR",
        data: prices,
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };
  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
}

export default Chart;
