const removeFromArray = function(array, ...numsToExclude) {
    return array.filter(e => !numsToExclude.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
