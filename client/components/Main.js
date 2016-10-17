import React from 'react';
import { Link } from 'react-router';
import Menu from './Menu';

export default class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>
          <Link to="/">React Experiments</Link>
        </h1>
        <Menu />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
};
