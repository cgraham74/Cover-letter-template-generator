// Saves options to chrome.storage

const firstname = document.getElementById('firstname-el');
const lastname = document.getElementById('lastname-el');
const mobile = document.getElementById('mobile-el');
const email = document.getElementById('email-el');
const linkedin = document.getElementById('linkedin-el');
const github = document.getElementById('github-el');
const portfolio = document.getElementById('portfolio-el');
const currentEmployerEl = document.getElementById('current-employer-el');
const currentEmployerYearsEl = document.getElementById('current-employer-years-el');
const currentEmployerIndustryEl = document.getElementById('current-employer-industry-el');
const jobTypeEl = document.getElementById('job-type-el').value;
const softskillOneEl = document.getElementById('softskill-one-el');
const softskillTwoEl = document.getElementById('softskill-two-el');
const currentlyEmployed = document.getElementById('currently-employed');

const projectOneNameEl = document.getElementById('project-one-name-el');
const projectOneDescEl = document.getElementById('project-one-desc-el');
const projectTwoNameEl = document.getElementById('project-two-name-el');
const projectTwoDescEl = document.getElementById('project-two-desc-el');
const projectThreeNameEl = document.getElementById('project-three-name-el');
const projectThreeDescEl = document.getElementById('project-three-desc-el');
// const  = document.getElementById('');


//Display employment questions only if currently employed
currentlyEmployed.addEventListener("option", function(){
    if (yes){

    }
})

function save_options() {
    var color = document.getElementById('color').value;
    var likesColor = document.getElementById('like').checked;
    chrome.storage.sync.set({
      favoriteColor: color,
      likesColor: likesColor
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      favoriteColor: 'red',
      likesColor: true
    }, function(items) {
      document.getElementById('color').value = items.favoriteColor;
      document.getElementById('like').checked = items.likesColor;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);