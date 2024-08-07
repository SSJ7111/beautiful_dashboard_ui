import React from "react";

const TotalCards = () => {
  return (
    <div className="flex flex-wrap gap-8 p-4">
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4 bg-customGray border border-customGray rounded-lg shadow">
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
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4 bg-customGray border border-customGray rounded-lg shadow">
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
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4 bg-customGray border border-customGray rounded-lg shadow">
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
              d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <p className="mb-3 font-normal text-customWhite">Total Cancelled</p>
        <a className="flex justify-between items-center" href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-customWhite">
            05
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
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4 bg-customGray border border-customGray rounded-lg shadow">
        <span className="flex justify-center items-center w-12 h-12 border border-customPink rounded-lg bg-customPink mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#e94ba5"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3.75 3.375c0-1.036.84-1.875 1.875-1.875H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375Zm10.5 1.875a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25ZM12 10.5a.75.75 0 0 1 .75.75v.028a9.727 9.727 0 0 1 1.687.28.75.75 0 1 1-.374 1.452 8.207 8.207 0 0 0-1.313-.226v1.68l.969.332c.67.23 1.281.85 1.281 1.704 0 .158-.007.314-.02.468-.083.931-.83 1.582-1.669 1.695a9.776 9.776 0 0 1-.561.059v.028a.75.75 0 0 1-1.5 0v-.029a9.724 9.724 0 0 1-1.687-.278.75.75 0 0 1 .374-1.453c.425.11.864.186 1.313.226v-1.68l-.968-.332C9.612 14.974 9 14.354 9 13.5c0-.158.007-.314.02-.468.083-.931.831-1.582 1.67-1.694.185-.025.372-.045.56-.06v-.028a.75.75 0 0 1 .75-.75Zm-1.11 2.324c.119-.016.239-.03.36-.04v1.166l-.482-.165c-.208-.072-.268-.211-.268-.285 0-.113.005-.225.015-.336.013-.146.14-.309.374-.34Zm1.86 4.392V16.05l.482.165c.208.072.268.211.268.285 0 .113-.005.225-.015.336-.012.146-.14.309-.374.34-.12.016-.24.03-.361.04Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <p className="mb-3 font-normal text-customWhite">Total Revenue</p>
        <a className="flex justify-between items-center" href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-customWhite">
            $12k
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
    </div>
  );
};

export default TotalCards;
