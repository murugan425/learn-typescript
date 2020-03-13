function logMsg(message: string) {
    console.log(message);
}

let message = 'Your output is printed in the console';

logMsg(message);


let doLogSingleLineFn = (msg: string) => console.log(msg);
let doLogMultiLineFn = (msg1: string, msg2: string) => { console.log(msg1); console.log(msg2); };
let doLogNoParamFn = () => { console.log('Hardcoded Messages'); };

doLogSingleLineFn('print some message');
doLogMultiLineFn('message1 printed', 'message2 printed');
doLogNoParamFn();

