import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, getRoles, getPerson, getData } from 'pages/home/home_action';
import './home.css';
import image from 'images/a.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.del = this.del.bind(this);
        this.reset = this.reset.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(getRoles());
        this.props.dispatch(getPerson());
        this.props.dispatch(getData('data.json'));
    }
    add() {
        this.props.dispatch(increment());
    }
    del() {
        this.props.dispatch(decrement());
    }
    reset() {
        this.props.dispatch(reset());
    }
    render() {
        const { counter, roles, person, data } = this.props;
        return (
            <div className="home-box">
                <img src={image} />
                <p>{counter.count}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.del}>del</button>
                <button onClick={this.reset}>reset</button>
                {
                    roles&&roles.map((item, index) => {
                        return (
                            <div key={index}>{item}</div>
                        )
                    })
                }
                {
                    person&&person.map(item => {
                        return (
                            <div key={item.id}>{item.age}</div>
                        )
                    })
                }
                {
                    data&&data.response&&data.response.map(item => {
                        return (
                            <div key={item.id}>{item.a}</div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.homeReducers.counter,
        roles: state.homeReducers.roles,
        person: state.homeReducers2.person,
        data: state.homeReducers.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);