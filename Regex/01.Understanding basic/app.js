
let txt = "Programming courses always starts with a hello world example."


//  Regex Syntax
let regex1 = new RegExp(/hello/);
let regex2 = /world/;  


//  Basic Syntax
console.log(regex1.exec(txt));

console.log(regex2.text(txt)); // Return Boolean whether it match or not

// Both are same regex.exec & string.match
console.log(regex2.exec(txt)); // return an array of regex, index & inputs if it's not return null
console.log(txt.match(regex2)); // return an array of regex, index & inputs if it's not return null


console.log(txt.search(regex2)); // return the index of the string in the text or return -1
console.log(txt.replace(regex2,'Bhummi')); // replace the the search value by replace value

//  Flags

//  /pattern/flags or new Regex('pattern','flags')
// g- global match check for all occurence 
// i - case insensitive match, case doen't matter
// m - multi-line match, check the first and last character of the string effective with(^ - start) or ($ - end) 
let regex3= 
console.log(txt.match())


// META-CHARACTERS 
//  ^$.*+?=!:|\/()[]{}

//  . - any character except newline
//  \ - Skip the specical character eg: /ram\@/ checks ram@ is there or not



// Controlled Characters



// Character Set Shorthand

// \d [0-9] - number char
// \D [^0-9] - Non number char
// \w [a-zA-Z0-9_] - word
// \s [\t\r\n] - WhiteSpace area
// \S [^\t\r\n] - Non WhiteSpace area