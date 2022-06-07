let display = document.getElementById("display")
let button = document.getElementsByClassName("button")

function clickButton(button){
    let number = button.innerHTML;
    let maxLength = 17;
    
    if (number === "AC"){
        display.innerHTML = "0";
    }else if (number === "="){
        display.innerHTML = eval(display.innerHTML);
             if(display.innerHTML >= maxLength){
                display.innerHTML = display.innerHTML.substr(0,maxLength);
             }
    }else{
        if (display.innerHTML === "0"){
            if(number === "0" || number ==="00"){
                display.innerHTML = "0";
            }else if(number === "+" || number === "-" || number === "."){
                display.innerHTML = "0" + number;
            }else if(number === "×"){
                number ="*";
                display.innerHTML = "0" + number;
            }else if(number === "÷"){
                number ="/";
                display.innerHTML = "0" + number;
            }else{    
                display.innerHTML = number;
            }    
        
        }else if(display.innerHTML.substr(-1,1) === "+" || display.innerHTML.substr(-1,1) === "-" || display.innerHTML.substr(-1,1) === "*" || display.innerHTML.substr(-1,1) === "/"){
            if(number === "00" || number === "+" || number === "-" || number === "×" || number === "÷" || number === "."){
                display.innerHTML += '';
            }else{
                display.innerHTML += number;   
            } 
        
        }else if(display.innerHTML.substr(-1,1 ) === "."){
            if(number==="."){
                display.innerHTML += "";
            }else{
                display.innerHTML += number;
            }
            
        
        }else if(display.innerHTML.slice(-2) === "+0" || display.innerHTML.slice(-2) === "-0" || display.innerHTML.slice(-2) === "*0" || display.innerHTML.slice(-2) === "/0" ){ 
            if(number === "." || number === "+" || number === "-" ){
                display.innerHTML += number;
            }else if(number === "×"){
                number ="*";
                display.innerHTML += number;
            }else if(number === "÷"){
                number ="/";
                display.innerHTML += number;
            }else{
                display.innerHTML += '';
            }
    
        
        
        }else if(display.innerHTML.length === 17) {
                display.innerHTML += '';
        }else{
             if(number === "×"){
               number ="*";
               display.innerHTML += number;
            }else if(number ==="÷"){
                number ="/";
                display.innerHTML += number;
            }else{
                display.innerHTML += number;
            }
        }        
        
     }

}
