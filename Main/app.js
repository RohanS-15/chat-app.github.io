//heading animation
const heading = document.getElementById("heading");

var opacity = 0.05;

var intervalIdIn = setInterval(function(){
    heading.style.opacity = opacity += 0.007;
    if(opacity >= 1) clearInterval(intervalIdIn);
}, 50)
//-------------------------------------------------------
function Send(){

    const input = document.getElementById("input");
    const button = document.getElementById("button");

    if(input.value != ""){
    var pads2 = ["19px","18px","17px","16px","15px","14px","13px","12px","11px","10px","9px","8px","7px","6px","5px","4px","5px","6px","7px","8px","9px","10px","11px","12px","13px","14px",'15px',"16px","17px","18px","19px","20px"];

    var i2 = 0;
    const interval = setInterval(function(){
        button.style.padding = "5px " + pads2[i2];
        i2++;
    })

    const chats = document.getElementById("chats");

    const createdSpan = document.createElement("span");
    const userName = document.createTextNode(document.cookie + ": ")
    const chatText = document.createTextNode(input.value);

    const br = document.createElement("br");

    const seperator = document.createElement("hr");
    
    createdSpan.appendChild(userName);
    createdSpan.appendChild(chatText);
    createdSpan.appendChild(br);
    
    createdSpan.appendChild(seperator);
    chats.appendChild(createdSpan);

    chats.scrollTop = chats.scrollHeight;

    input.value = "";
    }else{
        alert("You didn't enter anything");
    }

    

}

input.addEventListener("keydown", function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            button.click();
        }

    })