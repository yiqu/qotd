/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import classes from './NewQuote.module.scss';
import { useFormik, useFormikContext, Formik } from 'formik';
import { validationSchema } from './validation-schema';
import QuoteForm from "./NewQuoteForm";
import { useHistory } from 'react-router-dom';
import useSWR from 'swr';
import { axiosPost } from "../../shared/rest/axios-rest";


export const NewQuote = () => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const initialValue = {
    author: 'KQ',
    quote: ''
  };

  const onSubmitHandler = (data) => {
    setIsLoading(true);
    let withDate = {
      date: new Date().getTime(),
      ...data
    };
    axiosPost('quote-list', withDate).then(
      (res) => {
        if (res.status === 200) {
          setIsLoading(false);
          history.push('/quotes');
        }
      }
    ).catch((err) => {
      console.log(err);
    });

  };

  const onCancelQuote = () => {
    history.push('/quotes');
  };

  return (
    <div>
      <div className="d-flex justify-content-center flex-row fs-19 poppins my-3">
        Add New Quote
      </div>
      <div>
        <Formik
          initialValues={ initialValue }
          validationSchema= { validationSchema }
          onSubmit= { onSubmitHandler }>
          {
            (formik) => {
              return <QuoteForm formik={ formik } apiLoading={ isLoading } cancel={ onCancelQuote }></QuoteForm>;
            }
          }
        </Formik>
      </div>
    </div>
  );
};

export default NewQuote;