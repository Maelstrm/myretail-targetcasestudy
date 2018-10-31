import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        justify: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fa23bb',
    } 
});


class ItemReviews extends Component {
    componentDidMount = () => {
        console.log('ItemReviews data:',this.props.data);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid item xs={12} className={classes.root}>
            Item Reviews
            </Grid>
        );
    }
}

export default withStyles(styles)(ItemReviews);
