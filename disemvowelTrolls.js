// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// my solution

function disemvowel(str) {
  var arr = str.split("");
  var trolls = ['U','e','i','o','u','A','E','I','O','a'];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < trolls.length; j++) {
      if (arr[i] === trolls[j]) {
        arr.splice(i,1);
      }
    }
  }
  return arr.join('');
}
