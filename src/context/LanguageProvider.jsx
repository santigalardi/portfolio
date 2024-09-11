import PropTypes from 'prop-types';
import { useState } from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Define los tipos para las propiedades del componente
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired, // Asegura que 'children' sea un nodo React y es requerido
};

export default LanguageProvider;
