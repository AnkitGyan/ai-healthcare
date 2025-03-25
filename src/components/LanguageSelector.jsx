import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(GlobalContext);

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-white border rounded px-4 py-2"
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="hi">Hindi</option>
    </select>
  );
};

export default LanguageSelector;
