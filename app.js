function naresh() {
    var name = document.getElementById('name').validity.patternMismatch;
 
    if (name) {
      var a= document.getElementsByClassName('namemessage');
      a[0].innerHTML= "Invalid username";
    }
    else {
     var a=   document.getElementsByClassName('namemessage')
        a[0].innerHTML= "";
    }
    var missname = document.getElementById('name').validity.valueMissing;
    
    if (missname) {
      var a=  document.getElementsByClassName('namemessage');
a[0].innerHTML=" This field is mandatory";
    }
    var phone=document.getElementById('number').validity.patternMismatch;
    if(phone){
        var b=   document.getElementsByClassName('phone');
    b[0].innerHTML=" Invalid phonenumber";
}
     else{
  var b=  document.getElementsByClassName('phone');
  b[0].innerHTML="";
     }
    var phonemis=document.getElementById('number').validity.valueMissing;
    if(phonemis){
        var b=  document.getElementsByClassName('phone');
    b[0].innerHTML=" This field is mandatory";
    }





    var age=document.getElementById('age').validity.patternMismatch;
            if(age){
            var c=  document.getElementsByClassName('agemessage');
            c[0].innerHTML="Invalid input";
         }    
    else{
        var c= document.getElementsByClassName('agemessage');
        c[0].innerHTML="";
     }
            var agemis=document.getElementById('age').validity.valueMissing;
            if(agemis){
             var c= document.getElementsByClassName('agemessage');
             c[0].innerHTML=" This field is mandatory";
            }
            

            var password=document.getElementById('password').validity.patternMismatch;
            
            if(password){
            var d =  document.getElementsByClassName('passwordmessage');
            d[0].innerHTML="Invalid password";
         }    
    else{
        var d= document.getElementsByClassName('passwordmessage');
        d[0].innerHTML="";
     }
            var passwordmis=document.getElementById('password').validity.valueMissing;
            if(passwordmis){
             var d= document.getElementsByClassName('passwordmessage');
             d[0].innerHTML="This field is mandatory";
            }

            var email=document.getElementById('email').validity.typeMismatch;
            if(email){
                var e=document.getElementsByClassName('emailvalidate');

                e[0].innerHTML="Invalid email";
            }
            else
            {
                var e=document.getElementsByClassName('emailvalidate');
                e[0].innerHTML="";  
 }

 var emailmis=document.getElementById('email').validity.valueMissing;
 if(emailmis){
     var e=document.getElementsByClassName('emailvalidate');
     e[0].innerHTML="This field is mandatory";
 }

 


 var date=document.getElementById('myDate').validity.valueMissing;

 if(date)
 {
     var f=document.getElementsByClassName('datemessage');
     f[0].innerHTML="This field is mandatory";
 }

 


 var gender=document.getElementById('gender1').validity.valueMissing;
 console.log(gender)
 if(gender){
     var i=document.getElementsByClassName('gender');
     i[0].innerHTML="This field is mandatory";

 }


}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
today = yyyy+'-'+mm+'-'+dd;
var test=document.getElementById("myDate");
test.setAttribute("max", today);
