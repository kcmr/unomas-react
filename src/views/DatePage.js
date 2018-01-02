import React from 'react';
import UserGreeting from '../components/UserGreeting';
import Counter from '../components/Counter';
import Pager from '../components/Pager';

export default class DatePage extends React.Component {
  state = {
    total: 0
  };

  handlerAddOne = () => {
    const total = this.state.total + 1;
    this.setState(() => ({ total }));
  };

  render() {
    return (
      <div className="DatePage">
        <div>1 Más - {this.props.match.params.day ? this.props.match.params.day : 'Hoy'}</div>
        <UserGreeting user="John Doe" />
        <Counter total={this.state.total} />
        {this.props.match.params.day === undefined && <button onClick={this.handlerAddOne}>+1</button>}
        <Pager />
      </div>
    );
  }
};

