const lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const alphabet      = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var message;
var cipherMessage;
var  key = 0;

function GCD ( key , range ) {
    if ( key == 0 )
        return range;
    return GCD ( range % key , key );
}
function inverseOfKey ( key , range) {
    if ( GCD ( key , range ) == 1 ) {
        y = 1;
        inverse = ( range * y + 1 ) / key;
        while ( inverse % 1 !== 0 ) {
            y++;
            inverse = ( range * y + 1 ) / key;
        }    
        return inverse;
    }    
    return -1;
}  

function  isEmpty ( message , key ) {
    if ( message.length == 0 ) {
        alert ( "Please enter the values in the fields" )
        return false;
    }    
    if ( key.length == 0 ) {
        alert ( "Please enter the values in the fields" )
        return false;
    }
    return true;    
}

function checkThefieldsIsnotEmpty2 ( message , key , b) {
    if(b.length == 0) {
        alert("Please enter the values in the fields")
        return false
    }
    if( isEmpty(message,key))
        return true  
        return false 

}
function tracing ( plainText , cipherText ) {
    var  illustration = "<b>Tracing<br> <br>" ;
    for (var letter = 0; letter < plainText.length; letter++)
      illustration += plainText[letter] + "   &#8594  " + '<span style="color: red;">'+cipherText[letter]+'</span>' + '<br>'
    return  illustration;  
}    

    //Get Values
function getValues() {
    message = document.getElementById("plainText").value;
    cipherMessage = ""
    key = document.getElementById("key1").value;
}
 //Clear Inputs
function clear() { 
    document.getElementById('plainText').value = "";
    document.getElementById('cipherText').value = "";
    document.getElementById('key1').value = "";
    document.getElementById('key2').value = "";
    document.getElementById('illustration').innerHTML = ""; 
}

//Shift cipher
function shift() {

var select = document.getElementById('encryptionMethods');
var value = select.options[select.selectedIndex].value;
var Range = document.getElementById('Range');
var valueOFRange = Range.options[Range.selectedIndex].value;

getValues();

if(value == "shift") {
    var mod = switchBetweenRanges();
    if( !isEmpty(message,key))
        return;

//encryption    
	for (var e = 0; e < message.length; e++) {
        if(valueOFRange == 'lowerCaseAlphabets') {
            if(message[e] >= 'a' && message[e] <= 'z')
                cipherMessage += lowerAlphabet[((lowerAlphabet.indexOf(message[e]))+key % mod + mod )%mod]
            else {  
                alert ("Just follow the range you chose.");return
            }    
        }
        else if(valueOFRange == 'upperCaseAlphabets') {
            if(message[e] >= 'A' && message[e] <= 'Z')
              cipherMessage += upperAlphabet[((upperAlphabet.indexOf(message[e])+key) % mod + mod )%mod]
            else {  
                alert ("Just follow the range you chose.");return
            }    
        }
        else {
            if(message[e] >= 'A' && message[e] <= 'Z' || message[e] >= 'a' && message[e] <= 'z')
              cipherMessage += alphabet[((alphabet.indexOf(message[e])+key) % mod + mod )%mod]
            else {  
                alert ("Just follow the range you chose.");return
            }    
        }
    }    

    var illustration = document.getElementById("illustration") ;
    illustration.innerHTML = tracing(message,cipherMessage);
    document.getElementById("cipherText").value =  cipherMessage ;
    }    
}    
function dShift() {

    var select = document.getElementById('encryptionMethods');
    var value = select.options[select.selectedIndex].value;
    var Range = document.getElementById('Range');
    var valueOFRange = Range.options[Range.selectedIndex].value;

    getValues();
     var mod = switchBetweenRanges();
    
    if(message.length == 0 ) {
        document.getElementById("plainText").value =  "required";
        return
    }
    if(key.length == 0) {
        document.getElementById("key1").value =  "required";
        return
    }
    
    if(value == "shift") {
        //decryption
        for (var e = 0; e < message.length; e++) {
            if(valueOFRange == 'lowerCaseAlphabets') {
                if(message[e] >= 'a' && message[e] <= 'z')
                    cipherMessage += lowerAlphabet[((lowerAlphabet.indexOf(message[e])-key) % mod + mod ) % mod]
                else {  
                    alert ("Just follow the range you chose.");return
                }    
            }
            
            else if(valueOFRange == 'upperCaseAlphabets') {
                if(message[e] >= 'A' && message[e] <= 'Z')
                  cipherMessage += upperAlphabet[((upperAlphabet.indexOf(message[e])-key) % mod + mod )%mod]
                else {  
                    alert ("Just follow the range you chose.");return
                }    
            }
            else {
                if(message[e] >= 'A' && message[e] <= 'Z' || message[e] >= 'a' && message[e] <= 'z')
                  cipherMessage += alphabet[((alphabet.indexOf(message[e])-key) % mod + mod )%mod]
                else {  
                    alert ("Just follow the range you chose.");return
                }    
            }
        }       
            document.getElementById("cipherText").value =  cipherMessage ;
        }
        illustration.innerHTML = tracing(message,cipherMessage);
}

 //Affine
function affine() {
        //get the value of the select
     var select = document.getElementById('encryptionMethods');
     var value = select.options[select.selectedIndex].value;
     var Range = document.getElementById('Range');
     var valueOFRange = Range.options[Range.selectedIndex].value;

     getValues();
     var  key2 = document.getElementById('key2').value;
     var mod = switchBetweenRanges();
    if(!checkThefieldsIsnotEmpty2(message,key,key2))
             return
     
     if( value == "affine" ) {
     //encryption
     if( GCD( key, 26 ) == 1 ) {
                for (var e = 0; e < message.length; e++) {
                    
                    if(valueOFRange == 'lowerCaseAlphabets') {
                        if(message[e] >= 'a' && message[e] <= 'z')
                        cipherMessage += lowerAlphabet[((lowerAlphabet.indexOf(message[e])*key+parseInt(key2)) % mod + mod )%mod]
                        else {  
                            alert ("Just follow the range you chose.");return
                        }    
                    }
                    
                    else if(valueOFRange == 'upperCaseAlphabets') {
                        if(message[e] >= 'A' && message[e] <= 'Z')
                        cipherMessage += upperAlphabet[((upperAlphabet.indexOf(message[e])*key+parseInt(key2)) % mod + mod )%mod]
                        else {  
                            alert ("Just follow the range you chose.");return
                        }    
                    }
                    else {
                        if(message[e] >= 'A' && message[e] <= 'Z' || message[e] >= 'a' && message[e] <= 'z')
                        cipherMessage += alphabet[((alphabet.indexOf(message[e])*key+parseInt(key2)) % mod + mod )%mod]
                        else {  
                            alert ("Just follow the range you chose.");return
                        }    
                    }
                }    
            illustration.innerHTML = tracing(message,cipherMessage);
            } 
            else
                alert("there is no inverse for "+ key);return;
        }
}
function dAffine() {
    //get the value of select
     var select = document.getElementById('encryptionMethods');
     var value = select.options[ select.selectedIndex ].value;
     var Range = document.getElementById('Range');
     var valueOFRange = Range.options[Range.selectedIndex].value;

    //input
    getValues();
    var  b = document.getElementById('key2').value;
    var mod = switchBetweenRanges();

    if( message.length == 0 ) {
        document.getElementById("plainText").value =  "required";
        return
    }
        if(b.length == 0) {
            document.getElementById("key2").value =  "required";
            return
        }
       if(key.length == 0) {
            document.getElementById("key1").value =  "required";
            return
        }
    
    if(value == "affine") {
    //decryption
    
    for (var e = 0; e < message.length; e++) {
        if(valueOFRange == 'lowerCaseAlphabets') {
            if(message[e] >= 'a' && message[e] <= 'z')
            cipherMessage += lowerAlphabet[((inverseOfKey(key, mod)*(lowerAlphabet.indexOf(message[e])-parseInt(b))) % mod + mod )%mod]
            else {  
                alert ("Just follow the range you chose.");return
            }    
        }
        
        else if(valueOFRange == 'upperCaseAlphabets') {
            if(message[e] >= 'A' && message[e] <= 'Z')
            cipherMessage += upperAlphabet[((inverseOfKey(key, mod)*(upperAlphabet.indexOf(message[e])-parseInt(b))) % mod + mod )%mod]
            else {  
                alert ("Just follow the range you chose.");return
            }    
        }
        else {
            if(message[e] >= 'A' && message[e] <= 'Z' || message[e] >= 'a' && message[e] <= 'z')
            cipherMessage += alphabet[((inverseOfKey(key, mod)*(alphabet.indexOf(message[e])-parseInt(b))) % mod + mod )%mod]
            else {  
                alert ("Just follow the range you chose.");return
            }    
        }
    }    
        document.getElementById("cipherText").value =  cipherMessage ;
        illustration.innerHTML = tracing(message,cipherMessage);
    }
}

 //Substitution
function substitution() {
    getValues();
    const codedAlphabet = [];
    for( var i = 0; i < 26 ; i++ )
        codedAlphabet[i] = document.getElementsByClassName("coded")[i].value;

    for( var i = 0; i < message.length; i++ )
        cipherMessage += codedAlphabet[ lowerAlphabet.indexOf( message[i] ) ];

    document.getElementById("cipherText").value =  cipherMessage ;
    var illustration = document.getElementById("illustration") ;
    illustration.innerHTML = tracing(message,cipherMessage);
}
function dSubstitution() {

    getValues();
    const codedAlphabet = [];
    for( var i = 0; i < 26; i++ )
        codedAlphabet[i] = document.getElementsByClassName("coded")[i].value;

    for( var i = 0; i < message.length; i++ )
        cipherMessage += alphabet[ codedAlphabet.indexOf( message[i] )  ];

    document.getElementById("cipherText").value =  cipherMessage ;
    var illustration = document.getElementById("illustration") ;
    illustration.innerHTML = tracing(message,cipherMessage);
}

 //Vigenere
function vigenere() {

    getValues();
    while( message.length > key.length ) 
        key += key;

    for( var i = 0; i < message.length; i++ ) 
        cipherMessage += lowerAlphabet[ ( ( lowerAlphabet.indexOf( message[i] ) + lowerAlphabet.indexOf( key[i] ) ) % 26 + 26 ) % 26 ]
    
    document.getElementById("cipherText").value =  cipherMessage ;
    var illustration = document.getElementById("illustration") ;
    illustration.innerHTML = tracing(message,cipherMessage);
}
function dVigenere() {

    getValues();
    while( message.length > key.length ) 
        key += key;
    
    for( var i = 0; i < message.length; i++ ) 
        cipherMessage += lowerAlphabet[ ( ( lowerAlphabet.indexOf( message[i] ) - lowerAlphabet.indexOf( key[i ]) ) % 26 + 26 ) % 26 ]
    
    document.getElementById("cipherText").value =  cipherMessage ;
    var illustration = document.getElementById("illustration") ;
    illustration.innerHTML = tracing(message,cipherMessage);
}

 //Hill
function hill() {

    getValues();
    var c1 = Number(document.getElementById("cell1").value);
    var c2 = Number(document.getElementById("cell2").value);
    var c3 = Number(document.getElementById("cell3").value);
    var c4 = Number(document.getElementById("cell4").value);
    var det = c1*c4-c2*c3;

if( GCD( det , 26) == 1 ) {

    if( message.length % 2 == 0 ) {
            for( var i = 0; i < message.length-1; i++ ) {
                cipherMessage += lowerAlphabet[ (c1*lowerAlphabet.indexOf( message[i] ) + c2*lowerAlphabet.indexOf( message[i+1] )) % 26  ] ;
                cipherMessage += lowerAlphabet[ ( c3*lowerAlphabet.indexOf (message[i] ) + c4*lowerAlphabet.indexOf( message[i+1]  ) ) % 26 ];
                i++;
            }
                document.getElementById("cipherText").value =  cipherMessage ;
                var illustration = document.getElementById("illustration") ;
                illustration.innerHTML = tracing( message , cipherMessage );
        }
        else
        alert("You need to add one more letter")
    }
else
alert("there is no inverse for the key ");return;
}
function dHill() {
    
    getValues();
    var c1 = Number(document.getElementById("cell1").value);
    var c2 = Number(document.getElementById("cell2").value);
    var c3 = Number(document.getElementById("cell3").value);
    var c4 = Number(document.getElementById("cell4").value);

    var det = c1*c4-c2*c3;
  

    var c4 = Number(document.getElementById("cell1").value)*inverseOfKey (det,26);
    var c2 = (-Number(document.getElementById("cell2").value)+26)*inverseOfKey (det,26);
    var c3 = (-Number(document.getElementById("cell3").value)+26)*inverseOfKey (det,26);
    var c1 = Number(document.getElementById("cell4").value)*inverseOfKey (det,26);

if( GCD(det,26) == 1 ) {

    if(message.length % 2 == 0) {
            for(var i =0 ;i<message.length-1; i++) {
                cipherMessage += lowerAlphabet[ (c1*lowerAlphabet.indexOf( message[i] ) + c2*lowerAlphabet.indexOf( message[i+1] )) % 26  ] ;
                cipherMessage += lowerAlphabet[ ( c3*lowerAlphabet.indexOf(message[i] ) + c4*lowerAlphabet.indexOf( message[i+1]  ) ) % 26 ];
                i++;
            }
                document.getElementById("cipherText").value =  cipherMessage ;
                var illustration = document.getElementById("illustration") ;
                illustration.innerHTML = tracing( message , cipherMessage );
        }
        else
        alert("You need to add one more letter")
    }
    else
     alert("there is no inverse for the key ");return;
}

 //Permutation
function permutation() {

    getValues();
    const codedAlphabet = [];
        for( var i = 0; i < key; i++ )
            codedAlphabet[i] = document.getElementsByClassName("coded2")[i].value;
        for( var i = 0; i < message.length; i++ ) {
            for( var j = 0; j < key; j++ ) {
                cipherMessage += message[ ( codedAlphabet[j] - 1 ) + i ]
            }
            i+=5;
        }
    
        document.getElementById("cipherText").value =  cipherMessage ;
        var illustration = document.getElementById("illustration") ;
        illustration.innerHTML = tracing(message,cipherMessage);

}
function dPermutation() {

    getValues();
    const codedAlphabet = [];
    const inverseAlphabet = [];
    
        for( var i = 0; i < key; i++ )
            codedAlphabet[i] = Number(document.getElementsByClassName("coded2")[i].value);
        for( var i = 0; i < key; i++ )
            inverseAlphabet[i] = codedAlphabet.indexOf( i + 1 ) + 1;
        for( var i = 0;i<message.length; i++ ) {
            for( var j = 0; j < key; j++ ) {
                cipherMessage += message[ ( inverseAlphabet[j] - 1 ) + i ]
            }
            i+=5;
        }
        document.getElementById("cipherText").value =  cipherMessage ;
        var illustration = document.getElementById("illustration") ;
        illustration.innerHTML = tracing( message , cipherMessage );
}
function createTable() {

    getValues();
    let st = "<table>";
    for( var i = 0; i < key; i++ ) { 
        st += "</tr><td>"+(i+1)+" &#8594 </td><td class><input class = 'coded2' type = number min = 1></td></tr>";
    }
    st += "</table>"
    document.getElementById("permutationTable").innerHTML = st; 
}

 //Switch Bettwen Functions
function display() {
        var select = document.getElementById('encryptionMethods');
        var value = select.options[select.selectedIndex].value;
        if(value == "affine") {
            switchBetweenRanges()
            document.getElementById('SubstitutionTable').style.display = "none"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('permutationTable').style.display = "none"
            document.getElementById('key2').disabled = false;
            document.getElementById('key1').disabled = false;
            document.getElementById('button').onclick = affine;
            document.getElementById('swap').onclick = dAffine;
            clear();
            
        }
        else if(value == "shift") {
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
        else if(value == "substitution") {
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
        else if(value == "vigenere") {
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
        else if(value == "hill") {
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
        else if(value == "permutation") {
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
 //Switch Bettwen Ranges
function switchBetweenRanges() {
        var Range = document.getElementById('Range');
        var value = Range.options[Range.selectedIndex].value;

        var encryptionMethods = document.getElementById('encryptionMethods');
        var valueOfEncryptionMethods = encryptionMethods.options[encryptionMethods.selectedIndex].value;

        if(value == "lowerCaseAlphabets") { 
            if(valueOfEncryptionMethods == "shift")
                  document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(message) = message + e mod 26 <br> D<sub>d</sub>(cipherMessage) = cipherMessage - d mod 26"
            else   if(valueOfEncryptionMethods == "substitution")
                  document.getElementById("encryptEquation").innerHTML = " E<sub>&#960;</sub>(message) = &#960; (message) <br> D<sub>&#960;=(a,b)</sub>(cipherMessage) =  &#960;<sup>-1</sup>(cipherMessage)"
            else   if(valueOfEncryptionMethods == "vigenere")
                 document.getElementById("encryptEquation").innerHTML = "  E<sub>e</sub>((m1,…,mn))=(m1+k1,…,mn+kn )<br>D<sub>d</sub>((c1,…,cn))=(c1-k1…,cn-kn )"
            else   if(valueOfEncryptionMethods == "hill")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(message)=me<br>D<sub>d(cipherMessage)=ce<sup>-1</sup>"
            else
                 document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(message) = cipherMessage = am + b mod 26<br>D<sub>d</sub>(cipherMessage) = message = a<sup>-1</sup>(cipherMessage - b) mod 26"
            return 26;
            Ee

        }
        else if(value == "upperCaseAlphabets") {
            if(valueOfEncryptionMethods == "shift")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub></sub>(message) = message + e mod 26 <br> D<sub>d</sub>(cipherMessage) = cipherMessage - d mod 26"
            else
            document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(message) = cipherMessage = am + b mod 26<br>D<sub>d</sub>(cipherMessage) = message = a<sup>-1</sup>(cipherMessage - b) mod 26"
            return 26;
        }
        else {
            if(valueOfEncryptionMethods == "shift")
                 document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub></sub>(message) = message + e mod 52 <br> D<sub>d</sub>(cipherMessage) = cipherMessage - d mod 52"
            else
              document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(message) = cipherMessage = am + b mod 52<br>D<sub>d</sub>(cipherMessage) = message = a<sup>-1</sup>(cipherMessage - b) mod 52"
            return 52;
        }
}
    // console.log("\u0049 \u0068\u006f\u0070\u0065 \u0074\u006f \u0066\u0069\u006e\u0064 \u0079\u006f\u0075\u0072 \u0068\u0065\u0061\u0076\u0065\u006e\u002e")