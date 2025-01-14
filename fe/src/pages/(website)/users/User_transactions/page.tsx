import React from "react";
import Transactions from "./_components/Transaction";
import Sidebar from "../layoutUser";

const TransactionsHistory = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-6 mx-auto w-[1048px]">
      <Sidebar />
      <Transactions />
    </div>
  );
};

export default TransactionsHistory;
