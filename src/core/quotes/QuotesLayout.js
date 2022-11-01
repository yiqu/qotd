/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


const QuotesLayout = () => {

  return (
    <React.Fragment>
      <Outlet></Outlet>
    </React.Fragment>
  );
};


export default QuotesLayout;