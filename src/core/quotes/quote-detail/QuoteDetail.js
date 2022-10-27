/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo, Suspense } from 'react';
import classes from './QuoteDetail.module.scss';
import { useFetcher, useMatches,
  useParams, useNavigate, useLocation, Route, Routes, useLoaderData, defer, Await
} from "react-router-dom";
import useQuery from "../../../shared/query-param-hook/QueryParam";
import useQuoteDetail, { QUOTE_LIST_BASE_URL } from '../../../shared/swr/useQuote';
import CommentForm from './comment-form/CommentForm';
import { useFormik, useFormikContext, Formik } from 'formik';
import { validationSchema } from './validation-schema';
import { axiosPost } from '../../../shared/rest/axios-rest';
import useQuoteComments from '../../../shared/swr/useQuoteComment';
import Comments from './comments/Comments';
import ActionBar from '../../../shared/action-bar/ActionBar';
import { axiosFetcher } from '../../../shared/swr/fetcher';
import { getQuoteAndComments, getQuoteComments, getQuoteDetail } from '../../../shared/api/quote-detail';

const initialValue = {
  comment: ''
};

const actions = [
  {
    id: 'back',
    display: 'Back'
  },
  {
    id: 'refresh',
    display: 'Refresh'
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const {quoteDetail, comments} = useLoaderData();
  const fetcher = useFetcher();
  const matches = useMatches();

  const { urlSearchParams: queryParams, allParams } = useQuery();
  const [addCommentLoading, setAddCommentLoading] = useState(false);
  const [basePathname, setBasePathname] = useState(location.pathname);


  const quoteId = params.quoteId;

  //const { quoteDetail, isLoading, update } = useQuoteDetail(quoteId);
  //const { comments, isLoading: isCommentsLoading, error, update: updateComments } = useQuoteComments(quoteId);

  const addCommentHandler = () => {
    navigate({
      pathname: `add-comment`,
      search: location.search,
    }, { replace: true });
  };

  useEffect(() => {
  }, [matches]);

  const onCancelCommentHandler = () => {
    navigate({
      pathname: '',
      search: location.search
    }, { replace: true });
  };

  const onSubmitHandler = (data) => {
    setAddCommentLoading(true);
    axiosPost(`quote-list/${quoteId}/comments`, data).then(
      (res) => {
        onCancelCommentHandler();
      }
    ).catch((err) => {
      console.log(err);
    }).finally(() => {
      setAddCommentLoading(false);
    });
  };

  const actionClickHandler = (action) => (e) => {
    
    switch (action.id) {
      case actions[1].id: {
        fetcher.load(basePathname);
        break;
      }
      case actions[0].id: {
        navigate({
          pathname: '../',
          search: location.search
        });
        break;
      }
      default: {

      }
    }
  };


  return (
    <React.Fragment>
      
      <div className='d-flex justify-content-start mt-3'>
        <ActionBar actions={ actions } actionClick={ actionClickHandler }></ActionBar>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column">

        <div className='w-100'>
          <figure className={ classes.quote }>
            <blockquote>
              <p className="poppins">"{quoteDetail.quote}"</p>
            </blockquote>
            <figcaption> - {quoteDetail.author}</figcaption>
            <figcaption className='fs-16'>{new Date(quoteDetail.date).toString()}</figcaption>
          </figure>
        </div>

        <React.Fragment>
          <div className='w-100 d-flex justify-content-center align-items-center flex-column'>
            <div className='lato fs-18 mb-3'>
              Thoughts on this quote:
            </div>

            <Suspense fallback={ <p>Loading comments...</p> }>
              <Await 
                resolve={ comments }
                errorElement={ <p>Error loading quote comments.</p> }>
                {
                    (comments) => {
                      return (
                        <div className='mb-3 w-100 d-flex flex-row justify-content-center align-items-center'>
                          <div className={ `${classes['comments-parent']}` }>
                            { 
                              comments.length > 0 ? (
                                <Comments comments={ comments }></Comments>
                              ) : (
                                <div className='text-center font-italic'>Be the first to comment</div>
                              )
                            }
                          </div>
                        </div>
                      );
                    }
                }
              </Await>
            </Suspense>
            
            <div className='w-100 d-flex flex-row justify-content-center align-items-center'>
              <Routes>
                <Route path="add-comment"  element={
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
                  } />
              </Routes>
                
            </div>

            <Routes>
              <Route path="" element={ <button className='btn btn-primary' onClick={ addCommentHandler } 
                >Comment</button> } />
            </Routes>
              
          </div>
        </React.Fragment>
      </div>
    </React.Fragment>
    
  );
};

export default QuoteDetail;

export const loader = async ({request, params}) => {
  const quoteDetailId = params.quoteId;
  const userId = params.userId;
  
  return defer({
    comments: getQuoteComments(quoteDetailId),
    quoteDetail: await getQuoteDetail(quoteDetailId)  // use await if it needs to be loaded
  });
};