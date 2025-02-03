import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May","june"],
        datasets: [
            {
                label: "Sales",
                data: [20,30, 40, 50, 60, 80],
                backgroundColor: "rgba(74, 171, 200, 0.6)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Monthly Sales Data",
            },
        },
    };

    return <Bar data={data} options={options} className="bg-black h-[100%] rounded-lg shadow-md shadow-gray-600"/>;
};

export default BarChart;