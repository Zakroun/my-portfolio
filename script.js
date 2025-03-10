document.addEventListener("DOMContentLoaded", function () {
  function addcara() {
    const myname = [
      "Z",
      "A",
      "K",
      "A",
      "R",
      "Y",
      "A",
      "E",
      " ",
      "R",
      "O",
      "U",
      "A",
      "N",
      "E",
    ];
    const usergit = ["Z", "a", "k", "r", "o", "u", "n"];
    let username = document.getElementById("username");
    let add = true;
    let currentText = myname;
    let i = 0;
    let interval = setInterval(() => {
      if (add) {
        if (i < currentText.length) {
          username.innerHTML += currentText[i];
          i++;
        } else {
          add = false;
        }
      } else {
        if (i > 0) {
          username.innerHTML = username.innerHTML.slice(0, -1);
          i--;
        } else {
          add = true;
          currentText = currentText === myname ? usergit : myname;
          i = 0;
        }
      }
    }, 400);
  }
  addcara();
});

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logoabout");

  function checkIfInView() {
    const rect = logo.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      logo.classList.add("animate");
    }
  }
  window.addEventListener("scroll", checkIfInView);
  checkIfInView();
});

document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skill");

  function checkIfInView() {
    skills.forEach((skill) => {
      const rect = skill.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        skill.classList.add("animate");
      }
    });
  }
  window.addEventListener("scroll", checkIfInView);
  checkIfInView(); 
});


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.querySelectorAll('.link, #btncontact').forEach((element) => {
  element.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');

      if (targetId === '#home') {
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
          });
      } else {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
              });
          }
      }
  });
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.right === '0px') {
      menu.style.right = '-250px';
  } else {
      menu.style.right = '0px';
  }
}
