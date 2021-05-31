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

$(function(){
    $(document).on('change','#ex3-select',function(){
        if ($("#ex3-select").val() == "トライアスロン") {
            $('#ex3-div').html('それでは好きな種目は？<input type="radio" name="subject">Swim <input type="radio" name="subject">Bike <input type="radio" name="subject">Run')
        }
        if ($("#ex3-select").val() == "その他") {
            $('#ex3-div').html('それでは何が好き？<input type="text" name="subject">')
        }
    })
})

$(function(){
    $(document).on('click','#ex4-btn',function(){
        $('#ex4-btn').prop('disabled',true);
    })
})

$(function(){
    $(document).on('click','#ex5-btn',function(){
        if ($('#ex5-email').val() == "") {
            alert("メールアドレスを入力してください");
        }
    })
})