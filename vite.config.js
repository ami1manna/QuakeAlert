import React, { useEffect, useRef } from 'react';
import anychart from 'anychart';
import 'anychart/dist/anychart-bundle.min.css';  // Ensure you import the CSS for AnyChart

const GanttChart = ({ earthquakeInfo, setRadius }) => {
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
      color: getColorForMagnitude(feature.properties.mag),
    }));
  };

  // Function to get color based on magnitude
  const getColorForMagnitude = (magnitude) => {
    if (magnitude <= 1.0) return '#004080';  // Dark Blue
    if (magnitude <= 2.0) return '#0080ff';  // Dark Cyan
    if (magnitude <= 3.0) return '#00ff00';  // Dark Lime
    if (magnitude <= 4.0) return '#ffcc00';  // Dark Yellow
    if (magnitude <= 5.0) return '#ff8000';  // Dark Orange
    if (magnitude <= 6.0) return '#ff0000';  // Dark Red
    return '#800000';  // Dark Maroon
  };

  useEffect(() => {
    if (chart.current) {
      chart.current.dispose();
    }

    if (chartContainer.current) {
      chart.current = anychart.ganttProject();

      // Customize tooltip to exclude complete%
      chart.current.tooltip().useHtml(true).format((info) => {
        const { name, actualStart, actualEnd } = info;
        return `<b>Name:</b> ${name}<br/><b>Start:</b> ${new Date(actualStart).toLocaleDateString()}<br/><b>End:</b> ${new Date(actualEnd).toLocaleDateString()}`;
      });

      // Set the data
      const tasks = convertToTasks(earthquakeInfo);
      chart.current.data(tasks);

      // Customize color for tasks
      chart.current.getTimeline().getBarDrawer().barColor = (task) => {
        return task.color;
      };

      // Set chart title
      chart.current.title('Earthquake Events');

      // Set the chart container
      chart.current.container(chartContainer.current);

      // Draw the chart
      chart.current.draw();
    }
  }, [earthquakeInfo]);

  return (
    <>
      <RangeSelector min={1} max={150} step={1} onValueChange={setRadius} />
      <div ref={chartContainer} style={{ width: '100%', height: '500px' }}></div>
    </>
  );
};

export default GanttChart;
