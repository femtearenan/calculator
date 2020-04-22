import React from 'react';
import { connect } from 'react-redux';

import { calculate } from '../redux/actions';


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.action = this.action.bind(this);
    }

    action() {
        this.props.calculate(this.props.type, this.props.value);
    }

    render() {
        return (
            <div className="calculator-button" id={this.props.id} onClick={this.action} value={this.props.value}>{this.props.charSign}</div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    calculate: (type, value) => dispatch(calculate(type, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Button);