import React, { useEffect, useRef } from 'react';
import anychart from 'anychart';

const GanttChart = ({ earthquakeInfo }) => {
  const chartContainer = useRef(null);
  const chart = useRef(null);

  // Function to convert earthquakeInfo to Gantt tasks
  const convertToTasks = (earthquakeInfo) => {
    if (!earthquakeInfo || !earthquakeInfo.features) return [];
    
    return earthquakeInfo.features.map((feature, index) => ({
      id: index,
      name: feature.properties.title,
      actualStart: new Date(feature.properties.time).toISOString(),
      actualEnd: new Date(feature.properties.updated).toISOString(),
      parent: null,
    }));
  };

  useEffect(() => {
    if (chart.current) {
      // Dispose of the previous chart if it exists
      chart.current.dispose();
    }

    if (chartContainer.current) {
      // Create the chart
      chart.current = anychart.ganttProject();

      // Set the data
      const tasks = convertToTasks(earthquakeInfo);
      chart.current.data(tasks);

      // Set chart title
      chart.current.title('Earthquake Events');

      // Set the chart container
      chart.current.container(chartContainer.current);

      // Draw the chart
      chart.current.draw();
    }
  }, [earthquakeInfo]);

  return <div ref={chartContainer} style={{ width: '100%', height: '500px' }}></div>;
};

export default GanttChart;
