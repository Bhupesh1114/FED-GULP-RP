import { validAddressLine } from "./office-listing";

const officeList = require("./officelocation.json");

var stylers = [{
    "stylers": [{ 
       "hue": "#80ccf2"
     }, {
       "saturation": -16
     }, {
       "lightness": -5
     }]
  }
];

const displayMap = () => {
const googleMap = document.getElementById("googleMap");
if(googleMap){
    window.addEventListener("DOMContentLoaded", function() {
        const mapProp= {
         center:new google.maps.LatLng(47.978971, -107.973719),
           zoom:3,
           mapTypeControl: false,
           streetViewControl: false,
           scrollwheel: false,
           styles : stylers
         };
         const map = new google.maps.Map(googleMap,mapProp);

         let currentInfoWindow;
             for(let office of officeList){
                const {latitude, longitude, officeName, addressLine1, addressLine2, addressLine3, addressLine4, cityName, stateProvinceCode, postalZipCode,telephoneNumber, email} = office;
                const marker = new google.maps.Marker({
                    position : new google.maps.LatLng(
                       latitude,
                       longitude
                    ),
                    map : map,
                    icon : "../../images/map-marker.svg"
                  })

                  const address = `${validAddressLine(addressLine1)} ${validAddressLine(addressLine2)} ${validAddressLine(addressLine3)} ${validAddressLine(addressLine4)} ${cityName} ${stateProvinceCode} ${postalZipCode}`;
                  const googleAddress = address.replace(" ", "%20")

                 const infoWindow = new google.maps.InfoWindow({
                    content : `
                    <div class="map-model">
                    <h1 class="map-model__title">${officeName? officeName : ""}</h1>
                    <a class="map-model__address" href="http://maps.google.com/maps?q=${googleAddress}" target="_blank">${addressLine1 ? addressLine1 : ""}</a>
                    <a class="map-model__address" href="http://maps.google.com/maps?q=${googleAddress}" target="_blank">${officeName ? officeName : ""}, ${stateProvinceCode ? stateProvinceCode : ""} ${ postalZipCode ? postalZipCode : ""}</a>

                    <a class="map-model__tel" href="tel:${telephoneNumber ? telephoneNumber : ""}">${telephoneNumber ? telephoneNumber : ""}</a>
                    <a  class="map-model__mail" href="mailto:${email? email : ""}">Email</a>
                    </div>
                    </div>
                    `
                 })

                google.maps.event.addListener(marker, 'click', function() {
                    if(currentInfoWindow){
                        currentInfoWindow.close(map,marker);
                    }
                    infoWindow.open(map,marker);
                    currentInfoWindow = infoWindow;
                  });
             }
     });
    }
}

const getZipCode = () => {
    const near_zip = document.querySelector(".near-zip");
    if(near_zip){
    const  near_zip_location_btn = near_zip.querySelector(".near-zip__location__btn");
    const near_zip_container = near_zip.querySelector(".near-zip__container");
    const near_zip_location_code = near_zip.querySelector(".near-zip__location__code")

    near_zip_location_btn.addEventListener("click", () => {
        near_zip_container.classList.toggle("display-block")
    })

    const success = (position) => {
        // -------------------------------------------
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        // -------------------------------------------
        const latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
        const geocoder = new google.maps.Geocoder();
        
            geocoder.geocode({'latLng': latlng}, function(allNearByPlaces, status) {
                // -------------------------------------------
                console.log(allNearByPlaces);
                console.log(status);
                console.log(google.maps.GeocoderStatus);
                // -------------------------------------------
        
                if (status == google.maps.GeocoderStatus.OK) {
                    if (allNearByPlaces[0]) {
                        for (let result of allNearByPlaces[0].address_components) {
                            if (result.types[0] == 'postal_code')
                            near_zip_location_code.innerText = result.short_name;
                        }
                    }
                } 
            });
        }
        
        const error = (e) => {
        console.log(e.message)
        }
        
        // Self Envoking Function
        (function getLocation() {
          if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success,error);
          }
        })();
        
    }
}



export {displayMap,getZipCode};
