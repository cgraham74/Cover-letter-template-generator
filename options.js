let firstnameEl = document.getElementById("firstname-el");
let lastnameEl = document.getElementById("lastname-el");
let mobileEl = document.getElementById("mobile-el");
let emailEl = document.getElementById("email-el");
let linkedinEl = document.getElementById("linkedin-el");
let githubEl = document.getElementById("github-el");
let portfolioEl = document.getElementById("portfolio-el");
let currentEmployerEl = document.getElementById("current-employer-el");
let currentEmployerYearsEl = document.getElementById(
  "current-employer-years-el"
);
let currentEmployerIndustryEl = document.getElementById(
  "current-employer-industry-el"
);
let jobTypeEl = document.getElementById("job-type-el");
let softskillOneEl = document.getElementById("softskill-one-el");
let softskillTwoEl = document.getElementById("softskill-two-el");
let softskillThreeEl = document.getElementById("softskill-three-el");
let softskillFourEl = document.getElementById("softskill-four-el");
let softskillFiveEl = document.getElementById("softskill-five-el");
let softskillSixEl = document.getElementById("softskill-six-el");
let currentlyEmployedEl = document.getElementById("currently-employed");
let projectOneNameEl = document.getElementById("project-one-name-el");
let projectOneDescEl = document.getElementById("project-one-desc-el");
let projectTwoNameEl = document.getElementById("project-two-name-el");
let projectTwoDescEl = document.getElementById("project-two-desc-el");
let projectThreeNameEl = document.getElementById("project-three-name-el");
let projectThreeDescEl = document.getElementById("project-three-desc-el");

function save_options() {
  chrome.storage.local.set({ firstname: firstnameEl.value }).then(() => {
    console.log("Value is set to " + firstnameEl.value);
  });
  chrome.storage.local.set({ lastname: lastnameEl.value }).then(() => {
    console.log("Value is set to " + lastnameEl.value);
  });
  chrome.storage.local.set({ mobile: mobileEl.value }).then(() => {
    console.log("Value is set to " + mobileEl.value);
  });
  chrome.storage.local.set({ email: emailEl.value }).then(() => {
    console.log("Value is set to " + emailEl.value);
  });
  chrome.storage.local.set({ linkedin: linkedinEl.value }).then(() => {
    console.log("Value is set to " + linkedinEl.value);
  });
  chrome.storage.local.set({ github: githubEl.value }).then(() => {
    console.log("Value is set to " + githubEl.value);
  });
  chrome.storage.local.set({ portfolio: portfolioEl.value }).then(() => {
    console.log("Value is set to " + portfolioEl.value);
  });
  chrome.storage.local
    .set({ currentEmployer: currentEmployerEl.value })
    .then(() => {
      console.log("Value is set to " + currentEmployerEl.value);
    });
  chrome.storage.local
    .set({ currentEmployerYears: currentEmployerYearsEl.value })
    .then(() => {
      console.log("Value is set to " + currentEmployerYearsEl.value);
    });
  chrome.storage.local
    .set({ currentEmployerIndustry: currentEmployerIndustryEl.value })
    .then(() => {
      console.log("Value is set to " + currentEmployerIndustryEl.value);
    });
  chrome.storage.local.set({ jobType: jobTypeEl.value }).then(() => {
    console.log("Value is set to " + jobTypeEl.value);
  });
  chrome.storage.local.set({ softskillOne: softskillOneEl.value }).then(() => {
    console.log("Value is set to " + softskillOneEl.value);
  });
  chrome.storage.local.set({ softskillTwo: softskillTwoEl.value }).then(() => {
    console.log("Value is set to " + softskillTwoEl.value);
  });
  chrome.storage.local
    .set({ softskillThree: softskillThreeEl.value })
    .then(() => {
      console.log("Value is set to " + softskillThreeEl.value);
    });
  chrome.storage.local
    .set({ softskillFour: softskillFourEl.value })
    .then(() => {
      console.log("Value is set to " + softskillFourEl.value);
    });
  chrome.storage.local
    .set({ softskillFive: softskillFiveEl.value })
    .then(() => {
      console.log("Value is set to " + softskillFiveEl.value);
    });
  chrome.storage.local.set({ softskillSix: softskillSixEl.value }).then(() => {
    console.log("Value is set to " + softskillSixEl.value);
  });
  chrome.storage.local
    .set({ currentlyEmployed: currentlyEmployedEl.value })
    .then(() => {
      console.log("Value is set to " + currentlyEmployedEl.value);
    });
  chrome.storage.local
    .set({ projectOneName: projectOneNameEl.value })
    .then(() => {
      console.log("Value is set to " + projectOneNameEl.value);
    });
  chrome.storage.local
    .set({ projectOneDesc: projectOneDescEl.value })
    .then(() => {
      console.log("Value is set to " + projectOneDescEl.value);
    });
  chrome.storage.local
    .set({ projectTwoName: projectTwoNameEl.value })
    .then(() => {
      console.log("Value is set to " + projectTwoNameEl.value);
    });
  chrome.storage.local
    .set({ projectTwoDesc: projectTwoDescEl.value })
    .then(() => {
      console.log("Value is set to " + projectTwoDescEl.value);
    });
  chrome.storage.local
    .set({ projectThreeName: projectThreeNameEl.value })
    .then(() => {
      console.log("Value is set to " + projectThreeNameEl.value);
    });
  chrome.storage.local
    .set({ projectThreeDesc: projectThreeDescEl.value })
    .then(() => {
      console.log("Value is set to " + projectThreeDescEl.value);
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
