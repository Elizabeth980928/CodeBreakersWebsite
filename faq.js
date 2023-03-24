for (i = 0; i < acc.length; i ++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var faqContainer = this.nextElementSibling;
      if(faqContainer.stle.maxheight) {
        faqContainer.style.maxheight = null;
      } else {
        faqContainer.style.maxheight = faqContainer.scrollheight + "px";
      }
  });
}