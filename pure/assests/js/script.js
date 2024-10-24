window.onload = function () {
    const sidebar = document.querySelector(".wrapper");
    const closeBtn = document.querySelector("#btn");


    closeBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open")
        menuBtnChange()
    })



    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-x")
        } else {
            closeBtn.classList.replace("bx-x", "bx-menu")
        }
    }


}


function myToggle() {
    var x = document.getElementById("navbarVerticalCollapse");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




