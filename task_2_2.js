function wordsWithoutNumber(str) {
    return str.trim().toLocaleLowerCase().replace(/[0-9]/g, '').split(" ");
}
function wordsWithNumber(str) {
    return str.trim().toLocaleLowerCase().split(" ");
}

function createDictionaryTwoArray(arr1, arr2) {
    let result = {};
    for(let i = 0; i < arr1.length; i++){
        if (result[arr1[i]]) {
            result[arr1[i]].push(arr2[i]);
        } else {
            result[arr1[i]] = [arr2[i]];
        }
    }
    return result;
}

function sortDictionaryWords(o) {
    let resultDict = Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    let resultArray =  Object.values(resultDict);
    return [].concat.apply([], resultArray).join(" ");
}

function superSort(value) {
    let arrayWords1 = wordsWithoutNumber(value);
    let arrayWords2 = wordsWithNumber(value);
    return sortDictionaryWords(createDictionaryTwoArray(arrayWords1, arrayWords2));
}

let wordsString = 'mic09ha1el 4b5en6 michelle be4atr3ice';
console.log(superSort(wordsString));