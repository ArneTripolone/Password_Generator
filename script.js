//Characters to be used in the generated password
var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*()_+';

//Element Ids expressed as variables
var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var generate = document.getElementById("generate");
var yourPw = document.getElementById("password");

/*Event listener that checks if boxes have been checked. 
charNum gets the value of the specified password length and sends it to the password function.*/
generate.addEventListener("click",function(e){
  var characters = char;
  (numBox.checked) ? characters += num : '';
  (symBox.checked) ? characters += sym : '';
  yourPw.value = password(charNum.value, characters); 
}); 

//Characters from char, num and sym are passed into the password function.
function password(l,characters){
  var pwd = '';

  /*charAt in this for loop will pick random characters from char num and sym, 
  and pass them into pwd according to the length of the desired password (l).*/
  for(var i = 0; i<l; i++){
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd; 
}