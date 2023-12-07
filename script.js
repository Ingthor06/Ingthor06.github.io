document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("menu");
    var popupContainer = document.querySelector(".popup-container");
  
    popupContainer.addEventListener("click", function () {
      toggleMenu();
    });
  
    function toggleMenu() {
      menu.style.display =
        menu.style.display === "none" || menu.style.display === ""
          ? "block"
          : "none";
    }
  });
  

  $('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
