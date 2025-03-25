import React, { useState } from "react";
import { FaVideo, FaCalendarAlt, FaPrescription } from "react-icons/fa";

const Telemedicine = () => {
  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    doctor: "",
  });

  const handleInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    // Placeholder for booking logic
    alert(
      `Appointment booked for ${appointment.date} at ${appointment.time} with Dr. ${appointment.doctor}`
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2 text-blue-700">
        <FaVideo className="inline-block mr-2" />
        Telemedicine Services
      </h3>
      {/* Video Consultation */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Video Consultation</h4>
        {/* Placeholder for video consultation component */}
        <p>Click here to start a video consultation with a doctor.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Start Consultation
        </button>
      </div>

      {/* Appointment Booking */}
      <div>
        <h4 className="text-lg font-semibold mb-2">
          <FaCalendarAlt className="inline-block mr-2" />
          Book an Appointment
        </h4>
        <label
          htmlFor="date"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={appointment.date}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        />

        <label
          htmlFor="time"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Time:
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={appointment.time}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        />

        <label
          htmlFor="doctor"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Doctor:
        </label>
        <select
          id="doctor"
          name="doctor"
          value={appointment.doctor}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        >
          <option value="">Select a Doctor</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Jones">Dr. Jones</option>
        </select>

        <button
          onClick={handleBooking}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book Appointment
        </button>
      </div>
      {/* Digital Prescriptions */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold mb-2">
          <FaPrescription className="inline-block mr-2" />
          Digital Prescriptions
        </h4>
        {/* Placeholder for digital prescription component */}
        <p>your digital prescriptions and medicine recommendations.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          View Prescriptions
        </button>
      </div>
    </div>
  );
};

export default Telemedicine;
