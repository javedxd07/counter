const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const count=document.getElementById("count");
let c=0;
inc.onclick=function(){
c++;
count.textContent=c;
}
dec.onclick=function(){
    c--;
    count.textContent=c;
    }
reset.onclick=function(){
        c=0;
        count.textContent=c;
        }
