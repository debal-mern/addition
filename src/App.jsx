import React from 'react';
import {Addition,updateValue} from './components/Operation';
import { subscribe  } from 'react-rootz';
class Calculator extends React.Component {
      constructor(props) {
            super(props);
            subscribe({
                name: "Calculator",
                scope: this,
                state: {}
            });
        }
    render() {
          const sum = Addition();

        return (
            <div className="addtion">
            <button className={add} onClick={updateValue}> Click me to get the result </button>
                <h1> Result is : {sum}</h1>
            </div>
        );
    }
}
 
export default Calculator