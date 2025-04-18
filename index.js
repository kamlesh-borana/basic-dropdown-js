console.log("Dropdowns");

const dropdowns = document.querySelectorAll(".dropdown .dropdown-toggler");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    const dropdownContent = document.querySelector(
      `#${event.target.dataset.dropdownTarget}`
    );
    dropdownContent.classList.toggle("active");
  });
});
