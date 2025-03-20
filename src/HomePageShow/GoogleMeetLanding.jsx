import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GoogleMeetLanding = () => {
  const [meetingCode, setMeetingCode] = useState('');
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  // Handle meeting code change
  const handleMeetingCodeChange = (e) => {
    setMeetingCode(e.target.value);
  };

  // Handle starting a new meeting
  const handleStartMeeting = async () => {
    try {
      // Make API request to create a new room
      const response = await axios.post('http://localhost:5000/api/rooms/createRoom');
      const newRoomId = response.data.roomId;
      setRoomId(newRoomId); // Set the new room ID
    } catch (error) {
      console.error('Error creating room', error);
    }
  };

  // Handle joining a meeting
  const handleJoinMeeting = () => {
    const roomCode = meetingCode || roomId;
    if (roomCode) {
      navigate(`/videoCalling/${roomCode}`); // Navigate to video call page
    }
  };

  return (
    <div className="container mx-auto bg-gray-100 min-h-screen flex flex-col items-center justify-center text-gray-700">
      {/* Main Section */}
      <div className="flex flex-col items-center justify-center w-full max-w-xl mt-16 px-6 py-12 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet with anyone, anywhere</h2>

        <div className="w-full max-w-md">
          <button
            onClick={handleStartMeeting}
            className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold shadow-md"
          >
            Start a new meeting
          </button>
        </div>

        {roomId && (
          <div className="w-full max-w-md text-center text-sm text-gray-600">
            <p>Your meeting code: {roomId}</p>
            <p>Share this code with others to join.</p>
          </div>
        )}

        <div className="w-full max-w-md">
          <p className="text-center text-sm text-gray-600">Or enter a meeting code</p>
          <input
            type="text"
            className="w-full p-3 border rounded-md text-sm text-gray-700 shadow-md mt-2"
            placeholder="Enter meeting code"
            value={meetingCode}
            onChange={handleMeetingCodeChange}
          />
          
          <button
            onClick={handleJoinMeeting}
            className={`w-full py-3 mt-4 rounded-md text-lg font-semibold shadow-md ${meetingCode || roomId ? 'bg-blue-500 text-white' : 'bg-gray-400 text-white'}`}
            disabled={!meetingCode && !roomId} // Disable if neither code nor room ID is provided
          >
            Join Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleMeetLanding;
