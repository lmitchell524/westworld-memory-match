import React from 'react';
import '../assets/css/app.css';

export function doubleArray(array, times = 2){

    const newArray = [];

    for(let count = 0; count < times; count++){
        for(let index = 0; index < array.length; index++){
            let jsonString = JSON.stringify(array[index]);
            let newObj = JSON.parse(jsonString);

            newArray.push(newObj);
        }
    }
    return newArray;
}
