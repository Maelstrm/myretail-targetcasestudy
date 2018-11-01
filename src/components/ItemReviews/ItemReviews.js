import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Ratings from 'react-ratings-declarative';
import SampleReview from './SampleReview/SampleReview';

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
        padding: '7px',
    },
});


class ItemReviews extends Component {
    constructor() {
        super();
        this.state = {
            proData: {
            },
            conData: {
            }
        }
    }
    componentDidMount = () => {
        // Initialize data for each review after the component is mounted
        // Data will be passed down into components that will render sample reviews
        this.setState({
            proData: {
                label: 'PRO',
                subLabel: 'most helpful 4-5 star review',
                rating: Number(this.props.data.reviews.Pro[0].overallRating),
                title: this.props.data.reviews.Pro[0].title,
                review:this.props.data.reviews.Pro[0].review,
                screenName:this.props.data.reviews.Pro[0].screenName,
                datePosted:this.props.data.reviews.Pro[0].datePosted,
            },
            conData: {
                label: 'CON',
                subLabel: 'most helpful 1-2 star review',
                rating: Number(this.props.data.reviews.Con[0].overallRating),
                title: this.props.data.reviews.Con[0].title,
                review:this.props.data.reviews.Con[0].review,
                screenName:this.props.data.reviews.Con[0].screenName,
                datePosted:this.props.data.reviews.Con[0].datePosted,
            }

        })
    }

    render() {
        const { classes } = this.props;
        console.log('state', this.state.proData.rating);
        

        return (
            <Grid container item xs={12} spacing={8}>
                {/* Overall rating and link to view more reviews */}
                <Grid item xs={6} style={{ display: 'flex', paddingLeft:'10px', paddingRight:'10px'}}>
                    {/* Overall Rating Stars */}
                    <Ratings
                        rating={Number(this.props.data.reviews.consolidatedOverallRating)}
                        widgetDimensions="20px"
                        widgetRatedColors="red"
                        widgetSpacings="0px"
                    >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                    {/* Overall rating stars label */}
                    <Typography style={{ fontSize: '.8em', fontWeight:'bold', display: 'flex', alignItems: 'flex-end', marginLeft: '5px' }}>
                        overall
                    </Typography>
                </Grid>
                {/* Link to more reviews */}
                <Grid item xs={6} style={{display:'flex', justifyContent:'flex-end'}}>
                    <Typography style={{ fontSize: '.8em', fontWeight:'bold'}}>
                        view all {Number(this.props.data.reviews.totalReviews)} reviews
                    </Typography>
                </Grid>
                {/* Sample pro/con reviews */}
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.reviewContainer}>
                        <Grid item container xs={12} style={{display:'flex', padding: '5px'}}>
                            {/* Pro sample review */}
                            <SampleReview 
                                label={this.state.proData.label} subLabel={this.state.proData.subLabel}
                                rating={this.state.proData.rating}
                                title={this.state.proData.title}
                                review={this.state.proData.review}
                                screenName={this.state.proData.screenName}
                                datePosted={this.state.proData.datePosted}
                            />
                            {/* Con sample review */}
                            <SampleReview 
                                label={this.state.conData.label} subLabel={this.state.conData.subLabel}
                                rating={this.state.conData.rating}
                                title={this.state.conData.title}
                                review={this.state.conData.review}
                                screenName={this.state.conData.screenName}
                                datePosted={this.state.conData.datePosted}
                            />
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        );
    }
}

export default withStyles(styles)(ItemReviews);
