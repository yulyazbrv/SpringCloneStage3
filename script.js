let projects = [
  {
    img: "images/spring-boot.svg",
    name: "Spring Boot",
    info: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible",
  },
  {
    img: "images/spring-framework.svg",
    name: "Spring Framework",
    info: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
  },
  {
    img: "images/spring-data.svg",
    name: "Spring Data",
    info: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
  },
  {
    img: "images/spring-cloud.svg",
    name: "Spring Cloud",
    info: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
  },
  {
    img: "images/spring-data-flow.svg",
    name: "Spring Cloud Data",
    info: "Provides an orchestration service for composable data microservice applications on modern runtimes.",
  },
  {
    img: "images/spring-security.svg",
    name: "Spring Security",
    info: "Protects your application with comprehensive and extensible authentication and authorization support.",
  },
  {
    img: "images/spring-graphql.svg",
    name: "Spring for GraphQL",
    info: "Spring for GraphQL provides support for Spring applications built on GraphQL Java.",
  },
  {
    img: "images/spring-statemachine.svg",
    name: "Spring Session",
    info: "Provides an API and implementations for managing a user’s session information.",
  },
  {
    img: "images/spring-authorization-server.svg",
    name: "Spring Authorization Server",
    info: "Provides a secure, light-weight, and customizable foundation for building OpenID Connect 1.0 Identity Providers and OAuth2 Authorization Server products.",
  },
  {
    img: "images/spring-integration.svg",
    name: "Spring Integration",
    info: "Supports the well-known Enterprise Integration Patterns through lightweight messaging and declarative adapters.",
  },
  {
    img: "images/spring-hateoas.svg",
    name: "Spring HATEOAS",
    info: "Simplifies creating REST representations that follow the HATEOAS principle.",
  },
  {
    img: "images/spring-modulith.svg",
    name: "Spring Modulith",
    info: "Spring Modulith allows developers to build well-structured Spring Boot applications and guides developers in finding and working with application modules driven by the domain.",
  },
  {
    img: "images/spring-batch.svg",
    name: "Spring Batch",
    info: "Simplifies and optimizes the work of processing high-volume batch operations.",
  },
  {
    img: "images/spring-amqp.svg",
    name: "Spring AMQP",
    info: "Applies core Spring concepts to the development of AMQP-based messaging solutions.",
  },
  {
    img: "images/spring.svg",
    name: "Spring for Apache Pulsar",
    info: "Provides Familiar Spring Abstractions for Apache Pulsar.",
  },
  {
    img: "images/spring-flo.svg",
    name: "Spring Flo",
    info: "Provides a JavaScript library that offers a basic embeddable HTML5 visual builder for pipelines and simple graphs.",
  },
  {
    img: "images/spring-kafka.svg",
    name: "Spring for Apache Kafka",
    info: "Provides Familiar Spring Abstractions for Apache Kafka.",
  },
  {
    img: "images/spring-shell.svg",
    name: "Spring Shell",
    info: "Makes writing and testing RESTful applications easier with CLI-based resource discovery and interaction.",
  },
];

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
  { name: "View all projects" },
  { name: "" },
  { name: "DEVELOPMENT TOOLS" },
  { name: "Spring Tools 4" },
  { name: "Spring Initializr" },
];

let fourthMenuItems = [{ name: "Courses" }, { name: "Get Certified" }];

let fifthMenuItems = [
  { name: "Overview" },
  { name: "Spring Runtime" },
  { name: "Spring Consulting" },
  { name: "Spring Academy For Teams" },
  { name: "Security Advisories" },
];

let sixthMenuItems = [
  { name: "Overview" },
  { name: "Events" },
  { name: "Team" },
];

function setProjects() {
  const container = document.getElementById("cont-prj");

  const project = projects.map(item => `
  <div class="child-projects">
      <div>
          <img class="icons" src="${item.img}">
      </div>
      <div class="project-content">
          <p class="name-project">${item.name}</p>
          <p>${item.info}</p>
      </div>
  </div>`).join("");
  container.innerHTML = project;
}