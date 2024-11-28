import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Change language dynamically
  };

  return (
    <div className="container mt-5 border-top">
      <h1>{t('welcome_message')}</h1>
      <p>{t('description')}</p>
      <div>
        <button className="btn btn-primary me-2" onClick={() => changeLanguage('en')}>
          English
        </button>
        <button className="btn btn-secondary me-2" onClick={() => changeLanguage('es')}>
          Español
        </button>
        <button className="btn btn-success" onClick={() => changeLanguage('fr')}>
          Français
        </button>
      </div>
    </div>
  );
};

export default App;
