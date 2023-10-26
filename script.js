/*function firstClick(event){
console.log("first button click");
console.log(event.target);
}

let btwo=document.querySelector(".two");
btwo.onclick=(event)=>{
    console.log("2nd button clicked");
    console.log(event.target);
}

let bthree=document.querySelector(".three");

bthree.addEventListener("click",(event)=>{
    console.log("b3 clicked");
    console.log(event.target);
});*/

let buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", function(event){
        console.log("button with text: "+ event.target.innerText);
    })
})

console.log(document);

let arr=[9,8,6,3];
function sum(){
    for(i=0;i<arr.size;i++){
        sum=sum+arr[innerWidth]
    }
    console.log(sum);
}