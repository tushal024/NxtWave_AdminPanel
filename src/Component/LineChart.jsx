import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Revenue",
                data: [100, 200, 300, 400, 500],
                borderColor: "rgba(53, 166, 198, 0.8)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.3, // Smooth line
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Monthly Revenue",
            },
        },
    };

    return <Line data={data} options={options} className="bg-black rounded-lg shadow-md shadow-gray-600"/>;
};

export default LineChart;