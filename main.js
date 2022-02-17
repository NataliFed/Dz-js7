"use strict"

function sort(arg){

    var result = [];

    var length = arg.length;

    for(var i=1; i<=length; i++) {

        result.push(arg[length-i]);

    }

    return result;
}

console.log(sort( ["a", "b", "c", "d", "e"]));


