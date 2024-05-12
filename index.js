var mycheckbox = document.getElementById("mycheckbox");
var myvisa = document.getElementById("myvisa");
var submit = document.getElementById("mysubmit");
var mymastercard = document.getElementById("mymastercard");
var mypaypal = document.getElementById(" mypaypal");
var subresult = document.getElementById(" subresult");
var payresult = document.getElementById(" payresult");
submit.addEventListener('click', function() {
    if(mycheckbox.checked){//checked will check whether user has selected it or not
        subresult.textContent=`You are Subscribed`;
    }
    else{
        subresult.textContent=`You are  Not Subscribed`;
    }
});