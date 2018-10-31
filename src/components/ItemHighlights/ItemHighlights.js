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
        console.log('ItemHighlights data:',this.props.data);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container item xs={12} sm={12} md={12} lg={12} >
          <Grid className={classes.leftOverall} item xs={6} sm={6} md={6} lg={6} >
          hi
          </Grid>
          <Grid className={classes.rightOverall} item xs={6} sm={6} md={6} lg={6} >
            by
          </Grid>
        </Grid>
        );
    }
}

export default withStyles(styles)(ItemHighlights);
