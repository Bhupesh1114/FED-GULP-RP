function displayDetails() {
  const allHeadings = document.querySelectorAll(
    ".detail__heading-container__heading"
  );
  const firstHeading = document.querySelector(
    ".detail__heading-container__heading"
  );

  const containers = document.querySelectorAll(".detail__text__container");

  // Adding class to the elements
  containers[0].classList.add("display-block");
  firstHeading.classList.add("red-heading");

  allHeadings.forEach((heading, index) => {
    heading.addEventListener("click", function () {
        
      const activeHeading = heading.dataset.forTab;

      // Removming class from all elements
      allHeadings.forEach((item) => {
        item.classList.remove("red-heading");
      });
      containers.forEach((item) => {
        item.classList.remove("display-block");
      });

      // Adding class to the elements
      heading.classList.add("red-heading");
      document.querySelector(`[data-tab = "${activeHeading}"]`).classList.add("display-block");
    });
  });
}

export { displayDetails };
