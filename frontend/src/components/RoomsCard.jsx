import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import axios from "axios";
import Button from "../shared/Button";
import Button2 from "../shared/Button2";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { FaWifi, FaCoffee, FaUtensils, FaGamepad, FaRegSmileBeam } from "react-icons/fa"; // Importing the required icons

const RoomsCard = () => {
  const [rooms, setRooms] = useState([]); // State to hold room data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [show, setShow] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClose = () => {
    setShow(false);
    setCurrentRoom(null); // Reset current room when closing
  };

  const handleShow = (room) => {
    setCurrentRoom(room); // Set the selected room
    setShow(true);
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getroom");
        setRooms(response.data); // Assuming response.data contains an array of room objects
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchRooms();
  }, []); // Empty dependency array to run only on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  return (
    <div className="w-10/12 mx-auto h-screen my-auto">
      <div className="flex justify-between items-center p-10">
        <h1 className="font-bold text-4xl mb-4 text-white/80">
          <span className="border-b-4 border-white/80">Room and Suites</span>
        </h1>
        <Button text="SEE ALL ROOMS" onClick={() => navigate('/bookyourstay')} /> {/* Navigate to Book Your Stay page */}
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 pb-10"
      >
        {rooms.slice(0, 3).map((room, index) => (
          <div
            key={index}
            className="relative w-96 h-[420px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#" className="no-underline">
              <div className="relative">
                <img
                  src={room.imageurls[0]}
                  alt={room.roomName || "Room"}
                  className="h-80 w-96 object-cover rounded-t-xl text-[#232323]"
                />
                <div className="absolute top-2 right-2">
                  <Button2 text="View Details" onClick={() => handleShow(room)} />
                </div>
              </div>
              <div className="flex flex-col items-center px-4 py-3 w-full">
                <p className="text-lg font-semibold text-white/80 text-center bg-red-600 py-1 px-8 rounded-2xl -mt-9 absolute">
                  ${room.rentPerDay}
                </p>
                <p className="text-lg font-bold text-black truncate block capitalize text-center mt-2">
                  {room.roomName}
                </p>
              </div>
            </a>

            {/* Additional section for icons at the bottom */}
            <div className="flex justify-around items-center p-2 rounded-b-xl -mt-7">
              <FaWifi className="text-xl text-blue-500" title="Free WiFi" />
              <FaCoffee className="text-xl text-brown-500" title="Coffee" />
              <FaUtensils className="text-xl text-green-500" title="Dining" />
              <FaGamepad className="text-xl text-orange-500" title="Gaming" />
              <FaRegSmileBeam className="text-xl text-yellow-500" title="Relaxation" />
            </div>
          </div>
        ))}
      </section>

      {/* Popup modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{currentRoom ? currentRoom.roomName : ""}</Modal.Title>
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
            <p>{currentRoom ? currentRoom.description : ""}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button2 onClick={handleClose} text="Close" />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RoomsCard;
