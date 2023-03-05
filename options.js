const fields = [
  { id: "firstname-el", key: "firstname" },
  { id: "lastname-el", key: "lastname" },
  { id: "mobile-el", key: "mobile" },
  { id: "email-el", key: "email" },
  { id: "linkedin-el", key: "linkedin" },
  { id: "github-el", key: "github" },
  { id: "portfolio-el", key: "portfolio" },
  { id: "current-employer-el", key: "employer" },
  { id: "current-employer-years-el", key: "years" },
  { id: "current-employer-industry-el", key: "industry" },
  { id: "job-type-el", key: "jobtype" },
  { id: "softskill-one-el", key: "firstSkill" },
  { id: "softskill-two-el", key: "secondSkill" },
  { id: "softskill-three-el", key: "thirdSkill" },
  { id: "softskill-four-el", key: "fourthSkill" },
  { id: "softskill-five-el", key: "fifthSkill" },
  { id: "softskill-six-el", key: "sixthSkill" },
  { id: "currently-employed", key: "employed" },
  { id: "project-one-name-el", key: "firstProject" },
  { id: "project-one-desc-el", key: "firstDesc" },
  { id: "project-two-name-el", key: "secondProject" },
  { id: "project-two-desc-el", key: "secondDesc" },
  { id: "project-three-name-el", key: "thirdProject" },
  { id: "project-three-desc-el", key: "thirdDesc" },
];

const form = document.getElementById("form-data");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  // const obj = Object.fromEntries(fd);
  // const json = JSON.stringify(obj);

  for (const [key, value] of fd) {
    if (value) {
      console.log(`${key}":"${value}`);
      chrome.storage.local.set({ [key]: value }, () => {
        console.log(`Value for ${key} is set to ${value}`);
        updateStatus(`Update ${key} to ${value} ✔️`);
      });
    }
  }
});

function save_options() {
  fields.forEach((field) => {
    const element = document.getElementById(field.id);
    const value = element.value.trim();
    if (value !== "") {
      chrome.storage.local.get([field.key], (result) => {
        const storedValue = result[field.key];
        if (storedValue !== value) {
          chrome.storage.local.set({ [field.key]: value }, () => {
            updateStatus(`Update ${field.key} to ${value} ✔️`);
          });
        }
      });
    }
  });
}

function updateStatus(message) {
  const statusEl = document.getElementById("status-el");
  if (statusEl) {
    statusEl.textContent = message;
  }
}

function getTemplateInfo() {
  chrome.storage.local
    .get([
      "first name",
      "lastname",
      "mobile",
      "email",
      "linkedin",
      "github",
      "portfolio",
      "employed",
      "years",
      "industry",
      "jobtype",
      "firstSkill",
      "secondSkill",
      "thirdSkill",
      "fourthSkill",
      "fifthSkill",
      "sixthSkill",
      "firstProject",
      "firstDesc",
      "secondProject",
      "secondDesc",
      "thirdProject",
      "thirdDesc",
    ])
    .then((result) => {
      console.log(result);
    });
}

// document.addEventListener("DOMContentLoaded", restore_options);
// document.getElementById("save-el").addEventListener("click", save_options);
document.getElementById("get-el").addEventListener("click", getTemplateInfo);
