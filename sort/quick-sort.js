/*
    快速排序使用了一种分治策略，这种策略具体就是将一个大的问题，分解成一个个小问题，直到问题被分解到足够小的临界点，
    然后通过在局部解决这些小问题，从而在整体上解决了这个问题。
    这种策略，一个要点就是确定最小问题的状态。
    在将分治策略应用到快速排序上时，首先需要确定的是一个基准，这个基准是该数组中的一个随机项，通过遍历将小于这个基准的
    数放在基准的左边，大于这个基准的数放在右边，等于的放在左右都可以，通过这一个过程就可以把数组分割成两个部分，左边的部分都比基准小， 右边的
    部分都比基准大。然后在这两个部分中分别继续这个过程，直到这个部分已经足够小不能再继续分解了为止。这时整个数组都已经是有序的了
*/


const quickSort = (arr) => {
    const partition = (arr, left, right) => {
        let storeIndex = left
        let pivot = arr[left]
        for (let i = left + 1; i <= right; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, ++storeIndex)
            }
        }
        swap(arr, left, storeIndex)
        return storeIndex
    }
    const sort = (arr, left, right) => {
        if (left < right) {
            let pivotIndex = partition(arr, left, right)
            sort(arr, left, pivotIndex - 1)
            sort(arr, pivotIndex + 1, right)
        }
    }
    const swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    sort(arr, 0, arr.length - 1)
    return arr
}

const arr = [2, 4, 2, 5, 2, 6, 3, 2, 1, 6, 7929, 6]
console.log(quickSort(arr))


// function quickSort(arr) {
//     // 交换元素
//     function swap(arr, a, b) {
//         var temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
//     }

//     function partition(arr, left, right) {
//         var pivot = arr[left];
//         var storeIndex = left;

//         for (var i = left + 1; i <= right; i++) {
//             if (arr[i] < pivot) {
//                 swap(arr, ++storeIndex, i);
//             }
//         }

//         swap(arr, left, storeIndex);

//         return storeIndex;
//     }

//     function sort(arr, left, right) {
//         if (left < right) {
//             var storeIndex = partition(arr, left, right);
//             sort(arr, left, storeIndex - 1);
//             sort(arr, storeIndex + 1, right);
//         }
//     }

//     sort(arr, 0, arr.length - 1);

//     return arr;
// }

// console.log(quickSort([6, 7, 3, 4, 1, 5, 9, 2, 8]))