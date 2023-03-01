let educationCourse = "Full Stack Java Development";
function getCurrentLocalDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const localDate = `${month}/${day}/${year}`;
  return localDate;
}

const company = {
  name: "Acme",
  hiringPerson: "Wile E. Cyote",
  jobTitle: "Super Genius",
  firstBullet: "Beta Tester",
  secondBullet: "Scientist",
  thirdBullet: "Product Designer",
};
const user = {
  name: "",
  email: "",
  mobile: "",
  linkedIn: "",
  gitHub: "",
  portfolio: "",
};

const employer = {
  name: "",
  employed: "",
  years: "",
  type: "",
  industry: "",
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

let softskills = [];

function greeting() {
  return company.hiringPerson ? company.hiringPerson : company.name;
}

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
    employer.name = result.currentemployer;
    employer.employed = result.currentlyemployed;
    employer.industry = result.currentemployerindustry;
    employer.type = result.jobtype;
    employer.years = result.currentemployeryears;

    softskills = [
      result.softskillone,
      result.softskilltwo,
      result.softskillthree,
      result.softskillfour,
      result.softskillfive,
      result.softskillsix,
    ];

    user.name = result.firstname + " " + result.lastname;
    user.mobile = result.mobile;
    user.email = result.email;
    user.linkedIn = result.linkedin;
    user.gitHub = result.github;
    user.portfolio = result.portfolio;

    projectOne.name = result.projectonename;
    projectOne.desc = result.projectonedesc;

    projectTwo.name = result.projecttwoname;
    projectTwo.desc = result.projecttwodesc;

    projectThree.name = result.projectthreename;
    projectTwo.desc = result.projectthreedesc;

    // userName = result.firstname + " " + result.lastname;
    // userMobile = result.mobile;
    // userEmail = result.email;
    // userLinkedIn = result.linkedin;
    // userGitHub = result.github;
    // userPortfolioLink = result.portfolio;
    console.dir(user);
    console.dir(employer);
    console.dir(company);
    renderCoverLetter();
  });

function renderCoverLetter() {
  document.getElementById(
    "cover-letter-container"
  ).innerHTML = `<p id="date-el">${getCurrentLocalDate()}</p>
  <p id="greeting-el">Dear ${greeting()},</p>
  <p id="intro-el">I am writing to express my enthusiasm and interest in the ${
    company.jobTitle
  } position.  
  This is an exciting opportunity to work for ${
    company.name
  } because of the focus on ${company.firstBullet}, ${
    company.secondBullet
  }, and ${company.thirdBullet}. 
  With my learning agility, grit, and desire to continuously improve my skills in the technology field, 
  I believe that I would be an excellent candidate for the role.</p>

  <p id="current-skills-el">While working ${
    employer.type
  }, I recently completed an accelerated ${educationCourse} boot camp with Merit America. 
  As an aspiring ${
    company.jobTitle
  }, I have been actively training on technologies such as Java, Spring, Relational Databases, REST APIs, 
  and web development with React using ES6 JavaScript. I have also ramped up on software development methodologies such as Agile, 12 Factor Apps, 
  Git, and Design Patterns. In addition to conquering many individual assignments, pair programming assignments, and algorithm problems, I had the 
  opportunity to showcase my abilities by collaboratively building a ${
    projectOne.name
  } application, ${projectTwo.name} application, and most recently 
  a full-stack ${projectThree.name} application that ${projectThree.desc}.</p>


  <p id="work-history-el">Prior to joining the Merit America program, I worked for over ${
    employer.years
  } years in the ${employer.industry} industry.  
  Through this experience, I developed and refined ${softskills[0]} and ${
    softskills[1]
  } skills necessary to succeed in the ${company.jobTitle} role. 
  Changing careers is never easy, but my passion has always been technology and I could not be more excited to pursue this 
  opportunity with ${company.name}.</p>

  <p id="closing-el">I hope that we can further discuss what value I can add to your team in an interview.</p>
  <p id="signature-el">Regards,</p>
  <p id="user-name-el" class="signature">${user.name}</p>
  <p id="user-mobile-el" class="signature">${user.mobile}</p>
  <p id="user-email-el" class="signature">${user.email}</p>
  <p id="user-linkedin-el" class="signature">${user.linkedIn}</p>
  <p id="user-github-el" class="signature">${user.gitHub}</p>
  <p id="user-portfolio-el" class="signature">${user.portfolio}</p>`;
}
