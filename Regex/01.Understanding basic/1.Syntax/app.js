
let txt = "Programming courses always starts with a hello world example."


//  Regex Syntax
let regex1 = new RegExp("hello");
let regex2 = /world/;  



console.log(regex1.exec(txt));

console.log(regex2.text(txt)); // Return Boolean whether it match or not

// Both are same regex.exec & string.match
console.log(regex2.exec(txt)); // return an array of regex, index & inputs if it's not return null
console.log(txt.match(regex2)); // return an array of regex, index & inputs if it's not return null


console.log(txt.search(regex2)); // return the index of the string in the text or return -1
console.log(txt.replace(regex2,'Bhummi')); // replace the the search value by replace value