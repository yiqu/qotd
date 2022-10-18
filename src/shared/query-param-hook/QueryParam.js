/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  const searchParams = React.useMemo(() => new URLSearchParams(search), [search]);
  const allParams = [];

 for (const i of  searchParams.keys()) {
  allParams.push({
    key: i,
    value: searchParams.get(i)
  });
 }

  return {
    urlSearchParams: searchParams,
    allParams: allParams
  };
}

export default useQuery;