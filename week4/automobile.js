/**
* @title    automobiles.js
*
* @desc     This program sorts arrays of objects based on ther properties using an arbitrary comparator and bubble sort. 
*           It outputs three arrays sorted by year, make, and type.
*
* @file     This files defines the MyClass class.
* @author   Marc Tibbs (933270515)
* @email    tibbsm@oregonstate.edu
* @class    CS290 - 400 - Winter 2018
*/

function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*
This function sorts arrays using an arbitrary comparator. 
You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object 
in index 0 and the smallest in the last index
*/
function sortArr(comparator, array){
    var result = new Array();

    // sorts arrays using an arbitrary comparator
    for (var i = 0; i < array.length; i++) {
        var vehicle = array[i].year;

        result.push(array[i]);
    }

    var swap;
    var n = result.length-1;

    do {
        swap = false;
        for (var i = 0; i < n; i++){
            if (comparator(result[i+1], result[i])){
               var temp = result[i];
               result[i] = result[i+1];
               result[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);

    // return a new array which is sorted
    return result;
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2){
    if (auto1.year > auto2.year)
        return true;
    else 
        return false;
}

/*
This compares two automobiles based on their make. 
It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.
*/
function makeComparator(auto1, auto2){
    var make1 = auto1.make.toUpperCase(); 
    var make2 = auto2.make.toUpperCase(); 

    if (make1 < make2) 
        return true;
    else 
        return false;
}

/*
This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). 
It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".
*/
function typeComparator(auto1, auto2){
    var type1 = auto1.type.toUpperCase(); 
    var type2 = auto2.type.toUpperCase(); 

    if (type1 == "ROADSTER")
        type1 = 0
    else if (type1 == "PICKUP")
        type1 = 1
    else if (type1 == "SUV")
        type1 = 2
    else if (type1 == "WAGON")
        type1 = 3
    else 
        type1 = 4

    if (type2 == "ROADSTER")
        type2 = 0
    else if (type2 == "PICKUP")
        type2 = 1
    else if (type2 == "SUV")
        type2 = 2
    else if (type1 == "WAGON")
        type2 = 3
    else 
        type2 = 4

    if (type1 < type2) 
        return true;
    else if (type1 == type2 && auto1.year > auto2.year)
        return true;
    else 
        return false;
}

/*
Your program should output the following to the console.log, including the opening and closing 5 stars. 
All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. 
This function should be added to the Automobile class and accept a single boolean argument. 
If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. 
If the argument is 'false' then the type is ommited and just the "year make model" is logged.
*/

Automobile.prototype.logMe = function(typer){ 
    if(typer)
        console.log(this.year + ' ' + this.make + ' ' + this.model + ' ' + this.type);
    else
        console.log(this.year + ' ' + this.make + ' ' + this.model);
};

console.log('*****');
console.log('The cars sorted by year are:');
var sorted = sortArr(yearComparator, automobiles);

for (var i = 0; i < sorted.length; i++){
    sorted[i].logMe(false);
}
console.log('');

console.log('The cars sorted by make are:');
sorted = sortArr(makeComparator, automobiles);

for (var i = 0; i < sorted.length; i++){
    sorted[i].logMe(false);
}
console.log('');

console.log('The cars sorted by type are:');
sorted = sortArr(typeComparator, automobiles);

for (var i = 0; i < sorted.length; i++){
    sorted[i].logMe(true);
}

console.log('*****');

/*
*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****
*/
