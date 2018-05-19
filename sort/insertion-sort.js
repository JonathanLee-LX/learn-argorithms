// 插入算法的思路
/*
    插入算法的过程类似于给扑克牌排序，我们会将已经拿到的牌按照从小到大的顺序排列，后续每拿到一张牌，我们都回先和已有的牌中最大的一张牌比较
    如果该新牌比已有最大的牌小，那么就将这张牌插入到该最大牌的前面， 然后，将这张已经插入的牌与他前面的牌在进行一次比较，如果小于前面一张牌，
    那么继续上一个过程，如果大于前面一张牌，则不做插入，并结束这次比较，然后继续抓新牌，重复这个过程

*/

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j > 0 && less(arr[j], arr[j - 1]); j--) {
            swap(arr, j, j - 1)
            times++
        }
    }
}

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const less = (a, b) => a < b

let arr = [2, 5, 1, 52, 35, 2, 5512, 64, 632, 24]
let times = 0
// let swapTimes = 0
insertionSort(arr)
console.log(arr)
console.log(times)
// console.log(swapTimes)