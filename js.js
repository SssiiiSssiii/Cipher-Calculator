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
    illustration.innerHTML = tracing(m,c);
    document.getElementById("cipherText").value =  c ;
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
function substitution(){

    var cipherText = "";
    var plainText = document.getElementById("plainText").value;

    const codedAlphabet = [];
    for(var i =0 ;i<26; i++)
        codedAlphabet[i] = document.getElementsByClassName("coded")[i].value;

    for(var i =0 ;i<plainText.length; i++)
        cipherText += codedAlphabet[ lowerAlphabet.indexOf( plainText[i] ) ];

    document.getElementById("cipherText").value =  cipherText ;
    var illustration = document.getElementById("illustration") ;
    illustration.innerHTML = tracing(plainText,cipherText);
}
function dSubstitution(){

    var plainText = "";
    var cipherText = document.getElementById("plainText").value;
    const codedAlphabet = [];
    for(var i =0 ;i<26; i++){
        codedAlphabet[i] = document.getElementsByClassName("coded")[i].value;
    }
        
    for(var i =0 ;i<cipherText.length; i++)
    plainText += alphabet[ codedAlphabet.indexOf( cipherText[i] )  ];
        document.getElementById("cipherText").value =  plainText ;
        var illustration = document.getElementById("illustration") ;
        illustration.innerHTML = tracing(plainText,cipherText);
}
function hill(){

    var cipherText = "";
    var plainText = document.getElementById("plainText").value;

    var c1 = Number(document.getElementById("cell1").value);
    var c2 = Number(document.getElementById("cell2").value);
    var c3 = Number(document.getElementById("cell3").value);
    var c4 = Number(document.getElementById("cell4").value);
    var det = c1*c4-c2*c3;

if( GCD(det,26) == 1 ){

    if(plainText.length % 2 == 0){

            for(var i =0 ;i<plainText.length-1; i++){

            
                    cipherText += lowerAlphabet[ (c1*lowerAlphabet.indexOf( plainText[i] ) + c2*lowerAlphabet.indexOf( plainText[i+1] ))%26  ] ;
                    cipherText += lowerAlphabet[ ( c3*lowerAlphabet.indexOf(plainText[i] ) + c4*lowerAlphabet.indexOf( plainText[i+1]  ) ) % 26 ];
                
                i++;
                
            }
                document.getElementById("cipherText").value =  cipherText ;
                var illustration = document.getElementById("illustration") ;
                illustration.innerHTML = tracing(plainText,cipherText);
           
        }
        else
        alert("You need to add one more letter")
    }
else
alert("there is no inverse for the key ");return;

}
function dHill(){
    
    var c1 = Number(document.getElementById("cell1").value);
    var c2 = Number(document.getElementById("cell2").value);
    var c3 = Number(document.getElementById("cell3").value);
    var c4 = Number(document.getElementById("cell4").value);

    var det = c1*c4-c2*c3;
  

    var c4 = Number(document.getElementById("cell1").value)*inverseOfKey (det,26);
    var c2 = (-Number(document.getElementById("cell2").value)+26)*inverseOfKey (det,26);
    var c3 = (-Number(document.getElementById("cell3").value)+26)*inverseOfKey (det,26);
    var c1 = Number(document.getElementById("cell4").value)*inverseOfKey (det,26);

if( GCD(det,26) == 1 ){

        var cipherText = document.getElementById("plainText").value;
        var plainText = "";

    if(cipherText.length % 2 == 0){

            for(var i =0 ;i<cipherText.length-1; i++){

                plainText += lowerAlphabet[ (c1*lowerAlphabet.indexOf( cipherText[i] ) + c2*lowerAlphabet.indexOf( cipherText[i+1] ))%26  ] ;
                plainText += lowerAlphabet[ ( c3*lowerAlphabet.indexOf(cipherText[i] ) + c4*lowerAlphabet.indexOf( cipherText[i+1]  ) ) % 26 ];
                
                i++;
                
            }
                document.getElementById("cipherText").value =  plainText ;
                var illustration = document.getElementById("illustration") ;
                illustration.innerHTML = tracing(cipherText,plainText);
        }
        else
        alert("You need to add one more letter")
    }
    else
     alert("there is no inverse for the key ");return;
}
let xx = 0;
let plainText = document.getElementById("plainText")
function pressed(){
    plainText = document.getElementById("plainText").value;
    if(plainText.length != 0){

        document.getElementsByClassName("message")[xx].innerHTML = plainText[plainText.length-1];
        ++xx;
    }
      
    
}
function permutation(){

    var key =Number( document.getElementById('key1').value );
    var cipherText = "";
    var plainText = document.getElementById("plainText").value;
    const codedAlphabet = [];

        for(var i =0 ;i<key; i++)
            codedAlphabet[i] = document.getElementsByClassName("coded2")[i].value;
        

        for(var i =0 ;i<plainText.length; i++){
            for(var j = 0 ;j<key; j++){
                cipherText+= plainText[(codedAlphabet[j]-1)+i]
            }
            i+=5;
        }
    
        document.getElementById("cipherText").value =  cipherText ;
        var illustration = document.getElementById("illustration") ;
        illustration.innerHTML = tracing(plainText,cipherText);

}
function permutation(){

    var key =Number( document.getElementById('key1').value );
    var cipherText = "";
    var plainText = document.getElementById("plainText").value;
    const codedAlphabet = [];

        for(var i =0 ;i<key; i++)
            codedAlphabet[i] = document.getElementsByClassName("coded2")[i].value;
        

        for(var i =0 ;i<plainText.length; i++){
            for(var j = 0 ;j<key; j++){
                cipherText+= plainText[(codedAlphabet[j]-1)+i]
            }
            i+=5;
        }
    
        document.getElementById("cipherText").value =  cipherText ;
        var illustration = document.getElementById("illustration") ;
        illustration.innerHTML = tracing(plainText,cipherText);

}
function dPermutation(){

    var key = Number( document.getElementById('key1').value );
    var plainText = "";
    var cipherText = document.getElementById("plainText").value;
    const codedAlphabet = [];
    const inverseAlphabet = [];
    

        for(var i =0 ;i<key; i++)
            codedAlphabet[i] = Number(document.getElementsByClassName("coded2")[i].value);

        for(var i =0 ;i<key; i++)
            inverseAlphabet[i] = codedAlphabet.indexOf(i+1)+1;
     
        
        for(var i =0 ;i<cipherText.length; i++){
            for(var j = 0 ;j<key; j++){
                plainText += cipherText[(inverseAlphabet[j]-1)+i]
            }
            i+=5;
        }
  
        document.getElementById("cipherText").value =  plainText ;
        var illustration = document.getElementById("illustration") ;
        illustration.innerHTML = tracing(cipherText,plainText);

}
function vigenere(){

    var cipherText = "";
    var  plainText = document.getElementById("plainText").value;
    var  k = document.getElementById('key1').value;
    while(plainText.length>k.length){
        k += k
    }

    for(var i =0 ;i<plainText.length; i++){
       cipherText += lowerAlphabet[((lowerAlphabet.indexOf(plainText[i])+lowerAlphabet.indexOf(k[i]) )% 26 + 26 )%26]
    }
        document.getElementById("cipherText").value =  cipherText ;
        var illustration = document.getElementById("illustration") ;
        illustration.innerHTML = tracing(plainText,cipherText);
}
function dVigenere(){

    var cipherText = document.getElementById("plainText").value;
    var  plainText = "";
    var  k = document.getElementById('key1').value;
    while(cipherText.length>k.length){
        k += k
    }

    for(var i =0 ;i<cipherText.length; i++){
        plainText += lowerAlphabet[((lowerAlphabet.indexOf(cipherText[i])-lowerAlphabet.indexOf(k[i]) )% 26 + 26 )%26]
    }
        document.getElementById("cipherText").value =  plainText ;
        var illustration = document.getElementById("illustration") ;
        illustration.innerHTML = tracing(plainText,cipherText);
}

function clear(){
             
            document.getElementById('plainText').value = "";
            document.getElementById('cipherText').value = "";
            document.getElementById('key1').value = "";
            document.getElementById('key2').value = "";
            document.getElementById('illustration').innerHTML = ""; 
}

    //switch bettwen fns
    function display(){
        var select = document.getElementById('encryptionMethods');
        var value = select.options[select.selectedIndex].value;
        if(value == "affine"){
            switchBetweenRanges()
            document.getElementById('SubstitutionTable').style.display = "none"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('permutationTable').style.display = "none"
             document.getElementById('key2').disabled = false;
             document.getElementById('key1').disabled = false;
            document.getElementById('button').onclick = affine;
            document.getElementById('swap').onclick = daffine;
            clear();
            
        }
        else if(value == "shift"){
            switchBetweenRanges()
            document.getElementById('key1').disabled = false;
            document.getElementById('key2').disabled = true;
            document.getElementById('SubstitutionTable').style.display = "none"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('permutationTable').style.display = "none"
            document.getElementById('button').onclick = shift;
            document.getElementById('swap').onclick = dShift;
            clear();
            
        }
        else if(value == "substitution"){
            switchBetweenRanges()
            document.getElementById('SubstitutionTable').style.display = "block"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('permutationTable').style.display = "none"
            document.getElementById('key2').disabled = true;
            document.getElementById('key1').disabled = true;
            document.getElementById('button').onclick = substitution;
            document.getElementById('swap').onclick = dSubstitution;
            clear();
        }
        else if(value == "vigenere"){
            switchBetweenRanges()
            document.getElementById('key1').disabled = false;
            document.getElementById('SubstitutionTable').style.display = "none"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('permutationTable').style.display = "none"
            document.getElementById('key1').type = "text"
            document.getElementById('key2').disabled = true;
            document.getElementById('button').onclick = vigenere;
            document.getElementById('swap').onclick = dVigenere;
            clear();
        }
        else if(value == "hill"){
            switchBetweenRanges()
            document.getElementById('key1').disabled = true;
            document.getElementById('key2').disabled = true;
            document.getElementById('SubstitutionTable').style.display = "none"
            document.getElementById('hillMatTable').style.display = "block"
            document.getElementById('permutationTable').style.display = "none"
            document.getElementById('button').onclick = hill;
            document.getElementById('swap').onclick = dHill;
            clear();
        }
        else if(value == "permutation"){
            switchBetweenRanges()
            document.getElementById('key2').disabled = true;
            document.getElementById('key1').disabled = false;
            document.getElementById('permutationTable').style.display = "block"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('button').onclick = permutation;
            document.getElementById('key1').onkeyup = createTable;
            document.getElementById('swap').onclick = dPermutation;
            clear();
        }
    }
    function createTable () {
        var  key =Number( document.getElementById('key1').value );        
        let st = "<table>";
        for(var i =0 ;i<key; i++){ 
            st+="</tr><td>"+(i+1)+" &#8594 </td><td class><input class = 'coded2' type = number min = 1></td></tr>";
        }
        st += "</table>"
        document.getElementById("permutationTable").innerHTML = st; 
    }
    

    function switchBetweenRanges(){
        var Range = document.getElementById('Range');
        var value = Range.options[Range.selectedIndex].value;

        var encryptionMethods = document.getElementById('encryptionMethods');
        var valueOfEncryptionMethods = encryptionMethods.options[encryptionMethods.selectedIndex].value;

        if(value == "lowerCaseAlphabets"){ 
            if(valueOfEncryptionMethods == "shift")
                  document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(m) = m + e mod 26 <br> D<sub>d</sub>(c) = c - d mod 26"
            else   if(valueOfEncryptionMethods == "substitution")
                  document.getElementById("encryptEquation").innerHTML = " E<sub>&#960;</sub>(m) = &#960; (m) <br> D<sub>&#960;=(a,b)</sub>(c) =  &#960;<sup>-1</sup>(c)"
            else   if(valueOfEncryptionMethods == "vigenere")
                 document.getElementById("encryptEquation").innerHTML = "  E<sub>e</sub>((m1,…,mn))=(m1+k1,…,mn+kn )<br>D<sub>d</sub>((c1,…,cn))=(c1-k1…,cn-kn )"
            else   if(valueOfEncryptionMethods == "hill")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(m)=me<br>D<sub>d(c)=ce<sup>-1</sup>"
            else
                 document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 26<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 26"
            return 26;
            Ee

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



    // console.log("\u0049 \u0068\u006f\u0070\u0065 \u0074\u006f \u0066\u0069\u006e\u0064 \u0079\u006f\u0075\u0072 \u0068\u0065\u0061\u0076\u0065\u006e\u002e")