// menu function 
let menuButton = document.querySelector('.menuBtn');
let navLink = document.querySelector('.navLink');

// default page and button 
let sectionBox = document.querySelector('.section_box');
let backButton = document.querySelector('.back');

// introduction button and its content 
let introductionContent = document.querySelector('.introduction');
let introductionButton = document.querySelector('#introBtn');

// how_to_use button and its content 
let howToUseButton = document.querySelector('#howToUseBtn');
let howToUseContent = document.querySelector('.how_to_use');

// html_vid elements 
let htmlVidContent = document.querySelector('.html_vid');
let htmlVidButton = document.querySelector('#htmlVidBtn');

let videoList = document.querySelectorAll('.video-list .vid');
let activeVideo = document.querySelector('.active_video video');
let title = document.querySelector('.active_video .title');

// grant user access container elements
let grantAccessContainer = document.querySelector('#grantAccess');
let grantAccessCancelButton = document.querySelector('.access_cancel');
let grantAccessInputField = document.querySelector('.input_field input');
let grantAccessProceedButton = document.querySelector('#AccessBtn');
let accessStatus = document.querySelector('.status');

// menu button function 
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('change');
  navLink.classList.toggle('navActive');
});

// introduction button function 
introductionButton.addEventListener('click', () => {
  sectionBox.classList.add('hide');
  introductionContent.classList.add('active');
  backButton.classList.add('active');
});

// back button function 
backButton.addEventListener('click', () => {
  sectionBox.classList.remove('hide');
  introductionContent.classList.remove('active');
  howToUseContent.classList.remove('active');
  backButton.classList.remove('active');
  htmlVidContent.classList.remove('active');
});

// how_to_use button function 
howToUseButton.addEventListener('click', () => {
  howToUseContent.classList.add('active');
  sectionBox.classList.add('hide');
  backButton.classList.add('active');
});

// html_vid function 
videoList.forEach(video => {
  video.onclick = () => {
    videoList.forEach(vid => vid.classList.remove('active'));
    video.classList.add('active');
    if(video.classList.contains('active')){
      let src = video.children[0].getAttribute('src');
      activeVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    };
  };
});

// html video button function 
htmlVidButton.addEventListener('click', () => {
  grantAccessContainer.classList.add('active');
  htmlVidContent.classList.add('active');
  sectionBox.classList.add('hide');
  backButton.classList.add('active');
});

// Grant user access button function 
grantAccessProceedButton.addEventListener('click', () => {  
  let inputData = grantAccessInputField.value;
  if (inputData === '10845') {
    accessStatus.innerHTML = 'Success';
    accessStatus.classList.add('success');
    accessStatus.classList.remove('error');
    accessStatus.style.opacity = '1';

    setTimeout(() => {
      grantAccessContainer.classList.remove('active')
    }, 2000);

  } else{
    accessStatus.innerHTML = 'invalid Code';
    accessStatus.classList.add('error');
    accessStatus.classList.remove('success');
    accessStatus.style.opacity = '1';
  }

  setTimeout(() => {
    accessStatus.style.opacity = '0';
  }, 2000);

  grantAccessInputField.value = '';
});

// grant user access cancel button 
grantAccessCancelButton.addEventListener('click', () => {
  window.location.reload();
  htmlVidContent.classList.remove('active');
  sectionBox.classList.remove('hide');
  grantAccessContainer.classList.remove('active');
});