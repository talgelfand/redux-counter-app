import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Alert} from 'reactstrap';
import {INC, DEC, RES} from '../types';

import "./counter.scss";

class Counter extends Component {

    increment = () => {
        this.props.dispatch({ type: INC })
    }

    decrement = () => {
        this.props.dispatch({ type: DEC })
    }

    reset = () => {
        this.props.dispatch({ type: RES })
    }

    render() {
        return (
            <div className="counter__wrapper">
                <Button className="counter__button" onClick={this.increment} color="success">Inc</Button>
                <Alert className="counter__alert" color="info">{`Here is the number: ${this.props.value}`}</Alert>
                <Button className="counter__button" onClick={this.decrement} color="danger">Dec</Button>
                <br/>
                <Button className="counter__button" onClick={this.reset} color="info">Reset</Button>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    value: state.value
})

export default connect(mapStateToProps)(Counter);