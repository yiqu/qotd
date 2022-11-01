/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import useQuotes from "../../shared/swr/useQuotes";
import QuoteList from './quote-list/QuoteList';
import SortActions from "./SortActions";
import styles from './Quotes.module.scss';
import { useParams, useLocation, useNavigate, Outlet, NavigateFunction } from "react-router-dom";
import useQuery from "../../shared/query-param-hook/QueryParam";
import LoadingLogo from "../../shared/loading/full-logo/LoadingLogo";
import { SortActionButton, Quote } from "@shared/models/quotes.model";
import { UrlQuery } from "@shared/models/url";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SortButtons: SortActionButton[] = [
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
  const [ sortDirection, setSortDirection ] = useState<SortActionButton>(SortButtons[0]);
  const [ quoteDisplay, setQuoteDisplay ] = useState<Quote[]>([]);

  const navigate: NavigateFunction = useNavigate();

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

  const onSortChangeHandler = (sortDir: SortActionButton) => {
    updateUrlQParams(sortDir);
  };

  const updateUrlQParams = (sortDir: SortActionButton) => {
    navigate({
      pathname: "/quotes",
      search: `?sort=${sortDir.value}`
    });
  };

  return (
    <React.Fragment>
      
      <div className="d-flex justify-content-start mt-3">

        <Stack spacing={ 2 } direction="row" justifyContent="flex-start" className="w-100">
          <Button variant="outlined" onClick={ refreshHandler } size="medium">Refresh</Button>

          <div className={ `${styles['action-parent']}` }>
            <SortActions actions={ SortButtons } sortDir={ sortDirection } onSortChange={ onSortChangeHandler }></SortActions>
          </div>
        </Stack>

      </div>
      {
        loading ? (
          <LoadingLogo message={ 'all quotes' }></LoadingLogo>
        ) : (
          <QuoteList quotes={ quoteDisplay } sortDir={ sortDirection } />
        )
      }
      
    </React.Fragment>
  
  );
};

export default AllQuotes;