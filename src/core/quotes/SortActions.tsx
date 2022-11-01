/* eslint-disable @typescript-eslint/no-unused-vars */
import { FCC } from "@shared/models/fc-children.model";
import { SortActionProp } from "@shared/models/sort-actions.model";
import React, { useEffect, useState } from "react";

const SortActions: FCC<SortActionProp> = (props) => {

  const sortActionChangeHandler = (event) => {
    const i = props.actions.findIndex((res) => {
      return res.value === event.target.value;
    });
    props.onSortChange(props.actions[i]);
  };

  return (
    <React.Fragment>
      {
        props.actions.map((button) => {
          return (
            <div className="form-check form-check-inline" key={ button.value }>
              <input className="form-check-input"
                  id={ button.value }
                  type="radio"
                  value={ button.value }
                  checked={ props.sortDir.value === button.value }
                  onChange={ sortActionChangeHandler }
                />
              <label className="form-check-label" htmlFor={ button.value }>
                { button.display }
              </label>
            </div>
          );
        })
      }

    </React.Fragment>
  );


};

export default SortActions;