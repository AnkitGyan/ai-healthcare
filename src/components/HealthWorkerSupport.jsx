import React from 'react';
import { FaUsers } from 'react-icons/fa';

const HealthWorkerSupport = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2 text-blue-700">
        <FaUsers className="inline-block mr-2" />
        Healthcare Worker Support
      </h3>
      <p className="mb-4">
        Training modules and resources to help community health workers (CHWs)
        provide basic medical assistance.
      </p>
      {/* Placeholder for training modules */}
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Access Training Modules
        </button>
      </div>
    </div>
  );
};

export default HealthWorkerSupport;
