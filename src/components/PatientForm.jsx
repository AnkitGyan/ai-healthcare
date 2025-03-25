import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contactDetails: '',
    chronicConditions: '',
    pastSurgeries: '',
    allergies: '',
    medications: '',
    symptoms: '',
    symptomSeverity: '',
    symptomDuration: '',
    stressLevel: '',
    anxietyLevel: '',
    depressionIndicators: '',
    vaccinations: '',
    accessibilityNeeds: '',
    emergencyName: '',
    emergencyRelationship: '',
    emergencyContact: '',
    insuranceProvider: '',
    policyDetails: '',
    preferredLanguage: 'en',
    researchParticipation: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Patient Information Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Information */}
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="contactDetails" className="block text-gray-700 text-sm font-bold mb-2">Contact Details:</label>
          <input type="text" id="contactDetails" name="contactDetails" value={formData.contactDetails} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {/* Medical History */}
        <div>
          <label htmlFor="chronicConditions" className="block text-gray-700 text-sm font-bold mb-2">Chronic Conditions:</label>
          <input type="text" id="chronicConditions" name="chronicConditions" value={formData.chronicConditions} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="pastSurgeries" className="block text-gray-700 text-sm font-bold mb-2">Past Surgeries:</label>
          <input type="text" id="pastSurgeries" name="pastSurgeries" value={formData.pastSurgeries} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="allergies" className="block text-gray-700 text-sm font-bold mb-2">Allergies:</label>
          <input type="text" id="allergies" name="allergies" value={formData.allergies} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="medications" className="block text-gray-700 text-sm font-bold mb-2">Current Medications:</label>
          <input type="text" id="medications" name="medications" value={formData.medications} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {/* Current Symptoms */}
        <div>
          <label htmlFor="symptoms" className="block text-gray-700 text-sm font-bold mb-2">Current Symptoms (AI-Powered Assessment):</label>
          <textarea id="symptoms" name="symptoms" value={formData.symptoms} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          {/* Add AI-powered symptom assessment integration here */}
          <p className="text-sm text-gray-500 mt-1">Describe your symptoms and let our AI provide an initial assessment.</p>
        </div>
        <div>
          <label htmlFor="symptomSeverity" className="block text-gray-700 text-sm font-bold mb-2">Symptom Severity:</label>
          <select id="symptomSeverity" name="symptomSeverity" value={formData.symptomSeverity} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select Severity</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
        </div>
        <div>
          <label htmlFor="symptomDuration" className="block text-gray-700 text-sm font-bold mb-2">Symptom Duration:</label>
          <input type="text" id="symptomDuration" name="symptomDuration" value={formData.symptomDuration} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {/* Mental Health Screening */}
        <div>
          <label htmlFor="stressLevel" className="block text-gray-700 text-sm font-bold mb-2">Stress Level:</label>
          <select id="stressLevel" name="stressLevel" value={formData.stressLevel} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select Stress Level</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="anxietyLevel" className="block text-gray-700 text-sm font-bold mb-2">Anxiety Level:</label>
          <select id="anxietyLevel" name="anxietyLevel" value={formData.anxietyLevel} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select Anxiety Level</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="depressionIndicators" className="block text-gray-700 text-sm font-bold mb-2">Depression Indicators:</label>
          <textarea id="depressionIndicators" name="depressionIndicators" value={formData.depressionIndicators} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {/* Vaccination History */}
        <div>
          <label htmlFor="vaccinations" className="block text-gray-700 text-sm font-bold mb-2">Vaccination History:</label>
          <input type="text" id="vaccinations" name="vaccinations" value={formData.vaccinations} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {/* Accessibility Needs */}
        <div>
          <label htmlFor="accessibilityNeeds" className="block text-gray-700 text-sm font-bold mb-2">Accessibility Needs:</label>
          <textarea id="accessibilityNeeds" name="accessibilityNeeds" value={formData.accessibilityNeeds} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {/* Emergency Contacts */}
        <div>
          <label htmlFor="emergencyName" className="block text-gray-700 text-sm font-bold mb-2">Emergency Contact Name:</label>
          <input type="text" id="emergencyName" name="emergencyName" value={formData.emergencyName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="emergencyRelationship" className="block text-gray-700 text-sm font-bold mb-2">Emergency Contact Relationship:</label>
          <input type="text" id="emergencyRelationship" name="emergencyRelationship" value={formData.emergencyRelationship} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="emergencyContact" className="block text-gray-700 text-sm font-bold mb-2">Emergency Contact Number:</label>
          <input type="text" id="emergencyContact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {/* Health Insurance (Optional) */}
        <div>
          <label htmlFor="insuranceProvider" className="block text-gray-700 text-sm font-bold mb-2">Health Insurance Provider (Optional):</label>
          <input type="text" id="insuranceProvider" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="policyDetails" className="block text-gray-700 text-sm font-bold mb-2">Policy Details (Optional):</label>
          <input type="text" id="policyDetails" name="policyDetails" value={formData.policyDetails} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {/* Preferred Language */}
        <div>
          <label htmlFor="preferredLanguage" className="block text-gray-700 text-sm font-bold mb-2">Preferred Language:</label>
          <select id="preferredLanguage" name="preferredLanguage" value={formData.preferredLanguage} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        {/* Research Participation (Optional) */}
        <div>
          <label htmlFor="researchParticipation" className="flex items-center">
            <input type="checkbox" id="researchParticipation" name="researchParticipation" checked={formData.researchParticipation} onChange={handleChange} className="mr-2 leading-tight" />
            <span className="text-gray-700 text-sm">Willing to participate in clinical research (optional)</span>
          </label>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
