/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import useQuotes from "../../shared/swr/useQuotes";
import QuoteList from './quote-list/QuoteList';
import SortActions from "./SortActions";
import styles from './Quotes.module.scss';
import { useParams, useLocation, useNavigate, Outlet } from "react-router-dom";
import useQuery from "../../shared/query-param-hook/QueryParam";


const SortButtons = [
  {
    display: 'ascending',
    value: 'asc'
  },
  {
    display: 'descending',
    value: 'desc'
  }
];

const AllQuotes = () => {

  const { data, error, loading, updateData, sortFn } = useQuotes();
  const [ sortDirection, setSortDirection ] = useState(SortButtons[0]);
  const [ quoteDisplay, setQuoteDisplay ] = useState([]);
  const navigate = useNavigate();

  const { urlSearchParams: queryParams, allParams } = useQuery();

  useEffect(() => {
    setQuoteDisplay(data);
  }, [data]);

  useEffect(() => {
    const dir = queryParams.get('sort') ?? 'asc';
    const i = SortButtons.findIndex((btn) => {
      return btn.value === dir;
    });
    setSortDirection(SortButtons[i]);
  }, [queryParams]);

  const refreshHandler = () => {
    updateData();
  };

  const onSortChangeHandler = (sortDir) => {
    updateUrlQParams(sortDir);
  };

  const updateUrlQParams = (sortDir) => {
    navigate({
      pathname: "/quotes",
      search: `?sort=${sortDir.value}`
    });
  };

  return (
    <React.Fragment>
      
      <div className="d-flex justify-content-start mt-3">
        <div className="mr-5">
          <button className="btn btn-primary" onClick={ refreshHandler }>Refresh</button>
        </div>

        <div className={ `${styles['action-parent']}` }>
          <SortActions actions={ SortButtons } sortDir={ sortDirection } onSortChange={ onSortChangeHandler }></SortActions>
        </div>
      </div>
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <QuoteList quotes={ quoteDisplay } sortDir={ sortDirection } />
        )
      }
      
    </React.Fragment>
  
  );
};

export default AllQuotes;