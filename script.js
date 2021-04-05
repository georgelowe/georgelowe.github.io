var modal = document.getElementById("project-modal");

var open_project1_modal = document.getElementById("project1-button");
var open_project2_modal = document.getElementById("project2-button");
var open_project3_modal = document.getElementById("project3-button");

var project_source_code = document.getElementById("project-source-code");

var close_modal_btn = document.getElementsByClassName("close-modal-icon")[0];

open_project1_modal.addEventListener("click", open_modal, false);
open_project2_modal.addEventListener("click", open_modal, false);
open_project3_modal.addEventListener("click", open_modal, false);

close_modal_btn.addEventListener("click", close_modal, false);

project_source_code.addEventListener("click", open_link, false);

function open_modal() {
  modal.style.display = "block";
}

function close_modal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    this.close_modal();
  }
};

function open_link() {
  window.open("http://github.com", "_blank");
}
