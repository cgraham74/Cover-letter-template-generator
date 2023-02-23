const dateEl = document.getElementById("date-el");
const greetingEl = document.getElementById("greeting-el");
const introEl = document.getElementById("intro-el");
const currentSkillsEl = document.getElementById("current-skills-el");
const workHistoryEl = document.getElementById("work-history-el");
const closingEl = document.getElementById("closing-el");
const signatureEl = document.getElementById("signature-el");
const userNameEl = document.getElementById("user-name-el");
const userMobileEl = document.getElementById("user-mobile-el");
const userEmailEl = document.getElementById("user-email-el");
const userLinkedinEl = document.getElementById("user-linkedin-el");
const userGithubEl = document.getElementById("user-github-el");
const userPortfolioEl = document.getElementById("user-portfolio-el");

let companyName = "";
let currentDate = "";
let hiringManager = "test";
let jobTitle = "";
let firstJobBullet = "";
let secondJobBullet = "";
let thirdJobBullet = "";
let currentJob = {
  companyName: "",
  years: "",
  fullOrPartTime: "",
  industry: "",
  softskills: [],
};
let projectOne = {
  name: "",
  desc: "",
};
let projectTwo = {
  name: "",
  desc: "",
};
let projectThree = {
  name: "",
  desc: "",
};
let program = "";
let userName = "";
let userMobile = "";
let userEmail = "";
let userLinkedIn = "";
let userGitHub = "";
let userPortfolioLink = "";
let userAspiringJob = "";
let userTechStack = [];

dateEl.textContent = getCurrentLocalDate();
greetingEl.textContent = `Dear ${greeting()}`;
introEl.textContent = `

I am writing to express my enthusiasm and interest in the ${jobTitle} position.  
This is an exciting opportunity to work for ${companyName} because of the focus on ${firstJobBullet}, ${secondJobBullet}, and ${thirdJobBullet}. 
With my learning agility, grit, and desire to continuously improve my skills in the technology field, 
I believe that I would be an excellent candidate for the role. 

`;
currentSkillsEl.textContent = `

While working ${currentJob.fullOrPartTime}, I recently completed an accelerated, ${program} with Merit America. 
  As an aspiring ${userAspiringJob}, I have been actively training on technologies such as Java, Spring, Relational Databases, REST APIs, 
  and web development with React using ES6 JavaScript. I have also ramped up on software development methodologies such as Agile, 12 Factor Apps, 
  Git, and Design Patterns. In addition to conquering many individual assignments, pair programming assignments, and algorithm problems, I had the 
  opportunity to showcase my abilities by collaboratively building a ${projectOne.name} application, ${projectTwo.name} application, and most recently 
  a full-stack ${projectThree.name} application that ${projectThree.desc}.
`;

workHistoryEl.textContent = `
Prior to joining the Merit America program, I worked for over ${currentJob.years} years in the ${currentJob.industry} industry.  
  Through this experience, I developed and refined ${currentJob.softskills[0]} and ${currentJob.softskills[1]} skills necessary to succeed in the ${jobTitle} role. 
  Changing careers is never easy, but my passion has always been with technology and I could not be more excited to pursue this 
  opportunity with ${companyName}.
`;

closingEl.textContent = `
I hope that we can further discuss what value I can add to your team in an interview.
`;
signatureEl.textContent = `
Regards,
`;

userNameEl.textContent = `${userName}`;
userMobileEl.textContent = `${userMobile}`;
userNameEl.textContent = `${userEmail}`;
userLinkedinEl.textContent = `${userLinkedIn}`;
userGithubEl.textContent = `${userGitHub}`;
userPortfolioEl.textContent = `${userPortfolioLink}`;

console.log({userName})
function getCurrentLocalDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const localDate = `${month}/${day}/${year}`;
  return localDate;
}

function greeting() {
  return hiringManager ? hiringManager : companyName;
}

document.getElementById("get-el").addEventListener("click", function () {
  chrome.storage.local.get(["firstname"]).then((result) => {
    console.log("Value currently is " + result.firstname);
    userName = result.firstname;
    console.log("username: " + userName);
  });
});

document.getElementById("display-cover").addEventListener("click", function () {
  console.log("hello?");
});
