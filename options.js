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
    chrome.storage.local.set({ [field.key]: element.value }).then(() => {
      console.log(`Value for ${field.key} is set to ${element.value}`);
    });
  });
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
      console.log("Firstname " + result.firstname);
      console.log("Lastname: " + result.lastname);
      console.log("current/softskill1: " + result.softskillone);
      console.log("current/softskill2: " + result.softskilltwo);
      console.log("current/softskill3: " + result.softskillthree);
      console.log("current/softskill4: " + result.softskillfour);
      console.log("current/softskill5: " + result.softskillfive);
      console.log("current/softskill6: " + result.softskillsix);
      console.log("currentemployer: " + result.currentemployer);
      console.log("projectOne: " + result.projectonename);
      console.log("projectTwo: " + result.projecttwoname);
      console.log("projectThree: " + result.projectthreename);
      console.log("JOb type" + result.jobtype);
      console.log("userMobile: " + result.mobile);
      console.log("userLinkedIn: " + result.linkedin);
      console.log("userGitHub: " + result.github);
      console.log("userPortfolioLink: " + result.portfolio);
      console.log("userEmail: " + result.email);
      console.log("currentlyEmployed: " + result.currentlyemployed);
    });
}

// document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save-el").addEventListener("click", save_options);
document.getElementById("get-el").addEventListener("click", getTemplateInfo);
