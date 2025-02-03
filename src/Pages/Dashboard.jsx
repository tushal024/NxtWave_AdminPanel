import React from 'react';
import Data from '../Component/Data';
import UserData from '../Component/UserData';
import { useSelector } from 'react-redux';
import Skeleton from '../Component/Skeleton';
import Box from '../Component/Box';
import BarChart from '../Component/BarChart';
import LineChart from '../Component/LineChart';


function Dashboard() {
  // Ensure correct property name
  // const dataa = useSelector(state => state.productReducer);

  // console.log("Loading Status:", dataa?.isLoding);

  return (
    <div id='d'>
    <div className='grid md:grid-cols-6 sm:grid-cols-2 gap-10 w-full m-auto p-5'>
            <div className='top rounded p-2 h-[100px] text-white shadow shadow-gray-400 text-center pt-5'>
              <h1>Products Sold</h1>
              <b className='text-xl'>4565</b>
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
<div className='w-full h-[400px] mb-[20px] sm:mb-[0px] lg:mb-[0px] grid grid-cols-1 gap-4 md:grid-cols-2  '>
  <div  className='h-[100%]    ' > <BarChart/></div>
  <div  className='h-[100%]    ' ><LineChart/></div>
</div>

    {/* {dataa?.isLoading ? <Skeleton /> : <Data />} */}
    <Data/>
    {/* <Skeleton/> */}
    <UserData />
  </div>
  );
}

export default React.memo(Dashboard);
