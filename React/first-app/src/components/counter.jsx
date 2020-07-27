import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }
    handleIncrement = (step) => {
        this.setState({ count: this.state.count + step })
    }

    render() { 
        return (<React.Fragment>
            <h1>Hello World</h1>
            <p>{this.formatCount()}</p>
            <button onClick={() => this.handleIncrement(1)}>Increment</button>
            <button>Decrement</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>);
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;