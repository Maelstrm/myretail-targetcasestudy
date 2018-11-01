import React, { Component } from 'react';
import displaylogic from './CartonButtons_DisplayLogic'


class CartButtons extends Component {

    render() {
        return (
            <div>
                {displaylogic(this.props.data)}
            </div>
        );
    }
}

export default CartButtons;
