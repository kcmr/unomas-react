import React from 'react';
import { Link } from 'react-router-dom';

const DatePage = () => (
  <div>
    <div>1Mas - Día</div>
    <Link to="/today">Ayer</Link>
  </div>
);

export default DatePage;
