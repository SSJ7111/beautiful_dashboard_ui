import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const Activity = () => {
  useEffect(() => {
    // Chart options
    const chartOptions = {
      series: [
        {
          name: "Activity",
          data: [
            1000, 5000, 2000, 4000, 3000, 6000, 7000, 8000, 5000, 9000, 10000,
          ], // Example data
        },
      ],
      chart: {
        type: "bar",
        height: 208,
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      xaxis: {
        categories: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
        labels: {
          style: {
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            colors: ["#f5f5f5"], // X-axis labels color
            show: true,
          },
        },
        axisBorder: {
          show: true,
          color: "#283267", // X-axis line color
        },
        axisTicks: {
          show: true,
          color: "#283267", // X-axis ticks color
        },
      },
      yaxis: {
        tickAmount: 3,
        min: 0,
        max: 15000,
        labels: {
          formatter: (value) => `$${value / 1000}k`, // Format y-axis values as thousands
          style: {
            colors: ["#f5f5f5"], // Y-axis labels color
          },
        },
        axisBorder: {
          show: true,
          color: "#283267", // Y-axis line color
        },
        axisTicks: {
          show: true,
          color: "#283267", // Y-axis ticks color
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      fill: {
        colors: "#7294ff", // Bar color
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
          backgroundColor: "#283267",
          color: "#f5f5f5",
        },
      },
    };

    const chartElement = document.getElementById("column-chart");
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
    <div className="max-w-full w-full bg-customGray rounded-lg shadow p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4">
        <h5 className="text-2xl font-bold text-customWhite">Activity</h5>
        <div className="relative">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdownMenu"
            className="text-sm font-medium text-customWhite hover:text-customBlue text-center inline-flex items-center"
            type="button"
          >
            Weekly
            <svg
              className="w-2.5 h-2.5 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdownMenu"
            className="z-10 hidden bg-customDarkGray divide-y divide-gray-100 rounded-lg shadow w-30"
          >
            <ul className="py-2 text-sm text-customWhite">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-customNavy">
                  Daily
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2  hover:bg-customNavy">
                  Weekly
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2  hover:bg-customNavy">
                  Monthly
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="max-w-full" id="column-chart"></div>
    </div>
  );
};

export default Activity;
