/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import useQuotes from "../../shared/swr/useQuotes";
import QuoteList from './quote-list/QuoteList';

const AllQuotes = () => {

  const { data, error, loading, updateData } = useQuotes();
  const [currentName, setCurrentName] = useState({});
  
  const refreshHandler = () => {
    updateData();
  };

  return (
    <React.Fragment>
      <div>
        <button className="btn btn-primary mt-2" onClick={ refreshHandler }>Refresh</button>
      </div>
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <QuoteList quotes={ data } />
        )
      }
    </React.Fragment>
  
  );
};

export default AllQuotes;