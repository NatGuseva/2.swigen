//var arr_pus:number[] = [2,6,8,2,6,3,4,5,2,1,9,7,8,6,9];
//создаем массив нужного разера
function arr(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
    }
    return arr;
}
var arr_pus = arr(15);
console.log(arr_pus);
function puz(arr) {
    for (var j = arr.length - 1; j > 0; j--) {
        for (var i = 0; i <= j; i++) {
            if (arr[i] > arr[i + 1]) {
                var ind = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = ind;
            }
        }
    }
    return arr;
}
console.log(puz(arr_pus));
