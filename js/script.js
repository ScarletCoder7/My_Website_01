//We here are bound to use jquery instead of ordinary javascript as we're gonna use .collapse() which is dependent on jquery. Since we are using jquery we'll use $, which reduces the DOM content.

//document.addEventListener("DOMContentLoaded", function(){});
$(function(){
    
    //Same as document.querySelector("#navbarToggle").addEventListener("blur", function(event){});
    $("#navbarToggle").blur(function(event){    //.blur() to go back to original for whn looses focus !! // so if .blur() happens the below code will be executed !!
        var screenWidth = window.innerWidth; // window.innerWidth means width of the browser window
        if(screenWidth < 728){
            $("#collapsable-nav").collapse("hide");
        }
    });
});