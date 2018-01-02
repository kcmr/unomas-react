import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => (
  <div className="login">
    <h1 className="login__title">1 Más</h1>
    <p className="login__subtitle">LLeva la cuenta de los cigarros que fumas cada día, las horas en las que fumas y la intensidad del “mono”.</p>

    <div className="login__buttons">
      <Link to="/today" className="btn btn--cold">Accede con <b>Facebook</b></Link>
      <Link to="/today" className="btn btn--hot">Accede con <b>Google</b></Link>
    </div>
  </div>
);

export default LoginPage;
