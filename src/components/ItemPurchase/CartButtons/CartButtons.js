import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
    },
    cartButtons: {
        padding: '2px',
    }
});

class CartButtons extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container item xs={12} style={{display:'flex'}} spacing={8}>
            <Grid item xs={6}>
                <Button variant="contained" color='primary' fullWidth className={classes.cartButtons}>PICK UP IN STORE</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color='primary' fullWidth className={classes.cartButtons}>ADD TO CART</Button>
            </Grid>
            </Grid>
        );
    }
}

CartButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CartButtons);
