import React from "react";

const CustomerFeedback = () => {
  const starPath =
    "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z";

  return (
    <div className="p-4 bg-customGray rounded-lg shadow-md">
      <article className="border-b pb-1 border-customDarkGray">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 me-4 rounded-full"
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="User 1"
          />
          <div className="font-medium text-customWhite">
            <p>
              Alex Johnson
              <time
                dateTime="2014-08-16T19:00"
                className="block text-sm text-customWhite"
              >
                Joined on August 2014
              </time>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d={starPath} />
              </svg>
            ))}
          <svg
            className="w-4 h-4 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d={starPath} />
          </svg>
          <h3 className="ms-2 text-sm font-semibold text-customWhite">
            Value for Money!
          </h3>
        </div>
        <p className="mb-2 text-textGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          delectus aliquid voluptates ea, molestias repudiandae odit corrupti
          deserunt omnis ipsum!
        </p>
      </article>
      <article className="border-b mt-3 pb-1 border-customDarkGray">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 me-4 rounded-full"
            src="https://randomuser.me/api/portraits/women/4.jpg"
            alt="User 2"
          />
          <div className="font-medium text-customWhite">
            <p>
              Emily Brown
              <time
                dateTime="2014-08-16T19:00"
                className="block text-sm text-customWhite"
              >
                Joined on August 2014
              </time>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d={starPath} />
              </svg>
            ))}
          <svg
            className="w-4 h-4 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d={starPath} />
          </svg>
          <h3 className="ms-2 text-sm font-semibold text-customWhite">
            Awesome Product!
          </h3>
        </div>
        <p className="mb-2 text-textGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          delectus aliquid voluptates ea, molestias repudiandae odit corrupti
          deserunt omnis ipsum!
        </p>
      </article>
      <article className="mt-3">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 me-4 rounded-full"
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt="User 3"
          />
          <div className="font-medium text-customWhite">
            <p>
              Michael Smith
              <time
                dateTime="2014-08-16T19:00"
                className="block text-sm text-customWhite"
              >
                Joined on August 2014
              </time>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d={starPath} />
              </svg>
            ))}
          <svg
            className="w-4 h-4 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d={starPath} />
          </svg>
          <h3 className="ms-2 text-sm font-semibold text-customWhite">
            Thinking to buy another one!
          </h3>
        </div>
        <p className="mb-2 text-textGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          delectus aliquid voluptates ea, molestias repudiandae odit corrupti
          deserunt omnis ipsum!
        </p>
      </article>
    </div>
  );
};

export default CustomerFeedback;
