
window.onload = function () {
  menu1();
  menu2();
  menu3();
  menu4();
  openSideMenu();
  closeSideMenu();
}

function menu1() {

  let showmenu1 = document.getElementById('myDropdown');
  let showmenubutton1 = document.getElementById('botonmenu1');
  let dropdown1 = document.getElementById('dropdown1');
  let dropright1 = document.getElementById('dropright1');

  showmenubutton1.addEventListener('click', () => {
    showmenu1.classList.toggle('show');
    dropdown1.classList.toggle('dropdown_hidden');
    dropright1.classList.toggle('dropdown_hidden');
  })



}

function menu2() {
  let showmenu2 = document.getElementById('myDropdown2');
  let showmenubutton2 = document.getElementById('botonmenu2');
  let dropdown2 = document.getElementById('dropdown2');
  let dropright2 = document.getElementById('dropright2');


  showmenubutton2.addEventListener('click', () => {
    showmenu2.classList.toggle('show');
    // showmenu2.classList.add('animate__animated');
    // showmenu2.classList.add('animate__slideInDown');

    dropdown2.classList.toggle('dropdown_hidden');
    dropright2.classList.toggle('dropdown_hidden');
  })



}
function menu3() {
  let showmenu3 = document.getElementById('myDropdown3');
  let showmenubutton3 = document.getElementById('botonmenu3');
  let dropdown3 = document.getElementById('dropdown3');
  let dropright3 = document.getElementById('dropright3');


  showmenubutton3.addEventListener('click', () => {
    showmenu3.classList.toggle('show');
    dropdown3.classList.toggle('dropdown_hidden');
    dropright3.classList.toggle('dropdown_hidden');
  })


}
function menu4() {
  let showmenu4 = document.getElementById('myDropdown4');
  let showmenubutton4 = document.getElementById('botonmenu4');
  let dropdown4 = document.getElementById('dropdown4');
  let dropright4 = document.getElementById('dropright4');


  showmenubutton4.addEventListener('click', () => {
    showmenu4.classList.toggle('show');
    dropdown4.classList.toggle('dropdown_hidden');
    dropright4.classList.toggle('dropdown_hidden');
  })


}


function openSideMenu() {
  let open_button = document.querySelector('.iconify_menu');
  let sideMenu = document.getElementById('57139a75-cc8c-4fc5-842a-b3570859e8dd');

  open_button.addEventListener('click', () => {
    sideMenu.classList.toggle('show')
  })


}

function closeSideMenu() {
  let menuLink = document.getElementsByTagName('li');
   let sideMenu = document.getElementById('57139a75-cc8c-4fc5-842a-b3570859e8dd');

   for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', () => {
    sideMenu.classList.toggle('show')

  })
}
}
  // document.getElementById("myDropdown").classList.toggle("show");
  // document.getElementById("myDropdown2").classList.toggle("show");
  // document.getElementById("myDropdown3").classList.toggle("show");




// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }