let bnt=document.querySelectorAll(".num");
console.log(bnt);
let answer=document.querySelector(".answer");
let currinput="";
bnt.forEach((button)=>{
    button.addEventListener("click",()=>{
        let value=button.innerText;
        if(value==="c"){
            answer.innerText="";
            currinput="";
        }
        else if(value==="="){
            try{
                let res=eval(currinput);
                answer.innerText=currinput+value+res;

            }
            catch(error){
                answer.innerText="Eror";
                currinput="";
            }
        }
        else if(value==="⌫"){
            currinput=currinput.slice(0,-1);
            answer.innerText=currinput;
        }
        else{
            currinput=currinput+value;
            answer.innerText=currinput;
        }
    })
})