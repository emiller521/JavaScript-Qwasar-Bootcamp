var my_average_mark = (data) => {
    if(!Array.isArray(data) || data.length === 0)
        return 0;
    var totalMark = data.reduce((acc, curr) => { acc += curr["integer"]; return acc; }, 0)
    var res = Math.round(totalMark/data.length);
    return res;
}
