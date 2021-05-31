"use strict";

$(function(){
    $(document).on('click','#ex1-btn',function(){
        $('#ex1-name').text("大熊隆寛");
    })    
});

$(function(){
    $(document).on('click','#ex2-btn',function(){
        if ($("#ex2-name").css("color") == "rgb(255, 0, 0)") {
            $('#ex2-name').css("color","blue");
        }else if($("#ex2-name").css("color") == "rgb(0, 0, 255)"){
            $("#ex2-name").css("color","red");
        }
    })
})