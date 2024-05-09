const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");
const min=1;
const max=6;
let randomnumber;
mybutton.onclick = function(){
    randomnumber=Math.floor(Math.random()*max)+min;
    mylabel.textContent=randomnumber;
}