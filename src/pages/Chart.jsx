import React from 'react';
import ChartComponent from '../components/ChartComponent';

const Chart = () => {
    const xAxisLabels = ['USA', 'Canada', 'Mexico', 'Brazil'];
    const yAxisCounts = [10, 7, 3, 9];
    const maxY = 10;
  
    console.log('xAxisLabels:', xAxisLabels);
    console.log('yAxisCounts:', yAxisCounts);
    console.log('maxY:');
  
    return (
        <>
        
        <div className='w-screen h-screen flex justify-between items-center'>
        <div className="w-[60%]">
          {console.log('xAxisLabels')}
        <ChartComponent xAxisLabels={xAxisLabels} yAxisCounts={yAxisCounts} maxY={maxY} />
      </div>
      <div className='flex-1 h-screen bg-slate-500'>

        </div>

      </div>
        </>
    );
  };
 
export default Chart;
