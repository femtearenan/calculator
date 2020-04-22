import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import Display from './Display';

import calculatorBack from '../svg/calculator-back.svg';


class Calculator extends React.Component {

    render() {
        return (
            <div id="calculator">
                <Display />
                <img id="calculator-back-svg" src={calculatorBack} alt="" />

                <div id="button-container">
                    <Button id="clear" type="CLEAR" charSign="C" />
                    <div></div>
                    <div></div>
                    <Button id="equals" type="EQUALS" charSign="=" />

                    <Button id="seven" type="NUMBER" charSign="7" value="7"/>
                    <Button id="eight" type="NUMBER" charSign="8" value="8" />
                    <Button id="nine" type="NUMBER" charSign="9" value="9" />
                    <Button id="divide" type="DIVIDE" charSign="/" />

                    <Button id="four" type="NUMBER" charSign="4" value="4"/>
                    <Button id="five" type="NUMBER" charSign="5" value="5" />
                    <Button id="six" type="NUMBER" charSign="6" value="6" />
                    <Button id="multiply" type="MULTIPLY" charSign="x" />

                    <Button id="one" type="NUMBER" charSign="1" value="1"/>
                    <Button id="two" type="NUMBER" charSign="2" value="2" />
                    <Button id="three" type="NUMBER" charSign="3" value="3" />
                    <Button id="subtract" type="SUBTRACT" charSign="-" />

                    <Button id="zero" type="NUMBER" charSign="0" value="0" />
                    <Button id="decimal" type="DECIMAL" charSign="." />
                    <div></div>
                    <Button id="add" type="ADD" charSign="+" />
                </div>

            </div>

        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Calculator);