import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        justify: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fa23bb',
    },
    reviewContainer: {
        background: '#eeeeee',
        padding: '10px',
    },
});


class ItemReviews extends Component {
    componentDidMount = () => {
        console.log('ItemReviews data:', this.props.data);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container item  xs={12} spacing={8}>
                {/* Overall rating and link to view more reviews */}
                    <Grid item xs={6}>
                    <Typography>***** Overall</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>View all # reviews</Typography>
                    </Grid>
                {/* Sample reviews */}
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.reviewContainer}>
                        <Grid item container xs={12} spacing={8}>
                            <Grid item xs={6} className={classes.headerTitle} >
                               <Typography>PRO</Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.headerTitle}>
                                <Typography>CON</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        );
    }
}

export default withStyles(styles)(ItemReviews);
