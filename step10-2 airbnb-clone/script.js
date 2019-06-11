window.addEventListener("scroll", function() {
  var el = document.querySelector(".navigation-bar");

  if (window.scrollY >= 100) el.classList.add("navigation-bar--transition");
  else el.classList.remove("navigation-bar--transition");
});
