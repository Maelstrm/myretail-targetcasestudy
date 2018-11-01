import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import displaylogic from './CartonButtons_DisplayLogic'

test('check if purchaseChannelCode is working', () => {
    expect(displayLogic(0)).toBe(
        <Grid container item xs={12} item xs={12} style={{display:'flex'}} spacing={8}>
            <Grid item xs={6}>
                <Button variant="contained" color='primary' fullWidth>PICK UP IN STORE</Button>
            </Grid>
            <Grid item xs={6}>
                    <Button variant="contained" color='primary' fullWidth>ADD TO CART</Button>
            </Grid>
        </Grid>
    );
  });