/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemoCompare } from '../../../../shared/hooks/useMemoCompare';
import { FCC } from '@shared/models/fc-children.model';
import { CommentProp } from '@shared/models/quotes.model';
import React, { useEffect, useReducer, useState, useContext, useMemo, PropsWithChildren } from 'react';

const Comments: FCC<CommentProp> = (props) => {

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