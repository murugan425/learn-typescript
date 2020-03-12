// LET Keyword in ES6 - Main purpose is to redefine the scope concept of VAR used in ES5/JS

// 1.To avoid Hoisting of variables.
// 2.To define the scope of variables within the if/else/for/etc blocks instead of functional level.
// 3.To avoid creating of multiple variables with the same name under the same function which is possible in VAR.

//Lets see the above three points possibility in JS
//Possible to create two var variables 'msg'.

//Point 3: To avoid creating of multiple variables with the same name under the same function which is possible in VAR.
var msg = "";
var msg = "My name is murugan"

//Try to uncomment the below two lines to see the error
//let lmsg = "";
//let lmsg = "My name is murugan"


//Point 2: To define the scope of variables within the if/else/for/etc blocks instead of functional level.
function showCompanyName( name ) {
    var msg = "Before moving to if condition";
    if ( name == "Infosys" ) {
        var msg = "Inside IF condition :  Employee of " + name;
    }
    console.log( "showCompanyName(Infosys) :" + msg );
};
showCompanyName( "Infosys" );

//Now try the same above logic using let keyword
function showCompanyNameUsingLet( name ) {
    let lmsg = "Before If Condition";
    if ( name == "Infosys" ) {
        let lscope = "Scope is only inside if condition"
        let lmsg = "Inside IF condition :  Employee of " + name;
        console.log( "lscope " + lscope );
    }
    //console.log("lscope " +lscope); //Scope of variable lscope is available only inside that specific block where its declared 
    console.log( "showCompanyNameUsingLet(Infosys) :" + lmsg );
};
showCompanyNameUsingLet( "Infosys" );

//Point 1: To avoid Hoisting of variables.
//Hoisting - Means you can start using the variable even before you declare it..
//JS automatically initializes/will be aware of all declared variables to the top before starting the file execution.
x = "Is assigned a string even without creating a proper declaration"; 
console.log(x);
var x = "Var varaible X is defined after the log statement which is not possible for a let variable Y";

//y = "Is assigned a string even without creating a proper declaration"; 
//console.log(y); //Used even before it is declared.
let y = "Let type variable Y";

//LET will replace VAR in future and may make it obsolete

//Now try a simple example of let and var keyword in a for loop and see the difference..
//We make use of setTimeout function in JS for explaining their difference
/*function loopingVarParam() { 
    for(var i=1;i<10;i++) {
        console.log(i)
    }
};

function loopingLetParam() {
    for(var i=1;i<10;i++) {
        console.log(i)
    }
};*/

//User may expect from the output as 1,2,3,4,5 in console but this will print only 6 because the
//within 2 seconds the for loop iteration will get completed reaching the last value of i equal to 6
for(var i=1;i<5;i++) {
    setTimeout(function(){console.log(i);}, 2000);
}; 
//In this case the scope of the LET variable 'i' is restricted within the function which will be 
//called/triggered only after 2 seconds
for(let j=1;j<10;j++) {
    setTimeout(function(){console.log(j);}, 5000);
};




