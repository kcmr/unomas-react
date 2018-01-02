import React from 'react';
import { Link } from 'react-router-dom';

export default class Pager extends React.Component {
  state = {
    date: undefined,
    previousDate: '',
    nextDate: ''
  };

  componentDidMount() {
    this.setState(() => ({
      date: this.props.date || this.props.currentDate
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.date && !this.props.date) {
      this.setState(() => ({
        date: this.props.currentDate
      }));
    }

    if (this.props.date && prevState.date !== this.props.date) {
      this.setState(() => ({
        date: this.props.date
      }));
    }

    if (prevState.date !== this.state.date) {
      this.setState(() => ({
        previousDate: this._getISODate(new Date(this.state.date).setDate(new Date(this.state.date).getDate() - 1)),
        nextDate: this._getISODate(new Date(this.state.date).setDate(new Date(this.state.date).getDate() + 1))
      }));
    }
  }

  _getISODate(str) {
    return new Date(str).toISOString().split('T')[0];
  }

  render() {
    return (
      <div className="Pager">
        <Link to={`/date/${this.state.previousDate}`} className="Pager__btn">Anterior</Link>
        {
          (this.state.nextDate === this.props.currentDate)
          ? <Link to="/today" className="Pager__btn">Hoy</Link>
          : (this.state.date !== this.props.currentDate) && <Link to={`/date/${this.state.nextDate}`} className="Pager__btn">Siguiente</Link>
        }
      </div>
    );
  }
};
