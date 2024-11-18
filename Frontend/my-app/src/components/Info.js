import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Info.css';

const Info = () => {
  const navigate = useNavigate();
      
  const handleBackClick = () => {
    navigate('/');  // Navigation vers la page StartScreen
};


    return (
        <div className="info">
            <div className='title'>
                <button>
                    <img class ="retour" src="/images/retour.png" alt="flèche de retour"  onClick={handleBackClick}/>
                </button>
                <img src="/images/lotus.png" alt="lotus" className="image" />
                <h1 className="center-button">Règles du jeu</h1>
                <img src="/images/lotus.png" alt="lotus" className="image" />
            </div>
            <div>
                <ul class="rules">
                    <li>L’objectif du jeu est de prendre en charge un nombre maximal de patient en minimisant leur attente</li>
                    <li>Chaque carte représente un patient arrivant a l’hôpital, avec une date d’entrée, une date de sortie et un type d’hospitalisation</li>
                    <li>Chaque patient doit être placé dans un lit approprié a son type d’hospitalisation, pendant une durée indiquée sur sa carte. Un patient qui termine ce cycle est considéré comme un patient pris en charge</li>
                    <li>Les dates peuvent être modifiées si le patient est soumis a une attente. Chaque attente est représentée par un trombone sur la carte de jeu</li>
                    <li>Chaque lit appartient a une catégorie différente parmi :
                        <ul>
                            <li>Salle d’attente : permet a un patient d’accumuler une unité d’attente AVANT d’être pris en 	charge
                            </li>
                            <li>Hospitalisation de jour</li>
                            <li>Hospitalisation complète</li>
                            <li>UHCD : Permet a un patient en attente de transfert inter-service d’accumuler jusqu’a deux unités d’attente
                            </li>
                        </ul>
                    </li>
                    <li>Un patient n’étant pas placé a la fin de sa période d’attente complète est placé en patient non pris en charge
                    </li>
                    <li>Un patient recçu en service urgence peut, si indiqué, être transféré vers un autre service après une demi-journée en service des urgences</li>
                </ul>

                
            </div>

        </div>
    );
}

export default Info;
