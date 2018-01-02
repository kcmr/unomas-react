import React from 'react';
import { Link } from 'react-router-dom';

const Pager = (props) => (
  <div className="Pager">
    <Link to="/date" className="Pager__btn">Anterior</Link>
    <Link to="/date" className="Pager__btn">Siguiente</Link>
  </div>
);

export default Pager;
