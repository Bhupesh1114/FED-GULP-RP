const locationCardsData = require("./locationcards.json");

const showAllLocationCards = () => {
    const cards = document.querySelector(".location-card-container");
    if(cards){
        for(let data of locationCardsData){
            const {city, address, telephone, officeHours:{days, timings}} = data;
           cards.innerHTML +=`
            <div class="location-card">
            <div class="location-card__upper">
                <h1 class="location-card__upper__title">${city ? city : ""}</h1>
                <p class="location-card__upper__desc">${address? address : ""}</p>
                <a class="location-card__upper__tel" href="">${telephone ? telephone : ""}</a>
            </div>
            <div class="location-card__lower">
                <h1 class="location-card__lower__title">Office Hours</h1>
                <div class="location-card__lower__container">
                    <div class="location-card__lower__container__wrapper">
                    ${days?.map(day => {
                     return `<p class="location-card__lower__container__wrapper__day">${day ? day : ""}:</p>`
                    }).join("")}
                    </div>
                    <div class="location-card__lower__container__wrapper">
                    ${timings?.map(time => {
                        return `<p class="location-card__lower__container__wrapper__day">${time ? time : ""}</p>`
                       }).join("")}
                    </div>
                </div>
            </div>
            `;
        }
    }

}

export default showAllLocationCards;