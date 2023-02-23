const fields = [
  { id: "firstname-el", key: "firstname" },
  { id: "lastname-el", key: "lastname" },
  { id: "mobile-el", key: "mobile" },
  { id: "email-el", key: "email" },
  { id: "linkedin-el", key: "linkedin" },
  { id: "github-el", key: "github" },
  { id: "portfolio-el", key: "portfolio" },
  { id: "current-employer-el", key: "currentEmployer" },
  { id: "current-employer-years-el", key: "currentEmployerYears" },
  { id: "current-employer-industry-el", key: "currentEmployerIndustry" },
  { id: "job-type-el", key: "jobType" },
  { id: "softskill-one-el", key: "softskillOne" },
  { id: "softskill-two-el", key: "softskillTwo" },
  { id: "softskill-three-el", key: "softskillThree" },
  { id: "softskill-four-el", key: "softskillFour" },
  { id: "softskill-five-el", key: "softskillFive" },
  { id: "softskill-six-el", key: "softskillSix" },
  { id: "currently-employed", key: "currentlyEmployed" },
  { id: "project-one-name-el", key: "projectOneName" },
  { id: "project-one-desc-el", key: "projectOneDesc" },
  { id: "project-two-name-el", key: "projectTwoName" },
  { id: "project-two-desc-el", key: "projectTwoDesc" },
  { id: "project-three-name-el", key: "projectThreeName" },
  { id: "project-three-desc-el", key: "projectThreeDesc" },
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
  chrome.storage.local.get(["firstname"]).then((result) => {
    console.log("Value currently is " + result.firstname);
  });
}

// document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save-el").addEventListener("click", save_options);
document.getElementById("get-el").addEventListener("click", getTemplateInfo);
