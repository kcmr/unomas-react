import React from 'react';

const UserGreeting = (props) => (
  <div className="UserGreeting">
    <div>Hola {props.user} - Hoy llevas</div>
  </div>
);

export default UserGreeting;
