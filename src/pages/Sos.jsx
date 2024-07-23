import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StateProgressbar from '../components/StateProgressbar';
import { ThreeDots } from 'react-loader-spinner'; // Named import
import { NavLink } from 'react-router-dom';

const YourComponent = () => {
    const [isLoading, setLoading] = useState(false);
    const [safePlaces, setSafePlaces] = useState([]);
    const [currentState, setCurrentState] = useState(0);
    const [userInfo, setUserInfo] = useState(null);
    const [responseTeam, setResponseTeam] = useState([]); // State for response team
    const [sosStatus, setSosStatus] = useState(null); // To track SOS status explicitly

    const sosStates = [
        'Location Acquired',
        'Location Updated',
        'Safe Places Fetched',
        'Emergency Contacts Notified',
        'Response Team Alerted'
    ];

    // Fetch user info
    useEffect(() => {
        const fetchUserInfo = async () => {
            const storedEmail = localStorage.getItem('userEmail');
            if (storedEmail) {
                try {
                    const response = await axios.get(`http://localhost:5000/details/${storedEmail}`);
                    setUserInfo(response.data.user);
                    setSosStatus(response.data.user.sosStatus); // Set SOS status from user data
                } catch (err) {
                    console.error('Error fetching user data:', err);
                }
            }
        };

        fetchUserInfo();
    }, []); // Fetch user info only once on component mount

    // Fetch response team information when userInfo changes
    useEffect(() => {
        const fetchResponseTeam = async () => {
            if (userInfo) {
                try {
                    const response = await axios.get('http://localhost:5000/response-team');
                    setResponseTeam(response.data);
                } catch (err) {
                    console.error('Error fetching response team:', err);
                }
            }
        };

        fetchResponseTeam();
    }, [userInfo]);

    // Get location and fetch safe places
    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        setCurrentState(0); // Update to "Location Acquired"
                        try {
                            setLoading(true);
                            await axios.post('http://localhost:5000/location/update-location', {
                                email: userInfo.email,
                                lat: latitude,
                                long: longitude,
                            });
                            console.log('Location updated successfully');
                            setCurrentState(1); // Update to "Location Updated"

                            const safePlacesResponse = await axios.get(`http://localhost:5000/safeplaces?lat=${latitude}&lon=${longitude}`);
                            setSafePlaces(safePlacesResponse.data);
                            setCurrentState(2); // Update to "Safe Places Fetched"
                            
                            // Notify response team
                            await axios.post('http://localhost:5000/response-team/notify', {
                                userId: userInfo._id,
                                message: 'Urgent: Please be aware of the emergency situation. Safe places have been identified and action is being taken.',
                            });
                            setCurrentState(3); // Update to "Emergency Contacts Notified"

                            // Update SOS status
                            await axios.post('http://localhost:5000/details/update-sos', {
                                email: userInfo.email,
                                sos: true
                            });

                            // Update SOS status explicitly
                            const updatedUserResponse = await axios.get(`http://localhost:5000/details/${userInfo.email}`);
                            const updatedUser = updatedUserResponse.data.user;

                            if (updatedUser.sosStatus) {
                                setSosStatus(true);
                                setCurrentState(4); // Update to "Response Team Alerted"
                            }
                            
                        } catch (err) {
                            console.error('Error:', err);
                        } finally {
                            setLoading(false);
                        }
                    },
                    (err) => {
                        console.error('Error getting geolocation:', err);
                        setLoading(false);
                    }
                );
            }
        };

        if (userInfo && userInfo.sos) {
            getLocation();
        }
    }, [userInfo]);

    // Cancel SOS
    const cancelSos = async () => {
        try {
            setLoading(true);
            await axios.post('http://localhost:5000/details/update-sos', {
                email: userInfo.email,
                sos: false
            });
            setSosStatus(false); // Update SOS status
            setCurrentState(0); // Reset state
        } catch (err) {
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <StateProgressbar states={sosStates} currentState={currentState} />
           
            {isLoading && <div className='flex justify-center items-center w-full'><ThreeDots color="#3498db" height={80} width={80} /> </div>}
            <div className='flex justify-center items-center w-full'>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6 text-center m-2' onClick={cancelSos}>Cancel</button>
                <NavLink to='/sos' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6 text-center m-2'>Request Sos</NavLink>
            </div>

            {/* Display Response Team */}
            <div className='mt-6'>
                <h2 className='text-xl font-semibold mb-4'>Response Team</h2>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Role</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Phone</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Location</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                        {responseTeam.map(member => (
                            <tr key={member._id}>
                                <td className='px-6 py-4 whitespace-nowrap'>{member.name}</td>
                                <td className='px-6 py-4 whitespace-nowrap'>{member.role}</td>
                                <td className='px-6 py-4 whitespace-nowrap'>{member.phone}</td>
                                <td className='px-6 py-4 whitespace-nowrap'>{member.email}</td>
                                <td className='px-6 py-4 whitespace-nowrap'>{member.location}</td>
                                <td className='px-6 py-4 whitespace-nowrap'>{member.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default YourComponent;
