import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from 'react';

const  CartonButtons_DisplayLogic = (purchasingCode) => {
    console.log('innerpurchasingcode', purchasingCode)
    purchasingCode = Number(purchasingCode);
    if (purchasingCode === 0) {
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
    }
    else {
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

export default CartonButtons_DisplayLogic;