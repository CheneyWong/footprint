var quickSort = function(arr){

    if(arr.length <= 1){ return arr;}
    var pivotIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left = [];
    var right = [];
    for(var i=0 ; i< arr.length ; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
};


var arr =quickSort([89,67,34,45,564,234,546,657,234,56,6576,345,234,56,567,34,2,65,76,34,234,456,65]);
console.log(arr);