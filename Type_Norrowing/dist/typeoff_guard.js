"use strict";
/* TypeOf Guard  */
function truncate(value, length) {
    if (typeof value === 'number') {
        return value.toString().slice(0, length);
    }
    else if (typeof value === 'string') {
        return value.slice(0, length);
    }
}
console.log(truncate('mick', 2));
console.log(truncate(123456, 2));
