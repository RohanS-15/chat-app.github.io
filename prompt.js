function Continue(){
    const inputValue = document.getElementById("input").value;
    const errorLabel = document.getElementById("error_label");

    if(inputValue.length < 3 || inputValue.length > 15){
        document.getElementById("error_label").innerHTML = "Name must be between 3 and 15 characters";
        i = 0;
        var intervalId = setInterval(function(){
            i += 0.01;
            if(i == 1){
                clearInterval(intervalId);
                i = 0;
                
            }
            errorLabel.style.opacity = i;

        }, 30)
    }else{
        document.cookie = inputValue;
        document.getElementById("error_label").innerHTML = "";
        window.location.href = "Main/index.html";
    }
    

    
}
const input = document.getElementById("input");
const button = document.getElementById("button");

input.addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        button.click();
    }
    
})

