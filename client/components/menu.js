import React from 'react';
import { Link } from 'react-router';

export default class Comments extends React.Component {

  render() {
    return (
      <nav className="menu">
        <ul>
          <li className="menu__list">
            <Link to="/chartsGrid">Charts</Link>
          </li>
          <li className="menu__list">
            <Link to="/">Music</Link>
          </li>
        </ul>
      </nav>
    )
  }
};
