// Saves options to chrome.storage

function save_options() {
 
    let firstname = document.getElementById('firstname-el').value;
    let lastname = document.getElementById('lastname-el').value;
    let mobile = document.getElementById('mobile-el').value;
    let email = document.getElementById('email-el').value;
    let linkedin = document.getElementById('linkedin-el').value;
    let github = document.getElementById('github-el').value;
    let portfolio = document.getElementById('portfolio-el').value;
    let currentEmployer = document.getElementById('current-employer-el').value;
    let currentEmployerYears = document.getElementById('current-employer-years-el').value;
    let currentEmployerIndustry = document.getElementById('current-employer-industry-el').value;
    let jobType = document.getElementById('job-type-el').value;
    let softskillOne = document.getElementById('softskill-one-el').value;
    let softskillTwo = document.getElementById('softskill-two-el').value;
    let softskillThree = document.getElementById('softskill-three-el').value;
    let softskillFour = document.getElementById('softskill-four-el').value;
    let softskillFive = document.getElementById('softskill-five-el').value;
    let softskillSix = document.getElementById('softskill-six-el').value;
    let currentlyEmployed = document.getElementById('currently-employed').value;
    let projectOneName = document.getElementById('project-one-name-el').value;
    let projectOneDesc = document.getElementById('project-one-desc-el').value;
    let projectTwoName = document.getElementById('project-two-name-el').value;
    let projectTwoDesc = document.getElementById('project-two-desc-el').value;
    let projectThreeName = document.getElementById('project-three-name-el').value;
    let projectThreeDesc = document.getElementById('project-three-desc-el').value;

    chrome.storage.sync.set({
        firstname: firstname,
      
    }, function() {
      // Update status to let user know options were saved.
      let status = document.getElementById('save-el');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
  
    chrome.storage.sync.get({
        firstname: 'user'
    }, function(items) {
    document.getElementById('firstname-el').value = items.firstname;
       
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save-el').addEventListener('click',
      save_options);