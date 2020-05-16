window.onload = function() {


    
    var google = document.getElementsByClassName('ytp-chrome-controls')[0];
    var chat = document.getElementById('chat');
    console.log(chat);
    if(chat == null){return;}
    // var button = document.createElement("button");
    var state = true;

    document.getElementsByClassName("ytp-fullscreen-button ytp-button")[0].addEventListener("click", function(){
        if(state){
            state = false;
            var screen = document.getElementById('player-theater-container');
            var chat = document.getElementById('chat');
            document.getElementById("player-theater-container").style.position = "absolute";
            document.getElementById("chat").style.position = "absolute";
            document.getElementById("player-theater-container").style.zIndex = "1999";
            document.getElementById("chat").style.zIndex = "2000";
            document.getElementById("chat").style.width = "415px";
            document.getElementById("chat").style.height = "597px";
            document.getElementById("chat").style.right = "108px";
            document.getElementById("chat").style.left = "1050px";
            document.getElementById("chat").style.top = "75px";

            document.getElementById("input").style.visibility = "visible";
            document.getElementById("input").style.margin = "7px";
            document.getElementById("input2").style.visibility = "visible";
            document.getElementById("input2").style.margin = "7px";
            document.getElementById("secondary-inner").style.marginTop = "950px";
        }else{
            state = true;
            document.getElementById("player-theater-container").style.zIndex = "999";
            document.getElementById("chat").style.zIndex = "1000";
            document.getElementById("chat").style.width = "415px";
            document.getElementById("chat").style.height = "597px";
            document.getElementById("chat").style.right = "108px";
            document.getElementById("chat").style.left = "1050px";
            document.getElementById("chat").style.top = "75px";

            document.getElementById("input").style.visibility = "hidden";
            document.getElementById("input2").style.visibility = "hidden";

        }
        
    });
    
   
    
    var input = document.createElement("input");
    input.style.visibility = "hidden";
    input.type = "range";
    input.id = "input";
    input.min = 0;
    //input.style.margin = "7px";
    input.value = 100;
    input.max = 100;
    input.step = "any";
    google.appendChild(input);

    input.addEventListener("input", function(evt) {
        
        document.getElementById("chat").style.opacity = evt.target.value + "%";
        
      });

   
    var input2 = document.createElement("input");
    input2.style.visibility = "hidden";
    input2.id = "input2";
    input2.type = "range";
    input2.value = 70;
    // input2.style.margin = "7px";
    input2.min = 0;
    input2.max = 70;
    input2.step = "any";
    google.appendChild(input2);

    input2.addEventListener("input", function(evt) {
        
        document.getElementById("chat").style.left = evt.target.value + "%";
        
      });
    
    
}

