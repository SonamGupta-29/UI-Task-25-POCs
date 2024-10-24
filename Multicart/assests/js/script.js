
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// slick slider
$(document).ready(function(){
$(".slick-slider").slick({
    slidesToShow: 4,
    infinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
      // dots: false, Boolean
     // arrows: false, Boolean
   });
});

$(document).ready(function(){
    $(".slick-slider-2").slick({
        slidesToShow: 3,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
          // dots: false, Boolean
         // arrows: false, Boolean
       });
    });


    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }

    //  function change() {
    //     var x = document.getElementById("myDIV");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    //   }



    //   function rtl() {
    //     document.getElementById("right-left").style.left = "1213px";
    //   }

    //   function ltl() {
    //     document.getElementById("right-left").style.right = "1213px";
       
    //   }

      $("#rtl").click(function(){
        $(".theme-settings").addClass("left");
        $(".theme-settings").removeClass("right");
        $("#ltl").show();
        $("#rtl").hide();
      });

      $("#ltl").click(function(){
        $(".theme-settings").addClass("right");
        $(".theme-settings").removeClass("left");
        $("#ltl").hide();
        $("#rtl").show();
      });

      $(function() {
        $("span").on("click", function () {
            $(":root").css("--maincolor", $(this).data("color"));
        });
    });
 