/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import {
  useParams, useHistory, useLocation, Route
} from "react-router-dom";

const Comments = (props) => {

  return (
    <React.Fragment>
      { props.comments.map((comment) => {
        return (
          <div key={ comment.id } className="triangle-right right">
            { comment.comment }
          </div>
        );
      }) }
    </React.Fragment>
  );
};

export default Comments;