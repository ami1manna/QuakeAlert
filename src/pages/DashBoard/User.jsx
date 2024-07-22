import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersTable from './UsersTable'; // Import the UsersTable component

const columns = [
  {
    Header: 'ID',
    accessor: '_id' // The key from your data object (MongoDB uses _id)
  },
  {
    Header: 'Username',
    accessor: 'username'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Location',
    accessor: 'location'
  }
  // Add more columns as needed
];

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getusers'); // Adjust the URL as needed
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('Fetched data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <UsersTable columns={columns} data={data} />
    </div>
  );
};

export default User;
