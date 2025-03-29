document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".").forEach((item) => {
      const balls = [];
      const colors = ["blue", "yellow", "orange", "red"];

      for (let i = 0; i < 4; i++) {
          const ball = document.createElement("div");
          ball.classList.add("wave-ball", colors[i % colors.length]); 
          item.appendChild(ball);
          balls.push(ball);
      }

      item.addEventListener("mousemove", (e) => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          balls.forEach((ball, index) => {
              setTimeout(() => {
                  ball.style.left = `${x + index}px`;
                  ball.style.top = `${y + Math.sin(index)}px`;
                  ball.style.opacity = "0.8";
              }, index * 100); 
          });
      });

      item.addEventListener("mouseleave", () => {
          balls.forEach((ball) => {
              ball.style.opacity = "0";
          });
      });
  });
});



// Project Carousel Logic

function showProjectSummary(carousel, index) {
    const project = carousel.projects[index];
    carousel.summaryTitle.textContent = project.name;
    carousel.summaryDescription.textContent = project.description;

    carousel.summaryImage.style.display = "block";
    carousel.summaryImage.src = project.img;
}


document.addEventListener("DOMContentLoaded", () => {
  const carousels = [
      {
          track: document.getElementById("software-track"),
          nextButton: document.getElementById("software-next"),
          prevButton: document.getElementById("software-prev"),
          summaryTitle: document.getElementById("software-summary-title"),
          summaryDescription: document.getElementById("software-summary-description"),
          summaryImage: document.getElementById("software-summary-img"),
          projects: [
              { name: "Checkers",
                description: "I developed a full-featured Java Checkers game using object-oriented principles, custom classes, and Java Swing to create a responsive and interactive GUI with customizable components. The image shown is the Frog Theme. You can play against your friends, or a computer opponent.", 
                img: "images/checkers.png" },

              { name: "Ghost Invaders",
                description: "Space Invaders recreation with custom pixel art and interactive gameplay.", 
                img: "images/spaceInvaders.png" },

              { name: "Full-Stack Web Development", 
                description: "Space Invaders recreation with custom pixel art and interactive gameplay.",
                img: "images/project-ghost-invaders.jpg" },

              { name: "Embedded Audio System",
                description: "Space Invaders recreation with custom pixel art and interactive gameplay.", 
                img: "images/project-ghost-invaders.jpg" }
          ]
      },
      {
          track: document.getElementById("data-track"),
          nextButton: document.getElementById("data-next"),
          prevButton: document.getElementById("data-prev"),
          summaryTitle: document.getElementById("data-summary-title"),
          summaryDescription: document.getElementById("data-summary-description"),
          summaryImage: document.getElementById("data-summary-img"),
          projects: [
              { name: "Housing Cost-Burden Analysis", 
                description: "Predictive modeling of housing stability among single-parent households in Minnesota.", 
                img: "images/costburdenedmap.png" },

              { name: "Quantitative Data Flow", 
                description: "Developed data-driven KPI framework for a local food pantry.", 
                img: "images/foodPantry.png" },

              { name: "GHG Emission Visualization", 
                description: "Developed data-driven KPI framework for a local food pantry.", 
                img: "images/ghgemissions.png" },

              { name: "Economic Effects of Gender Equality", 
                description: "I investigated how gender equality (e.g. workforce partcipation, paid parental leave, and women's right indicators) influence a country GDP. I use statistical methods such as kNN, Splines Regression, and Linear Regression to model relationship and make predictions. This included visualizations of data relationships and various model approaches and evaluations.", 
                img: "images/economicAnalysis.png" }
              
          ]
      }
  ];

  carousels.forEach((carousel) => {
      let currentIndex = 0;

      function updateCarousel() {
          const offset = currentIndex * -100;
          carousel.track.style.transform = `translateX(${offset}%)`;
          carousel.prevButton.style.display = currentIndex === 0 ? "none" : "block";
          carousel.nextButton.style.display = currentIndex === 1 ? "none" : "block";
      }

      carousel.track.addEventListener("click", (e) => {
          const clickedItem = e.target.closest(".carousel-item");
          if (clickedItem) {
              const index = parseInt(clickedItem.getAttribute("data-index"));
              showProjectSummary(carousel, index);
          }
      });

      carousel.nextButton.addEventListener("click", () => {
          if (currentIndex < carousel.projects.length - 1) {
              currentIndex++;
              updateCarousel();
          }
      });

      carousel.prevButton.addEventListener("click", () => {
          if (currentIndex > 0) {
              currentIndex--;
              updateCarousel();
          }
      });

      updateCarousel();
      showProjectSummary(carousel, 0); 
  });
});


// Example of updating icons on project selection (e.g., when clicking a button)
document.querySelectorAll('.project-summary').forEach((project, index) => {
    project.addEventListener('click', () => {
        const projectName = `project${index + 1}`;
    });
});
