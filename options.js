const form = document.getElementById("form-data");
const radioBtnYes = document.querySelector("#yes");
const radioBtnNo = document.querySelector("#no");
const jobTypeEl = document.querySelector("#job-type-el");
const fields = [
  { id: "firstname-el", key: "first name" },
  { id: "lastname-el", key: "last name" },
  { id: "mobile-el", key: "mobile" },
  { id: "email-el", key: "email" },
  { id: "linkedin-el", key: "LinkedIn" },
  { id: "github-el", key: "GitHub" },
  { id: "portfolio-el", key: "portfolio" },
  { id: "currently-employed", key: "employed" },
  { id: "current-employer-el", key: "employer" },
  { id: "current-employer-years-el", key: "years" },
  { id: "current-employer-industry-el", key: "industry" },
  { id: "job-type-el", key: "jobtype" },
  { id: "softskill-one-el", key: "first soft skill" },
  { id: "softskill-two-el", key: "second soft skill" },
  { id: "softskill-three-el", key: "third soft skill" },
  { id: "softskill-four-el", key: "fourth soft skill" },
  { id: "softskill-five-el", key: "fifth soft skill" },
  { id: "softskill-six-el", key: "sixth soft skill" },
  { id: "project-one-name-el", key: "first project" },
  { id: "project-one-desc-el", key: "first project description" },
  { id: "project-two-name-el", key: "second project" },
  { id: "project-two-desc-el", key: "second project description" },
  { id: "project-three-name-el", key: "third project" },
  { id: "project-three-desc-el", key: "third project description" },
];

radioBtnYes.addEventListener("click", () => {
  jobTypeEl.classList.toggle("hidden");
  console.log(jobTypeEl.classList);
});

radioBtnNo.addEventListener("click", () => {
  jobTypeEl.classList.toggle("hidden");
  console.log(jobTypeEl.classList);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  if (radioBtnNo.checked) {
    fd.delete("job type");
  }

  for (const [key, value] of fd) {
    if (value) {
      chrome.storage.local.set({ [key]: value }, () => {
        console.log(`Value for ${key} is set to ${value}`);
        updateStatus(`✔️ Updated ${key} to ${value}`);
      });
    }
    if (radioBtnNo.checked) {
      chrome.storage.local.remove("job type");
    }
  }
});

function updateStatus(message) {
  const statusEl = document.getElementById("status-el");
  if (statusEl) {
    statusEl.textContent = message;
  }
}

function getTemplateInfo() {
  chrome.storage.local.get(null, function (items) {
    let entries = Object.entries(items);
    console.log(entries);
    entries.forEach((element) => {
      document.getElementById(element[0]).innerText = element[1];
      console.log(element);
    });
  });
}

function resetTemplateInfo() {
  // const confirmation = confirm(
  //   "Are you sure you want to clear all template data?"
  // );
  // if (confirmation) {
  //   alert("Ok was pressed");
  chrome.storage.local.clear();
  // } else {
  //   alert("Cancel was pressed");
  // }
}
// document.addEventListener("DOMContentLoaded", restore_options);
// document.getElementById("save-el").addEventListener("click", save_options);
document.getElementById("get-el").addEventListener("click", getTemplateInfo);
document
  .getElementById("reset-el")
  .addEventListener("click", resetTemplateInfo);
