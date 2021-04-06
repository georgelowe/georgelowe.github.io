// // Landing Page DOM Elements
var projects_container = document.getElementById("projects-container");

// Modal DOM Elements
var modal = document.getElementById("project-modal");
var project_title = document.getElementById("project-title");
var project_text = document.getElementById("project-text");
var media_src = document.getElementById("media-src");
var code_src = document.getElementById("code-src");
var close_modal_btn = document.getElementsByClassName("close-modal-icon")[0];

// Modal Event Listeners
close_modal_btn.addEventListener("click", close_modal, false);
code_src.addEventListener("click", open_link, false);

window.onload = function () {
  populate_landing_page();
};

let projects = new Map();
projects.set("1", {
  id: "project1",
  title: "Instagram Automation Bot 💬",
  description:
    "I designed and implemented this bot out of the desire to automate tasks I faced when growing a brand Instagram. Features include, calculating users that do not follow an account back and unfollowing them, liking and commenting on posts by a set of specific users or hashtags and analysing growth data over time.",
  media_src: "Ball.mp4",
  code_src: "https://github.com/georgelowe/Instagram-Automation",
});
projects.set("2", {
  id: "project2",
  title: "Camera-based object tracking for VR experiences 📸",
  description:
    "This project introduces a complete system, such that a physical object is tracked using a webcam and reproduced in the same precise location within a virtual environment, allowing users to manipulate the object whilst in virtual reality.",
  media_src: "Ball.mp4",
  code_src: "https://github.com/georgelowe/VR-Object-Tracking",
});
projects.set("3", {
  id: "project3",
  title: "Responsive Portolio Website",
  description:
    "This website that you are currently visiting was designed and produced by me to showcase my work, provide links to my code and to allow potential employers to reach out and contact me.",
  media_src: "Ball.mp4",
  code_src: "https://github.com/georgelowe/georgelowe.github.io",
});

function populate_landing_page() {
  projects.forEach((project) => {
    const project_el = document.createElement("div");
    project_el.id = project.id;
    project_el.innerHTML = `<button class="card">
    <div class="project-title">
    ${project.title}
    </div>
    <div class="project-description">
    ${project.description}
    </div>
    <div class="project-tech-stack"></div>
    <a href="${project.code_src}"
      ><div class="view-source-btn">
        <p class="card-git-link">View Code</p>
        <i
          class="fab fa-github card-git-icon"
          style="font-size: 1.5rem; color: #ccd6f6"
        ></i></div
    ></a>
  </button>`;
    project_el.addEventListener("click", open_modal, false);
    projects_container.appendChild(project_el);
  });
}

function open_modal(e) {
  modal.style.display = "block";

  if (this.id.includes("project1")) {
    let project = projects.get("1");
    populate_modal(project);
  }
  if (this.id.includes("project2")) {
    let project = projects.get("2");
    populate_modal(project);
  }
  if (this.id.includes("project3")) {
    let project = projects.get("3");
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
