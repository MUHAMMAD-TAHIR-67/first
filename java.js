document.getElementById("alertname").onclick= function(){
    document.getElementById("statement").innerHTML = ""
    alert("Muhammad tahir")
}
document.getElementById("alertNum").onclick= function(){
    document.getElementById("statement").innerHTML =""
    alert("#danger ") 
}
document.getElementById("varname").onclick= function(){
    let varname;
document.getElementById("statement").innerText ="variable name"
document.getElementById("output").innerText="varname"
}
document.getElementById("camelCase").onclick= function(){
    document.getElementById("statement").innerText="EXAMPLE OF CAMEL CASE"
    document.getElementById("output").innerText="thisIsCamelCase"
}

document.getElementById("sum").onclick = function(){
    let a = 345;
    let b= 645;
    let sum = a+b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a + b = ${sum}`
}
document.getElementById("sub").onclick = function(){
    let a = 53;
    let b = 45 ;
    let sub = a-b;
    document.getElementById("statement").innerHTML=` a =  ${a}  <br/> b = ${b}`
    document.getElementById("output").innerText=` a - b = sub${sub}`
}
document.getElementById("mul").onclick= function( ){
    let a = 45;
    let b = 57;
    let mul = a*b ;
    document.getElementById("statement").innerHTML=` a = ${a} <br/> b = ${ b}` 
    document.getElementById("output").innerHTML=` a*b = ${mul}`


}
document.getElementById("div").onclick= function(){
    let a = 34 ;
    let b = 57 ;
    let react = a/b ;
    document.getElementById("statement").innerHTML=` a = ${a} <br> b = ${b}`
    document.getElementById("output").innerHTML=` a/b = ${react}`
}
document.getElementById("cal").onclick= function(){
    let a = 345;
    let b= 645;
    let sum = a+b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a + b = ${sum}`
}