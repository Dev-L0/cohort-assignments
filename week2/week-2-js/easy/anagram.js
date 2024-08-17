/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
     str1 = str1.toLowerCase();
     str2 = str2.toLowerCase();
    let arr1 = str1.split('');
    let arr2 = str2.split('');

    if (arr1.length !== arr2.length) {
        return false;
    } else {
        let a = arr1.sort();
        let b = arr2.sort();

        return a.toString() === b.toString();
    }
    

}

//console.log(isAnagram('hello', 'elloh'));

module.exports = isAnagram;