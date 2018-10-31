import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    full: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: '20px',
        justify: 'center',
        flexDirection: 'row',
    },
    img: {
        overflow: 'hidden',
        display: 'block',
        width: '100%',
        maxWidth: '400px',
    },
    thumbnailContainer: {
        display: 'flex',
        alignItems: 'center',
        maxHeight: '50px',
        marginBottom: '20px',
        justify: 'center',
        overflow: 'scroll',
    },
    smallImage: {
        height: '60px',
    },
    title: {
        fontSize: '1.5em',
        textAlign: 'center',
    },
    navButton: {
        width: 60,
        height: 60,
    }
});

class ItemImages extends React.Component {
    state = {
        activeStep: 0,
        allImages: [this.props.data.primaryImage],
    };

    componentDidMount() {
        console.log('allData', this.props.data);

        this.setState({
            allImages: [...this.state.allImages, ...this.props.data.secondaryImages.map((item, i) => {
                return item.image
            })],
        })
    }
    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };
    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };
    changeActiveStep = (i) => {
        this.setState({
            activeStep: i,
        })
    }

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = this.state.allImages.length;

        return (
            <div className={classes.root}>
                <Grid item xs={12} className={classes.full}>
                    <Typography className={classes.title}>{this.props.data.title}</Typography>
                </Grid>
                <Grid item xs={12} className={classes.full}>
                    <img
                        className={classes.img}
                        src={this.state.allImages[activeStep]}
                        alt={this.state.allImages[activeStep]}
                    />
                </Grid>
                <Grid item xs={12} style={{padding: '0px', margin: '0px'}} className={classes.full}>
                    <Grid item xs={2} >
                        <Button onClick={this.handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        </Button>
                    </Grid>
                    <Grid item xs={8} style={{display: 'flex', overflow: 'scroll'}}>
                            {this.state.allImages.map((item, i) => {
                                return (
                                    <span key={i} onClick={() => { this.changeActiveStep(i) }}>
                                        <img src={item} className={classes.smallImage} alt={item}/>
                                    </span>
                                )
                            })}
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ItemImages.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ItemImages);
