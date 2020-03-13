class UserProfile {
    private userName: string;
    private age: number;

    // Normal way of implementing  getters and setters
    getName = () => {return this.userName};
    
    setName = (nameparam: string) => { 
        if(nameparam.length < 0) {
            throw new Error('UserName cannot be blank.');
        }
        this.userName = nameparam;
    }
    
    set USERNAME(name) {
        this.userName = name;
    }

    constructor(private x?: string) {this.userName = x};   

    // Using getters and setters directly in a different way is called Properties in Typescript
    get AGE() {
        return this.age;
    };

    set AGE(x) {
        if(this.age < 0) {
            throw new Error('Age cannot be negative value.');
        }
        this.age = x;
    }

    printUserName() {console.log(this.getName()); }

    printUserAge() {console.log(this.getName() + ' age is '+ this.AGE)}
}

// we can move the complete the userprofile class to a separate file
// and add a export command in front of it and import the same in this file.

let myUserProfile = new UserProfile('Murugan');
myUserProfile.printUserName(); 
myUserProfile.setName('Murugan Nagarajan');
console.log(myUserProfile.AGE);
myUserProfile.AGE = 24;
myUserProfile.USERNAME = 'MURUGAN425'
myUserProfile.printUserAge();
myUserProfile.printUserName(); 

//tsc -t es2016 .\8_accessmodify.ts