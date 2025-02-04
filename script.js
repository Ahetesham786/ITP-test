//3)Write a  program to find frequency of each digit in a given integer.
let abc = 787972

arr = []

while(abc>0)
{
    ld=abc%10
    arr.unshift(ld)
    abc=Math.floor(abc/10)
}
console.log(arr)

let a = 7;
let count = 0

let i=0
while(i<arr.length)
{
    if (a==arr[i]){
        count++
    }
    i++
}
console.log("frequency is: "+count)


// 1) perform buble sort algorithm for 
// [6,4,7,3,6,2,5,1]  using while


let arrr = [6, 4, 7, 3, 6, 2, 5, 1];

let j = 0;
while (j < arrr.length - 1) {
    let k = 0;
    while (k < arrr.length - 1 ) {
        if (arrr[k] > arrr[k + 1]) {
            let temp = arrr[k];
            arrr[k] = arrr[k + 1];
            arrr[k+ 1] = temp;
        }
        k++;
    }
    j++;
}

console.log(arrr);



