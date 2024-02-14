$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
        
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
       
});

document.getElementById("open").addEventListener("click", function(){
    var div = document.createElement("div");
    div.id = "miDiv";
    document.getElementById("miDiv").style.display = 'block';
   })
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("miDiv").style.display = "none";
})