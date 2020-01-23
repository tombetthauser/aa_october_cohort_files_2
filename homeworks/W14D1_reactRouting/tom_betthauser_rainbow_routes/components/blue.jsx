import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './indigo';


class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue"></h2>
        {/* Links here */}
        <NavLink exact to="/blue">just blue</NavLink>
        <NavLink to="/blue/indigo">add indigo</NavLink>
        {/* Routes here */}
        <Route path="/blue/indigo" component={Indigo} />
      </div>
    );
  }
};

export default Blue;
