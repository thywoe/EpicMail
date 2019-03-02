const openBar = document.getElementById('openbar');
const closeBar = document.getElementById('closebar');
const sideBar = document.getElementById('mySidebar');
const main = document.getElementById('main');

openBar.addEventListener('click', () => {
	sideBar.style.width = "250px";
  main.style.marginLeft = "250px";
});

closeBar.addEventListener('click', () => {
	sideBar.style.width = "0";
  main.style.marginLeft = "0";
});