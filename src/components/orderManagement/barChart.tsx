"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData<"bar", any, string>>({
    datasets: [],
  });

  const newLocal = "Monthly Orders";
  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: newLocal,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  });

  useEffect(() => {
    setChartData({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Orders",
          data: [18, 221, 490, 138, 282, 342, 575],
          backgroundColor: "#871a99",
        },
      ],
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg ">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
