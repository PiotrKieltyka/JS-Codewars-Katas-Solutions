// Given the string representations of two integers, return the string representation of the sum of those integers.
// For example:
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// my soultion

function sumStrings(a,b) {

    var result = [];
    a = a.replace(/^0+/, '');
    b = b.replace(/^0+/, '');
    a = a.split('').reverse();
    b = b.split('').reverse();
    
    for (var i = 0; (a[i] >= 0) || (b[i] >= 0); i++) {
        var sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

        if (!result[i]) { result[i] = 0; }

        var next = ((result[i] + sum) / 10) | 0;
        result[i] = (result[i] + sum) % 10;

        if (next) { result[i + 1] = next; }
    }
    
    return result.reverse().join('');
}
