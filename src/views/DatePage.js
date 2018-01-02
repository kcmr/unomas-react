import React from 'react';
import UserGreeting from '../components/UserGreeting';
import Counter from '../components/Counter';
import Pager from '../components/Pager';

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
