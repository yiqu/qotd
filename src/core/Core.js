/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import TopNav from '../shared/top-nav/TopNav';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../404/NotFound';
import AllQuotes from "./quotes/Quotes";
import QuoteDetail from './quotes/quote-detail/QuoteDetail';
import NewQuote from "./new/NewQuote";


const Core = () => {


  return (
    <React.Fragment>

      <TopNav></TopNav>

      <div className="container mb-5">
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>

          <Route path='/quotes/:quoteId/:userId'>
            <QuoteDetail></QuoteDetail>
          </Route>

          <Route path='/quotes'>
            <AllQuotes></AllQuotes>
          </Route>

          <Route path='/new'>
            <NewQuote></NewQuote>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

      </div>
      

    </React.Fragment>
  );
};


export default Core;