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
