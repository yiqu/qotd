/* eslint-disable no-unused-vars */
import axios from "axios";
import { appendKeyFireData, axiosFetcher, axiosFetcher2 } from "../swr/fetcher";
import { QUOTE_LIST_BASE_URL } from "../swr/useQuote";

export const getQuoteDetail = (quoteId) => {
  return axiosFetcher(`${QUOTE_LIST_BASE_URL}/${quoteId}.json`);
};

export const getQuoteComments = (quoteId) => {
  return axiosFetcher(`${QUOTE_LIST_BASE_URL}/${quoteId}/comments.json`);
};

export const getQuoteAndComments = async (quoteId) => {
  const [detail, comments] = await Promise.all([
    getQuoteDetail(quoteId),
    getQuoteComments(quoteId)
  ]);
  return {
    detail,
    comments: appendKeyFireData(comments)
  };
};