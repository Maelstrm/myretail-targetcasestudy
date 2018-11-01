import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import Ratings from 'react-ratings-declarative';

const styles = theme => ({
    root: {
        display: 'block',
    },
});


class SampleReview extends Component {

    render() {
        const { classes } = this.props;
        // Currently, the format of the date in the JSON file is deprecated in moment.js, throwing a warning in the console.
        var datePosted = moment(this.props.datePosted)
        console.log('sample rating', this.props.datePosted);

        return (
            <Grid container item xs={6} className={classes.root}>
                {/* Top most label (pro/con) */}
                <Grid item xs={12}>
                    <Typography style={{ marginBottom: 0, paddingBottom: 0 }}>
                        {this.props.label}
                    </Typography>
                </Grid>
                {/* Sublabel describing the section */}
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Typography style={{ fontSize: '.7em' }}>
                        {this.props.subLabel}
                    </Typography>
                </Grid>
                {/* Horizontal rule */}
                <hr style={{ backgroundColor: '#cccccc', height: '1px', borderStyle: 'hidden' }} />
                {/* The star rating, out of 5 stars */}
                <Grid item xs={12}>
                    <Ratings
                        rating={this.props.rating}
                        widgetDimensions="12px"
                        widgetRatedColors="red"
                        widgetSpacings="0px"
                    >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                </Grid>
                {/* The title, created by customer */}
                <Grid item xs={12}>
                    <Typography style={{ fontWeight: 'bold' }}>
                        {this.props.title}
                    </Typography>
                </Grid>
                {/* The body of the review */}
                <Grid item xs={12} style={{marginBottom: '4px'}}>
                    <Typography style={{ fontSize: '.7em', marginRight: '20px' }}>
                        {this.props.review}
                    </Typography>
                </Grid>
                {/* The name of the user + Date */}
                <Grid item xs={12} style={{ display: 'flex' }}>
                    <Typography style={{ fontSize: '.7em', marginRight: '3px'}}>
                        <a href="/">{this.props.screenName}
                        </a>
                    </Typography>
                    <Typography style={{ fontSize: '.7em' }}>
                        {moment.utc(this.props.datePosted).format('MMMM D, YYYY')}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(SampleReview);
