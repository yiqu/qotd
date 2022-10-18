/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import useSWR from 'swr';
import { axiosGet } from "../rest/axios-rest";
import { axiosFetcher } from "./fetcher";

const BASE_URL = 'https://kq-1-1a499.firebaseio.com/quote-list.json';

const useQuotes = () => {
  let { data, error, isValidating, mutate } = useSWR(BASE_URL, axiosFetcher, {
    revalidateOnFocus: false
  });
  const [currentData, setCurrentData] = useState([]);

  //const [serverData, setServerData] = useState(null);

  useEffect(() => {
    console.log("new data detected");
    setCurrentData(transformData(data));
  }, [data]);

  const updateData = () => {
    mutate();
    // axiosGet(BASE_URL).then(
    //   (res) => {
    //     setServerData(res.data)
    //   }
    // );
  };

  const transformData = (fireData) => {
    let res = [];
    const keys = Object.keys(fireData ?? []);
    keys.forEach((key) => {
      res.push({
        key: key,
        ...fireData[key]
      });
    });
    return res;
  };

  return {
    data: currentData,
    loading: (data === undefined) && isValidating,
    error,
    updateData
  };
};

export default useQuotes;


