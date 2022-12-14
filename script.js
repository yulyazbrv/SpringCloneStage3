let projects = [
    {
        img: "images/spring-boot.svg",
        name: "Spring Boot",
        info: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible"
    },
    {
        img: "images/spring-framework.svg",
        name: "Spring Framework",
        info: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more."
    },
    {
        img: "images/spring-boot.svg",
        name: "Spring Boot",
        info: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible"
    },
    {
        img: "images/spring-framework.svg",
        name: "Spring Framework",
        info: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more."
    },
    {
        img: "images/spring-boot.svg",
        name: "Spring Boot",
        info: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible"
    }];

let firstMenuItems = [
    { name: "Overview" },
    { name: "Microservices" },
    { name: "Reactive" },
    { name: "Event Driven" },
    { name: "Cloud" },
    { name: "Web Applications" },
    { name: "Serverless" },
    { name: "Batch" }
];

let secondMenuItems = [
    { name: "Overview" },
    { name: "Quickstart" },
    { name: "Guides" },
    { name: "Blog" }
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
    { name: "Spring Security" }
];

function setProjects() {
    const container = document.getElementById("cont-prj");

    const p = projects.map(item => `
    <div class="child-projects">
        <div>
            <img class="icons" src="${item.img}">
        </div>
        <div>
            <p class="name-project">${item.name}</p>
            <p>${item.info}</p>
        </div>
    </div>`).join();
    container.innerHTML = p;
}

let firstclick = 0;
function setMenuItems(classname) {
    const container = document.querySelector(classname);

    if(firstclick % 2 != 0){
        container.style.display = "none";
    }
    else{
        switch (classname) {
            case '.hidden-menu1':
                container.style.display = "block";
                container.innerHTML = firstMenuItems.map(item => `
                <ul>
                    <li>${item.name}</li>
                </ul>`).join("");
                break;
            case '.hidden-menu2':
                container.style.display = "block";
                container.innerHTML = secondMenuItems.map(item => `
                <ul>
                    <li>${item.name}</li>
                </ul>`).join("");
                break;
            case '.hidden-menu3':
                container.style.display = "block";
                container.innerHTML = thirdMenuItems.map(item => `
                <ul>
                    <li>${item.name}</li>
                </ul>`).join("");
                break;
        }
    }
    firstclick++;
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
    if (click % 2 != 0) {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
        switch (classname) {
            case ".first-mobile-hidden-menu":
                menu.innerHTML = firstMenuItems.map(item => `
            <div>
                <h2>${item.name}</h2>
            </div>`).join("");
                break;
            case ".second-mobile-hidden-menu":
                menu.innerHTML = secondMenuItems.map(item => `
            <div>
                <h2>${item.name}</h2>
            </div>`).join("");
                break;
            case ".third-mobile-hidden-menu":
                menu.innerHTML = thirdMenuItems.map(item => `
            <div>
                <h2>${item.name}</h2>
            </div>`).join("");
                break;
        }
    }

    click++;
    //event.stopPropagation();
}

let timerId = null
function searchProjects() {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
        const container = document.getElementById("cont-prj");
        const search = document.querySelector(".search");
        let result = projects.filter(item => item.name.includes(search.value));
        if (result.length == 0) {
            container.innerHTML = "<h2 style='color: black; font-size: 25px'>No results</h2>";
        }
        else {
            container.innerHTML = result.map(item => `
        <div class="child-projects">
            <div>
                <img class="icons" src="${item.img}">
            </div>
            <div>
                <p class="name-project">${item.name}</p>
                <p>${item.info}</p>
            </div>
        </div>`).join("");
        }
    }, 1000);

}
