import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button2 from "../shared/Button2";

const BookingPage = () => {
  const location = useLocation();
  const { room } = location.state || {};
  const [selectedImage, setSelectedImage] = useState(room?.imageurls[0]);
  const [numberOfDays, setNumberOfDays] = useState(1); // Default to 1 day
  const [totalRent, setTotalRent] = useState(room ? room.rentPerDay : 0);
  const [startDate, setStartDate] = useState(""); // Booking start date
  const [endDate, setEndDate] = useState(""); // Calculated end date

  if (!room) return <div>No room data available</div>;

  // Update total rent and end date when number of days changes
  const handleDaysChange = (e) => {
    const days = e.target.value;
    setNumberOfDays(days);
    setTotalRent(days * room.rentPerDay);
    if (startDate) {
      calculateEndDate(startDate, days);
    }
  };

  // Update end date based on the selected start date and number of days
  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
    calculateEndDate(date, numberOfDays);
  };

  // Calculate the end date based on start date and number of days
  const calculateEndDate = (start, days) => {
    const startDate = new Date(start);
    startDate.setDate(startDate.getDate() + parseInt(days));
    setEndDate(startDate.toISOString().split("T")[0]);
  };

  return (
    <div className="bg-[#232323] min-h-screen text-white">
      <div className="container mx-auto p-6 pt-16">
      <h1 className="text-4xl font-bold mb-6">Booking for {room.roomName}</h1>

        <div className="flex flex-wrap -mx-4">
            
          {/* Image Section */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={selectedImage}
              alt={room.roomName}
              className="w-full h-96 object-cover rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-2 justify-center overflow-x-auto">
              {room.imageurls.length > 0 ? (
                room.imageurls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 sm:w-32 h-20 object-cover rounded-md cursor-pointer transition duration-300 ${
                      selectedImage === url ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => setSelectedImage(url)}
                  />
                ))
              ) : (
                <div>No images available</div>
              )}
            </div>
          </div>

          {/* Room Details Section */}
          <div className="w-full md:w-1/2 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {/* left side  */}
          <div>

            <h2 className="text-xl font-bold mt-4">Booking Details:</h2>
            <p className="text-white/70 mb-4 font-semibold">{room.description}</p>
            <p className="text-white/70 mb-2">
              <span className="font-bold">Room Type:</span> {room.roomType}
            </p>
            <p className="text-white/70 mb-2">
              <span className="font-bold">Availability:</span> {room.availablity}
            </p>
            <p className="text-white/70 mb-2">
              <span className="font-bold">Current Status:</span> {room.roomStatus}
            </p>
            <p className="text-white/70 mb-2">
              <span className="font-bold">Rent per day:</span> ${room.rentPerDay}
            </p>
          </div>

            {/* rigth side  */}
            <div>

            {/* Start Date Input */}
            <div className="mt-4">
              <label htmlFor="startDate" className="block font-bold mb-2">Start Date:</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                className="p-2 bg-[#333333] rounded text-white/80 text-center"
              />
            </div>

            {/* Number of Days Input */}
            <div className="mt-4">
              <label htmlFor="days" className="block font-bold mb-2">Number of Days:</label>
              <input
                type="number"
                id="days"
                min="1"
                value={numberOfDays}
                onChange={handleDaysChange}
                className="p-2 w-20 bg-[#333333] rounded text-white/80 text-center"
              />
            </div>

            {/* Display End Date */}
            {endDate && (
              <div className="mt-4">
                <p className="text-white/70">
                  <span className="font-bold">End Date:</span> {endDate}
                </p>
              </div>
            )}

            {/* Total Rent Calculation */}
            <div className="mt-4">
              <p className="text-white/70">
                <span className="font-bold">Total Rent:</span> ${totalRent}
              </p>
            </div>

            {/* Buttons for booking */}
            <div className="flex space-x-4 mt-6">
              <Button2 text="Pay Now" />
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
