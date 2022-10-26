/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';

export const ActionBar = (props) => {


  return (
    <React.Fragment>
      <div className=''>

        {
          props.actions.map((action) => {
            return (
              <div key={ action.id }>
                <button className='btn btn-primary' onClick={ props.actionClick(action) }> { action.display } </button>
              </div>
            );
          })
        }

        
      </div>

    </React.Fragment>
  );

};

export default ActionBar;