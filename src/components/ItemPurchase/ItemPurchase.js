import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components
import CartButtons from './CartButtons/CartButtons';
import ExtraOptionButtons from './ExtraOptionButtons/ExtraOptionButtons';
// MaterialUI
import Grid from '@material-ui/core/Grid';
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
    constructor() {
        super();
        this.state={
            currentQuantity: 0,
        }
    }
    componentDidMount = () => {
        // Test to make sure data is in file
        // console.log('ItemPuchase data:', this.props.data);
    }
    // Functios that handle the quantity toggle
    handleQuantityAdd = () => {
        this.setState({
            currentQuantity: this.state.currentQuantity + 1,
        })
    }
    handleQuantityRemove = () => {
        this.setState({
            currentQuantity: this.state.currentQuantity - 1,
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container item xs={12} >
                {/* Price */}
                <Grid item xs={12} style={{display:'flex', alignItems:'baseline', paddingLeft:'10px', paddingRight:'10px'}}>
                    <Typography variant="h5" style={{fontWeight: 'bold'}}>{this.props.data.price.formattedPriceValue}</Typography>
                    <span style={{display:'flex', alignItems:'baseline'}}>
                        <Typography variant="body2" style={{fontSize:'.3em', paddingLeft:'5px'}}>online price</Typography>
                    </span>
                </Grid >
                {/* Promotions */}
                <Grid item xs={12}>
                    {/* Horizontal rule */}
                    <hr style={{ backgroundColor: '#cccccc', height: '1px', borderStyle: 'hidden', marginTop: '25px', marginBottom: '15px' }} />
                    {this.props.data.promotions.map((item, i) => {
                        return (<Typography style={{paddingLeft:'10px', paddingRight:'10px'}} variant="body2" key={i}>{item.Description[0].shortDescription}</Typography>)
                    })}
                    {/* Horizontal rule */}
                    <hr style={{ backgroundColor: '#cccccc', height: '1px', borderStyle: 'hidden', marginTop:'20px', marginBottom:'20px' }} />
                </Grid >
                {/* Add to shopping cart */}
                <Grid item xs={12} style={{paddingLeft:'10px', paddingRight:'10px'}}>
                    <Grid item container xs={12} style={{ display: 'flex' }} spacing={8}>
                        {/* Quantity */}
                        <Grid item xs={6}>
                            <Paper elevation={0} style={{ display: 'flex' }} className={classes.quantityContainer}>
                                {/* Quantity label */}
                                <Grid item xs={6} style={{display: 'flex', alignItems: 'center'}}>
                                    <Typography style={{fontSize:',9em'}}>quantity:</Typography>
                                </Grid>
                                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight:'0px' }} >
                                    {/* Quantity toggle */}
                                    <Grid item className={classes.quantityButtons} onClick={this.handleQuantityRemove}>
                                        <i className="material-icons quantityToggle">
                                            remove_circle
                                        </i>
                                    </Grid>
                                    <Grid item style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft:'4px', paddingRight:'4px'}}>
                                       <Typography variant="h6" style={{fontWeight:'bold'}}>
                                            {this.state.currentQuantity}
                                        </Typography>
                                     </Grid>
                                    <Grid item className={classes.quantityButtons} onClick={this.handleQuantityAdd}>
                                        <i className="material-icons quantityToggle">
                                            add_circle
                                        </i>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid >
                        {/* Intentionally left empty for styling */}
                        <Grid item xs={6} style={{marginBottom:'50px'}}>
                        </Grid >
                    </Grid>

                    {/* Pickup in store + add to ShoppingCart */}
                    <CartButtons data={this.props.data.purchasingChannelCode} style={{paddingLeft:'10px', paddingRight:'10px'}}/>
                </Grid >
                {/* Return Policy */}
                <Grid item container xs={12} style={{ display: 'flex', alignItems: 'center', paddingLeft:'10px', paddingRight:'10px', marginTop:'23px' }} spacing={8}>
                        {/* Return policy label */}
                        <Grid item>
                           <Typography>
                               returns
                               </Typography>
                        </Grid>
                        {/* Vertical Divider */}
                        <Grid item style={{color:'#cccccc'}}>
                            |
                        </Grid>
                        {/* Return policy summary */}
                        <Grid item xs={9} style={{marginBottom:'30px'}}>
                            <Typography style={{fontSize:'.2em'}}>
                                This item must be returned within 30 days of the ship date. See return policy for details.
                            </Typography>
                            <Typography style={{fontSize:'.2em'}}>
                                Price, promotions, styles and availability may vary by store and online.
                            </Typography>
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
