function subsum(arr, start, len) {
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(len > arr.length - 1){
        len = arr.length - 1;
    }

    let sum = 0;
    for (let i = start; i <= len; i++) {
        if(isNaN(arr[i])){
            return NaN;
        }

        sum += Number(arr[i]);
    }

    return Math.round(sum * 100) / 100;
}