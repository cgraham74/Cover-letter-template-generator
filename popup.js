const coverLetterHeader = document.getElementById("cover-letter-title-el");
const downloadDocBtn = document.getElementById("download-doc-btn");
const downloadPdfBtn = document.getElementById("download-pdf-btn");
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
  hiringPerson: "Chuck Jones",
  jobTitle: "Super Genius",
  firstBullet: "Beta Tester",
  secondBullet: "Scientist",
  thirdBullet: "Product Designer",
};
const user = {
  fullname: "",
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

const projects = [
  {
    name: "",
    desc: "",
  },
  {
    name: "",
    desc: "",
  },
  {
    name: "",
    desc: "",
  },
];

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
    const {
      firstname,
      lastname,
      mobile,
      email,
      linkedin,
      github,
      portfolio,
      employed,
      employer,
      years,
      industry,
      jobtype,
      firstSkill,
      secondSkill,
      thirdSkill,
      fourthSkill,
      fifthSkill,
      sixthSkill,
      firstProject,
      firstDesc,
      secondProject,
      secondDesc,
      thirdProject,
      thirdDesc,
    } = result;
    employer.name = employer;
    employer.employed = employed;
    employer.industry = industry;
    employer.type = jobtype;
    employer.years = years;

    softskills = [
      firstSkill,
      secondSkill,
      thirdSkill,
      fourthSkill,
      fifthSkill,
      sixthSkill,
    ];

    user.fullname = firstname + " " + lastname;
    user.mobile = mobile;
    user.email = email;
    user.linkedIn = linkedin;
    user.gitHub = github;
    user.portfolio = portfolio;

    projects[0].name = firstProject;
    projects[0].desc = firstDesc;
    projects[1].name = secondProject;
    projects[1].desc = secondDesc;
    projects[2].name = thirdProject;
    projects[2].desc = thirdDesc;

    console.dir(projects);
    console.dir(user);
    console.dir(employer);
    console.dir(company);
    coverLetterHeader.innerText = `Cover letter for ${company.name}`;
    renderCoverLetter();
  });

function renderCoverLetter() {
  const coverLetterContainer = document.getElementById(
    "cover-letter-container"
  );
  const { jobTitle, name, firstBullet, secondBullet, thirdBullet } = company;
  const { type } = employer;
  const { years, industry } = employer;
  const { name: projectName, desc: projectDescription } = projects[2];
  const { fullname, mobile, email, linkedIn, gitHub, portfolio } = user;

  const template = `
      <p id="date-el">${getCurrentLocalDate()}</p>
      <p id="greeting-el">Dear ${greeting()},</p>
      <p id="intro-el">I am writing to express my enthusiasm and interest in the ${jobTitle} position.  
      This is an exciting opportunity to work for ${name} because of the focus on ${firstBullet}, ${secondBullet}, and ${thirdBullet}. 
      With my learning agility, grit, and desire to continuously improve my skills in the technology field, 
      I believe that I would be an excellent candidate for the role.</p>
  
      <p id="current-skills-el">While working ${type}, I recently completed an accelerated ${educationCourse} boot camp with Merit America. 
      As an aspiring ${jobTitle}, I have been actively training on technologies such as Java, Spring, Relational Databases, REST APIs, 
      and web development with React using ES6 JavaScript. I have also ramped up on software development methodologies such as Agile, 12 Factor Apps, 
      Git, and Design Patterns. In addition to conquering many individual assignments, pair programming assignments, and algorithm problems, I had the 
      opportunity to showcase my abilities by collaboratively building a ${projectName} application, ${
    projects[1].name
  } application, and most recently 
      a full-stack ${projectName} application that ${projectDescription}.</p>
  
      <p id="work-history-el">Prior to joining the Merit America program, I worked for over ${years} years in the ${industry} industry.  
      Through this experience, I developed and refined ${softskills[0]} and ${
    softskills[1]
  } skills necessary to succeed in the ${jobTitle} role. 
      Changing careers is never easy, but my passion has always been technology and I could not be more excited to pursue this 
      opportunity with ${name}.</p>
  
      <p id="closing-el">I hope that we can further discuss what value I can add to your team in an interview.</p>
      <p id="signature-el">Regards,</p>
      <p>
      <span id="user-name-el" class="signature">${fullname}</span><br>
      <span id="user-mobile-el" class="signature">${mobile}</span><br>
      <span id="user-email-el" class="signature">${email}</span><br>
      <span id="user-linkedin-el" class="signature">${linkedIn}</span><br>
      <span id="user-github-el" class="signature">${gitHub}</span><br>
      <span id="user-portfolio-el" class="signature">${portfolio}</span><br>
      </p>
    `;

  coverLetterContainer.innerHTML = template;
}
