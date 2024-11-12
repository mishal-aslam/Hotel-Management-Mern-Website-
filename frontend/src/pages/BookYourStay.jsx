import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button1 from "../shared/Button";
import Button2 from "../shared/Button2";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

const BookYourStay = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setCurrentRoom(null);
  };
  
  const handleShow = (room) => {
    setCurrentRoom(room);
    setShow(true);
  };

  const handleBookNow = (room) => {
    navigate("/booking", { state: { room } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getroom");
        setRooms(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredRooms = rooms.filter((room) => {
    const matchesName = room.roomName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAvailability =
      availabilityFilter === "All" ||
      (availabilityFilter === "Available" && room.availablity === "Available") ||
      (availabilityFilter === "Not Available" && room.availablity !== "Available");

    return matchesName && matchesAvailability;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-[#232323] min-h-screen text-white">
      <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-transparent w-11/12">
        <h1 className="text-4xl font-bold mb-8 text-center mt-10">Book Your Stay</h1>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {/* Search by Room Name */}
          <input
            type="text"
            placeholder="Search by Room Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 w-full sm:w-1/3 bg-[#333333] rounded-lg text-white/80 placeholder-gray-50 border border-transparent focus:outline-none focus:border-none text-start"
/>

          {/* Availability Dropdown */}
          <select
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            className="p-3 w-full sm:w-1/3 bg-[#333333] rounded-lg text-white text-start"
          >
            <option value="All">All</option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>

        {/* Room Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {filteredRooms.map((room) => (
            <div
              key={room.roomName}
              className="bg-[#333333] mt-12 shadow-lg rounded-lg overflow-hidden w-full sm:w-[500px] md:w-[600px] mx-auto"
            >
              <div className="relative mx-3 mt-3">
                {room.imageurls.length > 0 ? (
                  <img
                    src={room.imageurls[0]}
                    alt={room.roomName}
                    className="w-full sm:w-full md:w-[400px] lg:w-[600px] bg-white/80 h-72 object-cover rounded-2xl text-center"
                  />
                ) : (
                  <div className="w-full h-80 bg-gray-700 flex items-center justify-center rounded-2xl">
                    <span className="text-gray-400">No Image Available</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start">
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-2 text-white">
                      {room.roomName}
                    </h2>
                    <p className="text-lg mb-1 text-gray-300">
                      <span className="font-semibold text-white">Type:</span>{" "}
                      {room.roomType}
                    </p>
                    <p className="text-lg mb-1 text-gray-300">
                      <span className="font-semibold text-white">
                        Availability:
                      </span>{" "}
                      {room.availablity}
                    </p>
                    <p className="text-lg mb-1 text-gray-300">
                      <span className="font-semibold text-white">
                        Rent per day:
                      </span>{" "}
                      ${room.rentPerDay}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-4 sm:mt-0 md:-ml-48">
                    <Button1 text="Book Now" onClick={() => handleBookNow(room)} />
                    <Button2 text="View Details" onClick={() => handleShow(room)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Popup modal */}
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{currentRoom ? currentRoom.roomName : ''}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentRoom && (
              <Carousel>
                {currentRoom.imageurls.map((url, index) => (
                  <Carousel.Item key={index}>
                    <img 
                      className="h-[400px] w-[800px] object-cover"
                      src={url}
                      alt={`Room image ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
            <div className="font-semibold mt-2 text-base">
              <p>{currentRoom ? currentRoom.description : ''}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button2 onClick={handleClose} text="Close" />
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default BookYourStay;
