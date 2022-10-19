/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import classes from './TopNav.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import useQuery from '../query-param-hook/QueryParam';

const TopNav = () => {

  const location = useLocation();
  const { allParams } = useQuery();
  const sortParamData = allParams.find((param) => {
    return param.key === 'sort';
  });

  const isLinkActive = (match, location) => {
    const supposedPath = match?.url;
    if (location.pathname === supposedPath) {
      return true;
    }
    return false;
  };

  const defaultQuotesTo = {
    pathname: "/quotes"
  };

  const quotesTo = {
    pathname: "/quotes",
    search: sortParamData ? `?${sortParamData.key}=${sortParamData.value}` : null
  };

  const newQuoteTo = {
    pathname: "/new",
    search: sortParamData ? `?${sortParamData.key}=${sortParamData.value}` : null
  };

  return (
    <header className={ classes.header }>
      <div className={ classes.logo }>
        <Link to={ defaultQuotesTo }>
          Great Quotes
        </Link>
      </div>
      <nav className={ classes.nav }>
        <ul>
          <li>
            <NavLink to={ quotesTo } activeClassName={ classes.active } isActive={ isLinkActive }>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to={ newQuoteTo } activeClassName={ classes.active } isActive={ isLinkActive }>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;