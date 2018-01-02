import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <div>404 not found</div>
    <Link to="/">Home</Link>
  </div>
);

export default NotFoundPage;
