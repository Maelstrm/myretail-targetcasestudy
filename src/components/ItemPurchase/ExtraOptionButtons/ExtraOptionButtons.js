import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
    },
    extraOptionButtons: {
        display: 'inline-block',
        padding: 2,
        paddingLeft: '2px',
        paddingRight: '2px',
        minHeight: 0,
        minWidth: 0,
        fontSize: '.6em',
        backgroundColor: '#eeeeee',
        borderRadius: 2
    }
});

class ExtraOptionButtons extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container item xs={12} style={{display:'flex'}} spacing={8}>
            <Grid item xs={4}>
                <Button label={{paddingBottom: '0px'}} fullWidth className={classes.extraOptionButtons}>ADD TO REGISTRY</Button>
            </Grid>
            <Grid item xs={4}>
                <Button fullWidth className={classes.extraOptionButtons}>ADD TO LIST</Button>
            </Grid>
            <Grid item xs={4}>
                <Button fullWidth className={classes.extraOptionButtons}>SHARE</Button>
            </Grid>
            </Grid>
        );
    }
}

ExtraOptionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ExtraOptionButtons);
