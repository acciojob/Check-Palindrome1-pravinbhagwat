// complete the given function

function palindrome(s){
	s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // iterate over string and compare characters from both ends
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  
  return true;
}
module.exports = palindrome
