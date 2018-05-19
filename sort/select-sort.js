function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            cTimes++
            if (arr[i] > arr[j]) {
                swap(arr, i, j)
            }
        }
    }
}

function swap(arr, q, j) {
    let temp = arr[q]
    arr[q] = arr[j]
    arr[j] = temp
    swapTimes++
}

let cTimes = 0
let swapTimes = 0
let arr1 = [2, 5, 1, 52, 35, 2, 5512, 64, 632, 24]


selectSort(arr1)
console.log(arr1)
console.log(cTimes)
console.log(swapTimes)