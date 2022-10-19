/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import classes from './QuoteDetail.module.scss';
import {
  useParams, useHistory, useLocation, Route, useRouteMatch
} from "react-router-dom";
import useQuery from "../../../shared/query-param-hook/QueryParam";
import useQuoteDetail from '../../../shared/swr/useQuote';
import CommentForm from './comment-form/CommentForm';
import { useFormik, useFormikContext, Formik } from 'formik';
import { validationSchema } from './validation-schema';
import { axiosPost } from '../../../shared/rest/axios-rest';
import useQuoteComments from '../../../shared/swr/useQuoteComment';
import Comments from './comments/Comments';

const initialValue = {
  comment: ''
};

const QuoteDetail = () => {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const { urlSearchParams: queryParams, allParams } = useQuery();
  const [addCommentLoading, setAddCommentLoading] = useState(false);

  const quoteId = params.quoteId;

  const { quoteDetail, isLoading, update } = useQuoteDetail(quoteId);

  const { comments, isLoading: isCommentsLoading, error, update: updateComments } = useQuoteComments(quoteId);

  const addCommentHandler = () => {
    history.replace({
      pathname: `${location.pathname}/add-comment`,
      search: location.search,
    });
  };

  useEffect(() => {
  }, [queryParams]);

  const onCancelCommentHandler = () => {
    history.replace({
      pathname: `${match.url}`,
      search: location.search
    });
  };

  const onSubmitHandler = (data) => {
    setAddCommentLoading(true);
    axiosPost(`quote-list/${quoteId}/comments`, data).then(
      (res) => {
        onCancelCommentHandler();
        updateComments();
      }
    ).catch((err) => {
      console.log(err);
    }).finally(() => {
      setAddCommentLoading(false);
    });
  };

  return (
    <React.Fragment>
      { isLoading ? (<div>Loading...</div>) : (
        <div className="d-flex justify-content-center align-items-center flex-column">

          <div className='w-100'>
            <figure className={ classes.quote }>
              <blockquote>
                <p>{quoteDetail.quote}</p>
              </blockquote>
              <figcaption>{quoteDetail.author}</figcaption>
              <figcaption className='fs-16'>{new Date(quoteDetail.date).toString()}</figcaption>
            </figure>
          </div>

          <React.Fragment>
            <div className='w-100 d-flex justify-content-center align-items-center flex-column'>
              <div className='lato fs-18 mb-3'>
                Thoughts on this quote:
              </div>
              <div className='mb-3 w-100 d-flex flex-row justify-content-center align-items-center'>
                <div className={ `${classes['comments-parent']}` }>
                  { isCommentsLoading ? (
                    <div>Loading comments...</div>
                  ) : (
                    comments.length > 0 ? (
                      <Comments comments={ comments }></Comments>
                    ) : (
                      <div className='text-center font-italic'>Be the first to comment</div>
                    )
                  )}
                </div>
              </div>
              <div className='w-100 d-flex flex-row justify-content-center align-items-center'>
                <Route path={ `${match?.path}/add-comment` }>
                  <div className={ `${classes['form-parent']}` }>
                    <Formik
                      initialValues={ initialValue }
                      validationSchema= { validationSchema }
                      onSubmit= { onSubmitHandler }>
                      {
                        (formik) => {
                          return <CommentForm formik={ formik } apiLoading={ addCommentLoading } cancel={ onCancelCommentHandler }></CommentForm>;
                        }
                      }
                    </Formik>
                  </div>
                </Route>
              </div>
              
              {
                match?.isExact ? (
                  <button className='btn btn-primary' onClick={ addCommentHandler }>Comment</button>
                ) : (<> </>)
              }
              
            </div>
          </React.Fragment>
        </div>
      ) }
    </React.Fragment>
    
  );
};

export default QuoteDetail;