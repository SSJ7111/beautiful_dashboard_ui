import React from "react";

const TotalCards = () => {
  return (
    <div className="flex flex-wrap gap-8 p-4">
      <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-customGray border border-customGray rounded-lg shadow">
        <span className="flex justify-center items-center w-12 h-12 border border-customNavy rounded-lg bg-customNavy mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#7294ff"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
            <path
              fillRule="evenodd"
              d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <p className="mb-3 font-normal text-customWhite">Total Orders</p>
        <a className="flex justify-between items-center" href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-customWhite">
            75
          </h5>
          <span className="flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00c98d"
              className="w-6 h-6"
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
        </a>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-customGray border border-customGray rounded-lg shadow">
        <span className="flex justify-center items-center w-12 h-12 border border-customGreen rounded-lg bg-customGreen mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#00c98d"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <p className="mb-3 font-normal text-customWhite">Total Delivered</p>
        <a className="flex justify-between items-center" href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-customWhite">
            70
          </h5>
          <span className="flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#df585b"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="font-bold text-textRed">3%</p>
          </span>
        </a>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-customGray border border-customGray rounded-lg shadow">
        <span className="flex justify-center items-center w-12 h-12 border border-customRed rounded-lg bg-customRed mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#df585b"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
            <path
              fillRule="evenodd"
              d="M21.087 13.75a.75.75 0 0 0-1.06 0L12 20.69l-8.97-8.97a.75.75 0 1 0-1.06 1.06l8.97 8.97 8.97-8.97a.75.75 0 0 0 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <p className="mb-3 font-normal text-customWhite">Total Cancelled</p>
        <a className="flex justify-between items-center" href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-customWhite">
            25
          </h5>
          <span className="flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#df585b"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="font-bold text-textRed">2%</p>
          </span>
        </a>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-customGray border border-customGray rounded-lg shadow">
        <span className="flex justify-center items-center w-12 h-12 border border-customYellow rounded-lg bg-customYellow mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffb86c"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 3a9 9 0 0 1 9 9c0 1.988-.685 3.807-1.812 5.232l-2.572-1.743a7.5 7.5 0 0 0 .253-2.49 7.5 7.5 0 0 0-7.5-7.5 7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 .253 2.49l-2.572 1.743A8.986 8.986 0 0 1 3 12a9 9 0 0 1 9-9Zm-.05 4.65a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Zm0 6a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0V14.65Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <p className="mb-3 font-normal text-customWhite">Total Complaints</p>
        <a className="flex justify-between items-center" href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-customWhite">
            15
          </h5>
          <span className="flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00c98d"
              className="w-6 h-6"
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

            <p className="font-bold text-textGreen">5%</p>
          </span>
        </a>
      </div>
    </div>
  );
};

export default TotalCards;
