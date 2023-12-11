function setProjects() {
  const container = document.getElementById("cont-prj");

  const project = projects
    .map(
      (item) => `
  <div class="child-projects">
      <div>
          <img class="icons" src="${item.img}">
      </div>
      <div class="project-content">
          <p class="name-project">${item.name}</p>
          <p>${item.info}</p>
      </div>
  </div>`
    )
    .join("");
  container.innerHTML = project;
}

let activeMenu = null;

function setMenuItems(classname) {
  if (activeMenu !== null) {
    document.querySelector(activeMenu).style.display = "none";
  }

  const container = document.querySelector(classname);
  container.style.display = "block";
  container.innerHTML = getMenuItemsHTML(classname);

  activeMenu = classname;
}

function getMenuItemsHTML(classname) {
  const itemsHTML = menuItems[classname]
    .map((item) => `<li>${item.name}</li>`)
    .join("");
  return `<ul>${itemsHTML}</ul>`;
}

function showMobileMenu() {
  const menu = document.querySelector(".mobile-menu");
  menu.style.display = "block";
}

function closeMobileMenu() {
  const menu = document.querySelector(".mobile-menu");
  menu.style.display = "none";
}

let click = 0;
function showMobileMenuItems(classname) {
  const menu = document.querySelector(classname);
  console.log(menu);
  const items = mobileMenuItems[classname];

  if (click % 2 !== 0) {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    menu.innerHTML = items
      .map(
        (item) => `
          <div>
            <h2 class="menu-title">${item.name}</h2>
          </div>`
      )
      .join("");
  }

  click++;
}
