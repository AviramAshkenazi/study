function add()
{
    let sum;
    let a = document.getElementById("first").value; 
    let b = document.getElementById("second").value; 
    sum = Number(a) + Number(b);
    document.getElementById("demo").innerHTML = "The result is: \n"+sum.toString();
}

function sub()
{
    let sum;
    let a = document.getElementById("first").value; 
    let b = document.getElementById("second").value; 
    sum = Number(a) - Number(b);
    document.getElementById("demo").innerHTML = "The result is: \n"+sum.toString();
}

function mul(){
    let sum;
    let a = document.getElementById("first").value; 
    let b = document.getElementById("second").value; 
    sum = Number(a) * Number(b);
    document.getElementById("demo").innerHTML = "The result is: \n"+sum.toString();
}

function div()
{
    let sum;
    let a = document.getElementById("first").value; 
    let b = document.getElementById("second").value; 
    sum = Number(a) / Number(b);
    document.getElementById("demo").innerHTML = "The result is: \n"+sum.toString();
}