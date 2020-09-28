function checkPalindrome(str) {
  var str = str.replace(/[^a-zA-Z0-9]+/gi, "").toLowerCase();
  return str == str.split("").reverse().join("");
}
this.checkPalindrome("malayalam");
this.checkPalindrome("anything");
