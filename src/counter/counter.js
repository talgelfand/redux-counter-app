import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Alert} from 'reactstrap';
import {INC, DEC, RES} from '../types';

import "./counter.scss";

class Counter extends Component {

    // increment = () => {
    //     this.props.dispatch({ type: INC })
    // }

    // decrement = () => {
    //     this.props.dispatch({ type: DEC })
    // }

    // reset = () => {
    //     this.props.dispatch({ type: RES })
    // }

    render() {
        return (
            <div className="counter__wrapper">
                <Button className="counter__button" onClick={this.props.inc} color="success">Inc</Button>
                <Alert className="counter__alert" color="info">{`Here is the number: `}<span className="counter__span">{this.props.value}</span></Alert>
                <Button className="counter__button" onClick={this.props.dec} color="danger">Dec</Button>
                <br/>
                <Button className="counter__button" onClick={this.props.res} color="info">Reset</Button>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    value: state.value
})

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => {dispatch({type: INC})},
        dec: () => {dispatch({type: DEC})},
        res: () => {dispatch({type: RES})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);