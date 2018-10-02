const checkDataTypes = arr => {
    const firstDataType = typeof arr[0][0];
    return arr.every(nestedArray =>
        nestedArray.every(el =>
        typeof el === firstDataType));
};

module.exports = checkDataTypes();




