// function getting element by id

function getByID(elm) {
    return document.getElementById(elm);
}

// function for get value from the input feiled and return it as a numer
function inputFeildToNumber(fieldName) {
    const feild = getByID(fieldName);
    const feildInString = feild.value;

    if (feildInString === "") {
        alert("you have to inseart atleat a single value");
        return;
    }

    const feildInNumber = parseFloat(feildInString);
    if (feildInNumber <= 0) {
        alert("Please enter a number that greater than zero");
        return;
    }

    return feildInNumber;
}

// function for get the innerText of an HTML element and return it as a number

function innerTextToNumber(elementID) {
    const element = getByID(elementID);
    const elementText = element.innerText;
    const numberFromString = parseFloat(elementText);

    return numberFromString;
}

// setting up value of an elemenrt

function setValue(whereToSet, WhatToSet) {
    const where = getByID(whereToSet);
    const previousValue = innerTextToNumber(whereToSet);

    where.innerText = previousValue + WhatToSet;
}