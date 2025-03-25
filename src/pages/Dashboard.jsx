import React from 'react';
import EmergencyContact from '../components/EmergencyContact';
import SymptomChecker from '../components/SymptomChecker';
import Telemedicine from '../components/Telemedicine';
import LanguageSelector from '../components/LanguageSelector';
import HealthWorkerSupport from '../components/HealthWorkerSupport';
import MedicineDelivery from '../components/MedicineDelivery';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <EmergencyContact />
        <SymptomChecker />
        <Telemedicine />
        <LanguageSelector />
        <HealthWorkerSupport />
        <MedicineDelivery />
      </div>
    </div>
  );
};

export default Dashboard;
