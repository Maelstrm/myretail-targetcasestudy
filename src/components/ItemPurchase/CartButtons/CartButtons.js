import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import displaylogic from './CartonButtons_DisplayLogic'

const styles = theme => ({
    root: {
    },
    cartButtons: {
        padding: '2px',
    }
});

class CartButtons extends Component {

    render() {
        return (
            <div>
                {displaylogic(this.props.data)}
            </div>
        );
    }
}

CartButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CartButtons);
