const coverLetterHeader = document.getElementById("cover-letter-title-el");
const downloadDocBtn = document.getElementById("download-doc-btn");
const downloadPdfBtn = document.getElementById("download-pdf-btn");

//blur background of popup

//Implement download as word doc functionality

//implement download as pdf functionality
let educationCourse = "Full Stack Java Development";
function getCurrentLocalDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const localDate = `${month}/${day}/${year}`;
  return localDate;
}

//create company outside of modal for template access
const company = {};

const user = {
  fullname: "",
  email: "",
  mobile: "",
  linkedIn: "",
  gitHub: "",
  portfolio: "",
};

const currentEmployer = {
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
renderCover();
//------------beginning of modal-----------------------

// Create the modal element
const modal = document.createElement("div");
modal.classList.add("modal");

// Create the content of the modal
const content = document.createElement("div");
content.classList.add("modal-content");

// Create the input fields and labels
const companyLabel = document.createElement("label");
companyLabel.innerText = "Company Name";
const companyInput = document.createElement("input");
companyInput.type = "text";

const hiringPersonLabel = document.createElement("label");
hiringPersonLabel.innerText = "Hiring Person";
const hiringPersonInput = document.createElement("input");
hiringPersonInput.type = "text";

const jobTitleLabel = document.createElement("label");
jobTitleLabel.innerText = "Job Title";
const jobTitleInput = document.createElement("input");
jobTitleInput.type = "text";

const firstBulletLabel = document.createElement("label");
firstBulletLabel.innerText = "First Bullet Point";
const firstBulletInput = document.createElement("input");
firstBulletInput.type = "text";

const secondBulletLabel = document.createElement("label");
secondBulletLabel.innerText = "Second Bullet Point";
const secondBulletInput = document.createElement("input");
secondBulletInput.type = "text";

const thirdBulletLabel = document.createElement("label");
thirdBulletLabel.innerText = "Third Bullet Point";
const thirdBulletInput = document.createElement("input");
thirdBulletInput.type = "text";

// Create the submit button
const submitButton = document.createElement("button");
submitButton.innerText = "Submit";

// Add the input fields, labels, and submit button to the content div
content.appendChild(companyLabel);
content.appendChild(companyInput);
content.appendChild(hiringPersonLabel);
content.appendChild(hiringPersonInput);
content.appendChild(jobTitleLabel);
content.appendChild(jobTitleInput);
content.appendChild(firstBulletLabel);
content.appendChild(firstBulletInput);
content.appendChild(secondBulletLabel);
content.appendChild(secondBulletInput);
content.appendChild(thirdBulletLabel);
content.appendChild(thirdBulletInput);
content.appendChild(submitButton);

// Add the content div to the modal
modal.appendChild(content);

// Add the modal to the document
document.body.appendChild(modal);

// Add blue to the background of popup
document.getElementById("cover-container").classList.add("blur");
// Create a function to handle the form submission
function handleSubmit(event) {
  event.preventDefault();

  (company.name = companyInput.value),
    (company.hiringPerson = hiringPersonInput.value),
    (company.jobTitle = jobTitleInput.value),
    (company.firstBullet = firstBulletInput.value),
    (company.secondBullet = secondBulletInput.value),
    (company.thirdBullet = thirdBulletInput.value),
    console.log(company);

  renderCover();
  //remove the blur
  document.getElementById("cover-container").classList.remove("blur");
  // Close the modal
  modal.remove();
}

// Add an event listener to the submit button
submitButton.addEventListener("click", handleSubmit);

//-------------end of modal----------------------

function greeting() {
  return company.hiringPerson ? company.hiringPerson : company.name;
}

// Using this for testing purposes - remove later
chrome.storage.local.get(null, function (items) {
  let entries = Object.keys(items);
  entries.forEach((element) => {
    console.log(JSON.stringify(element));
  });
});

function renderCover() {
  chrome.storage.local.get(
    [
      "first name",
      "last name",
      "mobile",
      "email",
      "LinkedIn",
      "GitHub",
      "portfolio",
      "employed",
      "employer",
      "years",
      "industry",
      "job type",
      "first soft skill",
      "second soft skill",
      "third soft skill",
      "fourth soft skill",
      "fifth soft skill",
      "sixth soft skill",
      "first project",
      "first project description",
      "second project",
      "second project description",
      "third project",
      "third project description",
    ],
    function (result) {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message);
        return;
      }
      console.log(result);
      const {
        "first name": firstname,
        "last name": lastname,
        mobile: mobile,
        email: email,
        LinkedIn: linkedin,
        GitHub: github,
        portfolio: portfolio,
        employed: employed,
        employer: employer,
        years: years,
        industry: industry,
        "job type": jobtype,
        "first soft skill": firstSkill,
        "second soft skill": secondSkill,
        "third soft skill": thirdSkill,
        "fourth soft skill": fourthSkill,
        "fifth soft skill": fifthSkill,
        "sixth soft skill": sixthSkill,
        "first project": firstProject,
        "first project description": firstDesc,
        "second project": secondProject,
        "second project description": secondDesc,
        "third project": thirdProject,
        "third project description": thirdDesc,
      } = result;

      currentEmployer.name = employer;
      currentEmployer.employed = employed;
      currentEmployer.industry = industry;
      currentEmployer.type = jobtype;
      currentEmployer.years = years;

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
      coverLetterTemplate();
    }
  );
}
function coverLetterTemplate() {
  const coverLetterContainer = document.getElementById(
    "cover-letter-container"
  );
  const { jobTitle, name, firstBullet, secondBullet, thirdBullet } = company;
  const { type, industry, years } = currentEmployer;
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

//download to word doc
downloadDocBtn.addEventListener("click", function () {
  const coverLetter = document.getElementById(
    "cover-letter-container"
  ).innerHTML;
  const filename = `${company.name} Cover Letter.doc`;

  const blob = new Blob(["\ufeff", coverLetter], {
    type: "application/msword",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
