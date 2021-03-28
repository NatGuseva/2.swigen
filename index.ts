//var arr_pus:number[] = [2,6,8,2,6,3,4,5,2,1,9,7,8,6,9];
//создаем массив нужного разера
function arr (n:number):number[]{
    let arr:number[]=[]
    for (let i=0; i<n;i++){
        arr[i]=Math.floor(Math.random() * (100 - 1) + 1);
    }
    return arr;
}
let arr_pus:number[]=arr(15);
console.log(arr_pus);
//сортируем массив методом пузырька
function puz (arr:number[]):number[] {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i <= j; i++) {
            if (arr[i] > arr[i + 1]) {
                let ind = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = ind;
            }
        }
    }
    return arr;
}
console.log(puz(arr_pus));