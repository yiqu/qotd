/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import TopNav from '../shared/top-nav/TopNav';
import { Route, Routes, Navigate, createBrowserRouter, RouterProvider, createRoutesFromElements, Outlet } from 'react-router-dom';


const Core: React.FC = () => {


  return (
    <React.Fragment>

      <TopNav></TopNav>

      <Outlet></Outlet>
        
    </React.Fragment>
  );
};


export default Core;