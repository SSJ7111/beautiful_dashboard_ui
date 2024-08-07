import React from "react";

const RecentOrders = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="max-w-full bg-customGray p-6">
        <h5 className="text-2xl font-bold text-customWhite">Recent Orders</h5>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs w-full text-customWhite uppercase bg-customGray ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Customer
            </th>
            <th scope="col" className="px-6 py-3">
              Order No
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-customGray border-b border-customDarkGray hover:bg-customNavy">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-customWhite whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User 1"
              />
              <div className="ps-3">
                <div className="text-base font-semibold text-customWhite">
                  John Doe
                </div>
              </div>
            </th>
            <td className="px-6 text-customWhite py-4">15478256</td>
            <td className="px-6 text-customWhite py-4">$124.00</td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center p-2 h-8 w-24 rounded-full bg-customGreen ">
                <span className="font-bold text-textGreen">Delivered</span>
              </div>
            </td>
          </tr>
          <tr className="bg-customGray border-b border-customDarkGray hover:bg-customNavy">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-customWhite whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="User 2"
              />
              <div className="ps-3">
                <div className="text-base font-semibold text-customWhite">
                  Jane Smith
                </div>
              </div>
            </th>
            <td className="px-6 text-customWhite py-4">42564769</td>
            <td className="px-6 text-customWhite py-4">$365.02</td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center p-2 h-8 w-24 rounded-full bg-customGreen ">
                <span className="font-bold text-textGreen">Delivered</span>
              </div>
            </td>
          </tr>
          <tr className="bg-customGray border-b border-customDarkGray hover:bg-customNavy">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-customWhite whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="User 3"
              />
              <div className="ps-3">
                <div className="text-base font-semibold text-customWhite">
                  Mike Johnson
                </div>
              </div>
            </th>
            <td className="px-6 text-customWhite py-4">56154782</td>
            <td className="px-6 text-customWhite py-4">$44.65</td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center p-2 h-8 w-24 rounded-full bg-customRed ">
                <span className="font-bold text-textRed">Cancelled</span>
              </div>
            </td>
          </tr>
          <tr className="bg-customGray border-b border-customDarkGray hover:bg-customNavy">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-customWhite whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="User 4"
              />
              <div className="ps-3">
                <div className="text-base font-semibold text-customWhite">
                  Emily Davis
                </div>
              </div>
            </th>
            <td className="px-6 text-customWhite py-4">78215456</td>
            <td className="px-6 text-customWhite py-4">$65.00</td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center p-2 h-8 w-24 rounded-full bg-customRed ">
                <span className="font-bold text-textRed">Pending</span>
              </div>
            </td>
          </tr>
          <tr className="bg-customGray border-b border-customDarkGray hover:bg-customNavy">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-customWhite whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="User 5"
              />
              <div className="ps-3">
                <div className="text-base font-semibold text-customWhite">
                  David Brown
                </div>
              </div>
            </th>
            <td className="px-6 text-customWhite py-4">47821556</td>
            <td className="px-6 text-customWhite py-4">$545.00</td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center p-2 h-8 w-24 rounded-full bg-customGreen ">
                <span className="font-bold text-textGreen">Delivered</span>
              </div>
            </td>
          </tr>
          <tr className="bg-customGray hover:bg-customNavy">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-customWhite whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="User 6"
              />
              <div className="ps-3">
                <div className="text-base font-semibold text-customWhite">
                  Sarah Wilson
                </div>
              </div>
            </th>
            <td className="px-6 text-customWhite py-4">82515476</td>
            <td className="px-6 text-customWhite py-4">$128.20</td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center p-2 h-8 w-24 rounded-full bg-customGreen ">
                <span className="font-bold text-textGreen">Delivered</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
