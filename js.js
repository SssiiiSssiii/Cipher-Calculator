const lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const alphabet      = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function GCD(key, range){
    if (key == 0)
        return range;
    return GCD(range % key, key);
}
function inverseOfKey(key, range) {
    if (GCD(key, range) == 1) {
        y = 1;
        inverse = (range * y + 1) / key;
        while (inverse % 1 !== 0) {
            y++;
            inverse = (range * y + 1) / key;
        }    
        return inverse;
    }    
    return -1;
}    

function checkThefieldsIsnotEmpty(m,k){
    if(m.length == 0){
      alert("Please enter the values in the fields")
        return false;
    }    
    if(k.length == 0){
         alert("Please enter the values in the fields")
        return false
    }
    return true    
}
function checkThefieldsIsnotEmpty2(m,k,b){
    if(b.length == 0){
        alert("Please enter the values in the fields")
        return false
    }
    if(checkThefieldsIsnotEmpty(m,k))
        return true  
        return false 

}
function tracing(plainText,cipherText){
    var  illustration = "<b>Tracing<br> <br>" ;
    for (var letter = 0; letter < plainText.length; letter++)
      illustration += plainText[letter] + "   &#8594  " + '<span style="color: red;">'+cipherText[letter]+'</span>' + '<br>'
    return  illustration;  
}    
       //shift cipher
 function shift(){
              var select = document.getElementById('encryptionMethods');
              var value = select.options[select.selectedIndex].value;

              var Range = document.getElementById('Range');
              var valueOFRange = Range.options[Range.selectedIndex].value;
      
        //get the value of the select      
    if(value == "shift"){
    	//input
	var m = document.getElementById("plainText").value;    
    var  k = document.getElementById('key1').value;
    var mod = switchBetweenRanges ();

    if(!checkThefieldsIsnotEmpty(m,k))
        return

//encryption
	var c = "";    
	for (var e = 0; e < m.length; e++){
      
        if(valueOFRange == 'lowerCaseAlphabets'){
            if(m[e] >= 'a' && m[e] <= 'z')
              c += lowerAlphabet[((lowerAlphabet.indexOf(m[e])+parseInt(k)) % mod + mod )%mod]
            else{  
                alert ("Just follow the range you chose.");return
            }    
        }
        
        else if(valueOFRange == 'upperCaseAlphabets'){
            if(m[e] >= 'A' && m[e] <= 'Z')
              c += upperAlphabet[((upperAlphabet.indexOf(m[e])+parseInt(k)) % mod + mod )%mod]
            else{  
                alert ("Just follow the range you chose.");return
            }    
        }
        else{
            if(m[e] >= 'A' && m[e] <= 'Z' || m[e] >= 'a' && m[e] <= 'z')
              c += alphabet[((alphabet.indexOf(m[e])+parseInt(k)) % mod + mod )%mod]
            else{  
                alert ("Just follow the range you chose.");return
            }    
        }
    }    

    var illustration = document.getElementById("illustration") ;
    document.getElementById("cipherText").value =  c ;
        illustration.innerHTML = tracing(m,c);
    }    
}    

// affine
function affine(){
   //get the value of the select
var select = document.getElementById('encryptionMethods');
var value = select.options[select.selectedIndex].value;
var Range = document.getElementById('Range');
var valueOFRange = Range.options[Range.selectedIndex].value;
    //inputs
var m = document.getElementById("plainText").value;
var  key1 = document.getElementById('key1').value;
var  b = document.getElementById('key2').value;
var mod = switchBetweenRanges ();

    if(!checkThefieldsIsnotEmpty2(m,key1,b))
        return

if(value == "affine"){
//encryption
if( GCD(key1, 26) == 1 ){
var c = "";

            for (var e = 0; e < m.length; e++){
                
                if(valueOFRange == 'lowerCaseAlphabets'){
                    if(m[e] >= 'a' && m[e] <= 'z')
                    c += lowerAlphabet[((lowerAlphabet.indexOf(m[e])*parseInt(key1)+parseInt(b)) % mod + mod )%mod]
                    else{  
                        alert ("Just follow the range you chose.");return
                    }    
                }
                
                else if(valueOFRange == 'upperCaseAlphabets'){
                    if(m[e] >= 'A' && m[e] <= 'Z')
                    c += upperAlphabet[((upperAlphabet.indexOf(m[e])*parseInt(key1)+parseInt(b)) % mod + mod )%mod]
                    else{  
                        alert ("Just follow the range you chose.");return
                    }    
                }
                else{
                    if(m[e] >= 'A' && m[e] <= 'Z' || m[e] >= 'a' && m[e] <= 'z')
                    c += alphabet[((alphabet.indexOf(m[e])*parseInt(key1)+parseInt(b)) % mod + mod )%mod]
                    else{  
                        alert ("Just follow the range you chose.");return
                    }    
                }
            }    
          illustration.innerHTML = tracing(m,c);
        } 
        else
              alert("there is no inverse for "+ key1);return;
    }
}

//decrypt shift cipher
    function dShift(){
     
    var select = document.getElementById('encryptionMethods');
    var value = select.options[select.selectedIndex].value;
    var Range = document.getElementById('Range');
    var valueOFRange = Range.options[Range.selectedIndex].value;

          //input
      var m = document.getElementById("plainText").value;
      var  k = document.getElementById('key1').value;
      var mod = switchBetweenRanges ();
    
      
    if(m.length == 0 ){
        document.getElementById("plainText").value =  "required";
        return
    }
    if(k.length == 0){
        document.getElementById("key1").value =  "required";
        return
    }
    
    if(value == "shift"){
        var c = ""
        //decryption
        for (var e = 0; e < m.length; e++){
      
            if(valueOFRange == 'lowerCaseAlphabets'){
                if(m[e] >= 'a' && m[e] <= 'z')
                  c += lowerAlphabet[((lowerAlphabet.indexOf(m[e])-parseInt(k)) % mod + mod )%mod]
                else{  
                    alert ("Just follow the range you chose.");return
                }    
            }
            
            else if(valueOFRange == 'upperCaseAlphabets'){
                if(m[e] >= 'A' && m[e] <= 'Z')
                  c += upperAlphabet[((upperAlphabet.indexOf(m[e])-parseInt(k)) % mod + mod )%mod]
                else{  
                    alert ("Just follow the range you chose.");return
                }    
            }
            else{
                if(m[e] >= 'A' && m[e] <= 'Z' || m[e] >= 'a' && m[e] <= 'z')
                  c += alphabet[((alphabet.indexOf(m[e])-parseInt(k)) % mod + mod )%mod]
                else{  
                    alert ("Just follow the range you chose.");return
                }    
            }
        }       
            document.getElementById("cipherText").value =  c ;
        }
        illustration.innerHTML = tracing(m,c);
    }
  
    
//decrypt affine cipher
function daffine(){
    //get the value of select
     var select = document.getElementById('encryptionMethods');
     var value = select.options[select.selectedIndex].value;
     var Range = document.getElementById('Range');
     var valueOFRange = Range.options[Range.selectedIndex].value;

    //input
      var m = document.getElementById("plainText").value;
      var  k = document.getElementById('key1').value;
      var  b = document.getElementById('key2').value;
      var mod = switchBetweenRanges ();
      if(m.length == 0){
        document.getElementById("plainText").value =  "required";
        return
    }
        if(b.length == 0){
            document.getElementById("key2").value =  "required";
            return
        }
       if(k.length == 0){
            document.getElementById("key1").value =  "required";
            return
        }
    
    if(value == "affine"){
    var c = "";
    //decryption
    
    for (var e = 0; e < m.length; e++){
                
        if(valueOFRange == 'lowerCaseAlphabets'){
            if(m[e] >= 'a' && m[e] <= 'z')
            c += lowerAlphabet[((inverseOfKey(parseInt(k), mod)*(lowerAlphabet.indexOf(m[e])-parseInt(b))) % mod + mod )%mod]
            else{  
                alert ("Just follow the range you chose.");return
            }    
        }
        
        else if(valueOFRange == 'upperCaseAlphabets'){
            if(m[e] >= 'A' && m[e] <= 'Z')
            c += upperAlphabet[((inverseOfKey(parseInt(k), mod)*(upperAlphabet.indexOf(m[e])-parseInt(b))) % mod + mod )%mod]
            else{  
                alert ("Just follow the range you chose.");return
            }    
        }
        else{
            if(m[e] >= 'A' && m[e] <= 'Z' || m[e] >= 'a' && m[e] <= 'z')
            c += alphabet[((inverseOfKey(parseInt(k), mod)*(alphabet.indexOf(m[e])-parseInt(b))) % mod + mod )%mod]
            else{  
                alert ("Just follow the range you chose.");return
            }    
        }
    }    
        document.getElementById("cipherText").value =  c ;
        illustration.innerHTML = tracing(m,c);
    }
}

    //switch bettwen fns
    function display(){
        
        var select = document.getElementById('encryptionMethods');
        var value = select.options[select.selectedIndex].value;
        if(value == "affine"){
            switchBetweenRanges()
             document.getElementById('key2').disabled = false;
            document.getElementById('button').onclick = affine;
            document.getElementById('swap').onclick = daffine;
            document.getElementById('plainText').value = "";
            document.getElementById('cipherText').value = "";
            document.getElementById('key1').value = "";
            document.getElementById('key2').value = "";
            document.getElementById('illustration').innerHTML = "";
            
        }
        else if(value == "shift"){
            switchBetweenRanges()
            document.getElementById('key2').disabled = true;
            document.getElementById('button').onclick = shift;
            document.getElementById('swap').onclick = dShift;
            document.getElementById('plainText').value = "";
            document.getElementById('cipherText').value = "";
            document.getElementById('key1').value = "";
            document.getElementById('key2').value = "";
            document.getElementById('illustration').innerHTML = "";
            
        }
    }

    function switchBetweenRanges(){
        var Range = document.getElementById('Range');
        var value = Range.options[Range.selectedIndex].value;

        var encryptionMethods = document.getElementById('encryptionMethods');
        var valueOfEncryptionMethods = encryptionMethods.options[encryptionMethods.selectedIndex].value;

        if(value == "lowerCaseAlphabets"){ 
            if(valueOfEncryptionMethods == "shift")
                  document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub></sub>(m) = m + e mod 26 <br> D<sub>d</sub>(c) = c - d mod 26"
            else
                 document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 26<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 26"
            return 26;
        }
        else if(value == "upperCaseAlphabets"){
            if(valueOfEncryptionMethods == "shift")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub></sub>(m) = m + e mod 26 <br> D<sub>d</sub>(c) = c - d mod 26"
            else
            document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 26<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 26"
            return 26;
        }
        else{
            if(valueOfEncryptionMethods == "shift")
                 document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub></sub>(m) = m + e mod 52 <br> D<sub>d</sub>(c) = c - d mod 52"
            else
              document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 52<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 52"
            return 52;
        }

    }
    console.log("\u0049 \u0068\u006f\u0070\u0065 \u0074\u006f \u0066\u0069\u006e\u0064 \u0079\u006f\u0075\u0072 \u0068\u0065\u0061\u0076\u0065\u006e\u002e")