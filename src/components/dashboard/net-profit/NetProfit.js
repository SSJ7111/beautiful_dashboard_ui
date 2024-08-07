import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const NetProfit = () => {
  useEffect(() => {
    // Chart options
    const chartOptions = {
      series: [70, 30], // Data for the chart: 70% profit, 30% remaining
      chart: {
        height: 200,
        type: "donut",
      },
      labels: ["Net Profit", "Remaining"], // Labels for the chart
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "16px",
                color: "#f5f5f5",
                offsetY: 20,
              },
              value: {
                show: true,
                fontSize: "20px",
                fontWeight: "bold",
                color: "#f5f5f5",
                offsetY: -20,
              },
              total: {
                show: true,
                showAlways: true,
                label: "Goal Completed",
                fontSize: "10px",
                fontWeight: 600,
                color: "#f5f5f5",
                formatter: () => "70%", // Multi-line text
              },
            },
          },
        },
      },
      colors: ["#7294ff", "#283267"], // Color for the donut chart
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    };

    const chartElement = document.getElementById("donut-chart");
    let chartInstance;

    if (chartElement && typeof ApexCharts !== "undefined") {
      chartInstance = new ApexCharts(chartElement, chartOptions);
      chartInstance.render();
    }

    // Cleanup function to destroy chart instance
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-sm w-full flex justify-between items-center text-nowrap bg-customGray rounded-lg shadow p-4 md:p-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-customWhite font-semibold mb-8">
          Net Profit
        </p>
        <div className="flex justify-center items-center">
          <h4 className="text-2xl font-bold leading-none text-customWhite pe-1">
            $6759.25
          </h4>
        </div>
        <span className="flex justify-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#00c98d"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>

          <p className="font-bold text-textGreen">3%</p>
        </span>
      </div>

      {/* Donut Chart */}
      <div className="" id="donut-chart"></div>
    </div>
  );
};

export default NetProfit;
