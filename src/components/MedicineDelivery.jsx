import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";

const MedicineDelivery = () => {
  const [medicine, setMedicine] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    // Placeholder for medicine ordering logic
    alert(`Medicine "${medicine}" ordered to address "${address}"`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2 text-blue-700">
        <FaTruck className="inline-block mr-2" />
        Medicine Delivery
      </h3>

      {/* Medicine Ordering */}
      <div>
        <label
          htmlFor="medicine"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Medicine Name:
        </label>
        <input
          type="text"
          id="medicine"
          name="medicine"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        />

        <label
          htmlFor="address"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Delivery Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        />

        <button
          onClick={handleOrder}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Order Medicine
        </button>
      </div>
    </div>
  );
};

export default MedicineDelivery;
