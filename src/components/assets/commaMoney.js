const numberComma = (x) => {
    if (x === null || x === undefined || isNaN(x)) {
        return '';
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default numberComma;
