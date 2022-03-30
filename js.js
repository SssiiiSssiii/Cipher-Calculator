	
    
      //shift cipher
      function shift(){
        
              var select = document.getElementById('types');
              var value = select.options[select.selectedIndex].value;

        //get the value of the select
   
    if(value == "shift"){
        
      
    	//input
	var m = document.getElementById("in").value;
    var  k = document.getElementById('key').value;

    if(m.length == 0){
        document.getElementById("in").value =  "required";
        return
    }
    if(k.length == 0){
        document.getElementById("key").value =  "required";
        return
    }

    	//encryption
	var c = "";
	for (var e = 0; e < m.length; e++){
      
        if( m[e] <='z' &&  m[e] >='a'){
            c += String.fromCharCode(((m[e].charCodeAt(0)-'a'.charCodeAt(0)+parseInt(k)) ) %26 + 'a'.charCodeAt(0))
            }
        else{  
            document.getElementById("out").value =  "pls enter only alphapets";return;
        }
    }
    document.getElementById("out").value =  c ;

    var illustration = document.getElementById("illustration") ;
    var abc = "<b>Tracing<br> <br>" ;
    for (var e = 0; e < m.length; e++){
        
        abc += m[e] + "   &#8594  " + '<span style="color: red;">'+c[e]+'</span>' + '<br>'
    }
    illustration.innerHTML = abc;
    }
}


// affine
function affine(){

   //get the value of the select
var select = document.getElementById('types');
var value = select.options[select.selectedIndex].value;

    //inputs
var m = document.getElementById("in").value;
var  k = document.getElementById('key').value;
var  b = document.getElementById('key2').value;

    if(m.length == 0){
            document.getElementById("in").value =  "required";
            return
        }
    if(b.length == 0){
        document.getElementById("key2").value =  "required";
        return
    }
    if(k.length == 0){
        document.getElementById("key").value =  "required";
        return
    }

if(value == "Affine"){
    
if(Number(k) == 1||
    Number(k) == 3||
    Number(k) == 5||
    Number(k) == 7||
    Number(k) == 9||
    Number(k) == 11||
    Number(k) == 15||
    Number(k) == 17||
    Number(k) == 19||
    Number(k) == 21||
    Number(k) == 23||
    Number(k) == 25){

//encryption
var c = "";

        for (var e = 0; e < m.length; e++){
        
            if(  m[e] <='z' &&  m[e] >='a' )
                c += String.fromCharCode(((parseInt(k)*(m[e].charCodeAt(0) - 'a'.charCodeAt(0)) + parseInt(b)) ) %26 + 'a'.charCodeAt(0))
            else{
                  document.getElementById("out").value =  "pls enter only alphapets";return
             }
            
          }
              document.getElementById("out").value =  c ;

              var illustration = document.getElementById("illustration") ;
              var abc = "<b>Tracing<br> <br>" ;
              for (var e = 0; e < m.length; e++){
                  
                  abc += m[e] + "   &#8594  " + '<span style="color: red;">'+c[e]+'</span>' + '<br>'
              }
              illustration.innerHTML = abc;
             
        } 
        else
        document.getElementById("out").value =  "there is no inverse for" + " " + k;
    }
 

}

//circular
function negative(i){
    if(i<0){
            while(i<0)
                i+=26;
        }
            return i;

}

//decrypt shift cipher
    function dShift(){
     
    var select = document.getElementById('types');
    var value = select.options[select.selectedIndex].value;

          //input
      var m = document.getElementById("in").value;
      var  k = document.getElementById('key').value;
    
      
    if(m.length == 0 ){
        document.getElementById("in").value =  "required";
        return
    }
    if(k.length == 0){
        document.getElementById("key").value =  "required";
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
                document.getElementById("out").value =  "pls enter only alphapets";return;
            }

         }   
            document.getElementById("out").value =  c ;
        }

        var illustration = document.getElementById("illustration") ;
        var abc = "<b>Tracing<br> <br>" ;
        for (var e = 0; e < m.length; e++){
            
            abc += m[e] + "   &#8594  " + '<span style="color: red;">'+c[e]+'</span>' + '<br>'
        }
        illustration.innerHTML = abc;
    }
  
    
//decrypt Affine cipher
function dAffine(){
       
    function getInverse(k){
        if(Number(k) == 1)
        return 1
       else if( Number(k) == 3)
       return 9
       else if( Number(k)== 5)
       return 21
       else if( Number(k)== 7)
       return 15
       else if( Number(k)== 9)
       return 3
       else if( Number(k)== 11)
       return 19
       else if( Number(k)== 15)
       return 7
       else if( Number(k)== 17)
       return 23
       else if( Number(k)== 19)
       return 11
       else if( Number(k)== 21)
       return 5
       else if( Number(k)== 23)
       return 17
       else if( Number(k)== 25)
       return 25
    }

    //get the value of select
    var select = document.getElementById('types');
    var value = select.options[select.selectedIndex].value;

      //input
      var m = document.getElementById("in").value;
      var  k = document.getElementById('key').value;
      var  b = document.getElementById('key2').value;

      if(m.length == 0){
        document.getElementById("in").value =  "required";
        return
    }
        if(b.length == 0){
            document.getElementById("key2").value =  "required";
            return
        }
       if(k.length == 0){
            document.getElementById("key").value =  "required";
            return
        }
    
    if(value == "Affine"){
     
    var c = "";
    //decryption

    for (var e = 0; e < m.length; e++){

        if( m[e] <='z' &&  m[e] >='a'){
            c += String.fromCharCode(((parseInt(getInverse(parseInt(k)))*(  negative((m[e].charCodeAt(0) - 'a'.charCodeAt(0))  - parseInt(b)))) ) %26 + 'a'.charCodeAt(0))
            }
        else{  
            document.getElementById("out").value =  "pls enter only alphapets";return;
        }

     }   

        document.getElementById("out").value =  c ;

        var illustration = document.getElementById("illustration") ;
        var abc = "<b>Tracing<br> <br>" ;
        for (var e = 0; e < m.length; e++){
            
            abc += m[e] + "   &#8594  " + '<span style="color: red;">'+c[e]+'</span>' + '<br>'
        }
        illustration.innerHTML = abc;
    }
}

    //switch bettwen fns
    function display(){
        
        var select = document.getElementById('types');
        var value = select.options[select.selectedIndex].value;
        if(value == "Affine"){
            document.getElementById('key2').disabled = false;
            document.getElementById('button').onclick = affine;
            document.getElementById('swap').onclick = dAffine;
            document.getElementById('in').value = "";
            document.getElementById('out').value = "";
            document.getElementById('key').value = "";
            document.getElementById('key2').value = "";
            document.getElementById('illustration').innerHTML = "";
            document.getElementById("encryptEq").innerHTML = " E<sub>e=(a,b)</sub>(m) = c = am + b mod 26<br>D<sub>d</sub>(c) = m = a<sup>-1</sup>(c - b) mod 26"
           
        }
        else if(value == "shift"){
            document.getElementById('key2').disabled = true;
            document.getElementById('button').onclick = shift;
            document.getElementById('swap').onclick = dShift;
            document.getElementById('in').value = "";
            document.getElementById('out').value = "";
            document.getElementById('key').value = "";
            document.getElementById('key2').value = "";
            document.getElementById('illustration').innerHTML = "";
            document.getElementById("encryptEq").innerHTML = " E<sub>e</sub></sub>(m) = m + e mod 26 <br> D<sub>d</sub>(c) = c - d mod 26"
           
        }
    }
    console.log("\u0049 \u0068\u006f\u0070\u0065 \u0074\u006f \u0066\u0069\u006e\u0064 \u0079\u006f\u0075\u0072 \u0068\u0065\u0061\u0076\u0065\u006e\u002e")