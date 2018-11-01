import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const displayThis = 2;

const  CartonButtons_DisplayLogic = () => {
    switch (displayThis) {
        case 1:
            return (
                <Grid container item xs={12} item xs={12} style={{display:'flex'}} spacing={8}>
                    <Grid item xs={6}>
                        <Button variant="contained" color='primary' fullWidth>PICK UP IN STORE</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color='primary' fullWidth>ADD TO CART</Button>
                    </Grid>
                </Grid>
            )
        case 2:
            return (
                <Grid container item xs={12} style={{display:'flex'}} spacing={8}>
                    <Grid item xs={6}>
                        <Button variant="contained" disabled fullWidth>PICK UP IN STORE</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" disabled fullWidth>ADD TO CART</Button>
                    </Grid>
                </Grid>
            )
        default:
            return (
                <Grid container item xs={12} style={{display:'flex'}} spacing={8}>
                    <Grid item xs={6}>
                        <Button variant="contained" disabled fullWidth>PICK UP IN STORE</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" disabled fullWidth>ADD TO CART</Button>
                    </Grid>
                </Grid>
            )
    }
};

const whichToDisplay = (purchasingCode) => {
    if(purchasingCode === 0 || 2 ) {
        displayThis = 1;
        return 1;
    }
    else {
        displayThis = 2;
        return 2
    }
};

const funcs = {
    whichToDisplay();
    CartonButtons_DisplayLogic();

};

export default funcs;