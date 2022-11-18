import { bottom } from "@popperjs/core";

function displayScrollDetails() {
  const allHeadings = document.querySelectorAll(
    ".detail__heading-container__heading"
  );
  if(allHeadings.length > 0){

  
  const firstHeading = document.querySelector(
    ".detail__heading-container__heading"
  );

  const containers = document.querySelectorAll(".detail__text__container");

  // Adding class to the elements
  firstHeading.classList.add("red-heading");

  window.scrollTo({ top: firstHeading.offsetTop - 20, behavior: "smooth" });

  allHeadings.forEach((heading, index) => {
    heading.addEventListener("click", function () {
      // Removming class from all elements
      allHeadings.forEach((item) => {
        item.classList.remove("red-heading");
      });

      // Adding class to the elements
      heading.classList.add("red-heading");

      const currentHeading = heading.dataset.forTab;

      const currentContent = document.querySelector(
        `[data-tab="${currentHeading}"]`
      );

      window.scrollTo({
        top: currentContent.offsetTop - 10,
        behavior: "smooth",
      });
    });
  });
}
}

export { displayScrollDetails };

// const scrollYAxis = window.pageYOffset;

// containers.forEach(currentItem => {
//     const headingHeight = currentItem.offSetHeight;
//     const headingTop = currentItem.offsetTop - 300;
//      const headingId = currentItem.getAttribute("data-tab");
//      if(scrollYAxis > headingTop && scrollYAxis <=headingTop + headingHeight){
//         document.querySelector("")
//      }

// })
