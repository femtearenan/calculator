const initialState = {
    lastAction: null,
    history: [],
    result: 0,
    displayString: "",
    inputString: "0"
}

function appReducer(state = initialState, action) {
    let item = null;
    let operator = null;
    let result = 0;
    const history = [...state.history];

    switch(action.type) {
        case "CLEAR":
            return Object.assign({}, state, {
                ...initialState
            });
        case "NUMBER":
            let string = "0";
            if (state.inputString === "0") {
                string = action.value;
            } else {
                string = state.inputString + action.value;
            }
            return Object.assign({}, state, {
                inputString: string,
            });
        case "ADD":
            item = parseFloat(state.inputString);

            if (isNaN(item) && history.length > 0) {
                if(history[history.length-1] === "-") {
                    operator = "-";
                }
            }
            if (!isNaN(item)){
                history.push(item);
            } else {
                item = "";
            }

            if (operator !== null) {
                history.pop();
                history.push(operator);
            } else {
                history.push("+");
            }

            return Object.assign({}, state, {
                history: history,
                result: calculateResult(history),
                displayString: state.displayString + item + "+",
                inputString: "",
            });
        case "SUBTRACT":
            item = parseFloat(state.inputString);

            if (isNaN(item) && history.length > 0) {
                if(history[history.length-1] === "-") {
                    operator = "+";
                }
            }
            if (!isNaN(item)){
                history.push(item);
            } else {
                item = "";
            }

            if (operator !== null) {
                history.pop();
                history.push(operator);
            } else {
                history.push("-");
            }
            
            return Object.assign({}, state, {
                history: history,
                result: calculateResult(history),
                displayString: state.displayString + item + "-",
                inputString: "",
            });
        case "DIVIDE":
            item = parseFloat(state.inputString);

            if (isNaN(item) && history.length > 0) {
                history.pop();
            }
            if (!isNaN(item)){
                history.push(item);
            } else {
                item = "";
            }

            history.push("/");
            
            return Object.assign({}, state, {
                history: history,
                result: calculateResult(history),
                displayString: state.displayString + item + "/",
                inputString: "",
            });
        case "MULTIPLY":
            item = parseFloat(state.inputString);

            if (isNaN(item) && history.length > 0) {
                history.pop();
            }
            if (!isNaN(item)){
                history.push(item);
            } else {
                item = "";
            }

            history.push("*");
            
            return Object.assign({}, state, {
                history: history,
                result: calculateResult(history),
                displayString: state.displayString + item + "*",
                inputString: "",
            });
        case "SQRT":
            item = parseFloat(state.inputString);

            if (isNaN(item) && history.length > 0) {
                history.pop();
            }
            if (!isNaN(item)){
                history.push(item);
            } else {
                item = "";
            }

            history.push("√");
            
            return Object.assign({}, state, {
                history: history,
                result: calculateResult(history),
                displayString: state.displayString + item + "√",
                inputString: "",
            });
        case "EQUALS":
            item = parseFloat(state.inputString);

            if (isNaN(item) && history.length > 0) {
                history.pop();
            }
            if (!isNaN(item)){
                history.push(item);
            } else {
                item = "";
            }

            history.push("=");
            result = calculateResult(history)
            return Object.assign({}, state, {
                history: [],
                result: result,
                displayString: "",
                inputString: result,
            });
        case "DECIMAL":
            return Object.assign({}, state, {
                inputString: state.inputString + ".",
            });
        default:
            return state;
    }

}

function countDecimals(number) {
    if(Math.floor(number.valueOf()) === number.valueOf()) return 0;
    return number.toString().split(".")[1].length || 0; 
}

function getRoundingConst(length){
    let rounder = "1";
    for (let i = 0; i < length; i++) {
        rounder += 0;
    }
    return parseInt(rounder);
}

function calculateResult(history) {
    console.log(history);
    let result = 0;
    let operator = null;
    let maxDecimals = 0;
    let tempDecimals = 0;
    let decimals = -1;


    let firstElement = history[0];
    if (!isNaN(firstElement)) {
        result = firstElement;
    }
    for (let i = 0; i < history.length; i++) {
        let element = history[i];
        if (isNaN(element) ) {
            operator = element;
            if (operator === "√") {
                result = Math.sqrt(result);
            }
        } else {
            tempDecimals = countDecimals(element);
            if (tempDecimals > maxDecimals) {
                maxDecimals = tempDecimals;
            }
            switch(operator) {
                case "+":
                    result += element;
                    break;
                case "-":
                    result -= element;
                    break;
                case "/":
                    decimals = 5;
                    result /= element;
                    break;
                case "*":
                    result *= element;
                    break;
                default:
            }
        }
        
    }
    let rounder;
    if (decimals === -1) {
        rounder = getRoundingConst(maxDecimals);
    } else {
        rounder = getRoundingConst(decimals);
    }
    result = Math.round((result + Number.EPSILON) * rounder) / rounder;
    return result;
}

export default appReducer;