import React from 'react';
import { Link } from 'react-router-dom';

const Pager = () => (
  <div className="Pager">
    <Link to="/date/previous" className="Pager__btn">Anterior</Link>
    <Link to="/date" className="Pager__btn">Siguiente</Link>
  </div>
);

export default Pager;
