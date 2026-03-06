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
        company: "course project",
        year: "June 2025 - September 2025",
        description: "We redesigned A kid's place childcare with modern UI using HTML, CSS, Javascript and ReactJs"
    },
    {
        title: "Co-founder and Business Development Manager",
        company: "Likamis Software Ltd",
        year: "2013-2015",
        description: "We developed a mobile application to help farmers sell their produce online using Java."
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
    <h3>Sviluppo Web,</h3>
    <p>Programma di Springboard, Sistech(Italy)</p>
    <p>Maggio - Settembre 2025</p>
    <h3>Certificazione UX Design,</h3>
    <p>Inforcoop Ecipa, Novara(Italy)</p>
    <p>2020 - 2021</p>
    <h3>Tecnico Informatico</h3>
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
    link: "https://www.linkedin.com/in/lisa-katusiime-24a25842/"
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
    title: "Project One",
    description: "A brief description of project one. Frontend focused with HTML, CSS, JS.",
    image: "images/project1.jpg",
    link: "https://example.com/project1"
  },
  {
    title: "Project Two",
    description: "A brief description of project two. React-based UI project.",
    image: "images/project2.jpg",
    link: "https://example.com/project2"
  },
  {
    title: "Project Three",
    description: "A brief description of project three. WordPress website development.",
    image: "images/project3.jpg",
    link: "https://example.com/project3"
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
