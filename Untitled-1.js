"use strict";
function calculate(){
let x=document.forms[0].price;
    let y=document.forms[0].count;
    let x0=document.forms[0].price0;
    let y0=document.forms[0].count0;
    let x1=document.forms[0].price1;
    let y1=document.forms[0].count1;
    let x11=document.forms[0].price11;
    let y11=document.forms[0].count11;
    let x2=document.forms[0].price2;
    let y2=document.forms[0].count2;
    let x22=document.forms[0].price22;
    let y22=document.forms[0].count22;
    let x3=document.forms[0].price3;
    let y3=document.forms[0].count3;
    let x33=document.forms[0].price33;
    let y33=document.forms[0].count33;
    let x4=document.forms[0].price4;
    let y4=document.forms[0].count4;
    let x44=document.forms[0].price44;
    let y44=document.forms[0].count44;
    let x5=document.forms[0].price5;
    let y5=document.forms[0].count5;
    let x55=document.forms[0].price55;
    let y55=document.forms[0].count55;
    let x6=document.forms[0].price6;
    let y6=document.forms[0].count6;
    let x66=document.forms[0].price66;
    let y66=document.forms[0].count66;
    let x7=document.forms[0].price7;
    let y7=document.forms[0].count7;
    let x77=document.forms[0].price77;
    let y77=document.forms[0].count77;
    let result=x.value*y.value+x1.value*y1.value+x2.value*y2.value+x3.value*y3.value+x4.value*y4.value+x5.value*y5.value+x6.value*y6.value+x7.value*y7.value+x0.value*y0.value+x11.value*y11.value+x22.value*y22.value+x33.value*y33.value+x44.value*y44.value+x55.value*y55.value+x66.value*y66.value+x77.value*y77.value;
    let res=document.getElementById("result");
    if(result<0)
    {res.innerHTML="Введены неправильные данные";}
    else{res.innerHTML="Стоимость: "+result+" рублей";}
}