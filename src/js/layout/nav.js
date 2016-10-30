import React from 'react';
import NavLink from '../shared/NavLink';

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink></li>
        <li><NavLink to='/lists'>My Lists</NavLink></li>
      </ul>
    </nav>
  );
}
