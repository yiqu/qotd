/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import classes from './TopNav.module.scss';
import { NavLink } from 'react-router-dom';


const TopNav = () => {

  const isLinkActive = (match, location) => {
    const supposedPath = match?.url;
    if (location.pathname === supposedPath) {
      return true;
    }
    return false;
  };

  return (
    <header className={ classes.header }>
      <div className={ classes.logo }>Great Quotes</div>
      <nav className={ classes.nav }>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={ classes.active } isActive={ isLinkActive }>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName={ classes.active } isActive={ isLinkActive }>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;