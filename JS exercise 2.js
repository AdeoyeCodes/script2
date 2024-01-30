function RUN() {
var Pick = document.getElementById('form').value;



if (Pick=="" || Pick=='0') {
 alert('Why do you like stressing me? Put in something.');
 return false;
}
 var email = /^([A-Za-z0-9_.])+\@([a-z])+\.([a-z])+$/

if(!email.test(Pick)){
 alert('Enter a valid Email.');
 return false;
}
if(email.test(Pick)){
 alert('Good! You have just entered a Valid Email.');
}

}