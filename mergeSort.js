function merge (arr1, arr2) {
    let i = 0
    let j = 0
    let mergeArr = []
    let k = 0

    while (i<arr1.length && j<arr2.length) {if(arr1[i]<arr2[j]) {
            mergeArr[k++]=arr1[i++]
        } else {
            mergeArr[k++]=arr2[j++]
        }
    }
    for (;i<arr1.length; i++) {
        mergeArr[k++]=arr1[i++];
    }
    for (;j<arr2.length; j++) {
        mergeArr[k++]=arr2[j++];
    }
    return mergeArr
}

function mergeSort (arr){
    let mid = Math.floor(arr.length / 2)
    let left =arr.slice(0, mid);
    let right = arr.slice(mid, arr.length)
    
    if(arr.length === 1) {
        return arr

    } else {
        return merge(mergeSort(left), mergeSort(right));
    }
    
}


let sampleArr = [3, 2, 1, 13, 8, 5, 0, 1]

console.log(mergeSort(sampleArr))