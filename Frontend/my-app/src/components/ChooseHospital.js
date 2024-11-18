import React, { useState } from 'react';
import './ChooseHospital.css';
import { useNavigate } from 'react-router-dom';


const ChooseHospital = () => {
  // État pour suivre quel hôpital est ouvert
  const [openHospital, setOpenHospital] = useState(null);

  // Liste des hôpitaux et leurs services
  const hospitals = [
    { name: 'Hôpital 1', services: ['Pédiatrie', 'Médecine', 'Chirurgie', 'Urgences'] },
    { name: 'Hôpital 2', services: ['Obstétrique', 'Médecine', 'Chirurgie', 'Urgences'] },
    { name: 'Hôpital 3', services: ['Obstétrique', 'Pédiatrie', 'Chirurgie', 'Urgences'] },
    { name: 'Hôpital 4', services: ['Obstétrique', 'Pédiatrie', 'Médecine', 'Urgences'] },
    // Ajoutez les autres hôpitaux sans services pour l'exemple
    { name: 'Hôpital 5', services: ['Pédiatrie', 'Médecine', 'Chirurgie', 'Urgences'] },
    { name: 'Hôpital 6', services: [] },
    { name: 'Hôpital 7', services: [] },
    { name: 'Hôpital 8', services: [] },
  ];

  // Fonction pour gérer l'ouverture/fermeture
  const navigate = useNavigate();
  const toggleHospital = (index) => {
    setOpenHospital(openHospital === index ? null : index);
  }

  const handleBackClick = () => {
    navigate('/');  // Navigation vers la page StartScreen
  };

  return (

    <div className="container">
      <button class="back-button">
        <img class ="retour" src="/images/retour.png" alt="flèche de retour"  onClick={handleBackClick}/>
      </button>
      <div className="title">
        <img src="/images/croixRouge.png" alt="croix rouge" className="image" />
        Choisissez votre hôpital
      </div>
      <div className="hospital-grid">
        {hospitals.map((hospital, index) => (
          <div key={index} className="hospital-button" onClick={() => toggleHospital(index)}>
            {hospital.name} {openHospital === index ? '▲' : '▼'}
            {openHospital === index && hospital.services.length > 0 && (
              <ul className="services-list">
                {hospital.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseHospital;
