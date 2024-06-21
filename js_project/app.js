// STRINGS
function reverseString(s) {
    return s.split("").reverse().join("");
}

console.log(reverseString("hello"));

function countCharacters(s) {
    return s.length;
}

console.log(countCharacters("hello")); 

function capitalizeWords(s) {
    return s.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords("hello world")); 