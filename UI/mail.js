const openBar = document.getElementById('openbar');
const closeBar = document.getElementById('closebar');
const sideBar = document.getElementById('mySidebar');
const main = document.getElementById('main');
const dropBtn = document.getElementById('dpBtn');
const drop = document.getElementById('drop');
const drop1 = document.getElementById('drop1');
const dropBtn1 = document.getElementById('dpBtn1');
const drop2 = document.getElementById('drop2');
const dropBtn2 = document.getElementById('dpBtn2');
const drop3 = document.getElementById('drop3');
const dropBtn3 = document.getElementById('dpBtn3');
const drop4 = document.getElementById('drop4');
const dropBtn4 = document.getElementById('dpBtn4');


openBar.addEventListener('click', () => {
	sideBar.style.width = "250px";
  main.style.marginLeft = "250px";
});

closeBar.addEventListener('click', () => {
	sideBar.style.width = "0";
  main.style.marginLeft = "0";
});

dropBtn.addEventListener('click', () => {
 drop.classList.toggle('show')
});

dropBtn1.addEventListener('click', () => {
 drop1.classList.toggle('show')
});

dropBtn2.addEventListener('click', () => {
 drop2.classList.toggle('show')
});

dropBtn3.addEventListener('click', () => {
 drop3.classList.toggle('show')
});

dropBtn4.addEventListener('click', () => {
 drop4.classList.toggle('show')
});