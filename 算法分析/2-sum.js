const sum = (arr) => {
    let N = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0)
                N++
        }
    }
    return N
}

// 2-sum算法的核心是遍历数组中每个item，然后取相反数，利用二分查找法，在数组中查找该相反数（二分查找的前提是该数组是有序的，所以使用该方法需要先sort数组）
const sum_fast = (arr) => {
    let N = 0
    sort(arr)
    for (let i = 0; i < arr.length; i++) {
        let j = binarySearch(-arr[i], arr)
        if (j != -1 && j > i)
            N++
    }
    return N
}

const sort = (arr) => {
    arr.sort()
}

const binarySearch = (item, arr) => {
    let low = 0
    let high = arr.length - 1
    let mid = Math.ceil((low + high) / 2)
    while (low <= high) {
        if (item > arr[mid]) {
            low = mid + 1
        } else if (item < arr[mid]) {
            high = mid - 1
        } else {
            return mid
        }
        mid = Math.floor((low + high) / 2)
    }
    return -1
}


const arr = [1, 4, 2, -2, -4, 5, -5]

console.log(sum(arr))
console.log(sum_fast(arr))