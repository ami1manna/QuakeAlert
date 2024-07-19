import React from 'react';
import ChartComponent from '../components/ChartComponent';
console.log('before import');
const Chart = () => {
    const xAxisLabels = ['USA', 'Canada', 'Mexico', 'Brazil'];
    const yAxisCounts = [10, 7, 3, 9];
    const maxY = 10;
  
    console.log('xAxisLabels:', xAxisLabels);
    console.log('yAxisCounts:', yAxisCounts);
    console.log('maxY:');
  
    return (
        <div className="w-screen h-screen flex justify-center items-center">
          {console.log('xAxisLabels')}
        <ChartComponent xAxisLabels={xAxisLabels} yAxisCounts={yAxisCounts} maxY={maxY} />
      </div>
    );
  };
 
export default Chart;
