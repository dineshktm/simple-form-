document.getElementById("btn").addEventListener("mouseover",calculate);
console.log("hii");

function calculate(){
var name=document.getElementById("name").value;
var rollno=document.getElementById("rollno").value;
var email=document.getElementById("email").value;
var dept=document.getElementById("dept").value;
var sec=document.getElementById("sec").value;
var year=document.getElementById("year").value;
document.getElementById("res").innerHTML="year is :" +year;
}

