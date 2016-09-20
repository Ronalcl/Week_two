$(function() {
    $("#add").click(function(ev){ 
         $("ul").append("<li>Item 2<button class='Add'>Add</button></li>");
    });
$(".remove").click(".remove", function(ev){
    console.log(ev);
    $(ev.target).parent.fadeOut();

});
   $("#name").blur(function() {
       console.log($("#name").val());
       alert("Hello, " + name);
   });



    $("#btn2").click(function(){
        $("ol").append("<li>LOST</li>");
    });
});
