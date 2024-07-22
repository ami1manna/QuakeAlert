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
    const [emergencyContacts, setEmergencyContacts] = useState([]);
    const [reload,setReload] = useState(0);

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
                } catch (err) {
                    console.error('Error fetching user data:', err);
                }
            }
        };

        fetchUserInfo();
    }, [reload]);

    // Fetch emergency contacts
    useEffect(() => {
        const fetchEmergencyContacts = async () => {
            if (userInfo) {
                try {
                    const response = await axios.get(`http://localhost:5000/emergency-contacts/${userInfo._id}`);
                    setEmergencyContacts(response.data);
                } catch (err) {
                    console.error('Error fetching emergency contacts:', err);
                }
            }
        };

        fetchEmergencyContacts();
    }, [userInfo,reload]);

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
                            
                            // Notify emergency contacts
                            await axios.post('http://localhost:5000/emergency-contacts/notify', {
                                userId: userInfo._id,
                                message: 'Urgent: Please be aware of the emergency situation. Safe places have been identified and action is being taken.',
                            });
                            setCurrentState(3); // Update to "Emergency Contacts Notified"

                            // Notify response team
                            await axios.post('http://localhost:5000/details/update-sos', {
                                email: userInfo.email,
                                sos: true
                            });
                            setCurrentState(4); // Update to "Response Team Alerted"
                            
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

        if (userInfo) {
            getLocation();
        }
    }, [userInfo,reload]);
const cancelSos = async () => {
    try {

        setLoading(true);
        await axios.post('http://localhost:5000/details/update-sos', {
            email: userInfo.email,
            sos: false
        });
        setLoading(false);
        setCurrentState(0);
    } catch (err) {
        console.error('Error:', err);
        setLoading(false);
    }
}

    return (
        <div>
            <StateProgressbar states={sosStates} currentState={currentState} />
           
            {isLoading &&   <div  className='flex justify-center items-center w-full'><ThreeDots color="#3498db" height={80} width={80} /> </div>}
            <div className='flex justify-center items-center w-full'>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6 text-center m-2' onClick={cancelSos}>Cancel</button>
            <NavLink to='/sos' onClick={()=>{setReload((prev)=>prev+1)}} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6 text-center m-2'>Request Sos</NavLink>
            </div>
        </div>
    );
};

export default YourComponent;
