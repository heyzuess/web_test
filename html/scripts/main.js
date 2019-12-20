let myImage = document.querySelector('img');

myImage.onmouseover = function () {
  myImage.setAttribute('src', './images/firefox2.png');
}

myImage.onmouseout = function () {
  myImage.setAttribute('src', './images/firefox.png');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName () {
  let myName = prompt('Please enter your name.');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}