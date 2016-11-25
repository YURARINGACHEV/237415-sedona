var mapPopup = document.querySelector(".img-map");
var link = document.querySelector(".search");
var popup = document.querySelector(".appointment-form");
 link.addEventListener("click", function(event) {
        event.preventDefault();
         popup.classList.toggle("appointment-form-show");
      });
