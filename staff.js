// Scroll to Top feature
function topScroll(){
  window.scrollTo({top:0, behavior: "smooth"});
}


//Image Zoom feature

var target = image.currentTarget;


function imageGrow(image) {
  image.style.width = "420px";
  image.style.width = "290px";
}
function imageShrink(image) {
  image.style.width = "380px";
  image.style.width = "250px";
}


// Navigation bar Updates
function openlink(evt, linkName) {
  // Declare all variables
  var i, tabcontent,  tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTab");
  if (x.className === "tab") {
    x.className += " responsive";
  } else {
    x.className = "tab";
  }
}

