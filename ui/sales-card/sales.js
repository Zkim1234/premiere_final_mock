import React from 'react';
import './sales.css';

const SalesCard = () => {
  return (
    <div className="sales-card">
      <div className="sales-card-content">
        <div className="logo-section">
          <img 
            src="/dominos-logo.svg" 
            alt="Domino's Pizza Logo" 
            className="dominos-logo"
          />
        </div>
        <div className="offer-section">
          <h2 className="brand-name">Dominos</h2>
          <p className="offer-text">
            Get a FREE pizza when you buy one at regular price!
          </p>
        </div>
      </div>
      <div className="actions-section">
        <button className="bogo-button">BOGO</button>
        <button className="more-options-button">
          <span className="dots">•••</span>
        </button>
      </div>
    </div>
  );
};

export default SalesCard;
