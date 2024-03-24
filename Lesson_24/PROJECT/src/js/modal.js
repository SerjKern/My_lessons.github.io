$(document).ready(function () {
  var button = $("#button");
  var modal = $("#modal");
  var close = $("#close");

  button.on("click", function () {
    modal.addClass("modal_active");
  });
  close.on("click", function () {
    modal.removeClass("modal_active");
  });

  let logo = $(".navbar__logo");
  console.log("logo--", logo);
  let phone = $(".navbar__phone");
  let title = $(".hero-text__title");
  title.on("click", function(){
   phone.show("slow");
  })
  
  logo.on("click", function (e) {
    console.log("phone--", phone);
    phone.hide("slow");
    // console.log("это клик--", e.currentTarget);
  });

});
