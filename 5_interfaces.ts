interface User {
    fullname: string;
    mobile: number;
}

let printUserDetails = (user: User) => {
    console.log(user.fullname);
    console.log(user.mobile);
};

let myprofile = {fullname : 'Murugan Nagarajan', mobile : 18116193643 };

printUserDetails(myprofile);



