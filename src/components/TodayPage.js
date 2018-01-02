import React from 'react';
import { Link } from 'react-router-dom';

const TodayPage = () => (
  <div>
    <div>1Mas - Hoy</div>
    <button>+1</button>
    <Link to="/date">Ayer</Link>
  </div>
);

export default TodayPage;
