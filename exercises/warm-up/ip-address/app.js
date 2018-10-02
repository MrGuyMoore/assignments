const validateIP = str => {
    str = str.split('.').map(e => Number(e))
    return str.length > 4 || str.length < 4 ? false : str.every(e => e <= 255 && e >= 0)
};


model.exports = validateIP();