
class MinMax {
    constructor(min, max) {
        this.min = min
        this.max = max
    }
}


function getMinMax(low, high, arr) {

    let arrMin, arrMax

    // If there is only one element 
    if (low == high) {
        arrMin = arr[low]
        arrMax = arr[low]
        return new MinMax(arrMin, arrMax)
    }

    // If there is only two element
    if (high == low + 1) {
        if (arr[low] > arr[high]) {
            arrMin = arr[high]
            arrMax = arr[low]
        } else {
            arrMin = arr[low]
            arrMax = arr[high]
        }
        return new MinMax(arrMin, arrMax)
    }

    // If there are more than 2 elements
    else {
        let mid = Math.floor((low + high) / 2)
        let minMax1 = getMinMax(low, mid, arr)
        let minMax2 = getMinMax(mid + 1, high, arr)
        return new MinMax(Math.min(minMax1.min, minMax2.min), Math.max(minMax1.max, minMax2.max))
    }

}


function init(coordinates) {

    let xArray = coordinates.map(item => item[0])
    let yArray = coordinates.map(item => item[1])

    let xArrayMinMax = getMinMax(0, xArray.length - 1, xArray)
    let yArrayMinMax = getMinMax(0, yArray.length - 1, yArray)

    console.log(
        'the box coordinates are: ',
        [xArrayMinMax.min, yArrayMinMax.min],
        [xArrayMinMax.min, yArrayMinMax.max],
        [xArrayMinMax.max, yArrayMinMax.min],
        [xArrayMinMax.max, yArrayMinMax.max],
    )

}


// for example
let coordinates = [[2, 4], [5, 6], [100, 200], [5, 100], [-50, 50], [10, 20]]
init(coordinates)

