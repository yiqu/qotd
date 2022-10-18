/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import classes from './QuoteDetail.module.scss';
import {
  useParams, useHistory, useLocation
} from "react-router-dom";
import useQuery from "../../../shared/query-param-hook/QueryParam";
import useQuoteDetail from '../../../shared/swr/useQuote';


const QuoteDetail = () => {
  const params = useParams();
  const quoteId = params.quoteId;

  const { quoteDetail, isLoading, update } = useQuoteDetail(quoteId);

  return (
    <React.Fragment>
      { isLoading ? (<div>Loading...</div>) : (
        <div className="d-flex justify-content-center align-items-start flex-column">
          <div className="d-flex justify-content-center align-items-center flex-row w-100">
            Quote Detail
          </div>
      
          <div>
            Quote id: { quoteId }
          </div>

          <div className='w-100'>
            <figure className={ classes.quote }>
              <blockquote>
                <p>{quoteDetail.quote}</p>
              </blockquote>
              <figcaption>{quoteDetail.author}</figcaption>
              <figcaption className='fs-16'>{new Date(quoteDetail.date).toString()}</figcaption>
            </figure>
          </div>
        </div>
      ) }

      

    </React.Fragment>
    
  );
};

export default QuoteDetail;