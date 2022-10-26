/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import {
  useParams, useLocation, Route
} from "react-router-dom";
import FormikTextInput from '../../../../shared/form/input/SimpleInput';
import FormikTextArea from '../../../../shared/form/text-box/Textarea';
import styles from './CommentForm.module.scss';
import { useFormikContext } from 'formik';


const CommentForm = ({formik, apiLoading, cancel}) => {

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
        comment: ''
      }
    });
  };

  const cancelComment = () => {
    cancel();
  };

  return (
    <React.Fragment>
      <form onSubmit={ formik.onSubmit }>
        <fieldset disabled={ apiLoading }>
            
          <div className="">
            <div className="form-group">
              <FormikTextArea label="Your comment"
                name="comment"
                type="text"
                placeholder="Love this quote!"
                rows="5">
              </FormikTextArea>
            </div>
          </div>
            
          <div className='d-flex justify-content-between'>
            <div className="">
              <button className="btn btn-success btn-sm mr-2" onClick={ submitHandler } type="button"
                disabled={ apiLoading }>{ apiLoading ? 'Working...' : 'Submit' }
              </button>
              <button type="button" className="btn btn-info btn-sm" onClick={ resetCurrentForm }>Reset</button>
            </div>
            <div className="">
              <button type="button" className="btn btn-danger btn-sm" onClick={ cancelComment }>Cancel</button>
            </div>
          </div>

        </fieldset>
      </form>
      
    </React.Fragment>
  );
};

export default CommentForm;