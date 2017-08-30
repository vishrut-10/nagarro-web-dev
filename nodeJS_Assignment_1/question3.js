function forEach(array, callback)
{
    for (var i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
}

function map(array, callback)
{
    var arr = new Array(array.length);

    for (var i = 0; i < array.length; i++) {
        arr[i] = callback(array[i]);
    }

    return arr;
}

var square = function(i) {
    return i*i;
}

var arr = [1, 2, 3, 4];
var arr_b = [4, 5, 6, 7];

forEach(arr, square);
console.log(arr);

var arr2 = map(arr_b, square);
console.log(arr2);
