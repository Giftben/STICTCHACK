function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "nav-list-container") {
      x.className += " responsive";
    } else {
      x.className = "nav-list-container";
    }
  }
  