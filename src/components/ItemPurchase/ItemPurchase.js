import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components
import CartButtons from './CartButtons/CartButtons';
import ExtraOptionButtons from './ExtraOptionButtons/ExtraOptionButtons';
// MaterialUI
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
// Extra Styles
import Typography from '@material-ui/core/Typography';
import './ItemPurchase.css';



const styles = theme => ({
    root: {
    },
    quantityContainer: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#cccccc',
        padding: '7px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: 1,
    },
    quantityButtons: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1px',
        borderRadius: '50%'

    },
});

class ItemPurchase extends Component {

    componentDidMount = () => {
        // Test to make sure data is in file
        // console.log('ItemPuchase data:', this.props.data);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container item xs={12} >
                {/* Price */}
                <Grid item xs={12} style={{display:'flex', alignItems:'baseline'}}>
                    <Typography variant="h5" style={{fontWeight: 'bold'}}>{this.props.data.price.formattedPriceValue}</Typography>
                    <span style={{display:'flex', alignItems:'baseline'}}>
                        <Typography variant="body2" style={{fontSize:'.1em', paddingLeft:'5px'}}>online price</Typography>
                    </span>
                </Grid >
                <Divider />
                {/* Promotions */}
                <Grid item xs={12}>
                    {this.props.data.promotions.map((item, i) => {
                        return (<Typography variant="body2" key={i}>{item.Description[0].shortDescription}</Typography>)
                    })}
                </Grid >
                <Divider />
                {/* Add to shopping cart */}
                <Grid item xs={12} >
                    <Grid item container xs={12} style={{ display: 'flex' }} spacing={8}>
                        {/* Quantity */}
                        <Grid item xs={6}>
                            <Paper elevation={0} style={{ display: 'flex' }} className={classes.quantityContainer}>
                                {/* Quantity label */}
                                <Grid item xs={6} style={{display: 'flex', alignItems: 'center'}}>
                                    <Typography style={{fontSize:'.2em'}}>quantity:</Typography>
                                </Grid>
                                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight:'0px' }} >
                                    {/* Quantity toggle */}
                                    <Grid item xs={2} className={classes.quantityButtons}>
                                        <i className="material-icons">
                                            remove_circle
                                        </i>
                                    </Grid>
                                    <Grid item xs={5} style={{ display: 'flex', justifyContent: 'center' }}>
                                        #
                                </Grid>
                                    <Grid className={classes.quantityButtons}>
                                        <i className="material-icons">
                                            add_circle
                                    </i>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid >
                        {/* Intentionally left empty for styling */}
                        <Grid item xs={6}>
                        </Grid >
                    </Grid>

                    {/* Pickup in store + add to ShoppingCart */}
                    <CartButtons />
                </Grid >
                {/* Return Policy */}
                <Grid item container xs={12} style={{ display: 'flex', alignItems: 'center' }} spacing={8}>
                        {/* Return policy label */}
                        <Grid item>
                            <span style={{ fontSize: '1em' }}>returns</span>
                        </Grid>
                        {/* Vertical Divider */}
                        <Grid item>
                            |
                        </Grid>
                        {/* Return policy summary */}
                        <Grid item xs={9}>
                            <span style={{ fontSize: '.1em' }}>This item must be returned within 30 days of the ship date. See return policy for details.<br />
                                Price, promotions, styles and availability may vary by store and online.
                            </span>
                        </Grid>
                    </Grid>
                    <ExtraOptionButtons/>
            </Grid>
        );
    }
}

ItemPurchase.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ItemPurchase);
