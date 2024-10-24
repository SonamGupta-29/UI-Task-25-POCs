//   color-theme
document.addEventListener('click', (e) => {
  const colorOption = e.target.closest('.color-option');
  if (!colorOption) return;
  
  // unselect currently selected color options
  document.querySelectorAll('.color-option').forEach(colorOption => colorOption.classList.remove('is-selected'));
  colorOption.classList.add('is-selected');
  
  const color = colorOption.dataset.color;
  
  let root = document.documentElement;
  root.style.setProperty('--primary-color', color);
  
});

// navbar position change
$(document).ready(function(){
  $("#switch").click(function(){
    $(".header-fix").toggleClass("main");
    $("#fix-top").addClass("margin-top-header-fixed");
  });
});


//   card hide & show
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myToggle() {
  var x = document.getElementById("myToggle");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
