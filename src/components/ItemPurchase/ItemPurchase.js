import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CartButtons from './CartButtons/CartButtons';
import './ItemPurchase.css';

const styles = theme => ({
    root: {
    },
    quantityContainer: {
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: '7px',
        paddingTop: '2px',
        paddingBottom: '2px'
    },
    quantityButtons: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1px',
        borderRadius: '50%'

    },
    quantityToggleStyle: {
        height: 24, // <-- change default height
        width: 24,  // <-- change default width
    }
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
                <Grid item xs={12}>
                    <span style={{ fontSize: '1.5em' }}>{this.props.data.price.formattedPriceValue}</span>
                    <span style={{ fontSize: '1.5em' }}> online price</span>
                </Grid >
                <Divider />
                {/* Promotions */}
                <Grid item xs={12}>
                    {this.props.data.promotions.map((item, i) => {
                        return (<div key={i} style={{ fontSize: '.1.5em' }}>{item.Description[0].shortDescription}</div>)
                    })}
                </Grid >
                <Divider />
                {/* Add to shopping cart */}
                <Grid item xs={12} >
                    <Grid item xs={12}>
                        {/* Quantity */}
                        <Grid item xs={6} style={{ display: 'flex' }} className={classes.quantityContainer}>
                            {/* Quantity label */}
                            <Grid item xs={6}>
                                <span style={{ fontSize: '.5em' }}>quantity:</span>
                            </Grid>
                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }} >
                                {/* Quantity toggle */}
                                <Grid item xs={2} className={classes.quantityButtons}>
                                    <i className="material-icons">
                                       remove_circle
                                    </i>
                                </Grid>
                                <Grid item xs={5} style={{ display: 'flex', justifyContent: 'center' }}>
                                    #
                                </Grid>
                                <Grid item xs={2} className={classes.quantityButtons}>
                                <i className="material-icons">
                                        add_circle
                                    </i>
                                </Grid>
                            </Grid>
                        </Grid >
                        
                        {/* Pickup in store + add to ShoppingCart */}
                        <CartButtons />

                        {/* Return Policy */}
                        <Grid item container xs={12} style={{display: 'flex', alignItems: 'center'}} spacing={8}>
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
                                <span style={{ fontSize: '.1em' }}>This item must be returned within 30 days of the ship date. See return policy for details.<br/>
                                Price, promotions, styles and availability may vary by store and online.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
            </Grid>
        );
    }
}

ItemPurchase.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ItemPurchase);
