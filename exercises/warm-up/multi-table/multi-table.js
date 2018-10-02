const muliTable = () =>{
    const output = [];
    for (let row = 1; row <= 5; row ++) {
        output.push([]);
        for (let col = 1; col <= 5; col++) {
            output[row-1].push(row * col);
        }
    }
    return output
}

module.exports = muliTable();