/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
const normalize = (str)=> str.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
if (normalize(str1)===normalize(str2)){
  console.log('true');
}
}

export default isAnagram;
let a="silent";
let b="listen";
isAnagram(a,b);

