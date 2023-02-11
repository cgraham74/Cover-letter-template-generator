let companyName ="";
let currentDate ="";
let hiringManager ="";
let jobTitle = "";
let firstJobBullet = "";
let secondJobBullet = "";
let thirdJobBullet = "";
let currentJob = {
    companyName: "",
    years: "",
    fullOrPartTime: "",
    industry: "",
    softskills: [

    ]
}
let projectOne = {
    name: "",
    desc: ""
}
let projectTwo = {
    name: "",
    desc: ""
}
let projectThree = {
    name: "",
    desc: ""
}
let program = "";
let userName ="";
let userMobile ="";
let userEmail ="";
let userLinkedIn = "";
let userGitHub = "";
let userPortfolioLink = "";
let userAspiringJob = "";
let userTechStack = [];

function getCurrentLocalDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const localDate = `${month}/${day}/${year}`;
    return localDate;
  }

function greeting(){
    return hiringManager ? hiringManager : companyName;
}  
const templateCoverLetter = `

${getCurrentLocalDate()}

Dear ${greeting()}:

I am writing to express my enthusiasm and interest in the ${jobTitle} position.  
This is an exciting opportunity to work for ${companyName} because of the focus on ${firstJobBullet}, ${secondJobBullet}, and ${thirdJobBullet}. 
With my learning agility, grit, and desire to continuously improve my skills in the technology field, 
I believe that I would be an excellent candidate for the role. 

While working ${currentJob.fullOrPartTime}, I recently completed an accelerated, ${program} with Merit America. 
As an aspiring ${userAspiringJob}, I have been actively training on technologies such as Java, Spring, Relational Databases, REST APIs, 
and web development with React using ES6 JavaScript. I have also ramped up on software development methodologies such as Agile, 12 Factor Apps, 
Git, and Design Patterns. In addition to conquering many individual assignments, pair programming assignments, and algorithm problems, I had the 
opportunity to showcase my abilities by collaboratively building a ${projectOne.name} application, ${projectTwo.name} application, and most recently 
a full-stack ${projectThree.name} application that ${projectThree.desc}.

Prior to joining the Merit America program, I worked for over ${currentJob.years} years in the ${currentJob.industry} industry.  
Through this experience, I developed and refined ${currentJob.softskills[0]} and ${currentJob.softskills[1]} skills necessary to succeed in the ${jobTitle} role. 
Changing careers is never easy, but my passion has always been with technology and I could not be more excited to pursue this 
opportunity with ${companyName}.  

I hope that we can further discuss what value I can add to your team in an interview

Regards,

${userName}
${userMobile}
${userEmail}
${userLinkedIn}
${userGitHub}
${userPortfolioLink}
`;


console.log(templateCoverLetter)
