import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import Display from './Display';

import calculatorFront from '../svg/calculator-front.svg';
import calculatorBack from '../svg/calculator-back.svg';
import zero from '../svg/zero.svg';
import one from '../svg/one.svg';
import two from '../svg/two.svg';
import three from '../svg/three.svg';
import four from '../svg/four.svg';
import five from '../svg/five.svg';
import six from '../svg/six.svg';
import seven from '../svg/seven.svg';
import eight from '../svg/eight.svg';
import nine from '../svg/nine.svg';
import decimal from '../svg/decimal.svg';
import clear from '../svg/clear.svg';
import multiply from '../svg/multiply.svg';
import divide from '../svg/divide.svg';
import add from '../svg/add.svg';
import subtract from '../svg/subtract.svg';
import sqrt from '../svg/sqrt.svg';
import open from '../svg/open.svg';
import close from '../svg/close.svg';
import equals from '../svg/equals.svg';


class Calculator extends React.Component {

    render() {
        return (
            <div id="calculator">
                <Display />
                <img id="calculator-back-svg" src={calculatorBack} alt="" />
                <img id="calculator-front-svg" src={calculatorFront} alt="" />

                <div id="button-container">
                    <Button id="clear" type="CLEAR" src={clear} />
                    <Button id="open" type="OPEN" src={open} />
                    <Button id="close" type="CLOSE" src={close} />
                    <Button id="sqrt" type="SQRT" src={sqrt} />

                    <Button id="seven" type="NUMBER" src={seven} value="7"/>
                    <Button id="eight" type="NUMBER" src={eight} value="8" />
                    <Button id="nine" type="NUMBER" src={nine} value="9" />
                    <Button id="divide" type="DIVIDE" src={divide} />

                    <Button id="four" type="NUMBER" src={four} value="4"/>
                    <Button id="five" type="NUMBER" src={five} value="5" />
                    <Button id="six" type="NUMBER" src={six} value="6" />
                    <Button id="multiply" type="MULTIPLY" src={multiply} />

                    <Button id="one" type="NUMBER" src={one} value="1"/>
                    <Button id="two" type="NUMBER" src={two} value="2" />
                    <Button id="three" type="NUMBER" src={three} value="3" />
                    <Button id="subtract" type="SUBTRACT" src={subtract} />

                    <Button id="zero" type="NUMBER" src={zero} value="0" />
                    <Button id="decimal" type="DECIMAL" src={decimal} />
                    <Button id="equals" type="EQUALS" src={equals} />
                    <Button id="add" type="ADD" src={add} />
                </div>


            </div>

        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Calculator);