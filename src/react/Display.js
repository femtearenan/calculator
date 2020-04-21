import React from 'react';
import { connect } from 'react-redux';


class Display extends React.Component {
    constructor(props) {
        super(props);
        this.textarea = React.createRef();
    }

    componentDidUpdate() {
        console.log("SCROLLING?");
        this.textarea.current.scrollLeft = this.textarea.current.scrollWidth;
    }

    render() {
        return (
            <div id="display-container">
                <textarea ref={this.textarea} id="history-display" readOnly value={this.props.appReducer.displayString + " =" + this.props.appReducer.result}></textarea>
                <textarea id="display" readOnly value={this.props.appReducer.inputString}></textarea>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Display);