var modal = document.getElementById("project-modal");

var open_project1_modal = document.getElementById("project1-button");
var open_project2_modal = document.getElementById("project2-button");
var open_project3_modal = document.getElementById("project3-button");

var close_modal_btn = document.getElementsByClassName("close-modal-icon")[0];

open_project1_modal.addEventListener("click", open_modal, false);
open_project2_modal.addEventListener("click", open_modal, false);
open_project3_modal.addEventListener("click", open_modal, false);

function open_modal() {
  modal.style.display = "block";
}

function close_modal() {
  modal.style.display = "none";
}

close_modal_btn.addEventListener("click", close_modal, false);

window.onclick = function (event) {
  if (event.target == modal) {
    this.close_modal();
  }
};
