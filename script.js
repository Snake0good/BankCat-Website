// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var registerBtn = document.getElementById("register");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function showModal() {
    modal.style.display = "block"
}

function hideModal() {
    modal.style.display = "none";
}

// close the modal when user clicks (x)
span.onclick = function() {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
