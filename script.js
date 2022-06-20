// navbar responsive
$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show')
    });
});
// contact validation
function validate(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject")
    if(name.value == "",email.value== "",subject.value == ""){
        alert("Nuk lejohet zbrazet, ju luteam plotsoni fushat");
    }else{
        alert("Faleminderit per mesazhin tuaj");
    }
}
// slide function
