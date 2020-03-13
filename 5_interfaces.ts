interface User {
    fullname: string;
    mobile: number;
}

//In the below case we are using multiple parameters which can be 
//consolidated into one user defined type using a interface
let printsomevariable = (x: string, y:number, z: number, a: any, b: any, c: any, d: any) => {}

let printUserDetails = (user: User) => {
    console.log(user.fullname);
    console.log(user.mobile);
};

let myprofile = {fullname : 'Murugan Nagarajan', mobile : 18116193643 };

printUserDetails(myprofile);



