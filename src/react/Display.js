import React from 'react';
import { connect } from 'react-redux';


class Display extends React.Component {

    render() {
        return (
            <div id="display">
                <textarea id="history-display" readOnly value={this.props.appReducer.displayString + " =" + this.props.appReducer.result}></textarea>
                <textarea id="input-display" readOnly value={this.props.appReducer.inputString}></textarea>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Display);