// components/TabContent.jsx
import React from 'react';

const TabContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <div>Profile Content</div>;
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
