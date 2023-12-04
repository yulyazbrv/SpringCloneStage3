let firstMenuItems = [
  { name: "Overview" },
  { name: "Microservices" },
  { name: "Reactive" },
  { name: "Event Driven" },
  { name: "Cloud" },
  { name: "Web Applications" },
  { name: "Serverless" },
  { name: "Batch" },
];

let secondMenuItems = [
  { name: "Overview" },
  { name: "Quickstart" },
  { name: "Guides" },
  { name: "Blog" },
];

let thirdMenuItems = [
  { name: "Overview" },
  { name: "Spring Boot" },
  { name: "Spring Framework" },
  { name: "Spring Cloud" },
  { name: "Spring Cloud Data Flow" },
  { name: "Spring Data" },
  { name: "Spring Integration" },
  { name: "Spring Batch" },
  { name: "Spring Security" },
];

let flag;
function setMenuItems(classname) {
  if (flag != null) {
    document.querySelector(flag).style.display = "none";
  }
  const container = document.querySelector(classname);
  switch (classname) {
    case ".hidden-menu1":
      container.style.display = "block";
      container.innerHTML = firstMenuItems
        .map(
          (item) => `
                <ul>
                    <li>${item.name}</li>
                </ul>`
        )
        .join("");
      break;
    case ".hidden-menu2":
      container.style.display = "block";
      container.innerHTML = secondMenuItems
        .map(
          (item) => `
                <ul>
                    <li>${item.name}</li>
                </ul>`
        )
        .join("");
      break;
    case ".hidden-menu3":
      container.style.display = "block";
      container.innerHTML = thirdMenuItems
        .map(
          (item) => `
                <ul>
                    <li>${item.name}</li>
                </ul>`
        )
        .join("");
      break;
  }
  flag = classname;
}

function closeMenuItem(flag) {
  document.querySelector(flag).style.display = "none";
}
