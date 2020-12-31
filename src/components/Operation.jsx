import { appState } from 'rootz';
import { todoFilter } from '../constants';
import { publish  } from 'react-rootz';
const Addtion = function () {
        var a = appState.get("First_arg");
        var b = appState.get("Second_arg");
        var res = appState.get("result");
        switch (appState.get("mode")) {
                case todoFilter.Add: {
                    return a+b;
                }
                case todoFilter.Sub: {
                    return a-b;
                }
                default:
                    return res;
            }
       
    }
    const updateValue = function (sum) {
        appState.set("result", sum);
        publish("$Calculator");
    }
export { Addtion, updateValue}