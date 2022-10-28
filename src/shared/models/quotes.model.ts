/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';

export interface CommentProp {
  comments: Comment[];
}


export interface Comment {
  comment: string;
  id: string;
  date?: number;
}