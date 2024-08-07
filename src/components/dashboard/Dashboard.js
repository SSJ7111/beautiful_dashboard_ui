import React from "react";
import TotalCards from "./total-cards/TotalCards";
import NetProfit from "./net-profit/NetProfit";
import Activity from "./activity/Activity";
import ActionItems from "./action-items/ActionItems";
import RecentOrders from "./recent-orders/RecentOrders";
import CustomerFeedback from "./customer-feedback/CustomerFeedback";

const Dashboard = () => {
  return (
    <div className="bg-customBlack">
      <header className="bg-customBlack shadow">
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-customWhite">
            Dashboard
          </h1>
        </div>
      </header>
      <main className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            <TotalCards />
          </div>
          <div>
            <NetProfit />
          </div>
          <div className="col-span-2">
            <Activity />
          </div>
          <div>
            <ActionItems />
          </div>
          <div className="col-span-2">
            <RecentOrders />
          </div>
          <div>
            <CustomerFeedback />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
