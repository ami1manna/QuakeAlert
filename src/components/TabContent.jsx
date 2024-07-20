// components/TabContent.jsx
import React from 'react';
import GanttChart from './GanttChart';
const tasks = [
  {
    id: '1',
    name: 'Task 1',
    actualStart: '2024-07-01',
    actualEnd: '2024-07-10',
    progress: 75
  },
  {
    id: '2',
    name: 'Task 3',
    actualStart: '2024-07-01',
    actualEnd: '2024-07-10',
    progress: 75
  },
  // Add more tasks here
];

const TabContent = ({ activeTab , earthquakeInfo,selectedLatLon}) => {
 
  const renderContent = () => {
    
    switch (activeTab) {
      case 'globe':
        return <GanttChart tasks={tasks} earthquakeInfo={earthquakeInfo} selectedLatLon={selectedLatLon}/>;
      case 'dashboard':
        return <div>Dashboard Content</div>;
      case 'settings':
        return <div>Settings Content</div>;
      case 'contacts':
        return <div>Contacts Content</div>;
      case 'disabled':
        return <div>Disabled Content</div>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return <div className="flex-1 bg-gray-800 p-4">{renderContent()}</div>;
};

export default TabContent;
