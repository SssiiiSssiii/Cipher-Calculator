const lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const alphabet      = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var message;
var cipherMessage;
var key = 0;
var mod = 0;
var range;
var valueOFRange;
var illustration;

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

 //Exceptions
function  isEmpty ( value ) {
    if ( value.length == 0 ) {
        alert ( "Please Enter The Values 🥺"  )
        return true;
    }    
    return false;    
}

 //tracing
function tracing ( plainText , cipherText ) {
    var  illustration = "<b>Tracing<br> <br>" ;
    for (var letter = 0; letter < plainText.length; letter++)
        illustration += plainText[letter] + "   &#8594  " + '<span style="color: red;">'+cipherText[letter]+'</span>' + '<br>'
    return  illustration;  
}    

 //Get Values
function getValues() {
    message = document.getElementById("plainText").value;
    cipherMessage =  document.getElementById("cipherText").value = "";
    key = document.getElementById("key1").value;
    range = document.getElementById('Range');
    valueOFRange = range.options[range.selectedIndex].value;
    illustration = document.getElementById("illustration") ;
    mod = getMod();
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

getValues();
mod = getMod();

if( isEmpty( message ) || isEmpty( key ) )
        return;

        for( var e = 0; e < message.length; e++ ) {
            if( ( message[e]  >= 'a' && message[e]  <= 'z' ) && ( valueOFRange == "lowerCaseAlphabets" ) )
                cipherMessage += lowerAlphabet[ ( ( lowerAlphabet.indexOf( message[e] ) ) + key % mod + mod ) % mod ];
            else if( ( message[e]  >= 'A' && message[e]  <= 'Z' ) &&  ( valueOFRange == "upperCaseAlphabets" ) )
                cipherMessage += upperAlphabet[ ( ( upperAlphabet.indexOf( message[e]) ) + key % mod + mod ) % mod ];
            else if( ( isNaN( message[e] ) ) && ( valueOFRange == "both" ) )
                cipherMessage += alphabet[( ( alphabet.indexOf( message[e] ) ) + key % mod + mod ) % mod ];
            else {  
                alert ("Just Follow The Range You Chose.😡");
                return;
            }    
        }
    illustration.innerHTML = tracing(message,cipherMessage);
    document.getElementById("cipherText").value =  cipherMessage ;
}    
function dShift() {

    mod = getMod();
    getValues();

    if( isEmpty( message ) || isEmpty( key ) )
        return;

        for( var e = 0; e < message.length; e++ ) {
            if( ( message[e]  >= 'a' && message[e]  <= 'z' ) && ( valueOFRange == "lowerCaseAlphabets" ) )
                cipherMessage += lowerAlphabet[ ( ( lowerAlphabet.indexOf( message[e] ) ) - key % mod + mod ) % mod ];
            else if( ( message[e]  >= 'A' && message[e]  <= 'Z' ) &&  ( valueOFRange == "upperCaseAlphabets" ) )
                cipherMessage += upperAlphabet[ ( ( upperAlphabet.indexOf( message[e]) ) - key % mod + mod ) % mod ];
            else if( ( isNaN( message[e] ) ) && ( valueOFRange == "both" ) )
                cipherMessage += alphabet[( ( alphabet.indexOf( message[e] ) ) - key % mod + mod ) % mod ];
            else {  
                alert ("Just Follow The Range You Chose.😡");
                return;
            }    
        }

            document.getElementById("cipherText").value =  cipherMessage ;
            illustration.innerHTML = tracing(message,cipherMessage);
}

 //Affine
function affine() {

    var  key2 = document.getElementById('key2').value;
    mod = getMod();
    getValues();

    if( isEmpty( message ) || isEmpty( key ) || isEmpty( key2 ) )
        return;

    if( GCD( key, 26 ) == 1 ) {
        for (var e = 0; e < message.length; e++) {
            if( ( message[e]  >= 'a' && message[e]  <= 'z' ) && ( valueOFRange == "lowerCaseAlphabets" ) )
                cipherMessage += lowerAlphabet[ ( ( lowerAlphabet.indexOf( message[e] ) * key + parseInt( key2 ) ) % mod + mod ) % mod ]
            else if( ( message[e]  >= 'A' && message[e]  <= 'Z' ) && ( valueOFRange == "upperCaseAlphabets" ) )
                cipherMessage += lowerAlphabet[ ( ( lowerAlphabet.indexOf( message[e] ) * key + parseInt( key2 ) ) % mod + mod ) % mod ]
            else if( ( isNaN( message[e] ) ) && ( valueOFRange == "both" ) )
                cipherMessage += lowerAlphabet[ ( ( lowerAlphabet.indexOf( message[e] ) * key + parseInt( key2 ) ) % mod + mod ) % mod ]
                else {  
                    alert ("Just Follow The Range You Chose.😡");
                            return;
                }    
        }    
        document.getElementById("cipherText").value =  cipherMessage ;
        illustration.innerHTML = tracing(message,cipherMessage);
        } 
        else{
            alert("There Is No Inverse For "+ key);
            illustration.innerHTML = "";
        }
}
function dAffine() {
    
    var  key2 = document.getElementById('key2').value;
    mod = getMod();
    getValues();

    if( isEmpty( message ) || isEmpty( key ) || isEmpty( key2 ) )
        return;

    if( GCD( key, 26 ) == 1 ) {
        for ( var e = 0; e < message.length; e++ ) {
            if( ( message[e]  >= 'a' && message[e]  <= 'z' ) && ( valueOFRange == "lowerCaseAlphabets" ) )
                cipherMessage += lowerAlphabet[ ( ( inverseOfKey( key , mod ) * ( lowerAlphabet.indexOf( message[e] ) - parseInt( key2 ))) % mod + mod ) % mod ]
            else if( ( message[e]  >= 'A' && message[e]  <= 'Z' ) && ( valueOFRange == "upperCaseAlphabets" ) )
                cipherMessage += lowerAlphabet[ ( ( inverseOfKey( key , mod ) * ( lowerAlphabet.indexOf( message[e] ) - parseInt( key2 ))) % mod + mod ) % mod ]
            else if( ( isNaN( message[e] ) ) && ( valueOFRange == "both" ) )
                cipherMessage += lowerAlphabet[ ( ( inverseOfKey( key , mod ) * ( lowerAlphabet.indexOf( message[e] ) - parseInt( key2 ))) % mod + mod ) % mod ]
            else {  
                alert ("Just Follow The Range You Chose.😡");
                return;
            }    
        }    
            document.getElementById("cipherText").value =  cipherMessage ;
            illustration.innerHTML = tracing(message,cipherMessage);
    }
    else{
        alert("There Is No Inverse For "+ key);
        illustration.innerHTML = "";
    }
}

 //Substitution
function substitution() {

    const codedAlphabet = [];
    getValues();

    if( isEmpty( message ) )
        return;

    for( var i = 0; i < 26 ; i++ ){

        if( document.getElementsByClassName("coded")[i].value.length == 0 ){
            alert("Are you kidding me how can I complete the process without the rest of the items ?😞")
            return;
        }
        if( isInRange ( document.getElementsByClassName("coded")[i].value ) )
            codedAlphabet[i] = document.getElementsByClassName("coded")[i].value;
        else{
            alert("It's Not A Letter!");
            illustration.innerHTML = "";
            return;
        }
    }

    if(  checkDuplicate( codedAlphabet ) ){
        alert( "Duplicate items" );
        illustration.innerHTML = "";
        return;
    }
        
    for( var i = 0; i < message.length; i++ ){
        if( isInRange ( message[i] ))
            cipherMessage += codedAlphabet[ lowerAlphabet.indexOf( message[i] ) ];
        else{
            alert("It's Not A Letter!");
            illustration.innerHTML = "";
            return;
        }
    }

    document.getElementById("cipherText").value =  cipherMessage ;
    
    illustration.innerHTML = tracing(message,cipherMessage);
}
function dSubstitution() {

    const codedAlphabet = [];

    getValues();

    if( isEmpty(message))
        return;

    for( var i = 0; i < 26; i++ ){
        
        if( document.getElementsByClassName("coded")[i].value.length == 0 ){
            alert("Are you kidding me how can I complete the process without the rest of the items ?😞")
            return;
        }
        if( isInRange ( document.getElementsByClassName("coded")[i].value ) )
            codedAlphabet[i] = document.getElementsByClassName("coded")[i].value;
        else{
            alert("It's Not A Letter!");
            illustration.innerHTML = "";
            return;
        }
    }
    
    if(  checkDuplicate( codedAlphabet ) ){
        alert( "Duplicate items" );
        illustration.innerHTML = "";
        return;
    }

    for( var i = 0; i < message.length; i++ ){
        if( isInRange ( message[i] ))
            cipherMessage += alphabet[ codedAlphabet.indexOf( message[i] )  ];
        else{
            alert("It's Not A Letter!");
            illustration.innerHTML = "";
            return;
        }
    }

    document.getElementById("cipherText").value =  cipherMessage ;
    illustration.innerHTML = tracing(message,cipherMessage);
}

 //Vigenere
function vigenere() {

    getValues();
    mod = getMod();
    if( isEmpty( message ) || isEmpty( key ) )
    return;

    while( message.length > key.length ) 
        key += key;

        for( var letter = 0; letter < message.length; letter++ ) {
            if( ( message[letter]  >= 'a' && message[letter]  <= 'z' ) && ( valueOFRange == "lowerCaseAlphabets" ) )
                    cipherMessage += lowerAlphabet[ ( ( lowerAlphabet.indexOf( message[letter] ) + lowerAlphabet.indexOf( key[letter] ) ) % mod + mod ) % mod ]
                else if( ( message[letter] >= 'A' && message[letter]  <= 'Z' ) && ( valueOFRange == "upperCaseAlphabets" ) )
                    cipherMessage += upperAlphabet[ ( ( upperAlphabet.indexOf( message[letter] ) + upperAlphabet.indexOf( key[letter] ) ) % mod + mod ) % mod ]
                else if( ( isNaN( message[letter] ) ) && ( valueOFRange == "both" ) )
                    cipherMessage += alphabet[ ( ( alphabet.indexOf( message[letter] ) + alphabet.indexOf( key[letter] ) ) % mod + mod ) % mod ]
                    else {  
                        alert ("Just Follow The Range You Chose.😡");
                        illustration.innerHTML = "";
                        return;
                    }    
        }
    document.getElementById("cipherText").value =  cipherMessage;
    illustration.innerHTML = tracing(message,cipherMessage);
}
function dVigenere() {

    getValues();
    if( isEmpty( message ) || isEmpty( key ) )
        return;

    while( message.length > key.length ) 
        key += key;

        for( var letter = 0; letter < message.length; letter++ ) {
            if( ( message[letter]  >= 'a' && message[letter]  <= 'z' ) && ( valueOFRange == "lowerCaseAlphabets" ) )
                    cipherMessage += lowerAlphabet[ ( ( lowerAlphabet.indexOf( message[letter] ) - lowerAlphabet.indexOf( key[letter] ) ) % mod + mod ) % mod ]
                else if( ( message[letter] >= 'A' && message[letter]  <= 'Z' ) && ( valueOFRange == "upperCaseAlphabets" ) )
                    cipherMessage += upperAlphabet[ ( ( upperAlphabet.indexOf( message[letter] ) - upperAlphabet.indexOf( key[letter] ) ) % mod + mod ) % mod ]
                else if( ( isNaN( message[letter] ) ) && ( valueOFRange == "both" ) )
                    cipherMessage += alphabet[ ( ( alphabet.indexOf( message[letter] ) - alphabet.indexOf( key[letter] ) ) % mod + mod ) % mod ]
                    else {  
                        alert ("Just Follow The Range You Chose.😡");
                        illustration.innerHTML = "";
                        return;
                    }    
        }
    document.getElementById("cipherText").value =  cipherMessage ;
    illustration.innerHTML = tracing(message,cipherMessage);
}

 //Hill
function hill() {

    getValues();
    mod = getMod();

    if( isEmpty(message))
        return;

    var c1 = document.getElementById("cell1").value;
    var c2 = document.getElementById("cell2").value;
    var c3 = document.getElementById("cell3").value;
    var c4 = document.getElementById("cell4").value;
    var det = c1*c4-c2*c3;

    if( c1.length == 0  || c2.length == 0 || c3.length == 0 || c4.length == 0 ){
        alert( "Are you kidding me how can I complete the process without the rest of the items ?😞" )
        return;
    }

    if( GCD( det , mod ) == 1 ) {

        if( message.length % 2 == 0 ) {

                if( ( valueOFRange == "lowerCaseAlphabets" ) ){
                    for( var letter = 0; letter < message.length-1; letter++ ) {
                        if( ( message[letter]  >= 'a' && message[letter]  <= 'z' ) && ( message[letter+1]  >= 'a' && message[letter+1]  <= 'z' ) ) {
                            cipherMessage += lowerAlphabet[ (c1*lowerAlphabet.indexOf( message[letter] ) + c2*lowerAlphabet.indexOf( message[letter+1] ) ) % mod  ] ;
                            cipherMessage += lowerAlphabet[ ( c3*lowerAlphabet.indexOf( message[letter] ) + c4*lowerAlphabet.indexOf( message[letter+1]  ) ) % mod ];
                            letter++;
                        }
                        else {  
                            alert ("Just Follow The Range You Chose.😡");
                            illustration.innerHTML = "";
                            return;
                        }    
                    }
                }
                else if( ( valueOFRange == "upperCaseAlphabets" ) ){
                    for( var letter = 0; letter < message.length-1; letter++ ) {
                        if( ( message[letter]  >= 'A' && message[letter]  <= 'Z' ) && ( message[letter+1]  >= 'A' && message[letter+1]  <= 'Z' ))  {
                            cipherMessage += upperAlphabet[ (c1*upperAlphabet.indexOf( message[letter] ) + c2*upperAlphabet.indexOf( message[letter+1] ) ) % mod  ] ;
                            cipherMessage += upperAlphabet[ ( c3*upperAlphabet.indexOf( message[letter] ) + c4*upperAlphabet.indexOf( message[letter+1]  ) ) % mod ];
                            letter++;
                        }
                        else {  
                            alert ("Just Follow The Range You Chose.😡");
                            illustration.innerHTML = "";
                            return;
                        }    
                    }
                }
                else if( ( valueOFRange == "both" ) ){
                    for( var letter = 0; letter < message.length-1; letter++ ) {
                        if( isNaN(message[letter]) && isNaN(message[letter+1] ) )  {
                            cipherMessage += alphabet[ (c1*alphabet.indexOf( message[letter] ) + c2*alphabet.indexOf( message[letter+1] ) ) % mod  ] ;
                            cipherMessage += alphabet[ ( c3*alphabet.indexOf( message[letter] ) + c4*alphabet.indexOf( message[letter+1]  ) ) % mod ];
                            letter++;
                        }
                        else {  
                            alert ("Just Follow The Range You Chose.😡");
                            illustration.innerHTML = "";
                            return;
                        }    
                    }
                }
            document.getElementById("cipherText").value =  cipherMessage ;
            illustration.innerHTML = tracing( message , cipherMessage );
        }
    else {
        alert( "Can You Add One More Letter Pls 👉👈" )
        illustration.innerHTML = "";
    }
}
    else {
        illustration.innerHTML = ""
        alert( "There Is No Inverse For The Key" );
    }
}
function dHill() {
    
    getValues();
    mod = getMod();

    if( isEmpty(message) )
        return;

    var c1 = Number(document.getElementById("cell1").value);
    var c2 = Number(document.getElementById("cell2").value);
    var c3 = Number(document.getElementById("cell3").value);
    var c4 = Number(document.getElementById("cell4").value);

    if( c1.length == 0  || c2.length == 0 || c3.length == 0 || c4.length == 0 ){
        alert( "Are you kidding me how can I complete the process without the rest of the items ?😞" )
        return;
    }

    var det = c1*c4-c2*c3;
    var c4 = Number(document.getElementById("cell1").value)*inverseOfKey (det,26);
    var c2 = (-Number(document.getElementById("cell2").value)+26)*inverseOfKey (det,26);
    var c3 = (-Number(document.getElementById("cell3").value)+26)*inverseOfKey (det,26);
    var c1 = Number(document.getElementById("cell4").value)*inverseOfKey (det,26);

    
    if( GCD( det , mod ) == 1 ) {

        if( message.length % 2 == 0 ) {

                if( ( valueOFRange == "lowerCaseAlphabets" ) ){
                    for( var letter = 0; letter < message.length-1; letter++ ) {
                        if( ( message[letter]  >= 'a' && message[letter]  <= 'z' ) && ( message[letter+1]  >= 'a' && message[letter+1]  <= 'z' ) ) {
                            cipherMessage += lowerAlphabet[ (c1*lowerAlphabet.indexOf( message[letter] ) + c2*lowerAlphabet.indexOf( message[letter+1] ) ) % mod  ] ;
                            cipherMessage += lowerAlphabet[ ( c3*lowerAlphabet.indexOf( message[letter] ) + c4*lowerAlphabet.indexOf( message[letter+1]  ) ) % mod ];
                            letter++;
                        }
                        else {  
                            alert ("Just Follow The Range You Chose.😡");
                            illustration.innerHTML = "";
                            return;
                        }    
                    }
                }
                else if( ( valueOFRange == "upperCaseAlphabets" ) ){
                    for( var letter = 0; letter < message.length-1; letter++ ) {
                        if( ( message[letter]  >= 'A' && message[letter]  <= 'Z' ) && ( message[letter+1]  >= 'A' && message[letter+1]  <= 'Z' ))  {
                            cipherMessage += upperAlphabet[ (c1*upperAlphabet.indexOf( message[letter] ) + c2*upperAlphabet.indexOf( message[letter+1] ) ) % mod  ] ;
                            cipherMessage += upperAlphabet[ ( c3*upperAlphabet.indexOf( message[letter] ) + c4*upperAlphabet.indexOf( message[letter+1]  ) ) % mod ];
                            letter++;
                        }
                        else {  
                            alert ("Just Follow The Range You Chose.😡");
                            illustration.innerHTML = "";
                            return;
                        }    
                    }
                }
                else if( ( valueOFRange == "both" ) ){
                    for( var letter = 0; letter < message.length-1; letter++ ) {
                        if( isNaN(message[letter]) && isNaN(message[letter+1] ) ) {
                            cipherMessage += alphabet[ (c1*alphabet.indexOf( message[letter] ) + c2*alphabet.indexOf( message[letter+1] ) ) % mod  ] ;
                            cipherMessage += alphabet[ ( c3*alphabet.indexOf( message[letter] ) + c4*alphabet.indexOf( message[letter+1]  ) ) % mod ];
                            letter++;
                        }
                        else {  
                            alert ("Just Follow The Range You Chose.😡");
                            illustration.innerHTML = "";
                            return;
                        }    
                    }
                }
            document.getElementById("cipherText").value =  cipherMessage ;
            illustration.innerHTML = tracing( message , cipherMessage );
        }
    else {
        alert( "Can You Add One More Letter Pls 👉👈" )
        illustration.innerHTML = "";
    }
}
    else {
        illustration.innerHTML = ""
        alert( "There Is No Inverse For The Key" );
    }
}

 //Permutation
function permutation() {

    const codedAlphabet = [];
    getValues();
    if( isEmpty( message ) || isEmpty( key ) )
        return;

        for( var i = 0; i < key; i++ ){
            if( document.getElementsByClassName("coded2")[i].value.length == 0 ){
                alert("Are you kidding me how can I complete the process without the rest of the items ?😞")
                return;
            }
                codedAlphabet[i] = document.getElementsByClassName("coded2")[i].value;
        }

        if(  checkDuplicate( codedAlphabet ) ){
            alert( "Duplicate items" );
            illustration.innerHTML = "";
            return;
        }

        for( var i = 0; i < message.length; i++ ) {
            for( var j = 0; j < key; j++ ) {
                if( isInRange(message[j]) )
                    cipherMessage += message[ ( codedAlphabet[j] - 1 ) + i ]
            }
            i+=5;
        }
        document.getElementById("cipherText").value =  cipherMessage ;
        illustration.innerHTML = tracing(message,cipherMessage);

}
function dPermutation() {

    const codedAlphabet = [];
    const inverseAlphabet = [];
    getValues();

    if( isEmpty( message ) || isEmpty( key ) )
            return;

        for( var i = 0; i < key; i++ ){
            if( document.getElementsByClassName("coded2")[i].value.length == 0 ){
                alert("Are you kidding me how can I complete the process without the rest of the items ?😞")
                return;
            }
            codedAlphabet[i] = document.getElementsByClassName("coded2")[i].value;
        }

        if(  checkDuplicate( codedAlphabet ) ){
            alert( "Duplicate items" );
            illustration.innerHTML = "";
            return;
        }

        for( var i = 0; i < key; i++ )
            inverseAlphabet[i] = codedAlphabet.indexOf( i + 1 ) + 1;

        for( var i = 0; i < message.length; i++ ) {
            for( var j = 0; j < key; j++ ) {
                if( isInRange( message[j] ))
                    cipherMessage += message[ ( inverseAlphabet[j] - 1 ) + i ];
                else{
                    alert("It's Not A Letter!");
                    illustration.innerHTML = "";
                    return;
                }
            }
            i+=5;
        }
        document.getElementById("cipherText").value =  cipherMessage ;  
        illustration.innerHTML = tracing( message , cipherMessage );
}
function createTable() {

    getValues();
    let st = "<table>";
    for( var i = 0; i < key; i++ ) { 
        st += "</tr><td>"+(i+1)+" &#8594 </td><td class><input class = 'coded2' type = number min = 1 oninput = ' this.value = Math.abs( this.value )  '></td></tr>";
    }
    st += "</table>"
    document.getElementById("permutationTable").innerHTML = st; 
}

 //Switch Bettwen Functions
function display() {
        var select = document.getElementById('encryptionMethods');
        var value = select.options[select.selectedIndex].value;

        if(value == "affine") {
            switchBetweenRanges();
            document.getElementById('SubstitutionTable').style.display = "none"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('permutationTable').style.display = "none"
            document.getElementById('key2').disabled = false;
            document.getElementById('key1').disabled = false;
            document.getElementById('key1').type = "number"
            document.getElementById('button').onclick = affine;
            document.getElementById('swap').onclick = dAffine;
            document.getElementById('Range').disabled = false;
            clear();
            
        }
        else if(value == "shift") {
            switchBetweenRanges();
            document.getElementById('key1').disabled = false;
            document.getElementById('key1').type = "number"
            document.getElementById('key2').disabled = true;
            document.getElementById('SubstitutionTable').style.display = "none"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('permutationTable').style.display = "none"
            document.getElementById('button').onclick = shift;
            document.getElementById('swap').onclick = dShift;
            document.getElementById('Range').disabled = false;
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
            document.getElementById('Range').disabled = true;
            clear();
        }
        else if(value == "vigenere") {
            switchBetweenRanges()
            document.getElementById('key1').disabled = false;
            document.getElementById('SubstitutionTable').style.display = "none"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('permutationTable').style.display = "none"
            document.getElementById('key1').type = "text"
            document.getElementById('key1').oninput = "this.value"
            document.getElementById('key2').disabled = true;
            document.getElementById('button').onclick = vigenere;
            document.getElementById('swap').onclick = dVigenere;
            document.getElementById('Range').disabled = false;
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
            document.getElementById('Range').disabled = false;
            clear();
        }
        else if(value == "permutation") {
            switchBetweenRanges()
            document.getElementById('key2').disabled = true;
            document.getElementById('key1').disabled = false;
            document.getElementById('key1').type = "number"
            document.getElementById('SubstitutionTable').style.display = "none"
            document.getElementById('permutationTable').style.display = "block"
            document.getElementById('hillMatTable').style.display = "none"
            document.getElementById('button').onclick = permutation;
            document.getElementById('key1').onkeyup = createTable;
            document.getElementById('swap').onclick = dPermutation;
            document.getElementById('Range').disabled = true;
            clear();
        }
}

 //Get Module
function getMod() {

    if( valueOFRange == "lowerCaseAlphabets" ||  valueOFRange == "upperCaseAlphabets")
        return 26;
    else
        return 52;
}

 //Count
function count( array, item ) {
    var occurrence = 0;
        for(var element = 0; element < array.length; element++){
            if( item == array[element])
                occurrence++;
        }
    return occurrence;
}
function checkDuplicate( array ){
    
    for(  var element = 0; element < array.length; element++  ){
        if( count( array , array [ element ] ) > 1 )
            return true;
        }
    return false;
}
function isInRange ( letter ){
    if( ( letter >= 'a' && letter <= 'z' ) || ( letter >= 'A' && letter <= 'Z' ) )
        return true;
        return false;
}
 //Switch Between Ranges
function switchBetweenRanges() {

        var encryptionMethods = document.getElementById('encryptionMethods');
        var valueOfEncryptionMethods = encryptionMethods.options[encryptionMethods.selectedIndex].value;

        if( valueOFRange == "lowerCaseAlphabets" ) { 

            if( valueOfEncryptionMethods == "shift" )
                document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(m) = m + e mod 26 <br> D<sub>d</sub>(c) = c - d mod 26"
            else if( valueOfEncryptionMethods == "affine" )
                document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 26<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 26"
            else if(valueOfEncryptionMethods == "substitution")
                document.getElementById("encryptEquation").innerHTML = " E<sub>&#960;</sub>(m) = &#960; (m) <br> D<sub>&#960;=(a,b)</sub>(c) =  &#960;<sup>-1</sup>(c)"
            else if(valueOfEncryptionMethods == "vigenere")
                document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>((m1,…,mn))=(m1+k1,…,mn+kn )<br>D<sub>d</sub>((c1,…,cn))=(c1-k1…,cn-kn ) over Z<sub>26</sub>"
            else if(valueOfEncryptionMethods == "hill")
                document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(m)=me over Z<sub>26</sub> <br>D<sub>d(c)=ce<sup>-1</sup> over Z<sub>26</sub>"
            else if( valueOfEncryptionMethods == "permutation" )
                document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>((m<sub>1</sub>,m<sub>2</sub>..,m<sub>n</sub>)) = ((m<sub>e(1)</sub>,m<sub>e(2)</sub>..,m<sub>e(n)</sub>)) <br> D<sub>d</sub>((c<sub>1</sub>,c<sub>2</sub>..,c<sub>n</sub>)) = ((c<sub>d(1)</sub>,c<sub>d(2)</sub>..,c<sub>d(n)</sub>))"         
        }
        else if( valueOFRange == "upperCaseAlphabets" ) {

            if(valueOfEncryptionMethods == "shift")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(m) = m + e mod 26 <br> D<sub>d</sub>(c) = c - d mod 26"
        else if( valueOfEncryptionMethods == "affine" )
            document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 26<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 26"
        else if(valueOfEncryptionMethods == "substitution")
            document.getElementById("encryptEquation").innerHTML = " E<sub>&#960;</sub>(m) = &#960; (m) <br> D<sub>&#960;=(a,b)</sub>(c) =  &#960;<sup>-1</sup>(c)"
        else if(valueOfEncryptionMethods == "vigenere")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>((m1,…,mn))=(m1+k1,…,mn+kn) over Z<sub>26</sub><br>D<sub>d</sub>((c1,…,cn))=(c1-k1…,cn-kn) over Z<sub>26</sub> "
        else if(valueOfEncryptionMethods == "hill")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(m)=me over Z<sub>26</sub> <br>D<sub>d(c)=ce<sup>-1</sup> over Z<sub>26</sub>"
        else if( valueOfEncryptionMethods == "permutation" )
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>((m<sub>1</sub>,m<sub>2</sub>..,m<sub>n</sub>)) = ((m<sub>e(1)</sub>,m<sub>e(2)</sub>..,m<sub>e(n)</sub>)) <br> D<sub>d</sub>((c<sub>1</sub>,c<sub>2</sub>..,c<sub>n</sub>)) = ((c<sub>d(1)</sub>,c<sub>d(2)</sub>..,c<sub>d(n)</sub>))"
        }
        else {
        if(valueOfEncryptionMethods == "shift")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(m) = m + e mod 52 <br> D<sub>d</sub>(c) = c - d mod 52"
        else if( valueOfEncryptionMethods == "affine" )
            document.getElementById("encryptEquation").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 52<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 52"
        else if(valueOfEncryptionMethods == "substitution")
            document.getElementById("encryptEquation").innerHTML = " E<sub>&#960;</sub>(m) = &#960; (m) <br> D<sub>&#960;=(a,b)</sub>(c) =  &#960;<sup>-1</sup>(c)"
        else if(valueOfEncryptionMethods == "vigenere")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>((m1,…,mn))=(m1+k1,…,mn+kn) over Z<sub>52</sub> <br>D<sub>d</sub>((c1,…,cn))=(c1-k1…,cn-kn ) over Z<sub>52</sub>"
        else if(valueOfEncryptionMethods == "hill")
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>(m)=me over Z<sub>52</sub> <br>D<sub>d(c)=ce<sup>-1</sup> over Z<sub>52</sub>"
        else if( valueOfEncryptionMethods == "permutation" )
            document.getElementById("encryptEquation").innerHTML = " E<sub>e</sub>((m<sub>1</sub>,m<sub>2</sub>..,m<sub>n</sub>)) = ((m<sub>e(1)</sub>,m<sub>e(2)</sub>..,m<sub>e(n)</sub>)) <br> D<sub>d</sub>((c<sub>1</sub>,c<sub>2</sub>..,c<sub>n</sub>)) = ((c<sub>d(1)</sub>,c<sub>d(2)</sub>..,c<sub>d(n)</sub>))"
        }
}