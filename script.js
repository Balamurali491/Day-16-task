function greetHeading1(){
    var heading = document.querySelector("#one");
    heading.innerHTML="10";
    console.log(heading.innerHTML);

}
setTimeout(greetHeading1,2000,"seconds");
function greet1(callback){
    callback()
    

   
}
greet1((greetHeading1));


function greetHeading2(){
    var heading = document.querySelector("#two");
    heading.innerHTML="9";
    //console.log(heading.innerHTML);
}
setTimeout(greetHeading2,2000 );

function greet2(callback){
    callback()

   
}
greet2(greetHeading2);



function greetHeading3(){
    var heading = document.querySelector("#three");
    heading.innerHTML="8";
}
setTimeout(greetHeading3,3000 );
function greet(callback){
    callback()

   
}
greet(greetHeading3);

function greetHeading4(){
    const heading = document.querySelector("#four");
    heading.innerHTML="7";
}
setTimeout(greetHeading4,4000 );
function greet(callback){
    callback()

   
}
greet(greetHeading4);

function greetHeading5(){
    const heading = document.querySelector("#five");
    heading.innerHTML="6";
}
setTimeout(greetHeading5,5000 );
function greet(callback){
    callback()

   
}
greet(greetHeading5);

function greetHeading6(){
    const heading = document.querySelector("#six");
    heading.innerHTML="5";
}
setTimeout(greetHeading6,6000 );
function greet(callback){
    callback()

   
}
greet(greetHeading6);

function greetHeading7(){
    const heading = document.querySelector("#seven");
    heading.innerHTML="4";
}
setTimeout(greetHeading7,7000 );
function greet(callback){
    callback()

   
}
greet(greetHeading7);

function greetHeading8(){
    const heading = document.querySelector("#eight");
    heading.innerHTML="3";
}
setTimeout(greetHeading8,8000 );
function greet(callback){
    callback()

   
}
greet(greetHeading8);

function greetHeading9(){
    const heading = document.querySelector("#nine");
    heading.innerHTML="2";
}
setTimeout(greetHeading9,9000 );
function greet(callback){
    callback()

   
}
greet(greetHeading9);

function greetHeading10(){
    const heading = document.querySelector("#ten");
    heading.innerHTML="1";
}
setTimeout(greetHeading10,10000 );
function greet(callback){
    callback()

   
}
greet(greetHeading10);

function greetHeading11(){
    const heading = document.querySelector("#eleven");
    heading.innerHTML="Happy Independance Day";
}
setTimeout(greetHeading11,11000 );
function greet(callback){
    callback()

   
}
greet(greetHeading11);
