import React from 'react';
import UserGreeting from './UserGreeting';
import Counter from './Counter';
import Pager from './Pager';

const DatePage = () => (
  <div className="DatePage">
    <div>1Mas - Día</div>
    <UserGreeting user="Kus" />
    <Counter total="10" />
    <button>+1</button>
    <Pager />
  </div>
);

export default DatePage;
