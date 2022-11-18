const officeList = require("./office-listing.json");


const validAddressLine = (value) => {
    if (value !== null && value !== ""){
     return value;
    }else{
     return "";
    }
 }

const showOffices = () => {
    const officeListing = document.querySelector(".office-listing");
    const officeListDropDown = document.querySelector(".office-listing-dd");

    if(officeListing){
   
    
    officeList?.map(({country: {states}}) => {
       
        for(let {name, offices} of states){
            officeListing.innerHTML +=`
            <div class="office-listing__region" data-tab=${name ? name : ""}>
             <div class="office-listing__region__main-container">
             <div class="office-listing__region__main-container__title">
             <h1 class="office-listing__region__main-container__title__name">${name ? name : ""}</h1>
             </div>
             <div class="office-listing__region__main-container__wrapper">
             ${offices?.map(office => {
                const {officeName, 
                    addressLine1,
                    addressLine2,
                    addressLine3,
                    addressLine4, 
                    cityName, 
                    stateProvinceCode,
                    postalZipCode, 
                    telephoneNumber,
                    email} = office;

                const address = `${validAddressLine(addressLine1)} ${validAddressLine(addressLine2)} ${validAddressLine(addressLine3)} ${validAddressLine(addressLine4)} ${cityName} ${stateProvinceCode} ${postalZipCode}`;
                const googleAddress = address.replace(" ", "%20")
                return `
                <div class="office-listing__region__main-container__office">
                ${cityName ? cityName : ""}
                <a class="office-listing__region__main-container__office__address" href="http://maps.google.com/maps?q=${googleAddress}" target="_blank">${addressLine1 ? addressLine1 : ""}</a>
                <a class="office-listing__region__main-container__office__address" href="http://maps.google.com/maps?q=${googleAddress}" target="_blank">${officeName ? officeName : ""}, ${stateProvinceCode ? stateProvinceCode : ""} ${ postalZipCode ? postalZipCode : ""}</a>
                 
                <div class="office-listing__region__main-container__office__container">
                <a class="office-listing__region__main-container__office__container__tel" href="tel:${telephoneNumber}">${telephoneNumber}</a>
                <a class="office-listing__region__main-container__office__container__mail" href="mailto:${email}">Email</a>
                </div>
                </div>
                `
             }).join("")}
             </div>
             </div>
            </div>
            `
        }
    });

    // ==========================================================================================================================
    
    const officeListingDdContainerOptions = officeListDropDown.querySelector(".office-listing-dd__container__options");
    officeListingDdContainerOptions.innerHTML +=`
     ${officeList?.map(({country: {states,name}}) => {
      return `
      <p class="office-listing-dd__container__options__country">${name}</p>
      ${states?.map(state => {
         return `
         <button class="office-listing-dd__container__options__name" data-for-tab=${state?.name}>${state?.name}</button>
         `
      }).join("")}
      `
     }).join("")}
      </div>
    `
       const officeListingDropdown = officeListDropDown.querySelector(".office-listing-dd__container__options");
       const officeListingDropdownButton = officeListDropDown.querySelector(".office-listing-dd__container__wrapper__button");
   
       officeListingDropdownButton.addEventListener("click", () => {
        officeListingDropdown.classList.add("display-block");
       })

        const allDropDownBtn = officeListDropDown.querySelectorAll(".office-listing-dd__container__options__name");
        const officelListingRegions = officeListing.querySelectorAll(".office-listing__region");
        const officeListingDdContainerWrapper = officeListDropDown.querySelector(".office-listing-dd__container__wrapper");
        const crossBtn = officeListingDdContainerWrapper.querySelector(".cross_btn");

        allDropDownBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            allDropDownBtn.forEach(btn => {
                btn.classList.remove("bg_blue_color")
            })
            
            crossBtn.classList.add("display-block")
            officeListingDropdownButton.innerText = btn.innerText;
          
            officeListingDropdown.classList.remove("display-block");  
            btn.classList.add("bg_blue_color");

            crossBtn.addEventListener("click", () => {
                crossBtn.classList.remove("display-block")
                officelListingRegions.forEach(region => {
                    region.classList.remove("hide");
                    region.classList.remove("display-block")
                 })
               
                officeListingDropdownButton.innerText = "narrow";
                 allDropDownBtn.forEach(btn => {
                    btn.classList.remove("bg_blue_color")
                })
            })

            officelListingRegions.forEach(region => {
               region.classList.add("hide");
               region.classList.remove("display-block")
            })
            officeListing.querySelector(`[data-tab="${btn.dataset.forTab}"]`).classList.add("display-block")
            officeListing.querySelector(`[data-tab="${btn.dataset.forTab}"]`).classList.remove("hide")
        })
        
    })
}

}

export { showOffices, validAddressLine};

