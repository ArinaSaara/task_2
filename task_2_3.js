function getIndexFormat(arr, item){
    return arr.indexOf(item)
}
function getDateItem(arr, index, label) {
    let today = new Date();
    if (label === 0)
        return index > -1  ? arr[index] : today.getFullYear();
    if (label === 1)
        return index > -1  ? arr[index] - 1 : today.getMonth();
    if (label === 2)
        return index > -1  ? (parseInt(arr[index]) + 1).toString(): today.getDate() + 1;
}

function getFormatDate(date, format) {
    let arrayDate = date.split(/[\s,./-]+/);
    let formatItems  = format.toLowerCase().split(/[\s,./-]+/);
    let indexFormat = [];
    let formatDate = ["mm", "dd", "yyyy"];
    for(let i = 0; i < formatDate.length; i++){
        indexFormat.push(getIndexFormat(formatItems, formatDate[i]))
    }
    return new Date(getDateItem(arrayDate,  indexFormat[2], 0), getDateItem(arrayDate, indexFormat[0], 1), getDateItem(arrayDate, indexFormat[1], 2));
}

function compareTwoDate(date1, date2){
    return date1.getTime() === date2.getTime() ? 'date1 = date2' : ' date1 != date2'
}

let d1 = getFormatDate("22/19/2016", "dd/mm/yyyy");
let d2 = getFormatDate("2016-12-22", "yyyy-mm-dd");
console.log(compareTwoDate(d1, d2));
