// Skills data
const skills = ["HTML", "CSS", "JavaScript", "React JS", "WordPress","Ux Design"];

// Get container
const container = document.getElementById("skills-container");

// Create buttons
skills.forEach(skill => {
  const button = document.createElement("button");
  button.textContent = skill;

  // Optional click effect
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });

  container.appendChild(button);
});

const careerData = [

  {
        title: "Website redesign",
        company: "Coursework project, Sistech",
        year: "June 2025 - September 2025",
        description: "For this course project, we redesigned two pages of an existing website (A Kid’s Place Childcare) using React, focusing on improving the structure, interactivity and component-based development. "
    },
    {
        title: "Co-founder and Business Development Manager",
        company: "Likamis Software Ltd",
        year: "2013-2015",
        description: "We developed a mobile application to support Ugandan farmers to find market for their products, facilitating connections with local and international buyers."
    }
    
];

const careerContainer = document.querySelector(".career-info");

careerData.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("career-card");

    card.innerHTML = `
        <h3>${job.title}</h3>
        <strong>${job.company}</strong> | <em>${job.year}</em>
        <p>${job.description}</p>
    `;

    careerContainer.appendChild(card);
});

//education info
const educationInfo = document.querySelector(".education-info");

educationInfo.innerHTML = `
    <h3>Front-end Development,</h3>
    <p>Springboard program, Sistech(Italy)</p>
    <p>Maggio - Settembre 2025</p>
    <h3>Certificate in UX Design,</h3>
    <p>Inforcoop Ecipa, Novara(Italy)</p>
    <p>2020 - 2021</p>
    <h3>Certificate in Information Technology</h3>
    <p>ENAIP BORGOMANERO(Italy)</p>
    <p>2019 - 2020</p>
    <h3>Bachelor of Science in Software Engineering</h3>
    <p>Makerere University, Kampala(Uganda)</p>
    <p>2009 - 2014</p>
`;

//Contact data
const contactData = [
  {
    type: "Email",
    value: "lisa1katusiime@gmail.com",
    link: "mailto:yourname@email.com"
  },
  {
    type: "Phone",
    value: "+39 3510937719",
    link: "tel:+39 3510937719"
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/Lisa Katusiime",
    link: "https://www.linkedin.com/in/lisakatusiime/"
  }
];

const contactContainer = document.querySelector(".contact-info");

contactData.forEach(item => {
  const p = document.createElement("p");

  const link = document.createElement("a");
  link.href = item.link;
  link.textContent = `${item.type}: ${item.value}`;
  link.target = "_blank";

  p.appendChild(link);
  contactContainer.appendChild(p);
});


// Portfolio projects data
const projects = [
  {
    title: "My  Portfolio website",
    description: "A responsive portfolio website built with HTML, CSS, and JavaScript, designed to showcase my projects through a dynamic and intuitive interface.",
    image: "images/project1.jpg",
    link: "https://github.com/lisakatusiime/Portfolio-project"
  },
  {
    title: "React project",
    description: "I collaborated on a coursework project to redesign two pages of an existing website using React, focusing on component-based architecture and improving the user experience",
    image: "images/project2.jpg",
    link: "https://github.com/Ek-koval/sistech-project"
  },
  {
    title: "WordPress project",
    description: "Updating and maintaining an existing WordPress website, including content updates, site maintenance, and continuous improvements to usability and user experience.",
    image: "images/project3.jpg",
    link: "https://accesspluss.org/"
  }
];

const portfolioContainer = document.querySelector(".portfolio-container");

projects.forEach(project => {
  // Create card
  const card = document.createElement("div");
  card.classList.add("project-card");

  // Image
  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.title;

  // Title
  const title = document.createElement("h3");
  title.textContent = project.title;

  // Description
  const desc = document.createElement("p");
  desc.textContent = project.description;

  // Link
  const link = document.createElement("a");
  link.href = project.link;
  link.textContent = "View Project";
  link.target = "_blank";

  // Append all to card
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(link);

  // Append card to container
  portfolioContainer.appendChild(card);
});
