import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from 'pages/home/home_action';

class Home extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }
    add() {
        this.props.dispatch(increment());
    }
    render() {
        return (
            <div>
                <p>{this.props.counter.count}</p>
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);