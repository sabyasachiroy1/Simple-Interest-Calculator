function cal()
{
    let pa= document.getElementById('$PA').value;
    let ri= document.getElementById('$RI').value;
    let tp= document.getElementById('$TP').value;
    let c,d;
    c= parseFloat(pa) * parseFloat(ri) *parseFloat(tp);
    d= parseFloat(c/100);
    let si= document.getElementById('$SI').value=d;
    let m= document.getElementById("$ia").value=pa;
    let n= document.getElementById("$ity").value=tp;
    let o= document.getElementById("$inter").value=d;
    let y;
    y= parseFloat(m)+parseFloat(si);
    let p= document.getElementById("$IaT").value=y;
    
    
}

const time = document.getElementById('$TP').value;