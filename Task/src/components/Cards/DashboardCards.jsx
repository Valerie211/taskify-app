import React from 'react';
import LineChart from '../Charts/LineChart';
import { RiCalendarCheckLine } from "react-icons/ri"

const DashboardCards = ({title,num}) => {
    
  return (
    <div className='w-1/3 flex flex-col gap-10 h-28 py-4 px-2 bg-white rounded-sm shadow-sm'>
        <div className='flex gap-4 items-center  justify-center'>
            
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h2 className="text-xl font-bold">{title}</h2>
                <h2 className="font-bold text-2xl text-center">{num}</h2>
            </div>
          
        </div>
   
    </div>
  );
}

export default DashboardCards;
