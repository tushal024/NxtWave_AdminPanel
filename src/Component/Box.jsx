import React, { useState, useEffect } from 'react';

const Box = () => {
  const [productsSold, setProductsSold] = useState(0);
  const [netProfit, setNetProfit] = useState(0);
  const [newCustomers, setNewCustomers] = useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);

  useEffect(() => {
    // Simulate counter animation for products sold
    const intervalProductsSold = setInterval(() => {
      setProductsSold((prev) => {
        if (prev < 565) return prev + 1;
        clearInterval(intervalProductsSold); // Stop counter once target is reached
        return prev;
      });
    }, 1);

    // Simulate counter animation for net profit
    const intervalNetProfit = setInterval(() => {
      setNetProfit((prev) => {
        if (prev < 541) return prev + 1;
        clearInterval(intervalNetProfit); // Stop counter once target is reached
        return prev;
      });
    }, 1);

    // Simulate counter animation for new customers
    const intervalNewCustomers = setInterval(() => {
      setNewCustomers((prev) => {
        if (prev < 565) return prev + 1;
        clearInterval(intervalNewCustomers); // Stop counter once target is reached
        return prev;
      });
    }, 10);

    // Simulate counter animation for customer satisfaction
    const intervalCustomerSatisfaction = setInterval(() => {
      setCustomerSatisfaction((prev) => {
        if (prev < 99) return prev + 1;
        clearInterval(intervalCustomerSatisfaction); // Stop counter once target is reached
        return prev;
      });
    },10);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(intervalProductsSold);
      clearInterval(intervalNetProfit);
      clearInterval(intervalNewCustomers);
      clearInterval(intervalCustomerSatisfaction);
    };
  }, []);

  return (


    <div className='grid md:grid-cols-6 sm:grid-cols-2 gap-10 w-full m-auto p-5'>
    <div className='top rounded p-2 h-[100px] text-white shadow shadow-gray-400 text-center pt-5'>
      <h1>  Total Products </h1>
      <b className='text-xl'>
    {localStorage.getItem("pro_pr")}
      </b>
    </div>
    <div className='top rounded p-2 h-[100px] text-white shadow shadow-gray-400 text-center pt-5'>
      <h1>Net Profit</h1>
      <b className='text-xl'>$ 8541</b>
    </div>
    <div className='top rounded p-2 h-[100px] text-white shadow shadow-gray-400 text-center pt-5'>
      <h1>New Customers</h1>
      <b className='text-xl'>4565</b>
    </div>
    <div className='top rounded p-2 h-[100px] text-white shadow shadow-gray-400 text-center pt-5'>
      <h1>Customer Satisfaction</h1>
      <b className='text-xl'>99%</b>
    </div>
    <div className='top1 rounded p-2 h-[100px] text-white shadow shadow-gray-400 text-center pt-5 col-span-2'>
      <h1>New Visitor</h1>
      <b className='text-xl'>120.321</b>
      <b>22%</b>
    </div>
          </div>
  );
};

export default Box;
