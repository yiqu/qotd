/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import TopNav from '../shared/top-nav/TopNav';
import { Route, Routes, Navigate, createBrowserRouter, RouterProvider, createRoutesFromElements, Outlet } from 'react-router-dom';


const Core: React.FC = () => {


  return (
    <React.Fragment>

      <TopNav></TopNav>

      <div className="container mb-5">

        <Outlet></Outlet>
        
      </div>

    </React.Fragment>
  );
};


export default Core;