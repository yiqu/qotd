/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import classes from './QuoteDetail.module.scss';
import {
  useParams, useHistory, useLocation
} from "react-router-dom";
import useQuery from "../../../shared/query-param-hook/QueryParam";


const QuoteDetail = () => {

  const params = useParams();
  const location = useLocation();
  const queryParams = useQuery();

  console.log(params);
  console.log(location);

  const userId = params.userId;
  const quoteId = params.quoteId;

  // console.log(queryParams.get('a'))
  // console.log(queryParams.get('c'))

  const allParamKeys = queryParams.keys();
  for (let i of allParamKeys) {
  }

  return (
    <div className="d-flex justify-content-center align-items-start flex-column">
      <div className="d-flex justify-content-center align-items-center flex-row w-100">
        Quote Detail
      </div>
      
      <div>
        Quote id: { quoteId }
      </div>
      <div>
        User id: { userId }
      </div>
    </div>
  );
};

export default QuoteDetail;