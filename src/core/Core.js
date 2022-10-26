/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import TopNav from '../shared/top-nav/TopNav';
import { Route, Routes, Navigate, createBrowserRouter, RouterProvider, createRoutesFromElements, Outlet } from 'react-router-dom';
import NotFound from '../404/NotFound';
import AllQuotes from "./quotes/Quotes";
import QuoteDetail from './quotes/quote-detail/QuoteDetail';
import NewQuote from "./new/NewQuote";


const Core = () => {


  return (
    <React.Fragment>

      <TopNav></TopNav>

      <div className="container mb-5">

        <Outlet></Outlet>
        
      </div>

    </React.Fragment>
  );
};


export default Core;