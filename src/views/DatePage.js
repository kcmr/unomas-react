import React from 'react';
import UserGreeting from '../components/UserGreeting';
import Counter from '../components/Counter';
import Pager from '../components/Pager';

export default class DatePage extends React.Component {
  state = {
    total: 0
  };

  today = new Date(new Date() + ' UTC').toISOString().split('T')[0];

  componentDidMount() {
    try {
      const total = Number(localStorage.getItem('total'));
      if (total) {
        this.setState(() => ({ total }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.total !== this.state.total) {
      localStorage.setItem('total', this.state.total);
    }
  }

  handlerAddOne = () => {
    const total = this.state.total + 1;
    this.setState(() => ({ total }));
  };

  render() {
    return (
      <div className="DatePage">
        <div>1 Más - {this.props.match.params.day ? this.props.match.params.day : 'Hoy'}</div>
        <UserGreeting user="John Doe" />
        <Counter count={this.state.total} />
        {!this.props.match.params.day && <button onClick={this.handlerAddOne}>+1</button>}
        <Pager date={this.props.match.params.day} currentDate={this.today} />
      </div>
    );
  }
};

