function calculate(){
var weight=parseFloat(document.getElementById("first").value)
parseFloat(document.getElementById("first").value="")

var height=parseFloat(document.getElementById("second").value)
parseFloat(document.getElementById("second").value="")

var a=weight/(height*height);
var bmi=a.toFixed(2)
console.log(bmi)




if(bmi<18.5){
    console.log(("under weight"));
    var result=document.getElementById("result").innerHTML="under weight"
}

 else if(bmi>=18.5 & bmi<24.9){
    console.log(("normal"));
    var result=document.getElementById("result").innerHTML="normal"
}

 else if(bmi>=25 && bmi<29.9){
    console.log(("overheight"));
    var result=document.getElementById("result").innerHTML="overheight"
}


else{
    console.log(("obsite"));
    var result=document.getElementById("result").innerHTML="obsite"
}

bmi=result
var a=document.getElementById("result").innerHTML=`<b>${bmi}</b>`


}