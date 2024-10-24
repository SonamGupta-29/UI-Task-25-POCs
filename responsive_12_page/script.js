window.onload = function(){
    const sidebar = document.querySelector(".wrapper");
    const closeBtn = document.querySelector("#btn");
  

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })



    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-x","bx-menu")
        }else{
            closeBtn.classList.replace("bx-menu","bx-x")
        }
    }


 // popover
 const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
 const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
}


// table
    $(document).ready(function (){
        new DataTable('#example');
    });


    // search
    const searchBtn = document.querySelector(".search-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const searchBox = document.querySelector(".search-box");
    
    searchBtn.onclick = () => {
      searchBox.classList.add("active");
    }
    
    cancelBtn.onclick = () => {
      searchBox.classList.remove("active");
    }


    // hide & show
    // $("#navbarScroll").click(function(){
    //     $("div").hide();
    //   });
      
    //   $("#show").click(function(){
    //     $("div").show();
    //   });