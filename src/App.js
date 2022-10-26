/* eslint-disable no-unused-vars */
import './App.css';
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import Core from './core/Core';
import { Route, Routes, Navigate, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import NotFound from './404/NotFound';
import AllQuotes from "./core/quotes/Quotes";
import QuoteDetail, { loader as QuoteDetailLoader } from './core/quotes/quote-detail/QuoteDetail';
import NewQuote from "./core/new/NewQuote";
import QuotesLayout from './core/quotes/QuotesLayout';


const oldRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Core /> }>

    <Route index element={ <Navigate replace to="quotes" /> } />

    <Route path='/quotes/:quoteId/:userId/*' element={ <QuoteDetail /> } />

    <Route path='/quotes' element={ <AllQuotes /> } />
      
    <Route path='/new' element={ <NewQuote /> } />

    <Route path='*' element={ <NotFound /> } />
      
  </Route>
));

const routeList = createBrowserRouter([
  {
    path: '/',
    element: <Core />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate replace to="quotes" /> },
      {
        path: 'quotes',
        element: <QuotesLayout />,
        children: [
          {
            index: true,
            element: <AllQuotes />
          },
          {
            path: ':quoteId/:userId/*',
            element: <QuoteDetail />,
            loader: QuoteDetailLoader
          }
        ]
      },
      {
        path: 'new',
        element: <NewQuote />
      }
    ]
  }
]);

function App() {
  return (
    <React.Fragment>

      <RouterProvider router={ routeList }>
      </RouterProvider>

    </React.Fragment>
  );
}

export default App;
