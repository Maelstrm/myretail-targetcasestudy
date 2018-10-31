import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    leftOverall: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    rightOverall: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end'
    }
});


class ItemHighlights extends Component {

    componentDidMount = () => {
        console.log('ItemHighlights data:', this.props.data);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid item xs={12} className={classes.root}>
            Item HIGHLIGHTS
            </Grid>
        );
    }
}

export default withStyles(styles)(ItemHighlights);
