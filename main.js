let display = document.getElementById("display")
let button = document.getElementsByClassName("button")
//let numeralButton = document.getElementsByClassName("numeral")


function clickButton(button){
   // let result = display.innerHTML;
    let number = button.innerHTML;
    //let numeral = numeralButton,innerHTML;
    
    if (number === "AC"){
        display.innerHTML = "0";
    }else if (number === "="){number
        display.innerHTML = eval(display.innerHTML)
    }else{
        if (display.innerHTML === "0"){
            if(number === "0" || number ==="00"){
                display.innerHTML = "0"
            }else if(number === "+" || number === "-" || number === "."){
                display.innerHTML = "0" + number
            }else if(number === "×"){
                number ="*";
                display.innerHTML = "0" + number
            }else if(number === "÷"){
                number ="/";
                display.innerHTML = "0" + number
            }else{    
                display.innerHTML = number;
            }    
        
        }else if(display.innerHTML.substr(-1,1) === "+" || display.innerHTML.substr(-1,1) === "-" || display.innerHTML.substr(-1,1) === "*" || display.innerHTML.substr(-1,1) === "/"){
            if(number === "00" || number === "+" || number === "-" || number === "×" || number === "÷" || number === "."){
                display.innerHTML += ''
            }else{
                display.innerHTML += number   
            } 
        //display表示が”数字＋０になった時に0が連続で表記される
        }else if(display.innerHTML.substr(-1,2) == "+0"){//display.innerHTMLの右から２つの文字が"符号0"の時
            if(number === "." || number === "+" || number === "-" || number === "*" || number === "/"){
                display.innerHTML += number//符号や小数点の場合は続けて表示
            }else{
                display.innerHTML += ''//符号や小数点以外の場合は表示されない
            }
                  
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
