// Assign one make classes that inherit from each other
class Rectangle 
{
    public height:number
    public width:number

    constructor(h:number , w?:number)
    {
        this.height = h
        this.width = w
    }

    public WhoIam() : void
    {
        console.log("I am Rectangle");  
    } 

    public CalcCircumference() : number
    {
        var result:number = 2 * (this.width + this.height)
        console.log("Circumference For Rectangle" + " " + result);
        return result  
    } 
}

// b =========> MAking class square that inherit from rectangle
class Square extends Rectangle 
{
    public WhoIam() : void
    {
        console.log("I am Square");  
    } 

    public CalcCircumference() : number
    {
        var result:number = 4 *  this.height
        console.log("Circumference For Square" + " " + result);
        return result  
    } 
}

// Make Object from Rectangle
let rec1 = new Rectangle(3,3)
rec1.WhoIam()
rec1.CalcCircumference()

// Make Object from Square
let Squ = new Square(4)
Squ.WhoIam()
Squ.CalcCircumference()

// Assign 2 
// a ======> Union Types
let unionType : string | boolean
unionType = "Esraa"
unionType = true 
// unionType = 4  // Throw Error unionType doesn't take num
console.log(unionType);

// tpescript annotation in var
var age: number = 23;                 // number variable
var firstName: string = "Esraa";     // string variable
var isUpdated: boolean = true;      // Boolean variable

var employee : {  // object in ts
    id: number; 
    name: string; 
}; 

employee = { 
  id: 100, 
  name : "John"
}



// b =======> function that return type
function MultipleFun(x: number , y: number = 2) : number {
    let result = x * y
    console.log(result);
    return result 
    
}
MultipleFun(5,5)
MultipleFun(5)  // taken second parameter from default parameter

// function overridding
function OverrideFun(s1 : string ) : void
function OverrideFun(n1 : number , s1 : string) : void
function OverrideFun(n1 : number , s2 : number , n2 : number) : void

function OverrideFun(A : string |number , B ?: string | number , C ?: number) {
    console.log(A);
    if (B != undefined)
    {
        console.log(B);
    }
    if (C != undefined)
    {
        console.log(C);
    }
} 

OverrideFun("Esraa")
OverrideFun( 20 , "Esraa")
// OverrideFun( 20 , "Esraa" , 20)     // Throw error there isn't rule accepts that
OverrideFun(20 , 40 , 50)

// d =======> Interfaces & Classes
interface Human {
    fName : string 
    lName : string 
    age : number
    
    DisplayInfo : () => void
}

interface FirstHuman extends Human {
    status : string
    isEmployed : boolean
}

class SpecialPerson implements FirstHuman {   // Class that inherit from interfaces
    fName : string   
    lName : string 
    age : number
    status : string
    isEmployed : boolean
    companyName : string
    
    DisplayInfo () 
    {
        console.log("Hello From Special Person ");
    }
    
}

// e =====> Generic Function
 function GenericFun<T>( argument: T ) : T[] {
    var arrOfT : T[] = []
    arrOfT.push(argument)
    return arrOfT
}

var arrayOfGenericString =  GenericFun<string>("hello") 
console.log(arrayOfGenericString[0]);
console.log(typeof arrayOfGenericString[0]);

// F =======> Enum
enum ListOfNames {
    "Ali" ,
    "Mhmd" ,
    "Zain"
}

let specialNameFromList : ListOfNames
specialNameFromList = ListOfNames.Zain
console.log(specialNameFromList);


// Proxy
const user = {
    firstName: 'Esraa',
    lastName: 'Elshibly'
}

const handler = {
    get(target, property) {
        return property === 'fullName' ?
            `${target.firstName} ${target.lastName}` :
            target[property];
    }
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.fullName);


// Design Pattern

class MySingelton {
    private static instance:MySingelton;
//    private constructor(){}

    static getInstance(){
      
        if(!MySingelton.instance){
            MySingelton.instance = new MySingelton()
        }
        return MySingelton.instance
    }

    greet() :string{
        return `Hello Iam Singelton`

    }
}

const singelton1 =MySingelton.getInstance();
const singelton2 =MySingelton.getInstance();

console.log(singelton1 === singelton2);

// Promise
let div = document.getElementById("div");
let img = document.createElement("img");
 let url = "./city.png";

function welcomeMsg(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(alert("Welcome to you!"));
        },3000)
    })
}

welcomeMsg()
.then((msg) => {
    console.log(msg);
    return new Promise((resolve, reject) => { //Explicit
        setTimeout(() => {
            resolve(document.write(`<img src=${url}></img>`));
        }, 1000);
    });

})
.then((msg) => {
    console.log(msg);
    return new Promise((resolve, reject) => { //Explicit
        setTimeout(() => {
            resolve(alert("Thanks"));
        }, 3000);
    });

})