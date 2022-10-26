/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import TopNav from '../shared/top-nav/TopNav';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../404/NotFound';
import AllQuotes from "./quotes/Quotes";
import QuoteDetail from './quotes/quote-detail/QuoteDetail';
import NewQuote from "./new/NewQuote";


const Core = () => {


  return (
    <React.Fragment>

      <TopNav></TopNav>

      <div className="container mb-5">
        <Routes>
          <Route path="/" exact element={ <Navigate replace to="quotes" /> } />

          <Route path='/quotes/:quoteId/:userId/*' element={ <QuoteDetail /> } />

          <Route path='/quotes' element={ <AllQuotes /> } />
            
          <Route path='/new' element={ <NewQuote /> } />

          <Route path='*' element={ <NotFound /> } />
            
        </Routes>

      </div>
      

    </React.Fragment>
  );
};


export default Core;