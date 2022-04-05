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

function tracing(plainText,cipherText){
    var  illustration = "<b>Tracing<br> <br>" ;
    for (var e = 0; e < plainText.length; e++)
      illustration += plainText[e] + "   &#8594  " + '<span style="color: red;">'+cipherText[e]+'</span>' + '<br>'
    return  illustration;  
}    
       //shift cipher
 function shift(){
              var select = document.getElementById('encryptionMethods');
              var value = select.options[select.selectedIndex].value;
        //get the value of the select      
    if(value == "shift"){
    	//input
	var m = document.getElementById("plainText").value;    
    var  k = document.getElementById('key1').value;

    if(m.length == 0){
        document.getElementById("plainText").value =  "required";
        return
    }    
    if(k.length == 0){
        document.getElementById("key1").value =  "required";
        return
    }    

//encryption
	var c = "";    
    var range = 
	for (var e = 0; e < m.length; e++){
      
        if( m[e] <='z' &&  m[e] >='a'){
            c += String.fromCharCode(((m[e].charCodeAt(0)-'a'.charCodeAt(0)+parseInt(k)) ) %26 + 'a'.charCodeAt(0))
            }
        else{  
            alert ("Just follow the range you chose.");return
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

    //inputs
var m = document.getElementById("plainText").value;
var  key1 = document.getElementById('key1').value;
var  b = document.getElementById('key2').value;

    if(m.length == 0){
            document.getElementById("plainText").value =  "required";
            return
        }
    if(b.length == 0){
        document.getElementById("key2").value =  "required";
        return
    }
    if(key1.length == 0){
        document.getElementById("key1").value =  "required";
        return
    }

if(value == "affine"){
//encryption
if( GCD(key1, 26) == 1 ){
var c = "";
        for (var e = 0; e < m.length; e++){
            if(  m[e] <='z' &&  m[e] >='a' )
                c += String.fromCharCode(((parseInt(key1)*(m[e].charCodeAt(0) - 'a'.charCodeAt(0)) + parseInt(b)) ) %26 + 'a'.charCodeAt(0))
            else{
                 alert ("Just follow the range you chose.");return
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

          //input
      var m = document.getElementById("plainText").value;
      var  k = document.getElementById('key1').value;
    
      
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
            if( m[e] <='z' &&  m[e] >='a'){
                c += String.fromCharCode(((m[e].charCodeAt(0)-'a'.charCodeAt(0)-parseInt(k)) ) %26 + 'a'.charCodeAt(0))
                }
            else{  
                alert ("Just follow the range you chose.");return
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
    //input
      var m = document.getElementById("plainText").value;
      var  k = document.getElementById('key1').value;
      var  b = document.getElementById('key2').value;

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
    if( m[e] <='z' &&  m[e] >='a' && inverseOfKey(parseInt(k),26) >= 1){
        c+= String.fromCharCode( (parseInt((inverseOfKey(parseInt(k), 26)) * ((m[e].charCodeAt(0) -'a'.charCodeAt(0))- parseInt(b))) % 26 + 26) %26+ 'a'.charCodeAt(0)  );
            }
        else{  
            alert("there is no inverse for"+ k);return;
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

        }
        else if(value == "upperCaseAlphabets"){
            if(valueOfEncryptionMethods == "shift")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub></sub>(m) = m + e mod 26 <br> D<sub>d</sub>(c) = c - d mod 26"
            else
            document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 26<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 26"

        }
        else{
            if(valueOfEncryptionMethods == "shift")
                 document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub></sub>(m) = m + e mod 52 <br> D<sub>d</sub>(c) = c - d mod 52"
            else
              document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 52<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 52"

        }

    }
    console.log("\u0049 \u0068\u006f\u0070\u0065 \u0074\u006f \u0066\u0069\u006e\u0064 \u0079\u006f\u0075\u0072 \u0068\u0065\u0061\u0076\u0065\u006e\u002e")