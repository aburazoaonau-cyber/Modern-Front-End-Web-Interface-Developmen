/* Mobile navigation */

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("show");

  menuButton.setAttribute("aria-expanded", isOpen);
});


/* Menu category filter */

const filterButtons = document.querySelectorAll(".filter");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    menuItems.forEach((menuItem) => {
      const itemCategory = menuItem.dataset.category;

      if (
        selectedCategory === "all" ||
        itemCategory === selectedCategory
      ) {
        menuItem.classList.remove("hidden");
      } else {
        menuItem.classList.add("hidden");
      }
    });
  });
});

/* Contact form validation */

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();

    const formMessage = document.querySelector("#form-message");

    if (name === "" || email === "" || subject === "" || message === "") {
      formMessage.textContent =
        "Please complete all required fields.";

      formMessage.className = "form-message error";
      return;
    }

    formMessage.textContent =
      "Thank you. Your message has been sent successfully.";

    formMessage.className = "form-message success";

    contactForm.reset();
  });
}

/* FAQ accordion */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    answer.classList.toggle("show");

    const isOpen = answer.classList.contains("show");

    question.setAttribute("aria-expanded", isOpen);
  });
});