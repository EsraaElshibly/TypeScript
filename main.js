var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Assign one make classes that inherit from each other
var Rectangle = /** @class */ (function () {
    function Rectangle(h, w) {
        this.height = h;
        this.width = w;
    }
    Rectangle.prototype.WhoIam = function () {
        console.log("I am Rectangle");
    };
    Rectangle.prototype.CalcCircumference = function () {
        var result = 2 * (this.width + this.height);
        console.log("Circumference For Rectangle" + " " + result);
        return result;
    };
    return Rectangle;
}());
// b =========> MAking class square that inherit from rectangle
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.WhoIam = function () {
        console.log("I am Square");
    };
    Square.prototype.CalcCircumference = function () {
        var result = 4 * this.height;
        console.log("Circumference For Square" + " " + result);
        return result;
    };
    return Square;
}(Rectangle));
// Make Object from Rectangle
var rec1 = new Rectangle(3, 3);
rec1.WhoIam();
rec1.CalcCircumference();
// Make Object from Square
var Squ = new Square(4);
Squ.WhoIam();
Squ.CalcCircumference();
// Assign 2 
// a ======> Union Types
var unionType;
unionType = "Esraa";
unionType = true;
// unionType = 4  // Throw Error unionType doesn't take num
console.log(unionType);
// tpescript annotation in var
var age = 23; // number variable
var firstName = "Esraa"; // string variable
var isUpdated = true; // Boolean variable
var employee;
employee = {
    id: 100,
    name: "John"
};
// b =======> function that return type
function MultipleFun(x, y) {
    if (y === void 0) { y = 2; }
    var result = x * y;
    console.log(result);
    return result;
}
MultipleFun(5, 5);
MultipleFun(5); // taken second parameter from default parameter
function OverrideFun(A, B, C) {
    console.log(A);
    if (B != undefined) {
        console.log(B);
    }
    if (C != undefined) {
        console.log(C);
    }
}
OverrideFun("Esraa");
OverrideFun(20, "Esraa");
// OverrideFun( 20 , "Esraa" , 20)     // Throw error there isn't rule accepts that
OverrideFun(20, 40, 50);
var SpecialPerson = /** @class */ (function () {
    function SpecialPerson() {
    }
    SpecialPerson.prototype.DisplayInfo = function () {
        console.log("Hello From Special Person ");
    };
    return SpecialPerson;
}());
// e =====> Generic Function
function GenericFun(argument) {
    var arrOfT = [];
    arrOfT.push(argument);
    return arrOfT;
}
var arrayOfGenericString = GenericFun("hello");
console.log(arrayOfGenericString[0]);
console.log(typeof arrayOfGenericString[0]);
// F =======> Enum
var ListOfNames;
(function (ListOfNames) {
    ListOfNames[ListOfNames["Ali"] = 0] = "Ali";
    ListOfNames[ListOfNames["Mhmd"] = 1] = "Mhmd";
    ListOfNames[ListOfNames["Zain"] = 2] = "Zain";
})(ListOfNames || (ListOfNames = {}));
var specialNameFromList;
specialNameFromList = ListOfNames.Zain;
console.log(specialNameFromList);
