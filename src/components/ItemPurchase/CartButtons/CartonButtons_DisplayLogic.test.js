import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import whichToDisplay from './CartonButtons_DisplayLogic'

test('check if purchaseChannelCode is working', () => {
    expect(whichTodisplay(0)).toBe(1);
  });