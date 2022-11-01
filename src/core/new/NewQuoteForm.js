/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFormikContext } from 'formik';
import FormikTextInput from "../../shared/form/input/SimpleInput";
import FormikTextArea from "../../shared/form/text-box/Textarea";


const QuoteForm = ({formik, apiLoading, cancel}) => {

  const { values, submitForm , isValid, touched, dirty, isSubmitting, submitCount, handleSubmit, validateForm,
    validateOnMount, validationSchema, setValues, resetForm, setSubmitting, errors, setTouched } = useFormikContext();



  const submitHandler = async () => {
    handleSubmit();
    const formErrors = await validateForm();
    const errorNames = Object.keys(formErrors);
    if (errorNames.length > 0) {
      const doc = document.querySelectorAll(`[name="${errorNames[0]}"]`)[0];
      doc?.focus();
    }
  };

  const resetCurrentForm = () => {
    resetForm({
      values: {
        author: '',
        quote: ''
      }
    });
  };

  const cancelQuote = () => {
    cancel();
  };

  return (
    <React.Fragment>
      <form onSubmit={ formik.onSubmit }>
        <fieldset disabled={ apiLoading }>
          
          <div className="">
            <div className="form-group col-3">
              <FormikTextInput label="Author"
                name="author"
                type="text"
                placeholder="Author">
              </FormikTextInput>
            </div>
          </div>
            
          <div className="">
            <div className="form-group col-6">
              <FormikTextArea label="Quote"
                name="quote"
                type="text"
                placeholder="Cool quote"
                rows="5">
              </FormikTextArea>
            </div>
          </div>
            
          <div className='justify-content-between'>
            <div className="col-4">
              <button className="btn btn-success btn-sm mr-2" onClick={ submitHandler } type="button"
                disabled={ apiLoading }>{ apiLoading ? 'Working...' : 'Submit' }</button>
              <button type="button" className="btn btn-info btn-sm" onClick={ resetCurrentForm }>Reset</button>
            </div>
            <div className="col-1">
              <button type="button" className="btn btn-danger btn-sm" onClick={ cancelQuote }>Cancel</button>
            </div>
          </div>

        </fieldset>
      </form>
      
    </React.Fragment>
  );

};

export default QuoteForm;