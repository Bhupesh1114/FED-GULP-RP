const newStoriesCard = (data, className) => {
  // Getting html elements
  const new_stories_card = document.querySelector(`.${className}`);

  if(new_stories_card){

  

  // Creating Tags
  data.map((item) => {
    const main_div = document.createElement("div");
    const inner_div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const desc = document.createElement("p");
    const badge = document.createElement("span");

    

    // Adding classes to elements

    main_div.classList.add("new_stories_card_container__new_stories_card");
    img.classList.add("new_stories_card_container__new_stories_card__image")
    inner_div.classList.add(
      "new_stories_card_container__new_stories_card__text-container"
    );
    desc.classList.add(
      "new_stories_card_container__new_stories_card__text-container__desc"
    );
    title.classList.add(
      "new_stories_card_container__new_stories_card__text-container__title"
    );
    badge.classList.add("new_stories_card_container__new_stories_card__badge");

    // Appending child elements to their respective parent elements
    img.src = item.image;
    title.innerText = item.title;
    desc.innerText = item.desc;
    inner_div.append(title, desc);
    main_div.append(img, inner_div);

    if(item.badge){
      badge.innerText = item.badge;
      main_div.append(badge);
    }
   
    new_stories_card.append( main_div);

  });
}
};

export default newStoriesCard;
