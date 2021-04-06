// Landing Page DOM Elements
var open_project1_modal = document.getElementById("project1-button");
var open_project2_modal = document.getElementById("project2-button");
var open_project3_modal = document.getElementById("project3-button");

// Modal DOM Elements
var modal = document.getElementById("project-modal");
var project_title = document.getElementById("project-title");
var project_text = document.getElementById("project-text");
var media_src = document.getElementById("media-src");
var code_src = document.getElementById("code-src");
var close_modal_btn = document.getElementsByClassName("close-modal-icon")[0];

// Landing Page Event Listeners
open_project1_modal.addEventListener("click", open_modal, false);
open_project2_modal.addEventListener("click", open_modal, false);
open_project3_modal.addEventListener("click", open_modal, false);

// Modal Event Listeners
close_modal_btn.addEventListener("click", close_modal, false);
code_src.addEventListener("click", open_link, false);

let projects = new Map();
projects.set("Instagram", {
  title: "Instagram Project",
  description: "This is my instagram automation bot project",
  media_src: "Ball.mp4",
  code_src: "https://github.com/georgelowe/Instagram-Automation",
});
projects.set("VR", {
  title: "VR Project",
  description: "This is my VR project",
  media_src: "Ball.mp4",
  code_src: "https://github.com/georgelowe/VR-Object-Tracking",
});
projects.set("Website", {
  title: "Portfolio Project",
  description: "This is my portfolio project",
  media_src: "Ball.mp4",
  code_src: "https://github.com/georgelowe/georgelowe.github.io",
});

function populate_landing_page() {}

function open_modal(e) {
  modal.style.display = "block";

  if (this.id.includes("project1")) {
    let project = projects.get("VR");
    populate_modal(project);
  }
  if (this.id.includes("project2")) {
    let project = projects.get("Instagram");
    populate_modal(project);
  }
  if (this.id.includes("project3")) {
    let project = projects.get("Website");
    populate_modal(project);
  }
}

function populate_modal(project) {
  project_title.textContent = project.title;
  project_text.textContent = project.description;
  media_src.textContent = project.media_src;
  code_src.id = project.code_src;
}

function close_modal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    this.close_modal();
  }
};

function open_link(e) {
  window.open(this.id, "_blank");
}
