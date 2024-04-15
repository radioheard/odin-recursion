function fibs(num) {
    let first = 0;
    let sec = 1;
    let sum;
    let arr = []
    if (num == 1) {
        arr.push(first)
        return arr;
    } else if (num == 2) {
        arr.push(first)
        arr.push(sec)
        return arr
    } else {
        arr = [0, 1]
        for (let i = 2; i < num; i++) {
            
            sum = first + sec;
            arr.push(sum)
            first = sec
            sec = sum
            
        }
        return arr
    }
}

function fibsRec(num) {
    if (num == 1) {
        return [0];
    }
    if (num == 2) {
        return [0,1]
    } else {
        return [...fibsRec(num-1), fibsRec(num-1)[num - 2] + fibsRec(num-1)[num - 3]];
    }
  }

