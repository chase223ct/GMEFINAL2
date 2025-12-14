// Footer year
document.getElementById("year").textContent = new Date().getFullYear();


const specials = [
  "Birria tacos + consommé (limited batch — when it’s gone, it’s gone).",
  "Carne asada burrito with roasted salsa + chips.",
  "Enchiladas verde with extra crema (comfort mode).",
  "Loaded nachos with your choice of chicken or beef.",
  "Quesadilla combo: quesadilla + drink + chips & salsa."
];

const specialText = document.getElementById("specialText");
const specialBtn = document.getElementById("specialBtn");

if (specialBtn && specialText) {
  specialBtn.addEventListener("click", () => {
    const pick = specials[Math.floor(Math.random() * specials.length)];
    specialText.textContent = pick;
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

if (filterButtons.length && menuCards.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
     
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      menuCards.forEach(card => {
        const cat = card.dataset.category;

        if (filter === "all" || cat === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}


const dealBtn = document.getElementById("dealBtn");
const dealText = document.getElementById("dealText");

const deals = [
  "Buy any taco trio, get chips & salsa half off.",
  "Free drink with any burrito (today only).",
  "Add queso to any bowl for $1.",
  "Two Jarritos for $5.",
  "Street corn cup for $3 with any combo."
];

if (dealBtn && dealText) {
  dealBtn.addEventListener("click", () => {
    const pick = deals[Math.floor(Math.random() * deals.length)];
    dealText.textContent = pick;
  });
}

const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      contactStatus.classList.remove("show");
      return;
    }

    const name = document.getElementById("fullName").value.trim() || "there";
    const topic = document.getElementById("topic").value;

    contactStatus.textContent = `Thanks, ${name}. Your message about "${topic}" was submitted. We’ll get back to you soon.`;
    contactStatus.classList.add("show");

    contactForm.reset();
    contactForm.classList.remove("was-validated");
  });
}
