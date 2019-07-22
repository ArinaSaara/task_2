function findUniqNumber(arr) {
    let resultUniqNumber = new Set();
    for(let i=0; i < arr.length; i++) {
        let v = arr[i];
        if(resultUniqNumber.has(v)) {
            resultUniqNumber.delete(v);
        } else {
            resultUniqNumber.add(v);
        }
    }
    let a = [], x = 0;
    resultUniqNumber.forEach(function(v) { a[x++] = v; });
    return a;
}

let array = [1, 1, 1, 1.0, 1.9, 1, 1, 1.9, 4, 1, 1, 1.0, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 5, 4, 4, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 5, 4, 4, 6, 6, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 5, 4, 4, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 5, 4, 4, 6, 6, 1, 1, 1, 1];
console.log(findUniqNumber(array));