import React, { useEffect, useRef } from 'react';
import anychart from 'anychart';
import RangeSelector from './RangeSelector'; // Assuming RangeSelector is defined elsewhere

const GanttChart = ({ earthquakeInfo, setRadius, setSelectedLatLon }) => {
  const chartContainer = useRef(null);
  const chart = useRef(null);

  // Define color scheme based on magnitude
  const getColorForMagnitude = (magnitude) => {
    if (magnitude <= 1.0) return 'blue';
    if (magnitude <= 2.0) return 'cyan';
    if (magnitude <= 3.0) return 'lime';
    if (magnitude <= 4.0) return 'yellow';
    if (magnitude <= 5.0) return 'orange';
    if (magnitude <= 6.0) return 'red';
    return 'darkred';
  };

  // Function to convert earthquakeInfo to Gantt tasks
  const convertToTasks = (earthquakeInfo) => {
    if (!earthquakeInfo || !earthquakeInfo.features) return [];

    return earthquakeInfo.features.map((feature, index) => ({
      id: index,
      name: feature.properties.title,
      actualStart: new Date(feature.properties.time).toISOString(),
      actualEnd: new Date(feature.properties.updated).toISOString(),
      parent: null,
      magnitude: feature.properties.mag,
      fill: getColorForMagnitude(feature.properties.mag), // Set color here
      lat: feature.geometry.coordinates[1],  // Latitude
      lon: feature.geometry.coordinates[0],  // Longitude
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

      // Set the data with colors assigned in convertToTasks
      const tasks = convertToTasks(earthquakeInfo);
      chart.current.data(tasks);

      // Customize tooltip to include magnitude
      chart.current.tooltip().useHtml(true).format((info) => {
        const { name, actualStart, actualEnd, magnitude } = info;
        return `<b>Name:</b> ${name}<br/><b>Start:</b> ${new Date(actualStart).toLocaleDateString()}<br/><b>End:</b> ${new Date(actualEnd).toLocaleDateString()}<br/><b>Magnitude:</b> ${magnitude}`;
      });

      // Set chart title
      chart.current.title('Earthquake Events');

      // Set the chart container
      chart.current.container(chartContainer.current);

      // Add event listener for click events
      chart.current.listen('pointClick', (e) => {
        const task = e.point.getData();
        if (task) {
          setSelectedLatLon({ lat: task.lat, lon: task.lon });
        }
      });

      // Draw the chart
      chart.current.draw();
    }
  }, [earthquakeInfo]);

  return (
    <>
      <RangeSelector min={10} max={150} step={1} onValueChange={setRadius} />
      <div ref={chartContainer} style={{ width: '100%', height: '500px' }}></div>
    </>
  );
};

export default GanttChart;
