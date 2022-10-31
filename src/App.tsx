import './App.css';
import React from 'react';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './404/NotFound';
import AllQuotes from "./core/quotes/Quotes";
import { loader as QuoteDetailLoader } from './core/quotes/quote-detail/QuoteDetail';
import QuotesLayout from './core/quotes/QuotesLayout';
import loadable from '@loadable/component';

// const oldRouter: Router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={ <Core /> }>

//     <Route index element={ <Navigate replace to="quotes" /> } />

//     <Route path='/quotes/:quoteId/:userId/*' element={ <QuoteDetail /> } />

//     <Route path='/quotes' element={ <AllQuotes /> } />
      
//     <Route path='/new' element={ <NewQuote /> } />

//     <Route path='*' element={ <NotFound /> } />
      
//   </Route>
// ));

// Lazy load components
const CoreLazy = loadable(() => import('./core/Core'));
const QuoteDetailLazy = loadable(() => import('./core/quotes/quote-detail/QuoteDetail'));
const NewQuoteLazy = loadable(() => import('./core/new/NewQuote'));

const routeList = createBrowserRouter([
  {
    path: '/',
    element: <CoreLazy />,
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
            element: <QuoteDetailLazy />,
            loader: QuoteDetailLoader
          }
        ]
      },
      {
        path: 'new',
        element: <NewQuoteLazy />
      }
    ]
  }
]);

function App(): JSX.Element {
  

  return (
    <React.Fragment>

      <RouterProvider router={ routeList } />

    </React.Fragment>
  );
}

export default App;
