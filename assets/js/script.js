// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("poster");
var modalImg = document.getElementById("full screen img");
var fixedNav = document.getElementById("fixed-nav");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  fixedNav.style.zIndex = 0;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var content = document.getElementsByClassName("col-lg-9")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  fixedNav.style.zIndex = 1;
};

span.onclick = function () {
  modal.style.display = "none";
  fixedNav.style.zIndex = 1;
};