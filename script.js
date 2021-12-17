'use strict';

const container = document.querySelector('.container');
const navbar = document.querySelector('.navbar');
const h1 = document.querySelector('h1');
const menuColor = document.querySelector('.menu-color');
const changeHeadline = document.querySelector('.change-headline');
const addParagraph = document.querySelector('.add-paragraph');
const changeBgColor = document.querySelector('.change-bg-color');
const erasePage = document.querySelector('.erase-page');

// change menu color
function changeMenu() {
  let color = prompt('Choose a color!').toLowerCase();
  if (color === 'white') {
    navbar.style.backgroundColor = color;
    navbar.style.color = 'black';
  } else {
    navbar.style.backgroundColor = color;
  }
}

menuColor.addEventListener('click', changeMenu);

// change headline
function modifyline() {
  let headline = prompt(`What's your first name?`);
  headline = headline[0].toUpperCase() + headline.slice(1);
  return (h1.textContent = `Welcome ${headline}!`);
}

changeHeadline.addEventListener('click', modifyline);

// Change color of button function
function chooseBgColor() {
  const color = prompt(
    `What's your favorite color! (Enter: red, white, blue, green`
  ).toLowerCase();
  if (color === 'white') {
    changeBgColor.style.backgroundColor = 'white';
    changeBgColor.style.color = 'black';
  } else {
    changeBgColor.style.backgroundColor = color;
    changeBgColor.style.color = 'white';
  }
}

changeBgColor.addEventListener('click', chooseBgColor);

function hideContent() {
  const addBtn = document.createElement('button');

  container.classList.add('hidden');
  document.body.append(addBtn);
  addBtn.textContent = 'Click the button below to reveal everything again!';
  addBtn.style.padding = '10px';
  addBtn.style.backgroundColor = 'green';
  addBtn.style.color = 'white';
  addBtn.style.fontSize = '22px';
  addBtn.style.marginTop = '100px';
  addBtn.style.borderRadius = '10px';

  // add content back to page
  addBtn.addEventListener('click', function revealContent() {
    container.classList.remove('hidden');
  });
}

erasePage.addEventListener('click', hideContent);

// add paragraph after headline
function userContent() {
  const p = document.createElement('p');
  document.querySelector('.column').append(p);
  p.textContent = prompt('write something here');
}

addParagraph.addEventListener('click', userContent);
