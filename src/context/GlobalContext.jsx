import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English
  const [emergencyAlert, setEmergencyAlert] = useState(null);

  return (
    <GlobalContext.Provider value={{ language, setLanguage, emergencyAlert, setEmergencyAlert }}>
      {children}
    </GlobalContext.Provider>
  );
};
