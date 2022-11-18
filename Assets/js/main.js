const $ = require('jquery');
window.$ = $;

import App from "./app.js";
import bannerCarouselComponent from "./banner-carousel.js";
import plasticAccordian from "./services-accordian.js";
import newFun from "./mains.js";
import newStoriesCard from "./new-stories.card";
import { displayScrollDetails } from "./details-scroll.js";
// import {displayDetails} from "./details"
import {showOffices} from './office-listing';
import {displayMap,getZipCode} from './office-listing-map';
import norcFormValidation from './norc-form';
import showAllLocationCards from './location-card';
import filterWoods from './woods-filter';
import displayAjaxCards from './jquery-card';
import {showSearchInput,showHeaderAccordian} from "./header.js";


const new_stories_card_data = [
  {
    image:
      "../../images/mommy_and_baby_1.png",
    title:
      "St. Luke’s University Health Network Rings 2022 with two Very Special Deliveries",
    desc: "The Lehigh Valley’s first baby of the new year was born at St. Luke’s Allentown Campus on January 1st at 1:12 am …",
  },
  {
    image:
      "../../images/girl_with_the_soccer_ball_1.png",
    title:
      "Healing a Broken Wrist with a Flash of Purple from a 3D-Printed Cast",
    desc: "Kylee Menszak broke her wrist in gym class recently playing capture the flag. This was the second time the seventh ...",
  },
  {
    image:
      "../../images/group_of_kids_1.png",
    title: "New Adolescent Behavioral Unit at Easton Campus",
    desc: "St. Luke’s University Health Network (SLUHN) on Tuesday opened its new Adolescent Behavioral Health Unit to provide safe, expert and ...",
  },
];

const new_stories_section_data = [
    {
        image: "../../images/beecartoonanddoctor2.png",
        title:
          "St. Luke’s University Health Network Rings 2022 with two Very Special Deliveries",
        desc: "The Lehigh Valley’s first baby of the new year was born at St. Luke’s Allentown Campus on January 1st at 1:12 am …",
        badge : "featured"
      },
]

$(document).ready(function(){
  console.log("Hello");
})

const app = new App();
const bannerCarouselSlider = bannerCarouselComponent();
const plasticAccordianService = plasticAccordian();
// showOffices();
// showSelectedOffice();

filterWoods();
displayAjaxCards();
showAllLocationCards();
showOffices();
displayMap();
getZipCode();   
displayScrollDetails();
norcFormValidation();
showSearchInput()
showHeaderAccordian();
newFun();

// =====================================
newStoriesCard(new_stories_card_data, "new_stories_card_container");
newStoriesCard(new_stories_section_data, "new_stories_section__right");
