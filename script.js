// // Landing Page DOM Elements
var projects_container = document.getElementById("projects-container");
var refresh_terminal_icon = document.getElementById("refresh-terminal");

// Landing Page DOM Event Listeners
refresh_terminal_icon.addEventListener("click", refresh_terminal, false);

// Modal DOM Elements
var modal = document.getElementById("project-modal");
var project_title = document.getElementById("project-title");
var project_summary = document.getElementById("project-summary");
var project_main_text = document.getElementById("project-main-text");
var media_src = document.getElementById("media-src");
var code_src = document.getElementById("code-src");
var close_modal_btn = document.getElementsByClassName("close-modal-icon")[0];
var video_container = document.getElementById("video-container");

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
  brief_description:
    "I designed and implemented this bot out of the desire to automate tasks I faced when growing a brand Instagram. Features include, calculating users that do not follow an account back and unfollowing them, liking and commenting on posts by a set of specific users or hashtags and analysing growth data over time.",
  full_description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facilis mollitia possimus harum minima? Nemo reprehenderit accusantium molestias, veritatis excepturi dicta sapiente vitae laboriosam quisquam modi animi, ullam omnis, vero ex magnam! Asperiores accusantium dolor, repudiandae reprehenderit autem deserunt eveniet vero eius explicabo quas adipisci expedita in. Sequi velit ullam porro laborum fuga nam vitae quod incidunt in atque! Ratione dolore nesciunt quia exercitationem earum culpa voluptates impedit obcaecati eos ipsa excepturi, repellat, tenetur dolor velit unde, error neque repudiandae. Labore, possimus. Esse nisi quo sed dolor asperiores eius, quae veritatis totam praesentium recusandae vero reprehenderit, debitis commodi id numquam!",
  media_src: "",
  code_src: "https://github.com/georgelowe/Instagram-Automation",
});
projects.set("2", {
  id: "project2",
  title: "Camera-based object tracking for VR experiences 📸",
  brief_description:
    "This project introduces a complete system, such that a physical object is tracked using a webcam and reproduced in the same precise location within a virtual environment, allowing users to manipulate the object whilst in virtual reality.",
  full_description: "Full project description",
  media_src: "Media/Ball.mp4",
  code_src: "https://github.com/georgelowe/VR-Object-Tracking",
});
projects.set("3", {
  id: "project3",
  title: "Responsive Portolio Website",
  brief_description:
    "This website that you are currently visiting was designed and produced by me to showcase my work, provide links to my code and to allow potential employers to reach out and contact me.",
  full_description: "Full project description",
  media_src: "",
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
    ${project.brief_description}
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
  project_summary.textContent = project.brief_description;
  project_main_text.textContent = project.full_description;
  media_src.textContent = project.media_src;
  if (project.media_src === "") {
    video_container.style.display = "none";
  } else {
    video_container.style.display = "block";
  }
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

function refresh_terminal() {
  //   alert("refresh called");
  //   refresh_terminal_icon.style.display = "none";
}
