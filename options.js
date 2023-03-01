const fields = [
  { id: "firstname-el", key: "firstname" },
  { id: "lastname-el", key: "lastname" },
  { id: "mobile-el", key: "mobile" },
  { id: "email-el", key: "email" },
  { id: "linkedin-el", key: "linkedin" },
  { id: "github-el", key: "github" },
  { id: "portfolio-el", key: "portfolio" },
  { id: "current-employer-el", key: "currentemployer" },
  { id: "current-employer-years-el", key: "currentemployeryears" },
  { id: "current-employer-industry-el", key: "currentemployerindustry" },
  { id: "job-type-el", key: "jobtype" },
  { id: "softskill-one-el", key: "softskillone" },
  { id: "softskill-two-el", key: "softskilltwo" },
  { id: "softskill-three-el", key: "softskillthree" },
  { id: "softskill-four-el", key: "softskillfour" },
  { id: "softskill-five-el", key: "softskillfive" },
  { id: "softskill-six-el", key: "softskillsix" },
  { id: "currently-employed", key: "currentlyemployed" },
  { id: "project-one-name-el", key: "projectonename" },
  { id: "project-one-desc-el", key: "projectonedesc" },
  { id: "project-two-name-el", key: "projecttwoname" },
  { id: "project-two-desc-el", key: "projecttwodesc" },
  { id: "project-three-name-el", key: "projectthreename" },
  { id: "project-three-desc-el", key: "projectthreedesc" },
];

function save_options() {
  fields.forEach((field) => {
    const element = document.getElementById(field.id);
    const value = element.value.trim();
    if (value !== "") {
      chrome.storage.local.get([field.key], (result) => {
        const storedValue = result[field.key];
        if (storedValue !== value) {
          chrome.storage.local.set({ [field.key]: value }, () => {
            console.log(`Value for ${field.key} is set to ${value}`);
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
      "firstname",
      "lastname",
      "mobile",
      "email",
      "linkedin",
      "github",
      "portfolio",
      "currentlyemployed",
      "currentemployer",
      "currentemployeryears",
      "currentemployerindustry",
      "jobtype",
      "softskillone",
      "softskilltwo",
      "softskillthree",
      "softskillfour",
      "softskillfive",
      "softskillsix",
      "projectonename",
      "projectonedesc",
      "projecttwoname",
      "projecttwodesc",
      "projectthreename",
      "projectthreedesc",
    ])
    .then((result) => {
      console.log(result);
    });
}

// document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save-el").addEventListener("click", save_options);
document.getElementById("get-el").addEventListener("click", getTemplateInfo);
