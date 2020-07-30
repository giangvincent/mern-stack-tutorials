import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    state = {
        count: 0,
 
    }
    handleIncrement = (step) => {
        this.setState({ count: this.state.count + step })
    }

    handleDecrement = (step) => {
        var countNum = this.state.count - step;
        countNum = countNum <= 0 ? 0 : countNum;
        this.setState({ count: countNum })
    }

    render() { 
        return (<React.Fragment>
            <h1>Hello World</h1>
            <p>{this.formatCount()}</p>
            <button onClick={() => this.handleIncrement(1)}>Increment</button>
            <button onClick={() => this.handleDecrement(1)}>Decrement</button>
        
        </React.Fragment>);
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;