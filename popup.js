let hiringManager = "Dummy data hiring manager";
let jobTitle = "Dummy data job title";
let firstJobBullet = "Dummy data bullet";
let secondJobBullet = "Dummy data bullet";
let thirdJobBullet = "Dummy data bullet";
let companyName = "Dummy data company";
let userAspiringJob = "SWE";
let program = "Dummy data program";
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
let currentemployer = "";
let currentlyEmployed = "";
let years = "";
let jobType = "";
let industry = "";

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

let userName = "";
let userMobile = "";
let userEmail = "";
let userLinkedIn = "";
let userGitHub = "";
let userPortfolioLink = "";

let softskills = [];
const chromeObj = chrome.storage.local
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
    currentlyEmployed = result.currentlyemployed;

    currentemployer = result.currentemployer;
    years = result.currentemployeryears;
    jobType = result.jobtype;
    industry = result.currentemployerindustry;
    softskills = [
      result.softskillone,
      result.softskilltwo,
      result.softskillthree,
      result.softskillfour,
      result.softskillfive,
      result.softskillsix,
    ];

    projectOne.name = result.projectonename;
    projectOne.desc = result.projectonedesc;

    projectTwo.name = result.projecttwoname;
    projectTwo.desc = result.projecttwodesc;

    projectThree.name = result.projectthreename;
    projectTwo.desc = result.projectthreedesc;

    userName = result.firstname + " " + result.lastname;
    userMobile = result.mobile;
    userEmail = result.email;
    userLinkedIn = result.linkedin;
    userGitHub = result.github;
    userPortfolioLink = result.portfolio;

    renderCoverLetter();
  });

function renderCoverLetter() {
  document.getElementById(
    "cover-letter-container"
  ).innerHTML = `<p id="date-el">${getCurrentLocalDate()}</p>
  <p id="greeting-el">Dear ${greeting()}</p>
  <p id="intro-el">I am writing to express my enthusiasm and interest in the ${jobTitle} position.  
  This is an exciting opportunity to work for ${companyName} because of the focus on ${firstJobBullet}, ${secondJobBullet}, and ${thirdJobBullet}. 
  With my learning agility, grit, and desire to continuously improve my skills in the technology field, 
  I believe that I would be an excellent candidate for the role.</p>

  <p id="current-skills-el">While working ${jobType}, I recently completed an accelerated, ${program} with Merit America. 
  As an aspiring ${userAspiringJob}, I have been actively training on technologies such as Java, Spring, Relational Databases, REST APIs, 
  and web development with React using ES6 JavaScript. I have also ramped up on software development methodologies such as Agile, 12 Factor Apps, 
  Git, and Design Patterns. In addition to conquering many individual assignments, pair programming assignments, and algorithm problems, I had the 
  opportunity to showcase my abilities by collaboratively building a ${
    projectOne.name
  } application, ${projectTwo.name} application, and most recently 
  a full-stack ${projectThree.name} application that ${projectThree.desc}.</p>


  <p id="work-history-el">Prior to joining the Merit America program, I worked for over ${years} years in the ${industry} industry.  
  Through this experience, I developed and refined ${softskills[0]} and ${
    softskills[1]
  } skills necessary to succeed in the ${jobTitle} role. 
  Changing careers is never easy, but my passion has always been technology and I could not be more excited to pursue this 
  opportunity with ${companyName}.</p>

  <p id="closing-el">I hope that we can further discuss what value I can add to your team in an interview.</p>
  <p id="signature-el">Regards,</p>
  <p id="user-name-el" class="signature">${userName}</p>
  <p id="user-mobile-el" class="signature">${userMobile}</p>
  <p id="user-email-el" class="signature">${userEmail}</p>
  <p id="user-linkedin-el" class="signature">${userLinkedIn}</p>
  <p id="user-github-el" class="signature">${userGitHub}</p>
  <p id="user-portfolio-el" class="signature">${userPortfolioLink}</p>`;
}
